INSERT INTO users
(firstName, email, username, city, state, password)
VALUES
($1, $2, $3, $4, $5, $6)
returning *;