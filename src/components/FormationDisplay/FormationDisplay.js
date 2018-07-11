import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import './formationDisplay.css';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';



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
            <div>
                <div className="formationName">
                    <List component="nav">
                        {this.state.nameArr.map((name) => 
                            <ListItem button>
                                <ListItemText primary={name.formation_name} />
                                {/* <ListItemText primary="Trash" /> */}
                            </ListItem>
                        )}
                    </List>
                </div>

                <div>
                    <ul>
                        {this.state.formationArr.map((detail) => 
                            <div key={detail.id}>
                                <li>Strengths: {detail.strengths}</li>
                                <li>Weaknesses: {detail.weaknesses}</li>
                                <li>Notes: {detail.notes}</li>
                            </div>
                        )}
                    </ul>
                </div>




            </div>
        )
    }
}

export default connect(mapStateToProps)(FormationDisplay);