import React from "react";

import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Booking from "./Booking";
import Review from "./Review";
import axios from "axios";

const styles = theme => ({
  appBar: {
    position: "relative"
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
      marginTop: theme.spacing.unit * 6,
      marginBottom: theme.spacing.unit * 6,
      padding: theme.spacing.unit * 3
    }
  },
  stepper: {
    padding: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 5}px`
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end"
  },
  button: {
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit
  }
});

const steps = ["Guest Information", "Review your Booking"];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Booking />;
    case 1:
      return <Review />;
    default:
      throw new Error("Unknown step");
  }
}

class Payment extends React.Component {
  state = {
    activeStep: 0,
    Orderid: "",
    adult: null,
    child: null,
    checkin: null,
    checkout: null,
    name: null,
    email: null,
    phone: null,
    room: null,
    total: null,
    currentSelectedRoomOID: null,
    currentSelectedRoom: null
  };

  componentDidMount = () => {
    this.setState({
      currentSelectedRoomOID: sessionStorage.getItem("currentSelectedRoomOID")
    });
    let currentSelectedRoom = this.getCurrentRoom(
      this.state.currentSelectedRoomOID
    );
    debugger;
  };

  componentWillMount() {
    let Orderid = this.makeid();
    this.setState({
      Orderid: Orderid
    });
  }

  // Take Over From Here ---> Fill link and get room obj and use it to fill billing
  getCurrentRoom = Id => {
    axios
      .get("http://localhost:3001/api/getCurrentRoom", {
        headers: { crossDomain: true, "Content-Type": "application/json" }
      })
      .then(res => {
        debugger;
      });
  };

  makeid() {
    var text = "";
    var possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 12; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  }

  putdata = () => {
    console.log(this.state.total);
    axios.post("http://localhost:3001/api/putData", {
      adult: sessionStorage.getItem("adult"),
      child: sessionStorage.getItem("child"),
      checkin: sessionStorage.getItem("checkin"),
      checkout: sessionStorage.getItem("checkout"),
      name: sessionStorage.getItem("name"),
      email: sessionStorage.getItem("email"),
      phone: sessionStorage.getItem("phone"),
      room: sessionStorage.getItem("room"),
      total: sessionStorage.getItem("total")
    });
  };

  //   putOrderToDB = cartItems => {
  //     //console.log(typeof JSON.stringify(cartItems));
  //     console.log(this.state.Orderid);
  //     axios.post("https://transil.herokuapp.com/api/putOrder", {
  //       Orderid: this.state.Orderid,
  //       listItem: cartItems
  //     });
  //     // console.log(typeof listItem);
  //   };

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0
    });
  };

  render() {
    const { classes } = this.props;
    const { activeStep } = this.state;
    // let cartItems = this.props.location.state.cartItems;
    // let total = this.props.location.state.total;
    return (
      <React.Fragment>
        <CssBaseline />
        <AppBar position="absolute" color="default" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              Company name
            </Typography>
          </Toolbar>
        </AppBar>
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h4" align="center">
              Checkout
            </Typography>
            <Stepper activeStep={activeStep} className={classes.stepper}>
              {steps.map(label => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <React.Fragment>
              {activeStep === steps.length ? (
                <React.Fragment>
                  {this.putdata()}
                  <Typography variant="h5" gutterBottom>
                    Thank you for your Booking.
                  </Typography>
                  <Typography variant="subtitle1">
                    Your booking number is {this.state.Orderid}
                  </Typography>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  {getStepContent(activeStep)}
                  <div className={classes.buttons}>
                    {activeStep !== 0 && (
                      <Button
                        onClick={this.handleBack}
                        className={classes.button}
                      >
                        Back
                      </Button>
                    )}
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={this.handleNext}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? "Place order" : "Next"}
                    </Button>
                  </div>
                </React.Fragment>
              )}
            </React.Fragment>
          </Paper>
        </main>
      </React.Fragment>
    );
  }
}

Payment.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Payment);
