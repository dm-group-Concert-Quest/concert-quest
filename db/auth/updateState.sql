UPDATE users
SET state = $2
WHERE user_id = $1
RETURNING *;