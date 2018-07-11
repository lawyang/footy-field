import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import './formationDisplay.css';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

const mapStateToProps = state => ({

})

class FormationDisplay extends Component {
    constructor(){
        super();
        this.state = {
            formationArr: [],
            nameArr: []
        }
    }
    // get formation information on load
    componentDidMount(){
        this.getFormationDetail();
        this.getFormationName();
    }

    //GET call for Formation Details
    getFormationDetail = () => {
        axios.get('/api/footy/details')
            .then((response) => {
                console.log('Success GET call for Formation', response.data);
                this.setState({
                    formationArr: response.data
                })
                console.log('this is formationarr',this.state.formationArr);
            })
            .catch((error) => {
                console.log('Error Handling GET call for Formation Detail', error);
            })
    }

    //Get call for Formation Name
    getFormationName = () => {
        axios.get('/api/footy/formation')
            .then((response) => {
                this.setState({
                    nameArr: response.data
                })
                console.log(this.state.nameArr);
            })
            .catch((error) => {
                console.log('Error handling GET call for Formation Name', error);
            })
    }



    render(){
        return(
            <div className="grid-container">
                <div className="grid-item">1</div>   
                <div className="grid-item">2</div>   
 
                <div className="grid-item-3" id="formationName">
                    <Paper elevation={1} style={{maxHeight: 400, overflow: 'auto'}}>
                    <List component="nav">
                        {this.state.nameArr.map((name) => 
                            <ListItem key={name.id} button>
                                <ListItemText primary={name.formation_name} />
                                {/* <ListItemText primary="Trash" /> */}
                            </ListItem>
                        )}
                    </List>
                    </Paper>
                </div>

                <div className="grid-item">
                
                
                </div>
                


                <div className="grid-item">5</div>
                
                <div className="grid-item-6" id="formationDetail">
                    <Paper elevation={1}>
                        <h1 className="detailHead">
                            Formation Details
                        </h1>
                            {/* <ul> */}
                                {this.state.formationArr.map((detail) => 
                                    <ul key={detail.id}>
                                            <li>Strengths: {detail.strengths}</li>
                                            <li>Weaknesses: {detail.weaknesses}</li>
                                            <li>Notes: {detail.notes}</li>
                                    </ul>
                                )}
                            {/* </ul> */}
                    </Paper>
                </div>

                <div className="grid-item">7</div>
                <div className="grid-item">8</div>   
                <div className="grid-item">9</div>   
                <div className="grid-item-footer">footer</div>   
            </div>
        )
    }
}

export default connect(mapStateToProps)(FormationDisplay);