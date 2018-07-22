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
      userStrokeStyle = '#000000';
      line = [];
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
            <div className="grid-container-display">
            <div>
              <ul>
                <li><Button variant="contained" color="primary" onClick={this.handleFetchImage} >Clear Canvas</Button></li>
                {/* <li><Button onClick={this.handleBlue}>blue</Button></li>
                <li><Button>yellow</Button></li>
                <li><Button>red</Button></li> */}
              </ul>
            
            
            </div>
            <div>
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
                </div>
                <div>

                </div>
            </div>
        );
      }
}

export default connect(mapReduxStateToProps)(Draw);