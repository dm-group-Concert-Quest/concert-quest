UPDATE users
SET city = $2
WHERE userid = $1
RETURNING *;