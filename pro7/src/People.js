import React, { Component } from "react";
// import { Route, Link } from "react-router-dom";

class People extends Component {
  constructor() {
    super();
    this.state = {
      people: [],
      personToEdit: {},
        showPeople: ""
    };
  }
  componentDidMount() {
    this.pullPeople();
  }
  pullPeople = (people) => {
    const peopleUrl = "https://polar-lake-62924.herokuapp.com/peoples/";
    fetch(peopleUrl)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          people: data,
        });
        console.log(this.state.people);
      });
  };
  handleMore = (_id) => {
    this.setState({
      showPeople: _id,
    });
  };
  displayAllPeople = (people) => {
    const peopleCards = people.map((person) => (
     <div>
        <a className="person-card" href="#handleMore"
        onClick={() => this.handleMore(person._id)}>{" "}{person.name}</a>
      {this.state.showPeople==person._id?
      <div>
          <button className="button" onClick={() => {
              this.getPersonToDelete(this.state.personToEdit.id);
            }}>Delete</button>
            <button className="button" onClick={() => {
              this.getPersonToEdit(person);
            }}>Edit</button>
           <h5>Birth Year: {person.birth_year}</h5>
           <h5>Gender: {person.gender}</h5>    
           <h5>Height: {person.height}cm</h5>
           <h5>Mass: {person.mass}kg</h5>
           <h5>Hair Color: {person.hair_color}</h5>
           <h5>Eye Color: {person.eye_color}</h5>
           <h5>Skin Color: {person.skin_color}</h5>
      </div>:
       null}
      </div>
    ));
    return peopleCards; 
  };
  getPersonToEdit = (thePerson) => {
    console.log("edit",)
    this.setState({ personToEdit: thePerson });
  };
  getPersonToDelete = (id) => {
    const allPeople = [...this.state.people];
    const peopleAfterDelete = allPeople.filter((person) => person.id !== id);
    console.log(peopleAfterDelete)
    
    //add the db delete
    this.setState({ people: peopleAfterDelete, personToEdit: {} });
    console.log("deleting")
  };

  render() {
    //   console.log(this.state.personToEdit)
    // const people = this.state.people.map((person) => {
    const peopleCards = this.displayAllPeople(this.state.people);
    return (
      <div>
        <h1>StarWars People</h1>
        {peopleCards}
        {/* <h2>Edit</h2>
        <div id="personToEdit">
          <h1>{this.state.personToEdit.name}</h1>
          <button className="button" onClick={() => {
              this.getPersonToDelete(this.state.personToEdit._id);
            }}>Delete</button> */}
        {/* </div> */}
       
      </div>
    );
    {
      /* return <div>{people}</div>; */
    }
  }
}

export default People;
