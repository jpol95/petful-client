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
    fadePerson: ""
  };


  //FIGURE OUT HOW TO GET FIRST PERSON TO FADE OUT
  renderPeople() {
    let result = [];
    for (let i = 0; i < this.state.peopleList.length; i++) {
      result.push(
        <div id={`${i === 0 ? this.state.fadePerson : `person${i}`}`} className={`person-container ${this.state.animatePerson}`}>
          {this.state.peopleList[i].split(" ").map(line => <div>{line}</div>)}
          <img  key={i} class="person" src={person} />
        </div>
      );
    }
    if (this.state.peopleList.length)
      result.push(
        <div id="self" className={`person-container ${this.state.animatePerson}`}>
            <div>John</div>
            <div>Jacobs</div>
        <img
          key={this.state.peopleList.length}
          class="person"
          src={greenPerson}
        />
         </div>
      );
    return result;
  }

  startAdoption = async () => {
    let peopleList = await FetchService.getPeople();
    let length = peopleList.length;
    this.setState({ peopleList });
    for (let i = 0; i < length; i++) {
      const animal = Math.round(Math.random()) === 1 ? "Cat" : "Dog";
      const animalLC = animal === "Cat" ? "cat" : "dog";
      await new Promise((r) =>
        r(this.setState({ [`animation${animal}`]: "", animatePerson: "", fadePerson: "" }))
      );
      await FetchService[`dq${animal}`]();
      const animalFetched = await FetchService[`get${animal}`]();
      this.setState({ [`animation${animal}`]: "fade-out", animatePerson: "slide-left", fadePerson:"fade-person" });
      await new Promise(r => setTimeout(() => {this.setState({ [animalLC]: animalFetched }); r()}, 800));
      await FetchService.dqPerson();
      let peopleList = await FetchService.getPeople();
      this.setState({ peopleList });
      await new Promise((r) => setTimeout(r, 2000));
    }
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

  render() {
    const cat = this.state.cat;
    const dog = this.state.dog;
    return (
      <div id="adopt" class="adopt">
        <button onClick={this.startAdoption}> Adopt a pet! </button>
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
