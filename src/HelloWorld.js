import React, { Component } from 'react';
import './HelloWorld.css';

class HelloWorld extends Component {
  constructor(props) {
    super(props);
    this.state = { showEdit: false };
    this.showEdit = this.showEdit.bind(this);
    this.saveEdit = this.saveEdit.bind(this);
    this.removeGreeting = this.removeGreeting.bind(this);
  }
  render() {
    if(this.state.showEdit)
    {
      return (
        <tr className="HelloWorld">
          <td>{this.props.data.id}</td>
          <td>
            <input
              type="text"
              onChange={this.handleUpdateName}
              defaultValue={this.props.data.name}
            />
          </td>
          <td>
            <input
              type="text"
              onChange={this.handleUpdateName}
              defaultValue={this.props.data.email}
            />
          </td>
          <td>
            <input
              type="text"
              onChange={this.handleUpdateName}
              defaultValue={this.props.data.phonenumber}
            />
          </td>
          <td><button onClick={this.showEdit}>Cancel</button> <button onClick={this.removeGreeting}>Save</button></td>
        </tr>
      );
    }
    if(!this.state.showEdit) {
      return (
        <tr className="HelloWorld">
          <td>{this.props.data.id}</td>
          <td>{this.props.data.name}</td>
          <td>{this.props.data.email}</td>
          <td>{this.props.data.phonenumber}</td>
          <td><button onClick={this.showEdit}>Edit</button> <button onClick={this.removeGreeting}>Remove Me!</button></td>
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
this.setState({ showEdit: !showEdit });
}
removeGreeting() {
  this.props.removeGreeting(this.props.data.id);
}
}


export default HelloWorld;
