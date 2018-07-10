const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


 // GET route for formation
router.get('/formation', (req, res) => {
    console.log('in get call from the router');
    const queryText = "SELECT id, formation_name, structure, image_url, strengths, weaknesses, notes FROM formation_detail;";
    pool.query(queryText)
        .then((result) => {
            console.log('Successful GET call', result);
            res.send(result.rows);
        })
        .catch((error) => {
            console.log('Error handling GET call', error);
            res.sendStatus(500);
        })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;