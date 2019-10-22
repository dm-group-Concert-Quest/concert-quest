UPDATE users
SET password = ""
WHERE user_id = $1;

UPDATE users
SET password = $2
WHERE user_id = $1;
RETURNING *;