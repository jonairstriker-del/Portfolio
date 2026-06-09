# Supabase Storage

## Buckets

### `resume-files`
- Stores the downloadable resume PDF
- File: `resume.pdf`
- Access: Public read

### Setup Instructions

1. In Supabase Dashboard → Storage → Create bucket named `resume-files`
2. Set bucket policy to **Public**
3. Upload `resume.pdf` to the bucket root
4. The backend service will generate a public URL via the Supabase Storage API
