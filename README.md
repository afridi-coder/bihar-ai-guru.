# BIHAR AI GURU — Full-stack starter

This is the initial deployable web application foundation for BIHAR AI GURU.

## Included
- Responsive Next.js website and product landing page
- University, course, semester and subject selectors
- Hindi / English / Hinglish language selector
- Syllabus file selection UI
- Student workspace and AI classroom UI preview
- Supabase database schema with per-student Row Level Security
- Health-check API endpoint
- Environment variable template

## Important implementation status
This is a starter foundation, not a finished production AI tutor. The syllabus upload currently selects a file and displays a setup notice; it does not yet store, parse or analyze the file. The chat is a UI preview; live AI, speech, authentication, payments and whiteboard synchronization still require configured services and implementation.

## Run locally
1. Install Node.js 20 or later.
2. Extract this project.
3. Run `npm install`.
4. Copy `.env.example` to `.env.local`.
5. Run `npm run dev`.
6. Open http://localhost:3000.

## Supabase setup
1. Create a Supabase project.
2. Run `supabase/schema.sql` in the SQL Editor.
3. Create a **private** Storage bucket named `student-syllabi`.
4. Configure storage policies so each authenticated student can access only their own `<auth.uid()>/...` folder.
5. Add the Supabase URL and anon key to `.env.local`.

Never expose `SUPABASE_SERVICE_ROLE_KEY` or AI provider secrets in browser code.

## Deploy online without buying a domain
1. Push this folder to a private GitHub repository.
2. Import the repository into Vercel.
3. Add environment variables in Vercel project settings.
4. Deploy. Vercel provides a temporary `*.vercel.app` URL.
5. Add a custom domain later.

## Next engineering milestones
1. Supabase Auth (student signup/login and profile creation).
2. Secure upload API to private storage.
3. PDF/DOCX/image extraction and OCR.
4. Syllabus extraction into editable units/topics with student confirmation.
5. AI lesson API grounded in confirmed syllabus content.
6. Persist topic progress and resume lessons.
7. Real-time voice (speech-to-text and text-to-speech).
8. Interactive whiteboard and diagram rendering.
9. Notes, MCQ and mock test generation.
10. Admin roles, billing, monitoring, privacy and production testing.

## Academic data quality
University course structures differ by university and academic session. Keep syllabus records tied to the exact university, course, semester and session. Do not fabricate official syllabus content or label generated practice questions as past examination papers.
