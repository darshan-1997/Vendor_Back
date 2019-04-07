import React,{Component} from 'react';
import DatePicker from "react-datepicker";
import  '../App.css'
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import AddIcon from "@material-ui/icons/Add";
import PropTypes from "prop-types";
import RemoveIcon from "@material-ui/icons/Remove";

import { withStyles } from "@material-ui/core/styles";
import axios from 'axios';

const styles = theme => ({
  
 
  
});

class Basic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      adult: 0,
      child:0,
      checkin:null,
      checkout:null
    };
    this.addAdult = this.addAdult.bind(this);
    this.addChild = this.addChild.bind(this);
  }
  
  addAdult() {
    this.setState({
      adult: this.state.adult + 1
    });
    
  }
  
  subtractAdult = (e, id) => {
    this.setState({
      adult: this.state.adult - 1
    });
  
  };
  addChild() {
    this.setState({
      child: this.state.child + 1

    });
   
  }

  componentWillUnmount(){
    
    sessionStorage.setItem("adult",this.state.adult);
    sessionStorage.setItem("child",this.state.child);
    var a = document.getElementById("date1").value;
    var b = document.getElementById("date2").value;
    sessionStorage.setItem("checkin",a);
    sessionStorage.setItem("checkout",b);
  };

  componentDidMount(){
    // this.getRoomDet();
   
  }
  componentWillMount(){
    console.log("second");
  } 
  getRoomDet = () => {
    axios
      .get("http://localhost:3001/api/RoomDet", {
        headers: { crossDomain: true, "Content-Type": "application/json" }
      })
      .then(res => {
        console.log(res.data);
        this.setState({
          Details: res.data
        });
  
        
       
        console.log(this.state.Details);
      
      });
     
  };



  
  subtractChild = (e, id) => {
    this.setState({
      child: this.state.child - 1
    });
  
  };
 

 
    render() {
      const {classes}=this.props;
      return (

        <div class="page" >

<div class>

    <h3>Reservations</h3>
    <label><em>Check In</em></label><br /><br/>
    <input  type="date" id="date1" selected={this.state.startDate} onChange={this.handleChange}/><br /><br/>
    <label><em>Check Out</em></label><br /><br/>
    <input  type="date" id="date2" /><br/><br/><br/>
  
   
    Adults:&nbsp;&nbsp;
    <IconButton
            color="primary"
            className={classes.button}
            onClick={this.addAdult}
            
          >
            <AddIcon />
            </IconButton>
           <b>{this.state.adult}</b>&nbsp;&nbsp;
        
            <IconButton
            color="secondary"
            className={classes.button}
            onClick={e => this.subtractAdult(e, this.props.id)}
            disabled={this.state.adult < 1}
          >
            <RemoveIcon />
          </IconButton>
   <br/>
   Childrens:
   <IconButton
            color="primary"
            className={classes.button}
            onClick={this.addChild}
            
          >
            <AddIcon />
            </IconButton>
            &nbsp;<b>{this.state.child}</b>&nbsp;
            <IconButton
            color="secondary"
            className={classes.button}
            onClick={e => this.subtractChild(e, this.props.id)}
            disabled={this.state.child < 1}
          >
            <RemoveIcon />
          </IconButton>
       
           

</div> 




</div>

      );
}
}

Basic.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Basic);
