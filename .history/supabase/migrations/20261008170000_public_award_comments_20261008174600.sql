begin;

revoke all privileges on table public.award_comments
from public, anon, authenticated;

create or replace function public.get_public_award_comments()
returns table (
  comment text,
  created_at timestamp with time zone
)
language sql
stable
security definer
set search_path = pg_catalog
as $function$
  select ac.comment, ac.created_at
  from public.award_comments as ac
  order by ac.created_at desc, ac.id desc
  limit 50
$function$;

revoke all privileges on function public.get_public_award_comments()
from public, anon, authenticated;

grant execute on function public.get_public_award_comments()
to anon, authenticated;

commit;