import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


const mapReduxStoreToProps = reduxStore => ({
    formationDetail: reduxStore.getDetailReducer.getDetailReducer
})

class EditField extends Component {
    state = {
        array1: [],
        updateId: '',
        newFormation: {
            id: this.props.detail,
            formation_name: '',
            strengths: '',
            weaknesses: '',
            notes: ''
        }
    }

    componentDidMount(){        
        this.fetchDetailTable();
        console.log(this.state.newFormation.id);
        
    }

    handleClose = (id) => {  
        console.log(id);
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

    handleEdit = (id) => {
        console.log(id);     
        this.props.dispatch({type: 'ADD_EDIT', payload: this.state.newFormation})   
    }

    fetchDetailTable = () => {
        console.log(this.state.newFormation.id);
        console.log('this is the props:', this.props.detail)
        this.props.dispatch({type: 'FETCH_UPDATE_ID', payload: this.state.newFormation.id});
    }

    render(){
        return(
            <div>
            <pre>{JSON.stringify(this.props.detail)}</pre>
            {/* {this.props.formationDetail.map((detail) => 
            )} */}
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
            <Button variant="contained" color="secondary" onClick={()=>{this.handleEdit(this.props.detail)}}>Submit Edits</Button>
            </div>
        )
    }    
}

export default connect(mapReduxStoreToProps)(EditField);