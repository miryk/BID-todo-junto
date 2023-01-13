import { Component } from "react";

const btnStyle = {
  padding: "10px", 
  borderRadius: "5px",
  backgroundColor: "ligthgray",
  margin: "10px -15px",
  border: "none",
  color: "cadetblue"
}

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
        <button style={btnStyle} onClick={this.addYear}>Bithday Button for {firstName} {lastName} </button>
      </div>
    );
  }
}



export default PersonCard;
