CREATE TABLE users (ID SERIAL PRIMARY KEY, first_name VARCHAR(50), last_name VARCHAR(50), email VARCHAR(30), password VARCHAR(256), user_type VARCHAR(20));

CREATE TABLE notebook (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  user_id INTEGER references users(id),
  created_at TIMESTAMP default NOW()
);

CREATE TABLE notes (
  id SERIAL PRIMARY KEY,
  notebook_id integer references notebook(id) ON DELETE CASCADE, 
  title TEXT NOT NULL,
  content TEXT,
  created_at TIMESTAMP default NOW()
);
