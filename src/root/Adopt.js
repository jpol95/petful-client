import React from "react";
import FetchService from "../FetchService";
import person from "../resources/person-icon.png";
import greenPerson from "../resources/greenperson (2).png";

export default class Adopt extends React.Component {
  state = {
    people: [],
    cat: {},
    dog: {},
    animationDog: "",
    animationCat: "",
    animationPerson: "",
    peopleList: [],
    fadePerson: "", 
    name: {value: "", touched: false, disabled: false}, 
  };


  //FIGURE OUT HOW TO GET FIRST PERSON TO FADE OUT
   renderPeople() {
    let result = [];
    for (let i = 0; i < this.state.peopleList.length; i++) {
      result.push(
        <div id={`${i === 0 ? this.state.fadePerson : `person${i}`}`} className={`person-container ${ this.state.peopleList[0] !== this.state.name.value? this.state.animatePerson: ""}`}>
          {this.state.peopleList[i].split(" ").map(line => <div>{line}</div>)}
          <img  key={i} class="person" src={ this.state.peopleList[i] === this.state.name.value ? greenPerson: person} />
        </div>
      );
    }
    // if (this.state.peopleList.length && this.state.peopleList[0] !== this.state.name.value)
    //   result.push(
    //     <div id="self" className={`person-container ${this.state.peopleList.length !== 1 ? this.state.animatePerson : ""}`}>
    //         <div>{this.state.name.value.split(" ")[0]}</div>
    //         <div>{this.state.name.value.split(" ")[1]}</div>
    //     <img
    //       key={this.state.peopleList.length}
    //       class="person"
    //       src={greenPerson}
    //     />
    //      </div>
    //   );
    return result;
  }

  //FINISH THIS PART WHERE YOU'RE POPULATING THE PEOPLE
  async populateBack() {
      this.setState({animatePerson: "", fadePerson: ""})
      const names = ["Johnson McGee", "Brady Stuffins", "Brohnson Flostrom", "Braullins McCullin", "Foster Balcon", "Borderlin Pronc"];
      for (let i  = 0; i < 6; i++){
        await FetchService.postPerson({name: names[i]});
        const peopleList = await FetchService.getPeople();
        this.setState({peopleList})
        await new Promise((r) => setTimeout(r, 2000));
      }
  }

  startAdoption = async () => {
      await FetchService.postPerson({name: this.state.name.value})
    let peopleList = await FetchService.getPeople();
    let length = peopleList.length;
    this.setState({ peopleList, name: {value: this.state.name.value, touched: false, disabled: true} });
    for (let i = 0; i < length - 1; i++) {
      const animal = Math.round(Math.random()) === 1 ? "Cat" : "Dog";
      const animalLC = animal === "Cat" ? "cat" : "dog";
      await new Promise((r) =>
        r(this.setState({ [`animation${animal}`]: "", animatePerson: "", fadePerson: "" }))
      );
      await FetchService[`dq${animal}`]();
      const animalFetched = await FetchService[`get${animal}`]();
      this.setState({ [`animation${animal}`]: "fade-out", animatePerson: "slide-left", fadePerson:"fade-person" });
      console.log("line58");
      await new Promise(r => setTimeout(() => r(this.setState({ [animalLC]: animalFetched })), 800));
      await new Promise(r => setTimeout(r, 151));
      await FetchService.dqPerson();
      let peopleList = await FetchService.getPeople();
      this.setState({ peopleList });
      await new Promise((r) => setTimeout(r, 2000));
    }
    await new Promise((r) => setTimeout(r, 2000));
    this.populateBack();
  };



  componentDidMount() {
    FetchService.getCat().then((cat) =>
      this.setState({
        cat,
      })
    );
    FetchService.getDog().then((dog) =>
      this.setState({
        dog,
      })
    );
  }


  handleNameChange = (e) => {
    this.setState({name: {value: e.target.value, touched: true}});
  }

  invalidName = (name) => {
      console.log(name.split(" ").length)
      if (!name.match(/[A-Za-z]+\s[A-Za-z]+/)) return "Please enter your first and last name"
  }

  render() {
    const cat = this.state.cat;
    const dog = this.state.dog;
    console.log(this.state);
    return (
      <div id="adopt" class="adopt">
        <button class="adopt-button" disabled={this.invalidName(this.state.name.value) || this.state.name.disabled} onClick={this.startAdoption}> Adopt a pet! </button>
        {(this.invalidName(this.state.name.value) && this.state.name.touched) && <div class="error">{this.invalidName(this.state.name.value)}</div>}
        <input  onChange={this.handleNameChange} className={`adopter ${this.state.name.disabled ? "hidden" : ""}`} placeholder="Enter your name..."/>
        <div className="loader hidden"></div>
        <div class="queue">{this.renderPeople()}</div>
        <div class="petpics-adoption">
          <div
            id="container-cat"
            className={`container-dog ${this.state.animationCat}`}
          >
            <div class="pet-background">
              <img src={cat.imageURL} />
              <p className="pet-name">
                {cat.name ? cat.name.toUpperCase() : ""}
              </p>
              <p>
                <b>Age</b>: {cat.age}
                <br /> <br />
                <b>Breed</b>: {cat.breed}
                <br /> <br />
                <b>Description</b>: {cat.description}
                <br /> <br />
                <b>Gender</b>: {cat.gender}
                <br />
                <br />
                <b> Reason {cat.name}'s at shelter'</b>: {cat.story}
              </p>
            </div>
          </div>
          <div
            id="container-dog"
            className={`container-dog ${this.state.animationDog}`}
          >
            <div class="pet-background">
              <img src={dog.imageURL} />
              <p className="pet-name">
                {dog.name ? dog.name.toUpperCase() : ""}
              </p>
              <p>
                <b>Age</b>: {dog.age}
                <br /> <br />
                <b>Breed</b>: {dog.breed}
                <br /> <br />
                <b>Description</b>: {dog.description}
                <br /> <br />
                <b>Gender</b>: {dog.gender}
                <br />
                <br />
                <b> Reason {dog.name}'s at shelter</b>: {dog.story}
              </p>
            </div>
          </div>
        </div>
        {/* <button onClick={this.startAdoption}>Join the queue</button> */}
      </div>
    );
  }
}
