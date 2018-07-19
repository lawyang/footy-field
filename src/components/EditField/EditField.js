import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


const mapReduxStoreToProps = reduxStore => ({

})

class EditField extends Component {
    state = {
        open: false,
        newFormation: {
            formation_name: '',
            strengths: '',
            weaknesses: '',
            notes: ''
        }
    }

    handleClose = () => {
        this.setState({open: false})
        console.log(this.state);
    }

    handleChange = (formation) => (event) => {
        this.setState({
            newFormation: {
                ...this.state.newFormation,
                [formation]: event.target.value,
                [formation]: event.target.value,
                [formation]: event.target.value,
                [formation]: event.target.value,
                [formation]: event.target.value,
            }
        })
        console.log(this.state.newFormation)
    }

    render(){
        return(
            <div>
            <Typography variant="title" id="modal-title">
              Edit Formation
            </Typography>
            <br/>
            <TextField className="addNew" name="formationName" label="Formation Name" onChange={this.handleChange('formation_name')} />
            <br/>
            <br/>                       
            <TextField className="addNew" name='strengths' label="Formation Strengths" onChange={this.handleChange('strengths')}/>
            <br/>
            <TextField className="addNew" name='weaknesses' label="Formation Weaknesses" onChange={this.handleChange('weaknesses')}/>
            <br/>                        
            <TextField className="addNew" name='notes' label="Notes" multiline={true} rows="9" onChange={this.handleChange('notes')}/>
            <br/>
            <br/>
            <Button variant="contained" color="secondary" onClick={()=>{this.handleClose()}}>Submit Edits</Button>
            </div>
        )
    }    
}

export default connect(mapReduxStoreToProps)(EditField);