import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';


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
        axios.get('/api/footy')
            .then((response) => {
                console.log('Success GET call for Formation', response.data);
                this.setState({
                    formationArr: response.data
                })
                console.log(this.state.formationArr);
                
            })
            .catch((error) => {
                console.log('Error Handling GET call for Formation', error);
            })
    }



    render(){
        return(
            <div>
                <p>{JSON.stringify(this.state.formationArr)}</p>
            </div>
        )
    }
}

export default connect(mapStateToProps)(FormationDisplay);