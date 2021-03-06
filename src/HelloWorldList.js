import React, { Component } from 'react';
import './HelloWorldList.css';
import HelloWorld from './HelloWorld';
import AddGreeter from './AddGreeter';

class HelloWorldList extends Component {
  constructor(props) {
  super(props);
  this.state = { greetings: [{id: 13,name: "Jimbo", email: "jim@cs.es", phonenumber: "123123"}, {id: 22, name: "Sally", email: "sally@cd.ed", phonenumber: "123123"}
, {id: 3, name: "Maria Anders", email: "maria@anders.ed", phonenumber: "050123123"}, {id: 5, name: "Francisco Chang", email: "chang@changder.fi", phonenumber: "04012331"},
{id: 34, name: "Helen Bennett", email: "helen@bennet.fi", phonenumber: "044070070"}, {id: 41, name: "Giovanni Rovelli", email: "rovelli@gio.fi", phonenumber: "050735152"},
{id: 81, name: "Yoshi Tannamuri", email: "yosha@yoshi.fi", phonenumber: "040123213"}, {id: 89, name: "Bill Tanner", email: "bill@tanner.fi", phonenumber: "050555666"}] };
  this.addGreeting = this.addGreeting.bind(this);
  this.removeGreeting = this.removeGreeting.bind(this);
  }
  onSort(event, sortKey){
    const data = this.state.greetings;
    data.sort((a,b) => a[sortKey].localeCompare(b[sortKey]))
    this.setState({data})
  }
  render() {
    var newdata = this.state.greetings;
  return (
    <div>
    <AddGreeter addGreeting={this.addGreeting}/>
      <table className="tablecustom">
        <tr>
          <th onClick={e => this.onSort(e, 'name')}>Name</th>
          <th onClick={e => this.onSort(e, 'email')}>E-mail address</th>
          <th onClick={e => this.onSort(e, 'phonenumber')}>Phone number</th>
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
