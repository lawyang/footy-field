import React, { Component } from 'react';
import { connect } from 'react-redux';

import Nav from '../../components/Nav/Nav';

import { USER_ACTIONS } from '../../redux/actions/userActions';
import { triggerLogout } from '../../redux/actions/loginActions';

//Redux Store
const mapStateToProps = state => ({

})

class FormationPage extends Component {
    componentDidMount() {

    }




    render(){
        return(
            <p>this is the formation page</p>
        )
    }
}

export default connect(mapStateToProps)(FormationPage);