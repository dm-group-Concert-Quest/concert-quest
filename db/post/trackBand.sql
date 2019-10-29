INSERT INTO tracked_artists 
(user_id, band_name, image_url)
VALUES ($1, $2, $3);

SELECT * FROM tracked_artists
WHERE user_id = $1;