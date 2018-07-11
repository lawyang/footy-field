const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


 // GET route for formation details
router.get('/details', (req, res) => {
    console.log('in get call from the router');
    //Need to replace the WHERE to what is selected
    const queryText = "SELECT id, structure, image_url, strengths, weaknesses, notes FROM formation_detail WHERE formation_name='laws 4-3-3'";
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

// GET route for formation name
router.get('/formation', (req, res) => {
    const queryText = "SELECT id, formation_name, structure, image_url, strengths, weaknesses, notes FROM formation_detail";
    pool.query(queryText)
        .then((result) => {
            console.log('GET call for Formation', result);
            res.send(result.rows);
        })
        .catch((error) => {
            console.log('Error handling Formation GET call', error);
            res.sendStatus(500);
        })
})


/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;