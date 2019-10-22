UPDATE users
SET state = $2
WHERE userid = $1
RETURNING *;