const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


 // GET route for formation details
router.get('/details/:id', (req, res) => {
    console.log('in get call from the router');
    //Need to replace the WHERE to what is selected
    let id = req.params.id
    // const queryText = `SELECT id, formation_name, structure, image_id, strengths, weaknesses, notes FROM formation_detail WHERE id=${id}`;
    const queryText = `SELECT formation_detail.id, username, email, formation_name, image_id, strengths, weaknesses, notes, name, path FROM formation_detail left join users on user_id = users.id right join formation_image on image_id = formation_image.id WHERE formation_detail.id=${id};`;
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
    const queryText = 'SELECT formation_detail.id, username, email, formation_name, image_id, strengths, weaknesses, notes, name, path FROM formation_detail left join users on user_id = users.id join formation_image on image_id = formation_image.id';
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

router.get('/update/:id', (req, res) => {
    let id = req.params.id
    const queryText = `SELECT * FROM formation_detail WHERE id = $1`;
        pool.query(queryText, [id])
        .then((result) => {
            console.log('GET call for Formation', result);
            res.send(result.rows);
        })
        .catch((error) => {
            console.log('Error handling Formation GET call', error);
            res.sendStatus(500);
        })
})

router.get('/image', (req,res) => {
    const queryText = 'SELECT * fROM formation_image';
    pool.query(queryText)
        .then((result) => {
            console.log('GET CALL FOR IMAGES');
            res.send(result.rows);
        })
        .catch((error) => {
            console.log('ERROR HANDLING IMAGE GET CALL', error);
            res.sendStatus(500)
        })
})

/**
 * POST route template
 */
router.post('/', (req, res) => {
    const newForm = req.body;
    console.log('hello', newForm);
    console.log('hello', newForm.newFormation);
    const id = req.user.id;
    const queryText = "INSERT INTO formation_detail (formation_name, image_id, strengths, weaknesses, notes, user_id) VALUES ($1, $2, $3, $4, $5, $6)";
        pool.query(queryText, [newForm.newFormation.formation_name, newForm.image_id, newForm.newFormation.strengths, newForm.newFormation.weaknesses, newForm.newFormation.notes, id])
        .then(() => {
            console.log('successfull POST');
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log('//////////////////Error Posting', error);
            res.sendStatus(500);
        })
            
});

router.put('/edit', (req, res) => {
    const edit = req.body;
    const id = req.body.id;
    console.log('edit', req.body);
    console.log('ID', id);
    const queryText = `UPDATE formation_detail SET formation_name = $1, strengths = $2, weaknesses = $3, notes = $4 WHERE id = ${id}`;
    pool.query(queryText, [edit.formation_name, edit.strengths, edit.weaknesses, edit.notes])
        .then(() => {
            res.sendStatus(201)
        })
        .catch((error) => {
            console.log('ERROR updating record', error)
        })
})


router.delete('/:id', (req, res) => {
    const id = req.params.id;
    console.log('ID to delete:', id);
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