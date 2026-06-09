# Jonair Patani — Portfolio Website

A modern, dark-themed personal portfolio website built with React, Node.js, and Supabase.

## Tech Stack

- **Frontend**: React + Vite + Tailwind CSS + Framer Motion
- **Backend**: Node.js + Express.js
- **Database**: Supabase (PostgreSQL + Storage)

## Project Structure

```
jonairpatani.dev/
├── frontend/     # React + Vite app
├── backend/      # Node.js + Express API
├── database/     # SQL schema + seed data
└── Docs/         # Project documentation
```

## Getting Started

### 1. Frontend

```bash
cd frontend
npm install
npm run dev     # http://localhost:5173
```

### 2. Backend

```bash
cd backend
# Copy and fill in your Supabase credentials
copy .env.example .env
npm run dev     # http://localhost:5000
```

### 3. Database

1. Create a project on [supabase.com](https://supabase.com)
2. Run `database/schema.sql` in the Supabase SQL Editor
3. Run `database/seed.sql` to populate initial data
4. Create a `resume-files` storage bucket and upload `resume.pdf`
5. Copy your project URL and keys into `backend/.env`

## API Endpoints

| Method | Endpoint                 | Description              |
|--------|--------------------------|--------------------------|
| GET    | /health                  | Health check             |
| GET    | /api/projects            | Get all projects         |
| GET    | /api/projects/:id        | Get project by ID        |
| GET    | /api/certificates        | Get all certificates     |
| GET    | /api/experiences         | Get all experiences      |
| GET    | /api/resume/download     | Get resume download URL  |

## Color Palette

| Name           | Hex       |
|----------------|-----------|
| Primary Purple | `#7C3AED` |
| Deep Violet    | `#5B21B6` |
| Background     | `#0F0F0F` |
| Surface        | `#1A1A1A` |
| Muted Text     | `#94A3B8` |
