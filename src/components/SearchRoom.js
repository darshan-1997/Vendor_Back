import React, { Component } from "react";
import DatePicker from "react-datepicker";
import { Redirect } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import PropTypes, { object } from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import axios from "axios";
import _ from "lodash";

const styles = theme => ({
  appBar: {
    position: "relative"
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing.unit * 1,
    marginRight: theme.spacing.unit * 1,
    [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
      width: 500,
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

class SearchRoom extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      paymentFlag: false,
      rate1: null,
      Rooms: [],
      sections: String,
      room: [],
      arr: [],
      currentSelectedCheckIn: sessionStorage.getItem("checkin"),
      currentSelectedCheckOut: sessionStorage.getItem("checkout"),
      self: null
    };
  }
  arr = this.props.Details;
  componentDidMount = () => {
    this.getRoomDet();
    this.state.currentSelectedCheckIn = sessionStorage.getItem("checkin");
    this.state.currentSelectedCheckOut = sessionStorage.getItem("checkout");
  };
  componentWillMount() {}

  getRoomDet = () => {
    axios
      .get("http://localhost:3001/api/getRoom", {
        headers: { crossDomain: true, "Content-Type": "application/json" }
      })
      .then(res => {
        debugger;
        this.setState({
          Rooms: res.data.data
        });
      });
  };
  updateAvailButtonFlag = currentRoom => {
    currentRoom.AvailButtonFlag = true;
    for (let i = 0; i < this.state.Rooms.length; i++) {
      if (currentRoom.roomId === this.state.Rooms[i].roomId) {
        this.state.Rooms[i].AvailButtonFlag = true;
      }
    }
    this.setState({
      Rooms: this.state.Rooms
    });
  };

  checkAvailabilityGeneric = (selfSearchRoomContext, currentRoom) => {
    var availFlag = true;
    _.forEach(currentRoom.bookedDates, function(value, key) {
      console.log(value.Date);
      if (value.Date === selfSearchRoomContext.state.currentSelectedCheckIn)
        availFlag = false;
    });
    return availFlag;
  };

  checkAvailability = (selfSearchRoomContext, currentRoom) => {
    debugger;
    var availFlag = selfSearchRoomContext.checkAvailabilityGeneric(
      selfSearchRoomContext,
      currentRoom
    );
    if (!availFlag)
      alert(
        "Room Id" + currentRoom.roomId + "\nNot Available ! Already Booked"
      );
    else {
      alert("Room Id" + currentRoom.roomId + "\nAvailable ! U can Book");
      this.updateAvailButtonFlag(currentRoom);
    }
  };

  bookCurrentRoom = (selfSearchRoomContext, currentRoom) => {
    debugger;
    var availFlag = selfSearchRoomContext.checkAvailabilityGeneric(
      selfSearchRoomContext,
      currentRoom
    );
    if (availFlag) {
      sessionStorage.setItem("currentSelectedRoomOID", currentRoom._Id);
    }
    this.setState({
      paymentFlag: true
    });
  };
  render() {
    console.log(this.arrroom);

    const { classes } = this.props;

    if (this.state.paymentFlag) {
      return (
        <div>
          <Redirect to="/payment" />
        </div>
      );
    } else {
      return (
        <div>
          <main className={classes.layout}>
            <Paper className={classes.paper}>
              <h1>
                <center>Check Our Rooms ! here</center>
              </h1>
              <h5> Check-in Date : {this.state.currentSelectedCheckIn} </h5>
              <h5> Check-Out Date : {this.state.currentSelectedCheckOut} </h5>
              {this.state.Rooms.map(function(room, index) {
                return (
                  <div class="well">
                    <h3> Room Type : {room.roomType}</h3>
                    <h4> {room.roomPrice} /- Per Day</h4>
                    <button
                      class="btn btn-warning"
                      onClick={this.checkAvailability.bind(null, this, room)}
                    >
                      Check Availability
                    </button>
                    {room.AvailButtonFlag ? (
                      <button
                        class="btn btn-success"
                        onClick={this.bookCurrentRoom.bind(null, this, room)}
                      >
                        Book
                      </button>
                    ) : (
                      <button
                        class="btn btn-primary"
                        title="Check For Availability"
                        disabled
                      >
                        Book
                      </button>
                    )}
                  </div>
                );
              }, this)}
            </Paper>
          </main>
        </div>
      );
    }
  }
}

SearchRoom.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SearchRoom);
