DELETE FROM tracked_artists WHERE (user_id = $1 AND band_name = $2);

SELECT * FROM tracked_artists
WHERE user_id = $1;