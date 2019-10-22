UPDATE users
SET city = $2
WHERE user_id = $1
RETURNING *;