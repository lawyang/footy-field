import React, { Component } from 'react';
import { v4 } from 'uuid';
import Nav from '../../components/Nav/Nav';
import { connect } from 'react-redux';
import Draw from '../../components/Draw/Draw';
import Button from '@material-ui/core/Button';


const mapReduxStateToProps = (reduxStore) => ({
    // formationDetail: reduxStore.getDetailReducer.getDetailReducer
    reduxStore
})

class DrawButton extends Component {

    

      render() {
        return (
            <div>
                {JSON.stringify(this.props.reduxStore)}
                <Draw/>
            </div>
        );
      }
}

export default connect(mapReduxStateToProps)(DrawButton);