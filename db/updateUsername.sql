UPDATE users
SET username = $2
WHERE userid = $1
RETURNING *;