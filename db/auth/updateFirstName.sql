UPDATE users
SET first_name = $2
WHERE user_id = $1
RETURNING *;