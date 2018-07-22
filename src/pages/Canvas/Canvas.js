import React, { Component } from 'react';
import { v4 } from 'uuid';
import Nav from '../../components/Nav/Nav';
import { connect } from 'react-redux';
import Canvas from '../../components/Canvas/Canvas';

const mapReduxStateToProps = (reduxStore) => ({
    // formationDetail: reduxStore.getDetailReducer.getDetailReducer
    reduxStore
})

class NewCanvas extends Component {

    

      render() {
        return (
            <div>
                {JSON.stringify(this.props.reduxStore)}
                <Canvas/>
            </div>
        );
      }
}

export default connect(mapReduxStateToProps)(NewCanvas);