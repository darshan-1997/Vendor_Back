import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import axios from "axios";

const addresses = [
  
  "Bvb Hostel",
  "Vidyanagar",
  "Room No 322",
  "Hubballi",
  "Karnataka"
];
const payments = [
  { name: "Card type", detail: "Visa" },
  { name: "Card holder", detail: "Mr Darshan Nayak" },
  { name: "Card number", detail: "xxxx-xxxx-xxxx-1234" },
  { name: "Expiry date", detail: "04/2024" }
];

const styles = theme => ({
  listItem: {
    padding: `${theme.spacing.unit}px 0`
  },
  total: {
    fontWeight: "700"
  },
  title: {
    marginTop: theme.spacing.unit * 2
  }
});

class Review extends React.Component {
  state={
    adult:null,
    child:null,
    checkin:"",
    checkout:"",
    name:null,
    email:null,
    phone:null,
    rate1:null,
    room:null
  
   

  }
  componentDidMount(){
    this.setState({
      adult:sessionStorage.getItem("adult"),
      child: sessionStorage.getItem("child"),
      checkin:sessionStorage.getItem("checkin"),
      checkout:sessionStorage.getItem("checkout"),
      name:sessionStorage.getItem("name"),
      email:sessionStorage.getItem("email"),
      phone:sessionStorage.getItem("phone"),
      rate1:sessionStorage.getItem("rate1"),
      room:sessionStorage.getItem("room"),
      
     
    });

  }

  render() {
    // const { classes } = this.props;
    // const products = this.props.cartItems;
    // const total = this.props.total;
    // console.log(total);
    // var timeDiff = Math.abs(this.state.checkout.getTime() - this.state.checkin.getTime());
    // var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    var total=0;
    var x=new Date(this.state.checkin);
   var  y=new Date(this.state.checkout);
   var gen=2000;
   var executive=5000;
   var delux=3000;
   var luxury=7000;
  console.log(this.state.rate1)
    var timeDiff = 0;
    var diffDays= 0;
     if(this.state.checkin){
           timeDiff = Math.abs(y.getTime() - x.getTime());
              diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
         console.log(typeof(diffDays));
    }

  
    if(this.state.rate1){
      
       total = diffDays * this.state.rate1
      sessionStorage.setItem("total",total);
   console.log(total);
}

    return (
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Booking summary
          {this.props.redirect}
        </Typography>
        <List disablePadding>
          
            <ListItem >
              
              CheckIn: {this.state.checkin}<br/>
              CheckOut: {this.state.checkout}<br/>
              Adults: {this.state.adult}<br/>
              Childrens: {this.state.child}<br/>
              No.Of Days:{diffDays} <br/>
              Room Type:{this.state.room}<br/>
              Rate :{total}
            </ListItem>
         
          <ListItem >
            <ListItemText/>
            <Typography >
            
            </Typography>
          </ListItem>
        </List>
        <Grid container spacing={16}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom>
              Booked by
            </Typography>
            <Typography gutterBottom>{this.state.name}</Typography>
            <Typography gutterBottom>{this.state.email}</Typography>
            <Typography gutterBottom>{this.state.phone}</Typography>
            

          </Grid>
          <Grid item container direction="column" xs={12} sm={6}>
            <Typography variant="h6" gutterBottom >
              Payment details
            </Typography>
            <Grid container>
              {payments.map(payment => (
                <React.Fragment key={payment.name}>
               
                  <Grid item xs={6}>
                    <Typography gutterBottom>{payment.name}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography gutterBottom>{payment.detail}</Typography>
                  </Grid>
                </React.Fragment>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}
// constructor(props) {
//   super(props);
// }
// /*makeid() {
//   var text = "";
//   var possible =
//     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

//   for (var i = 0; i < 24; i++)
//     text += possible.charAt(Math.floor(Math.random() * possible.length));

//   // return text;
//   console.log(text);
// }*/

// render() {
//   //console.log(this.props.location.state.cartItems);
//   return <div>Heyy,</div>;
// }
Review.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Review);
