import React from "react";
import FetchService from "../FetchService";

export default class Adopt extends React.Component {
  state = {
    people: [],
    cat: {},
    dog: {},
    animationDog: "",
    animationCat: "",
  };
  startAdoption = async () => {
    const peopleList = await FetchService.getPeople();
    for (let i = 0; i < peopleList.length; i++) {
      const animal = Math.round(Math.random()) === 1 ? "Cat" : "Dog";
      const animalLC = animal === "Cat" ? "cat" : "dog";
      await new Promise((r) =>
        r(this.setState({ [`animation${animal}`]: "" }))
      );
      await FetchService[`dq${animal}`]();
      const animalFetched = await FetchService[`get${animal}`]();
      this.setState({ [`animation${animal}`]: "fade-out" });
      setTimeout(() => this.setState({ [animalLC]: animalFetched }), 800);
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
        <h2> Meet the pets! </h2>
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
        <button onClick={this.startAdoption}>Join the queue</button>
        <div className="loader hidden"></div>
      </div>
    );
  }
}
