module.exports = {
    trackBand: (req, res) => {
        const { image_url, band_name, user_id } = req.body;
        const db = req.app.get('db');

        db.post.checkIfTracking(user_id, band_name).then(count => {
            console.log(count[0]);
            if (count[0].count == '0') {
                db.post.trackBand(user_id, band_name, image_url);
                res.status(200).json(`${band_name} tracked.`);
            } else {
                res.status(400).json(`Already tracking ${band_name}.`);
            }
        })

    },

    unTrackBand: (req, res) => {
        const { band_name, user_id } = req.body;
        const db = req.app.get('db');

        db.post.checkIfTracking(user_id, band_name).then(count => {
            console.log(count[0]);
            if (count[0].count == '1') {
                db.post.unTrackBand(user_id, band_name);
                res.status(200).json(`No longer tracking ${band_name}.`)
            } else {
                res.status(403).json(`You were not tracking ${band_name} in the first place, dummy.`);
            }
        }
        )
    }

}