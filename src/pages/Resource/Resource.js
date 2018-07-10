import React, { Component } from 'react';
import { connect } from 'react-redux';

import Nav from '../../components/Nav/Nav';

import { USER_ACTIONS } from '../../redux/actions/userActions';
import { triggerLogout } from '../../redux/actions/loginActions';

//Redux Store
const mapStateToProps = state => ({

})

class ResourcePage extends Component {
    componentDidMount() {

    }




    render(){
        return(
            <div>
                <Nav />
                <p>this is the Resource page</p>
            </div>
        )
    }
}

export default connect(mapStateToProps)(ResourcePage);