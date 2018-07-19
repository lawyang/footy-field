import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import './formationDisplay.css';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';import { PaperScope } from 'paper'
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { CardHeader } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import EditModal from '../EditModal/EditModal';
import Modal from '@material-ui/core/Modal';


const mapStateToProps = state => ({

})

class FormationDisplay extends Component {
    constructor(){
        super();
        window['paper'] = new PaperScope();
        this.state = {
            formationArr: [],
            nameArr: [],
            anchorEl: null,
            open: false,
            expanded: false,
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

    handleName = (id) => {
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

    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };
    
    handleDelete = (id) => {
        console.log('ID to Delete',id);
        this.props.dispatch( {type: 'DELETE_ELEMENT', payload: id})
    }

    handleOpenEdit = () => {
        this.setState({ open: true });
    };
    
    handleCloseEdit = () => {
        this.setState({ open: false });
    };

    render(){
        const { anchorEl } = this.state;
        return(
            <div className="grid-container-display">
                <div>
                    <Button
                        aria-owns={anchorEl ? 'simple-menu' : null}
                        aria-haspopup="true"
                        onClick={this.handleClick}
                        color="primary"
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
                        {this.state.formationArr.map((detail) => 
                        <Card  key={detail.id}>
                        <CardHeader title={detail.formation_name}/>                        
                        <CardContent>
                                <ul>
                            <Typography>
                                        <li>Strengths: {detail.strengths}</li>
                                        <li>Weaknesses: {detail.weaknesses}</li>
                                        <li>Notes: {detail.notes}</li>
                            </Typography>
                                </ul>
                        </CardContent>
                        <CardActions  disableActionSpacing>
                            <EditModal/>
                            <IconButton aria-label="Delete" onClick={() => this.handleDelete(detail.id)}>
                                <DeleteIcon />
                            </IconButton>
                            <IconButton
                                onClick={this.handleExpandClick}
                                aria-expanded={this.state.expanded}
                                aria-label="Show more"
                            >
                            <ExpandMoreIcon />
                            </IconButton>
                        </CardActions>
                        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                            <CardContent>
                            <div>
                                {this.state.formationArr.map((detail) => 
                                    <div key={detail.id} className="fieldImage">
                                        <img alt="field" src={detail.path} />
                                    </div>
                                )}
                            </div>
                        </CardContent>
                        </Collapse>
                    </Card>
                        )}
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(FormationDisplay);