UPDATE users
SET username = $2
WHERE user_id = $1
RETURNING *;