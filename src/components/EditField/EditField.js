import React, { Component } from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


const mapReduxStoreToProps = reduxStore => ({
    formationDetail: reduxStore.getDetailReducer.getDetailReducer,
    idDetail: reduxStore.getDetailReducer.getIdDetailReducer
})

class EditField extends Component {
    state = {
        array1: [],
        updateId: '',
        newFormation: {
            id: this.props.detail,
            // formation_name:,
            // strengths: '',
            // weaknesses: '',
            // notes: ''
        }
    }

    componentDidMount(){        
        this.fetchDetailTable();        
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
        alert('edits successfully submitted');

    }

    fetchDetailTable = () => {
        console.log(this.state.newFormation.id);
        console.log('this is the props:', this.props.detail)
        this.props.dispatch({type: 'FETCH_UPDATE_ID', payload: this.state.newFormation.id});
    }

    render(){
        return(
        <div>
            {/* <pre>{JSON.stringify(this.props.detail)}</pre>
            <pre>{JSON.stringify(this.props.idDetail)}</pre> */}
            <Typography variant="title" id="modal-title">
              Edit Formation
            </Typography>
            {this.props.idDetail.map((detail) => {
                return <div key={detail.id}>
                    <br/>
                    <TextField className="addNew" defaultValue={detail.formation_name} value={this.state.newFormation.formation_name} name="formationName" label="Formation Name" onChange={this.handleChange('formation_name')} />
                    <br/>
                    <br/>                       
                    <TextField className="addNew" defaultValue={detail.strengths} value={this.state.newFormation.strengths} name='strengths' label="Formation Strengths" onChange={this.handleChange('strengths')}/>
                    <br/>
                    <TextField className="addNew" defaultValue={detail.weaknesses} value={this.state.newFormation.weaknesses} name='weaknesses' label="Formation Weaknesses" onChange={this.handleChange('weaknesses')}/>
                    <br/>                        
                    <TextField className="addNew" defaultValue={detail.notes} value={this.state.newFormation.notes} name='notes' label="Notes" multiline={true} rows="9" onChange={this.handleChange('notes')}/>
                    <br/>
                    <Button variant="contained" color="secondary" onClick={()=>{this.handleEdit(this.props.detail)}}>Submit Edits</Button>
                </div>                
            })}
        </div>                
        )
    }    
}

export default connect(mapReduxStoreToProps)(EditField);