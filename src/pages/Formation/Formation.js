import React, { Component } from 'react';
import { connect } from 'react-redux';

import Nav from '../../components/Nav/Nav';

import { USER_ACTIONS } from '../../redux/actions/userActions';
import FormationDisplay from '../../components/FormationDisplay/FormationDisplay';

//This is for the logout button
// import { triggerLogout } from '../../redux/actions/loginActions';

//Redux Store
const mapStateToProps = state => ({
    user: state.user,
})

class FormationPage extends Component {
    componentDidMount() {
        this.props.dispatch({type: USER_ACTIONS.FETCH_USER});
    }
    componentDidUpdate() {
        if (!this.props.user.isLoading && this.props.user.userName === null) {
        this.props.history.push('home');
        }
    }
    render(){
        let content = null;
        if (this.props.user.userName){
            content = (
                <div>
                    <FormationDisplay />
                </div>
            );
        };
        return(
            <div>
                <Nav />
                { content }
            </div>
        )
    }
}

export default connect(mapStateToProps)(FormationPage);