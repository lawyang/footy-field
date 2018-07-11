import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import './formationDisplay.css';

const mapStateToProps = state => ({

})

class FormationDisplay extends Component {
    constructor(){
        super();
        this.state = {
            formationArr: [],
        }
    }
    // get formation information on load
    componentDidMount(){
        this.getFormation();
    }

    //GET call to the DB
    getFormation = () => {
        axios.get('/api/footy/formation')
            .then((response) => {
                console.log('Success GET call for Formation', response.data);
                this.setState({
                    formationArr: response.data
                })
                console.log('this is formationarr',this.state.formationArr);
            })
            .catch((error) => {
                console.log('Error Handling GET call for Formation', error);
            })
    }



    render(){
        return(
            <div>
                <div>
                    
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
                <ul>
                    <li>test test</li>
                    <li>test2</li>
                </ul>
            </div>
        )
    }
}

export default connect(mapStateToProps)(FormationDisplay);