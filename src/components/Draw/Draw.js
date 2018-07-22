import React, { Component } from 'react';
import { v4 } from 'uuid';
import Nav from '../../components/Nav/Nav';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import './draw.css';
import Background from './empty-form.png';
import Select from '@material-ui/core/Select';


const mapReduxStateToProps = (reduxStore) => ({
    // formationDetail: reduxStore.getDetailReducer.getDetailReducer
    reduxStore
})

class Draw extends Component {
      constructor(props) {
        super(props);
        this.onMouseDown = this.onMouseDown.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
        this.endPaintEvent = this.endPaintEvent.bind(this);
      }
      state = {
        bgImage: '',
      }

      isPainting = false;
      // Different stroke styles to be used for user and guest
      userStrokeStyle = '#000000';
    //   guestStrokeStyle = '#F0C987';
      line = [];
      // v4 creates a unique id for each user. We used this since there's no auth to tell users apart
      userId = v4();
      prevPos = { offsetX: 0, offsetY: 0 };

      onMouseDown({ nativeEvent }) {
        const { offsetX, offsetY } = nativeEvent;
        this.isPainting = true;
        this.prevPos = { offsetX, offsetY };
      }

      onMouseMove({ nativeEvent }) {
        if (this.isPainting) {
          const { offsetX, offsetY } = nativeEvent;
          const offSetData = { offsetX, offsetY };
          // Set the start and stop position of the paint event.
          const positionData = {
            start: { ...this.prevPos },
            stop: { ...offSetData },
          };
          // Add the position to the line array
          this.line = this.line.concat(positionData);
          this.paint(this.prevPos, offSetData, this.userStrokeStyle);
        }
      }
      endPaintEvent() {
        if (this.isPainting) {
          this.isPainting = false;
        }
      }
      paint(prevPos, currPos, strokeStyle) {
        const { offsetX, offsetY } = currPos;
        const { offsetX: x, offsetY: y } = prevPos;

        this.ctx.beginPath();
        this.ctx.strokeStyle = strokeStyle;
        // Move the the prevPosition of the mouse
        this.ctx.moveTo(x, y);
        // Draw a line to the current position of the mouse
        this.ctx.lineTo(offsetX, offsetY);
        // Visualize the line using the strokeStyle
        this.ctx.stroke();
        this.prevPos = { offsetX, offsetY };
      }

    //   async sendPaintData() {
    //     const body = {
    //       line: this.line,
    //       userId: this.userId,
    //     };
    //     // We use the native fetch API to make requests to the server
    //     const req = await fetch('http://localhost:4000/paint', {
    //       method: 'post',
    //       body: JSON.stringify(body),
    //       headers: {
    //         'content-type': 'application/json',
    //       },
    //     });
    //     const res = await req.json();
    //     this.line = [];
    //   }

      componentDidMount() {
        // Here we set up the properties of the canvas element. 
        this.canvas.width = 760;
        this.canvas.height = 1160;
        this.ctx = this.canvas.getContext('2d');
        this.ctx.lineJoin = 'round';
        this.ctx.lineCap = 'round';
        this.ctx.lineWidth = 3;
        console.log(this.props.reduxStore);
        this.setState({
          bgImage: this.props.reduxStore
        })
      }

      handleFetchImage = () => {
        window.location.reload();
      }

      render() {
        return (
            <div>
                <Nav />
                <canvas
                // We use the ref attribute to get direct access to the canvas element. 
                  ref={(ref) => (this.canvas = ref)}
                  // style={{ background: <img alt="field" src="/images/4-4-2.png" />  }}
                  // style={{ background: "yellow"  }}
                  style={{ backgroundImage: `url(${Background})` }}
                  onMouseDown={this.onMouseDown}
                  onMouseLeave={this.endPaintEvent}
                  onMouseUp={this.endPaintEvent}
                  onMouseMove={this.onMouseMove}
                  className="canvasDraw"
                />
                <pre>{JSON.stringify()}</pre>
                <Button variant="contained" color="primary" onClick={this.handleFetchImage} >Clear Canvas</Button>
            </div>
        );
      }
}

export default connect(mapReduxStateToProps)(Draw);