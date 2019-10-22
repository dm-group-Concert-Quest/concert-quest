INSERT INTO users
(first_name, email, username, city, state, password)
VALUES
($1, $2, $3, $4, $5, $6)
returning *;