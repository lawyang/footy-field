import React, { Component } from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';

import Nav from '../../components/Nav/Nav';
import { USER_ACTIONS } from '../../redux/actions/userActions';

//This is for the logout button
// import { triggerLogout } from '../../redux/actions/loginActions';

//Redux Store
const mapStateToProps = state => ({
    user: state.user,
})

class ResourcePage extends Component {
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
                    <iframe src="https://giphy.com/embed/l3q2wJsC23ikJg9xe" width="480" height="358" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/thanks-thank-you-kazoo-kid-l3q2wJsC23ikJg9xe"></a></p>
                   <Typography>
                    <ul>
                        <li>
                            <h1>
                                Javascript
                            </h1>
                        </li>
                        <li>
                            <h1>
                                PostgreSQL
                            </h1>
                        </li>
                        <li>
                            <h1>
                                Node.js
                            </h1>
                        </li>
                        <li>
                            <h1>
                                Express
                            </h1>
                        </li>
                        <li>
                            <h1>
                                Reactjs
                            </h1>
                        </li>
                        <li>
                            <h1>
                                Redux.js
                            </h1>
                        </li>
                        <li>
                            <h1>
                                Redux-Saga
                            </h1>
                        </li>
                        <li>
                            <h1>
                                Material UI
                            </h1>
                        </li>
                        <li>
                            <h1>
                                HTML5
                            </h1>
                        </li>
                        <li>
                            <h1>
                                CSS3
                            </h1>
                        </li>
                    </ul>
                    </Typography>
                </div>
            );
        }

        return(
            <div>
                <Nav />
                { content }
            </div>
        )
    }
}

export default connect(mapStateToProps)(ResourcePage);