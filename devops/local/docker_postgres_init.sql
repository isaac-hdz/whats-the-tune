CREATE USER "whats-the-tune" WITH PASSWORD 'hunter2';

CREATE DATABASE "whats-the-tune"
  WITH
  OWNER "whats-the-tune"
  ENCODING = 'UTF8'
  LC_COLLATE = 'en_US.utf8'
  LC_CTYPE = 'en_US.utf8'
  TABLESPACE = pg_default
  CONNECTION LIMIT = -1;