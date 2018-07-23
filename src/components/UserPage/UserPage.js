import React, { Component } from 'react';
import { connect } from 'react-redux';

import Nav from '../../components/Nav/Nav';

import { USER_ACTIONS } from '../../redux/actions/userActions';
import { triggerLogout } from '../../redux/actions/loginActions';
import Typography from '@material-ui/core/Typography';

import './userPage.css';

const mapStateToProps = state => ({
  user: state.user,
  id: state.id
});

class UserPage extends Component {
  componentDidMount() {
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
  }

  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push('home');
    }
  }

  logout = () => {
    this.props.dispatch(triggerLogout());
    // this.props.history.push('home');
  }

  render() {
    let content = null;

    if (this.props.user.userName) {
      content = (
        <div className="grid-container-display">
          {/* <h1 id="welcome">
            { this.props.user.userName }!
          </h1> */}
          <div><button onClick={this.logout}>Log Out</button></div>
          <div></div>
          <div></div>
          <div></div>
          <div>
            <div class="mb-wrap mb-style-2">  
              <blockquote>  
                <p>"There is always someone out there getting better by training harder than you - Pele" </p>
              </blockquote>
            </div>
            {/* <div class="mb-attribution"> 
              <p class="mb-author">  
                  - Pele
              </p>
            </div> */}
          </div>
          <div></div>
        </div>
      );
    }

    return (
      <div className="userPage">
        <Nav />
        { content }
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);

