import React, { Component } from 'react';
import { connect } from 'react-redux';
import './newFormationForm.css';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { MenuItem } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';

const mapReduxStateToProps = (reduxStore) => ({
    structure: reduxStore.getStructureReducer.getStructureReducer,
})

class NewFormationForm extends Component {
    state = {
        image_id: '',
        newFormation: {
            formation_name: '',
            strengths: '',
            weaknesses: '',
            notes: ''
        }
    }
    

    componentDidMount = () => {
        this.props.dispatch({type: 'FETCH_STRUCTURE'});
        console.log('image_id', this.state.newFormation);        
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
        console.log(this.state.newFormation.formationName)
    }

    handleClick = () => {
        if(this.state.newFormation.formationName === ''){
            alert('please fill all fields')
        } else {
            this.props.dispatch( {type: 'ADD_ELEMENT', payload: this.state} )
            this.setState({
                newFormation:{
                    formation_name: '',
                    strengths: '',
                    weaknesses: '',
                    notes: ''
                }
            })
        }
    }

    handleImage = (event) => {
        this.setState({ image_id: event.target.value })
        console.log('handleIamge', this.state.image_id);
    }

    render(){
        return(
            <form className="newFormation">
                    <pre>hi: {JSON.stringify(this.state.image_id)}</pre>
                    <div className="center">
                    <Paper elevation={4}>
                    <div className="centerContent">
                        <h1 className="detailHead">
                            Add New Formation
                        </h1>
                        <br/>
                        <TextField className="addNew" name="formationName" label="Formation Name" onChange={this.handleChange('formation_name')} />
                        <br/>
                        {/* <TextField className="addNew" name="structure" label="Structure" onChange={this.handleChange('structure')} /> */}
                        <br/>
                        <FormControl className="selectStructure">
                            <InputLabel>Formation Structure</InputLabel>
                            <Select
                                value={this.state.image_id}
                                onChange={ this.handleImage }
                                name="image_id"
                                inputProps={{
                                    id: 'image_id',
                                }}
                            >
                                {this.props.structure.map((taco) => 
                                <MenuItem key={taco.id} value={taco.id} >{taco.name}</MenuItem>)}
                            </Select>
                        </FormControl>
                        <pre>hi: {JSON.stringify(this.props.structure)}</pre>
                        <br/>
                        {/* <TextField className="addNew" name='image_url' label="Formation Image URL" onChange={this.handleChange('image_url')}/> */}
                        <br/>                       
                        <TextField className="addNew" name='strengths' label="Formation Strengths" onChange={this.handleChange('strengths')}/>
                        <br/>
                        <TextField className="addNew" name='weaknesses' label="Formation Weaknesses" onChange={this.handleChange('weaknesses')}/>
                        <br/>                        
                        <TextField className="addNew" name='notes' label="Notes" multiline={true} rows="9" onChange={this.handleChange('notes')}/>
                        <br/>
                        <br/>
                        <Button className="submitButton" size="medium" variant="contained" color="primary" onClick={this.handleClick} >Add</Button>
                        <br/>
                        <br/>
                        </div>
                    </Paper>
                    </div>
                    <div className="grid-item"></div>
                    <div className="grid-item"></div>
            </form>
        )
    }
}

export default connect(mapReduxStateToProps)(NewFormationForm);