import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import './formationDisplay.css';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


const mapStateToProps = state => ({

})


class FormationDisplay extends Component {
    constructor(){
        super();
        this.state = {
            formationArr: [],
            nameArr: [],
            anchorEl: null,
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

    render(){
        const { anchorEl } = this.state;
        return(
            <div className="grid-container">
                <div className="grid-item">1</div>   
                <div className="grid-item">2</div>   
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
                <div className="grid-item-4">
                    <Paper elevation={1}>
                        <h1 className="detailHead">
                            Field Diagram
                        </h1>
                        {this.state.formationArr.map((detail) => 
                            <div key={detail.id} className="fieldImage">
                                <img alt="field" src={detail.image_url} />
                            </div>
                        )}
                    </Paper>
                </div>
                <div className="grid-item">5</div>
                <div className="grid-item-6" id="formationDetail">
                    <Paper elevation={1}>
                        <h1 className="detailHead">
                            Formation Details
                        </h1>
                                {this.state.formationArr.map((detail) => 
                                    <ul key={detail.id}>
                                            <li>Strengths: {detail.strengths}</li>
                                            <li>Weaknesses: {detail.weaknesses}</li>
                                            <li>Notes: {detail.notes}</li>
                                    </ul>
                                )}
                    </Paper>
                </div>
                <div className="grid-item">7</div>
                <div className="grid-item">8</div>   
                <div className="grid-item">9</div>   
                <div className="grid-item-footer">footer</div>   
            </div>
        )
    }
}

export default connect(mapStateToProps)(FormationDisplay);