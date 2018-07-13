import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import './formationDisplay.css';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

const mapStateToProps = state => ({

})


class FormationDisplay extends Component {
    constructor(){
        super();
        this.state = {
            formationArr: [],
            nameArr: [],
            anchorEl: null,
            open: false
        }
    }
    // get formation information on load
    componentDidMount(){
        // this.getFormationDetail();
        this.getFormationName();
    }

    //Get call for Formation Name
    getFormationName = () => {
        axios.get('/api/footy/formation')
            .then((response) => {
                this.setState({
                    nameArr: response.data
                })
                console.log(this.state.nameArr);
            })
            .catch((error) => {
                console.log('Error handling GET call for Formation Name', error);
            })
    }

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
      };
    
    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    handleName = (id) => {
        console.log('test est', id);
        axios.get(`/api/footy/details/${id}`)
            .then((response) => {
                console.log('did it work',response.data);
                this.setState({formationArr: response.data})
                this.setState({ anchorEl: null });
            })
            .catch((error) => {
                console.log('Error it did not work', error);  
            })     
    }

    handleOpen = () => {
        this.setState({ open: true });
      };
    
      handleClose = () => {
        this.setState({ open: false });
      };

    render(){
        const { anchorEl } = this.state;
        return(
            <div className="grid-container-display">
            <div className="grid-item">1
                <Typography gutterBottom>Click to get the full Modal experience!</Typography>
                <Button onClick={this.handleOpen}>Open Modal</Button>

            </div>


            <div className="grid-item">
                <Card>
                    <CardContent>
                    <Typography color="textSecondary">
                        Word of the Day
                    </Typography>



                    </CardContent>
                    <CardActions>
                    <Button size="small" onClick={this.handleOpen}>More Details</Button>
                    </CardActions>
                    <Modal
                        open={this.state.open}
                        onClose={this.handleClose}
                        >
                        <div>
                            <Typography >
                            Text in a modal
                            </Typography>
                            <Typography>
                            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                            </Typography>
                            {/* <FormationDisplay /> */}
                        </div>
                    </Modal>
                </Card>
            
            </div>




                <div>
                    <Button
                        aria-owns={anchorEl ? 'simple-menu' : null}
                        aria-haspopup="true"
                        onClick={this.handleClick}
                        color="default"
                        variant="contained"
                        >
                        Choose a Formation
                    </Button>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={this.handleClose}
                        >
                        {this.state.nameArr.map((name) => 
                            <MenuItem key={name.id} onClick={()=> this.handleName(name.id)}>{name.formation_name}</MenuItem>
                        )}
                    </Menu>
                </div>
                <div className="grid-item">
                    <Paper elevation={1} className="diagram">
                        <p className="detailHead">
                            Field Diagram
                        </p>
                        {this.state.formationArr.map((detail) => 
                            <div key={detail.id} className="fieldImage">
                                <img alt="field" src={detail.image_url} />
                            </div>
                        )}
                    </Paper>
                </div>
                <div className="grid-item">
                    <Paper elevation={1}>
                        <p>
                            Formation Details
                        </p>
                        {this.state.formationArr.map((detail) => 
                            <ul key={detail.id}>
                                    <li>Strengths: {detail.strengths}</li>
                                    <li>Weaknesses: {detail.weaknesses}</li>
                                    <li>Notes: {detail.notes}</li>
                            </ul>
                        )}
                    </Paper>
                </div>
                <div className="grid-item">6</div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(FormationDisplay);