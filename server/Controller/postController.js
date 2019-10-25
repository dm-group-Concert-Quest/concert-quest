module.exports = {
    trackBand: (req, res) => {
        const { band_name, image_url } = req.body;
        const db = req.app.get('db');

        db.post.checkIfTracking(req.session.user.user_id, band_name).then(count => {
            console.log(count[0]);
            if (count[0].count == '0') {
                db.post.trackBand(req.session.user.user_id, band_name, image_url);
                res.status(200).json(`${band_name} tracked.`);
            } else {
                res.status(400).json(`Already tracking ${band_name}.`);
            }
        })
    },

    untrackBand: (req, res) => {
        const { band_name } = req.params;
        const db = req.app.get('db');

        db.post.checkIfTracking(req.session.user.user_id, band_name).then(count => {
            if (count[0].count == '1') {
                console.log('return is 1')
                db.post.unTrackBand(req.session.user.user_id, band_name).then(response => res.status(200).json(response));
            } else {
                console.log('return is 0')
                res.status(403).json(`You were not tracking ${band_name} in the first place, dummy.`);
            }
        }
        )
    },

    getTrackedArtists: async (req, res) => {
        const db = req.app.get('db');

        if (req.session.user) {
            const artists = await db.post.getTrackedArtists(req.session.user.user_id);
            res.status(200).json(artists);
            console.log(artists);
        } else res.status(403).json('Please sign in.')
    }
}