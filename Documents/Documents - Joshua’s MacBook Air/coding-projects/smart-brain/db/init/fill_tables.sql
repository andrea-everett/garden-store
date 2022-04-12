-- Filling of users
INSERT INTO users 
(id, name, email, entries, joined) 
VALUES (1,'Ann', 'ann@gmail.com', 0, now());

INSERT INTO users 
(id, name, email, entries) 
VALUES (2,'Anne', 'anne@gmail.com', 0);

INSERT INTO users 
(id, name, email, entries) 
VALUES (3,'Amy', 'amy@gmail.com', 0);

INSERT INTO users 
(id, name, email, entries) 
VALUES (4,'John', 'john@gmail.com', 0);

-- Filling of login
INSERT INTO users
(name, age, birthday, score) 
VALUES ('Sally', 41, '1930-02-4', 50);

-- Filling of login
INSERT INTO users
(name, age, birthday, score) 
VALUES ('John', 30, '1989-02-04', 35);

--Filling Table Login
INSERT INTO login (secret, name)
VALUES ('abc', 'Andrei');

--Filling Table Login
INSERT INTO login (secret, name)
VALUES ('xyz', 'Sally');

--Filling Table Login
INSERT INTO login (secret, name)
VALUES ('lol', 'John');

