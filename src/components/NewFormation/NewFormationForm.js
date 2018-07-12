import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import './newFormationForm.css';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';


const mapStateToProps = state => ({

})

class NewFormationForm extends Component {
    constructor(){
        super()
        this.state = {

        }
    }

    render(){
        return(
            <div className="grid-container">
                    <div className="grid-item">1</div>
                    <div className="grid-item-2">
                    <Paper elevation={4}>
                        <h1 className="detailHead">
                            Add New Formation
                        </h1>
                        <TextField className="addNew" label="formationName"/>
                        <br/>
                        <TextField className="addNew" label="Structure"/>
                        <br/>
                        <TextField className="addNew" label="Formation Image URL"/>
                        <br/>                       
                        <TextField className="addNew" label="Formation Strengths"/>
                        <br/>
                        <TextField className="addNew" label="Formation Weaknesses"/>
                        <br/>                        
                        <TextField className="addNew" label="Notes" multiline="true" rows="9"/>
                        <br/>
                        <Button size="medium">
                        Medium
                        </Button>
                    </Paper>
                    </div>
                    <div className="grid-item">3</div>
                    <div className="grid-item">4</div>

            </div>
        )
    }



}

export default connect(mapStateToProps)(NewFormationForm);