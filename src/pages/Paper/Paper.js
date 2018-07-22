import React, { Component } from 'react';
import { v4 } from 'uuid';
import Nav from '../../components/Nav/Nav';
import { connect } from 'react-redux';
import Draw from '../../components/Draw/Draw';

const mapReduxStateToProps = (reduxStore) => ({
    // formationDetail: reduxStore.getDetailReducer.getDetailReducer
    reduxStore
})

class Canvas extends Component {

    

      render() {
        return (
            <div>
                <Nav />
                <Draw/>
            </div>
        );
      }
}

export default connect(mapReduxStateToProps)(Canvas);