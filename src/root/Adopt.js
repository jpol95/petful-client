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
    front: false, 
    adopted: ""
  };


  //FIGURE OUT HOW TO GET FIRST PERSON TO FADE OUT
   renderPeople() {
    let result = [];
    for (let i = 0; i < this.state.peopleList.length; i++) {
      result.push(
        <div id={`${i === 0 ? this.state.fadePerson : `person${i}`}`} className={`person-container ${ this.state.peopleList[0] !== this.state.name.value? this.state.animatePerson: ""}`}>
          {this.state.peopleList[i].split(" ").map(line => <div>{line}</div>)}
          <img alt="person icon" key={i} className="person" src={ this.state.peopleList[i] === this.state.name.value ? greenPerson: person} />
        </div>
      );
    }
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
        await new Promise((r) => setTimeout(r, 5000));
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
      await FetchService.dqPerson();
      let peopleList = await FetchService.getPeople();
      this.setState({ peopleList, front: i === length - 2 });
      await new Promise((r) => setTimeout(r, 5000));
    }
    await new Promise((r) => setTimeout(r, 5000));
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
      <div id="adopt" className="adopt">
        {this.state.adopted && <div className="post-adopt"> Congratulations! Your adoption has been processed. Meet your pets!</div>} 
        {!this.state.adopted && <div className="pre-adopt">
        <button className="adopt-button" disabled={this.invalidName(this.state.name.value) || this.state.name.disabled} onClick={this.startAdoption}> Adopt a pet! </button>
        {(this.invalidName(this.state.name.value) && this.state.name.touched) && <div className="error">{this.invalidName(this.state.name.value)}</div>}
        {this.state.front && 
        <div className="buttons">
          <div className="one-buttons">
              <button onClick={() => this.setState({adopted: "cat"})} className="adopt-animal">Adopt Cat</button>
              <button onClick={() => this.setState({adopted: "dog"})} className="adopt-animal">Adopt Dog</button>
          </div>  
          <button onClick={() => this.setState({adopted: "both"})} className="adopt-both">Adopt Both</button>
        </div>}
        <br />
        <label className={`name-label ${this.state.name.disabled ? "hidden" : ""}`} for="enter-name">Name: </label>
        <input id="enter-name" onChange={this.handleNameChange} className={`adopter ${this.state.name.disabled ? "hidden" : ""}`} placeholder="Enter your name..." />
        <div className="loader hidden"></div>
        <div className="queue">{this.renderPeople()}</div>
        </div>}
        <div className="petpics-adoption">
         {this.state.adopted !== "dog" && <div
            id="container-cat"
            className={`container-dog ${this.state.animationCat}`}
          >
            <div className="pet-background">
              <img alt="cat" src={cat.imageURL} />
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
          </div>}
          {this.state.adopted !== "cat" && <div
            id="container-dog"
            className={`container-dog ${this.state.animationDog}`}
          >
            <div className="pet-background">
              <img alt="dog" src={dog.imageURL} />
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
          </div>}
        </div>
        {/* <button onClick={this.startAdoption}>Join the queue</button> */}
      </div>
    );
  }
}
