SELECT COUNT(*) FROM users
WHERE username = $1 OR email = $2;