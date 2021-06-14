import React from "react";

class AddContact extends React.Component {
  state = {
    userId: "",
    name: "",
    email: "",
    contactNumber: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.uderId === "" || this.state.name === "" || this.state.email === "" || this.state.contactNumber === "") {
      alert("All the fields are mandatory!");
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({userId: "", name: "", email: "" , contactNumber: "" });
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="ui main">
        <h2>Add Contact</h2>
        <form className="ui form" onSubmit={this.add}>
        <div className="field">
            <label>User ID</label>
            <input
              type="number"
              name="userId"
              placeholder="UserId"
              value={this.state.userId}
              onChange={(e) => this.setState({ userId: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Contact Number</label>
            <input
              type="number"
              name="contactNumber"
              placeholder="ContactNumber"
              value={this.state.contactNumber}
              onChange={(e) => this.setState({ contactNumber: e.target.value })}
            />
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}

export default AddContact;
