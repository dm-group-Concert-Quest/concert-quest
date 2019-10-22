UPDATE users
SET firstname = $2
WHERE userid = $1
RETURNING *;