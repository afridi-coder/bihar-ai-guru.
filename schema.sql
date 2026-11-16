-- BIHAR AI GURU starter schema (PostgreSQL / Supabase)
create extension if not exists pgcrypto;

create table if not exists public.student_profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  university text,
  college text,
  course text,
  subject text,
  semester text,
  preferred_language text not null default 'Hindi' check (preferred_language in ('Hindi','English','Hinglish')),
  created_at timestamptz not null default now()
);

create table if not exists public.syllabi (
  id uuid primary key default gen_random_uuid(),
  student_id uuid not null references auth.users(id) on delete cascade,
  university text not null,
  course text not null,
  subject text not null,
  semester text not null,
  original_file_name text not null,
  storage_path text,
  extracted_content text,
  processing_status text not null default 'uploaded' check (processing_status in ('uploaded','processing','needs_review','confirmed','failed')),
  created_at timestamptz not null default now()
);

create table if not exists public.syllabus_topics (
  id uuid primary key default gen_random_uuid(),
  syllabus_id uuid not null references public.syllabi(id) on delete cascade,
  unit_title text not null,
  topic_title text not null,
  topic_order integer not null default 0,
  is_confirmed boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists public.lesson_progress (
  id uuid primary key default gen_random_uuid(),
  student_id uuid not null references auth.users(id) on delete cascade,
  topic_id uuid not null references public.syllabus_topics(id) on delete cascade,
  status text not null default 'not_started' check (status in ('not_started','in_progress','completed')),
  last_position jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now(),
  unique(student_id, topic_id)
);

alter table public.student_profiles enable row level security;
alter table public.syllabi enable row level security;
alter table public.syllabus_topics enable row level security;
alter table public.lesson_progress enable row level security;

create policy "Students manage own profile" on public.student_profiles
for all using (auth.uid() = id) with check (auth.uid() = id);

create policy "Students manage own syllabi" on public.syllabi
for all using (auth.uid() = student_id) with check (auth.uid() = student_id);

create policy "Students access topics from own syllabi" on public.syllabus_topics
for all using (exists (
  select 1 from public.syllabi s where s.id = syllabus_id and s.student_id = auth.uid()
)) with check (exists (
  select 1 from public.syllabi s where s.id = syllabus_id and s.student_id = auth.uid()
));

create policy "Students manage own progress" on public.lesson_progress
for all using (auth.uid() = student_id) with check (auth.uid() = student_id);

-- Create a private Supabase Storage bucket named: student-syllabi
-- Storage policies should restrict each student to their own folder: <auth.uid()>/filename.
