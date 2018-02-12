import React, { Component } from 'react';
import './HelloWorld.css';

class HelloWorld extends Component {
  constructor(props) {
    super(props);
    this.state = { showEdit: false, editedName: this.props.data.name,
    editedEmail: this.props.data.email, editedPhonenumber: this.props.data.phonenumber };
    this.showEdit = this.showEdit.bind(this);
    this.saveEdit = this.saveEdit.bind(this);
    this.removeGreeting = this.removeGreeting.bind(this);
    this.handleUpdateName = this.handleUpdateName.bind(this);
    this.handleUpdateEmail = this.handleUpdateEmail.bind(this);
    this.handleUpdatePhonenumber = this.handleUpdatePhonenumber.bind(this);
  }
  handleUpdateName(event) {
    this.setState({ editedName: event.target.value });
  }
  handleUpdateEmail(event) {
    this.setState({ editedEmail: event.target.value });
  }
  handleUpdatePhonenumber(event) {
    this.setState({ editedPhonenumber: event.target.value });
  }
  render() {
    if(this.state.showEdit)
    {
      return (
        <tr className="HelloWorld">
          <td>
            <input
              type="text"
              onChange={this.handleUpdateName}
              value={this.state.editedName}
            />
          </td>
          <td>
            <input
              type="text"
              onChange={this.handleUpdateEmail}
              defaultValue={this.state.editedEmail}
            />
          </td>
          <td>
            <input
              type="text"
              onChange={this.handleUpdatePhonenumber}
              defaultValue={this.state.editedPhonenumber}
            />
          </td>
          <td><button className="cancelBtn" onClick={this.showEdit}>Cancel</button> <button className="saveBtn" onClick={this.saveEdit}>Save</button></td>
        </tr>
      );
    }
    if(!this.state.showEdit) {
      return (
        <tr className="HelloWorld">
          <td>{this.props.data.name}</td>
          <td>{this.props.data.email}</td>
          <td>{this.props.data.phonenumber}</td>
          <td><i className="fa fa-pencil" onClick={this.showEdit}></i> <i className="fa fa-trash" onClick={this.removeGreeting}></i></td>
        </tr>
      );
    }

}
showEdit() {
var showEdit = this.state.showEdit;
this.setState({ showEdit: !showEdit });
}
saveEdit() {
var showEdit = this.state.showEdit;
this.props.data.name = this.state.editedName;
this.props.data.email = this.state.editedEmail;
this.props.data.phonenumber = this.state.editedPhonenumber;
this.setState({ showEdit: false });
}
removeGreeting() {
  this.props.removeGreeting(this.props.data.id);
}
}


export default HelloWorld;
