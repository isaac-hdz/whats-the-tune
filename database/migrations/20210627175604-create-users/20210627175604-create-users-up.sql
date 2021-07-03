CREATE TABLE users (
  id VARCHAR,
  username VARCHAR,
  userpass VARCHAR,
  first_name VARCHAR,
  last_name VARCHAR,
  email VARCHAR
);

CREATE UNIQUE INDEX users_primary_key_idx
  ON users (id);
CREATE UNIQUE INDEX users_username_idx
  ON users (username);
CREATE UNIQUE INDEX users_email_idx
  ON users (email);