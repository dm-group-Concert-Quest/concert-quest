UPDATE users
SET password = ""
WHERE userid = $1;

UPDATE users
SET password = $2
WHERE userid = $1;
RETURNING *;