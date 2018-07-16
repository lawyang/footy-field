import React, { Component } from 'react';
import { connect } from 'react-redux';
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
            newFormation: {
                formationName: '',
                structure: '',
                image_url: '',
                strengths: '',
                weaknesses: '',
                notes: ''
            }
        }
    }


    componentDidMount = () => {

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
                [formation]: event.target.value,
            }
        })
        console.log(this.state.newFormation.formationName)
    }

    handleClick = () => {
        if(this.state.newFormation.formationName === ''){
            alert('please fill all fields')
        } else {
            this.props.dispatch( {type: 'ADD_ELEMENT', payload: this.state.newFormation} )
            this.setState({
                newFormation:{
                    formationName: '',
                    structure: '',
                    // image_url: '',
                    strengths: '',
                    weaknesses: '',
                    notes: ''
                }
            })
        } // end else statement
    }

    fileSelectedHandler = (event) => {
        console.log(event.target.files[0]);
        this.setState({
            image_url: event.target.files[0]
        })
    }

    uploadHandler = () => {
        //send to sagas -> redux -> footyRouter
        console.log(this.state.selectedFile);
        
    }

    render(){
        return(
            <div>
                    <div className="center">
                    <Paper elevation={4}>
                    <div className="centerContent">
                        <h1 className="detailHead">
                            Add New Formation
                        </h1>
                        <br/>
                        <TextField className="addNew" name="formationName" label="Formation Name" onChange={this.handleChange('formationName')} />
                        <br/>
                        <TextField className="addNew" name="structure" label="Structure" onChange={this.handleChange('structure')} />
                        <br/>
                        <input 
                        type="file" 
                        onChange={this.fileSelectedHandler} 
                        style={{display: 'none'}}
                        ref={fileInput => this.fileInput = fileInput}
                        name='image_url'
                        label="Formation Image Url"
                        />
                        <button onClick={() => this.fileInput.click()}>Select File to Upload</button>
                        <button onClick={this.uploadHandler}>Upload</button>
                        <br/>
                        <TextField className="addNew" name='image_url' label="Formation Image URL" onChange={this.handleChange('image_url')}/>
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
            </div>
        )
    }
}

export default connect(mapStateToProps)(NewFormationForm);