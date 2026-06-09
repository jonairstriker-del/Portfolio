# Portfolio Website Architecture

## Overview

This project is a personal portfolio website designed to showcase projects, certificates, experience, skills, and a downloadable resume. The website is built using React, Tailwind CSS, Vite, Node.js, and Supabase.

---

# Technology Stack

## Frontend

* React.js
* Vite
* Tailwind CSS
* React Router DOM
* Axios
* Framer Motion

## Backend

* Node.js
* Express.js
* Supabase SDK

## Database

* Supabase PostgreSQL
* Supabase Storage

---

# System Architecture

```text
┌───────────────────────────┐
│         Browser           │
└─────────────┬─────────────┘
              │
              ▼
┌───────────────────────────┐
│   Frontend (React/Vite)   │
│      Tailwind CSS         │
└─────────────┬─────────────┘
              │ REST API
              ▼
┌───────────────────────────┐
│   Backend (Node.js API)   │
│        Express.js         │
└─────────────┬─────────────┘
              │
              ▼
┌───────────────────────────┐
│         Supabase          │
│ PostgreSQL + Storage      │
└───────────────────────────┘
```

---

# Project Structure

```text
portfolio-website/
│
├── frontend/
├── backend/
├── database/
├── docs/
│
├── README.md
└── .gitignore
```

---

# Frontend Architecture

```text
frontend/
│
├── public/
│
├── src/
│   ├── assets/
│   │   ├── images/
│   │   ├── icons/
│   │   └── resume/
│   │
│   ├── components/
│   │   ├── common/
│   │   ├── navbar/
│   │   ├── footer/
│   │   ├── project/
│   │   ├── certificate/
│   │   └── experience/
│   │
│   ├── layouts/
│   │   └── MainLayout.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Certificates.jsx
│   │   ├── Experience.jsx
│   │   └── Projects.jsx
│   │
│   ├── routes/
│   │   └── AppRoutes.jsx
│   │
│   ├── services/
│   │   ├── api.js
│   │   └── resumeService.js
│   │
│   ├── hooks/
│   ├── utils/
│   ├── constants/
│   │
│   ├── App.jsx
│   └── main.jsx
│
└── package.json
```

---

# Backend Architecture

```text
backend/
│
├── src/
│   │
│   ├── config/
│   │   ├── env.js
│   │   └── supabase.js
│   │
│   ├── controllers/
│   │   ├── projectController.js
│   │   ├── certificateController.js
│   │   ├── experienceController.js
│   │   └── resumeController.js
│   │
│   ├── routes/
│   │   ├── projectRoutes.js
│   │   ├── certificateRoutes.js
│   │   ├── experienceRoutes.js
│   │   └── resumeRoutes.js
│   │
│   ├── services/
│   │   ├── projectService.js
│   │   ├── certificateService.js
│   │   ├── experienceService.js
│   │   └── resumeService.js
│   │
│   ├── middleware/
│   │   ├── errorMiddleware.js
│   │   └── loggerMiddleware.js
│   │
│   ├── app.js
│   └── server.js
│
└── package.json
```

---

# Database Architecture

```text
database/
│
├── migrations/
│
├── schema.sql
│
└── storage/
    └── resume-files/
```

---

# Database Tables

## projects

| Column       | Type      |
| ------------ | --------- |
| id           | UUID      |
| title        | VARCHAR   |
| description  | TEXT      |
| image_url    | TEXT      |
| github_url   | TEXT      |
| live_url     | TEXT      |
| technologies | JSONB     |
| created_at   | TIMESTAMP |

## certificates

| Column      | Type      |
| ----------- | --------- |
| id          | UUID      |
| title       | VARCHAR   |
| issuer      | VARCHAR   |
| image_url   | TEXT      |
| issued_date | DATE      |
| created_at  | TIMESTAMP |

## experiences

| Column      | Type      |
| ----------- | --------- |
| id          | UUID      |
| company     | VARCHAR   |
| position    | VARCHAR   |
| description | TEXT      |
| start_date  | DATE      |
| end_date    | DATE      |
| created_at  | TIMESTAMP |

---

# Website Pages

## Home

* Hero Section
* Skills Section
* Tools Section
* Featured Projects
* Resume Download Button

## About

* Personal Introduction
* Education
* Career Goals
* Skills and Tools

## Certificates

* Certificate Grid
* Certificate Preview

## Experience

* Timeline Layout
* Work Experience Cards

## Projects

* Project Showcase
* GitHub Links
* Live Demo Links

---

# Resume Download Feature

## Storage

```text
Supabase Storage
└── resume-files/
    └── resume.pdf
```

## API Endpoint

```http
GET /api/resume/download
```

## Flow

```text
User
  │
  ▼
Download Resume Button
  │
  ▼
React Frontend
  │
  ▼
Node.js Backend
  │
  ▼
Supabase Storage
  │
  ▼
Resume PDF Download
```

---

# Color Palette

| Purpose    | Color   |
| ---------- | ------- |
| Primary    | #7C3AED |
| Secondary  | #A855F7 |
| Accent     | #C084FC |
| Background | #0F172A |
| Surface    | #1E293B |
| Text       | #F8FAFC |
| Muted Text | #94A3B8 |

---

# Future Enhancements

* Admin Dashboard
* Project Management System
* Certificate Management
* Analytics Dashboard
* Contact Form Integration
* Blog Section
* Dark/Light Mode Toggle
* Multi-language Support

---

# Architecture Principles

* Component-Based Frontend Design
* RESTful API Structure
* Clean Folder Organization
* Separation of Concerns
* Scalable Database Design
* Responsive UI/UX
* Maintainable Codebase
* Resume Download Support
