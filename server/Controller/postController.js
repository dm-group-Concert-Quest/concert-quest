module.exports = {
    trackBand: (req, res) => {
        const {bandName} = req.body;
        const db = req.app.get('db');

        db.post.checkIfTracking(req.session.user.user_id, bandName).then(count => {
            console.log(count[0]);
            if(count[0].count == '0') {
                db.post.trackBand(req.session.user.user_id, bandName);
                res.status(200).json(`${bandName} tracked.`);
            } else {
                res.status(400).json(`Already tracking ${bandName}.`);
            }
        })
        
    },

    unTrackBand: (req, res) => {
        const {bandName} = req.body;
        const db = req.app.get('db');

        db.post.checkIfTracking(req.session.user.user_id, bandName).then(count => {
            console.log(count[0]);
            if(count[0].count == '1') {
            db.post.unTrackBand(req.session.user.user_id, bandName);
            res.status(200).json(`No longer tracking ${bandName}.`)
        } else {
            res.status(403).json(`You were not tracking ${bandName} in the first place, dummy.`);
        }}
        )
    }
    
}