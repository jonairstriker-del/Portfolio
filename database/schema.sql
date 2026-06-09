-- ================================================================
-- Jonair Patani Portfolio — Database Schema
-- Database: Supabase (PostgreSQL)
-- ================================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ================================================================
-- PROJECTS TABLE
-- ================================================================
CREATE TABLE IF NOT EXISTS projects (
  id            UUID        DEFAULT uuid_generate_v4() PRIMARY KEY,
  title         VARCHAR(200) NOT NULL,
  description   TEXT,
  image_url     TEXT,
  github_url    TEXT,
  live_url      TEXT,
  technologies  JSONB       DEFAULT '[]'::jsonb,
  is_featured   BOOLEAN     DEFAULT false,
  created_at    TIMESTAMP   WITH TIME ZONE DEFAULT NOW(),
  updated_at    TIMESTAMP   WITH TIME ZONE DEFAULT NOW()
);

-- ================================================================
-- CERTIFICATES TABLE
-- ================================================================
CREATE TABLE IF NOT EXISTS certificates (
  id           UUID        DEFAULT uuid_generate_v4() PRIMARY KEY,
  title        VARCHAR(300) NOT NULL,
  issuer       VARCHAR(200),
  image_url    TEXT,
  issued_date  DATE,
  created_at   TIMESTAMP   WITH TIME ZONE DEFAULT NOW()
);

-- ================================================================
-- EXPERIENCES TABLE
-- ================================================================
CREATE TABLE IF NOT EXISTS experiences (
  id           UUID        DEFAULT uuid_generate_v4() PRIMARY KEY,
  company      VARCHAR(200) NOT NULL,
  position     VARCHAR(200) NOT NULL,
  description  TEXT,
  start_date   DATE,
  end_date     DATE,
  type         VARCHAR(50)  DEFAULT 'work' CHECK (type IN ('work', 'freelance', 'academic')),
  created_at   TIMESTAMP   WITH TIME ZONE DEFAULT NOW()
);

-- ================================================================
-- SKILLS TABLE
-- ================================================================
CREATE TABLE IF NOT EXISTS skills (
  id        UUID        DEFAULT uuid_generate_v4() PRIMARY KEY,
  name      VARCHAR(100) NOT NULL,
  level     SMALLINT     CHECK (level >= 0 AND level <= 100),
  category  VARCHAR(50),
  sort_order SMALLINT    DEFAULT 0,
  created_at TIMESTAMP  WITH TIME ZONE DEFAULT NOW()
);

-- ================================================================
-- AUTO-UPDATE updated_at FUNCTION
-- ================================================================
CREATE OR REPLACE FUNCTION trigger_set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER set_projects_updated_at
  BEFORE UPDATE ON projects
  FOR EACH ROW
  EXECUTE FUNCTION trigger_set_updated_at();

-- ================================================================
-- ROW LEVEL SECURITY (Public read access, no unauthenticated writes)
-- ================================================================
ALTER TABLE projects     ENABLE ROW LEVEL SECURITY;
ALTER TABLE certificates ENABLE ROW LEVEL SECURITY;
ALTER TABLE experiences  ENABLE ROW LEVEL SECURITY;
ALTER TABLE skills       ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read all rows
CREATE POLICY "Public read access" ON projects
  FOR SELECT USING (true);

CREATE POLICY "Public read access" ON certificates
  FOR SELECT USING (true);

CREATE POLICY "Public read access" ON experiences
  FOR SELECT USING (true);

CREATE POLICY "Public read access" ON skills
  FOR SELECT USING (true);
