-- Creation of users table
CREATE TABLE users (
  id serial primary key,
  name VARCHAR(100),
  email text unique not null,
  entries BIGINT default 0,
  joined TIMESTAMP not NULL
);

--Creation of login table
CREATE TABLE login (
  id serial primary KEY,
  hash VARCHAR (100) NOT NULL,
  email text UNIQUE NOT NULL
);
