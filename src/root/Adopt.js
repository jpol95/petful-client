import React from "react";
import kitty from "../resources/kitty.jpg";
import puppy from "../resources/puppy.jpg";
import FetchService from '../FetchService'

export default class Adopt extends React.Component {

    state = {
        people: [], 
        cat: {}, 
        dog: {}, 
        animationDog: "", 
        animationCat: ""
      }
      startAdoption = async () => {
        await FetchService.dqCat()
        const cat = await FetchService.getCat();
        this.setState({animationCat: "fade-out"})
        setTimeout(() => this.setState({cat}), 1000)
      }

      componentDidMount() {
          FetchService.getCat().then(cat => this.setState({
              cat
          }))
          FetchService.getDog().then(dog => this.setState({
              dog
          }))
      }

  render() {
      const cat = this.state.cat;
      const dog = this.state.dog;
      console.log(this.state.animation)
      console.log(this.state.cat)
    return (
      <div id="adopt" class="adopt">
        <h2> Meet the pets! </h2>
        <div class="petpics-adoption">
          <div id="container-cat" className={`container-dog ${this.state.animationCat}`}>
            <div class="pet-background">
              <img src={kitty} />
              <p className="pet-name">{cat.name ? cat.name.toUpperCase(): ""}</p>
              <p>
              <b>Age </b>: {cat.age}<br /> <br /><b>Breed</b>: {cat.breed}
                <br /> <br /><b>Description</b>: {cat.description}
                <br /> <br /><b>Gender</b>: {cat.gender} 
                <br /><br /><b> Reason {cat.name}'s at shelter'</b>: {cat.story}
              </p>
            </div>
          </div>
          <div id="container-dog" className={`container-dog ${this.state.animationDog}`}>
            <div class="pet-background">
              <img src={puppy} />
              <p className="pet-name">{dog.name ? dog.name.toUpperCase(): ""}</p>
              <p>
              <b>Age </b>: {dog.age}<br /> <br /><b>Breed</b>: {dog.breed}
                <br /> <br /><b>Description</b>: {dog.description}
                <br /> <br /><b>Gender</b>: {dog.gender} 
                <br /><br /><b> Reason {dog.name}'s at shelter'</b>: {dog.story}
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
