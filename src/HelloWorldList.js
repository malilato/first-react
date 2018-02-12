import React, { Component } from 'react';
import './HelloWorldList.css';
import HelloWorld from './HelloWorld';
import AddGreeter from './AddGreeter';

class HelloWorldList extends Component {
  constructor(props) {
  super(props);
  this.state = { greetings: [{id: 13,name: "Jimbo", email: "jim@cs.es", phonenumber: "123123"}, {id: 22, name: "Sally", email: "sally@cd.ed", phonenumber: "123123"}] };
  this.addGreeting = this.addGreeting.bind(this);
  this.removeGreeting = this.removeGreeting.bind(this);
  }
  render() {
  return (
    <div>
    <AddGreeter addGreeting={this.addGreeting}/>
      <table>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>E-mail address</th>
          <th>Phone number</th>
          <th></th>
        </tr>
        <tbody className="HelloWorldList">
          {this.renderGreetings()}
        </tbody>
      </table>
    </div>
    // <div className="HelloWorldList">
    //   <AddGreeter addGreeting={this.addGreeting}/>
    //   {this.renderGreetings()}
    // </div>
  );
}
renderGreetings() {
return this.state.greetings.map(name => (
  <HelloWorld
    key={name.id}
    data={name}
    removeGreeting={this.removeGreeting}
  />
));
}
addGreeting(newName, newEmail, newPhonenumber) {
  var highestId = Math.max.apply(Math,this.state.greetings.map(function(o){return o.id;}))
  var newGreeting = {id: highestId+1, name: newName, email: newEmail, phonenumber: newPhonenumber};
  this.setState({ greetings: [...this.state.greetings, newGreeting] });
}
removeGreeting(removeId) {
  const filteredGreetings = this.state.greetings.filter(greeting => {
    return greeting.id !== removeId;
  });
  console.log(removeId);
  this.setState({ greetings: filteredGreetings });
}
}

export default HelloWorldList;
