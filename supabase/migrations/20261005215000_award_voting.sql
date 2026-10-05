create table if not exists public.award_votes (
  id bigint generated always as identity primary key,
  nominee_id integer not null check (nominee_id between 1 and 10),
  email text not null check (char_length(email) <= 320),
  created_at timestamptz not null default now()
);

create unique index if not exists award_votes_email_unique
  on public.award_votes (lower(btrim(email)));

create table if not exists public.award_comments (
  id bigint generated always as identity primary key,
  comment text not null check (char_length(comment) between 1 and 2000),
  created_at timestamptz not null default now()
);

alter table public.award_votes enable row level security;
alter table public.award_comments enable row level security;

revoke all on table public.award_votes from public, anon, authenticated;
revoke all on table public.award_comments from public, anon, authenticated;

create or replace function public.get_vote_totals()
returns table (
  nominee_id integer,
  total_votes bigint,
  percentage numeric
)
language sql
stable
security definer
set search_path = ''
as $$
  with nominee_ids as (
    select generate_series(1, 10)::integer as nominee_id
  ),
  vote_counts as (
    select award_votes.nominee_id, count(*) as total_votes
    from public.award_votes
    group by award_votes.nominee_id
  ),
  totals as (
    select coalesce(sum(vote_counts.total_votes), 0) as total_votes
    from vote_counts
  )
  select
    nominee_ids.nominee_id,
    coalesce(vote_counts.total_votes, 0)::bigint,
    case
      when totals.total_votes = 0 then 0::numeric
      else round(
        coalesce(vote_counts.total_votes, 0)::numeric * 100
        / totals.total_votes,
        1
      )
    end
  from nominee_ids
  left join vote_counts using (nominee_id)
  cross join totals
  order by nominee_ids.nominee_id;
$$;

revoke all on function public.get_vote_totals() from public;
grant execute on function public.get_vote_totals() to anon, authenticated;
