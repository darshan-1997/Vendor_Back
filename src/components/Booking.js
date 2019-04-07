import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

class Booking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name:null,
      email:null,
      phone:null,
      
    };
  }
  componentWillUnmount(){
    sessionStorage.setItem("name",this.state.name);
    sessionStorage.setItem("email",this.state.email);
    sessionStorage.setItem("phone",this.state.phone);
      
  };


  
  render() {
    return (
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
         Guest Information
        </Typography>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="name"
              name="name"
              value={this.state.firstName}
              label=" name"
              fullWidth
              autoComplete="name"
              onChange={e => this.setState({ name: e.target.value })}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="email"
              name="email"
             label="email"
              fullWidth
              autoComplete="email"
              onChange={e => this.setState({ email: e.target.value })}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="phoneNumber"
              name="phoneNumber"
              label="Phone Number"
              fullWidth
              autoComplete="phone number"
              onChange={e => this.setState({ phone: e.target.value })}
            />
          </Grid>
          
          {/* <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox color="secondary" name="saveAddress" value="yes" />
              }
              label="Use this address for payment details"
            />
          </Grid> */}
        </Grid>
      </React.Fragment>
    );
  }
}
export default Booking;
