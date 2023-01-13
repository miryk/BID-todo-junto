import { Component } from "react";


class PersonCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: props.info.age
    }
  }
  addYear = () => {
    this.setState({
      age: this.state.age+1
    });
  }

  
  render() { 
    const { firstName, lastName, hairColor} = this.props.info;
    return (
      <div className="card">
        <h1>{lastName}, {firstName}</h1>
        <p>Age: {this.state.age}</p>
        <p>Hair Color: {hairColor}</p>
        <button onClick={this.addYear}>{firstName} {lastName} Bithday Button</button>
      </div>
    );
  }
}



export default PersonCard;
