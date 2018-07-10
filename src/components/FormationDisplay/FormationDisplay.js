import React from 'react';
import { connect } from 'react-redux';

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

    }

    //GET call to the DB
    getFormation = () => {
        axios.get()
            .then((response) => {
                console.log('Success GET call for Formation', response.data);
                this.setState({
                    formationArr: response.data
                })
            })
            .catch((error) => {
                console.log('Error Handling GET call for Formation', error);
            })
    }

    render(){
        return(
            <div>

            </div>
        )
    }
}

export default connect(mapStateToProps)(FormationDisplay);