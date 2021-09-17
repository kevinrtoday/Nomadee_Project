import React, { Component } from "react";
// This will require to npm install axios
import axios from "axios";

export default class Create extends Component {
  // This is the constructor that stores the data.
  constructor(props) {
    super(props);

    this.onChangePersonName = this.onChangePersonName.bind(this);
    this.onChangePersonUsername = this.onChangePersonUsername.bind(this);
    this.onChangePersonCity = this.onChangePersonCity.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      person_name: "",
      person_username: "",
      person_city: "",
    };
  }

  // These methods will update the state properties.
  onChangePersonName(e) {
    this.setState({
      person_name: e.target.value,
    });
  }

  onChangePersonUsername(e) {
    this.setState({
      person_username: e.target.value,
    });
  }

  onChangePersonCity(e) {
    this.setState({
      person_city: e.target.value,
    });
  }

  // This function will handle the submission.
  onSubmit(e) {
    e.preventDefault();

    // When post request is sent to the create url, axios will add a new record(newperson) to the database.
    const newperson = {
      person_name: this.state.person_name,
      person_username: this.state.person_username,
      person_city: this.state.person_city,
    };

    axios
      .post("http://localhost:3000/record/add", newperson)
      .then((res) => console.log(res.data));

    // We will empty the state after posting the data to the database
    this.setState({
      person_name: "",
      person_username: "",
      person_city: "",
      person_email: "",
    });
  }

  // This following section will display the form that takes the input from the user.
  render() {
    return (
      <div style={{ marginTop: 20 }}>
        <h3>Sign up</h3>
        <div></div>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.person_name}
              onChange={this.onChangePersonName}
            />
          </div>
          <div className="form-group">
            <label>Username: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.person_username}
              onChange={this.onChangePersonUsername}
            />
          </div>
          <div className="form-group">
            <label>City: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.person_city}
              onChange={this.onChangePersonCity}
            />
          </div>
          <div className="form-group">
            <label>Email: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.person_email}
              onChange={this.onChangePersonEmail}
            />
          </div>
          <div className="form-group">
            <div className="form-check form-check-inline"></div>
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Create person"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
