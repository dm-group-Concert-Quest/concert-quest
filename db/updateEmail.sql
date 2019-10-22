UPDATE users
SET email = $2
WHERE userid = $1
RETURNING *;