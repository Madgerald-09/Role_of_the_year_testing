create or replace function public.get_public_award_comments()
returns table (
  comment text,
  created_at timestamptz
)
language sql
stable
security definer
set search_path = ''
as $$
  select award_comments.comment, award_comments.created_at
  from public.award_comments
  order by award_comments.created_at desc, award_comments.id desc
  limit 50;
$$;

revoke all on function public.get_public_award_comments() from public;
grant execute on function public.get_public_award_comments() to anon, authenticated;

notify pgrst, 'reload schema';