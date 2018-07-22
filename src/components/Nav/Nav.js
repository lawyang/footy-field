import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from '@material-ui/core/Button';

// import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import { USER_ACTIONS } from '../../redux/actions/userActions';
// import { triggerLogout } from '../../redux/actions/loginActions';
// import userPage from '../UserPage/UserPage';


const Nav = () => (
  <div className="navbar">
    <div>
      <ul>
        <li><Link to="/user">User Home</Link></li>
        <li><Link to="/addFormation">New Formation</Link></li>
        <li><Link to="/formation">Formations</Link></li>
        <li><Link to="/resource">Resources</Link></li>
        <li><Link to="/draw">draw</Link></li>
      </ul>
    </div> 
</div>
);

export default Nav;




// const styles = {
//   root: {
//     flexGrow: 1,
//   },
//   flex: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginLeft: -12,
//     marginRight: 20,
//   },
// };

// function ButtonAppBar(props) {


//   const { classes } = props;
//   return (
//     <div className={classes.root}>
//       <AppBar position="static" color="primary" position="sticky">
//         <Toolbar  >
//           <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="title" color="inherit" className={classes.flex}>
//             New Formation
//           </Typography>
//           <Typography variant="title" color="inherit" className={classes.flex}>
//             Formation
//           </Typography>
//           {/* <Button color="inherit">Login</Button> */}
//           {/* <button
//             onClick={this.logout}
//           >
//             Log Out
//           </button> */}
//         </Toolbar>

//       </AppBar>
//     </div>
//   );
// }

// ButtonAppBar.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(ButtonAppBar);