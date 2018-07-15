const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


 // GET route for formation details
router.get('/details/:id', (req, res) => {
    console.log('in get call from the router');
    //Need to replace the WHERE to what is selected
    let id = req.params.id
    const queryText = `SELECT id, formation_name, structure, image_url, strengths, weaknesses, notes FROM formation_detail WHERE id=${id}`;
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
    const newForm = req.body
    const id = req.user.id;
    const queryText = "INSERT INTO formation_detail (formation_name, structure, image_url, strengths, weaknesses, notes, user_id) VALUES ($1, $2, $3, $4, $5, $6, $7)";
    pool.query(queryText, [newForm.formationName, newForm.structure, newForm.image_url, newForm.strengths, newForm.weaknesses, newForm.notes, id])
        .then(() => {
            console.log('successfull POST');
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log('Error Posting', error);
            res.sendStatus(500);
        })
            
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    console.log('this thing hre is', id);    
    console.log(`delete thing ${id}`);
    const queryText = `DELETE FROM formation_detail WHERE id=$1`;
    pool.query(queryText, [id])
        .then(() => {
            console.log('HANDLED DELETE CALL');
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log("FAILED DELETE CALL", error);
            res.sendStatus(500);
        })
})


module.exports = router;