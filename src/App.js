import React from 'react';
import './App.css';
import Pokecard from './Pokecard'

class App extends React.Component {
  state = {
    pokemon:[],
    searchTerm: ""
  }

  searchInput = React.createRef();

  addPokemon = () =>{
    const promises = [];

    for(let i = 1; i < (this.state.pokemon.length + 20); i++){
      promises.push(
        fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
        .then(res => res.json())
        .catch(err => console.log(err))
      )
    }

    Promise.all(promises)
      .then(results => {
        let pokemon = results.map(mon => {
          return({
            id: mon.id,
            name: mon.name,
            sprite: mon.sprites['front_default']
          })
        })
        this.setState({ pokemon })
    })
    
  }

  handleScroll = (e) =>{
    // Detect when scrolled to bottom
    if ((window.innerHeight + window.scrollTop()) >= document.body.scrollHeight) {
      this.addPokemon();
    }
  }

  filterCards = e =>{
    const searchTerm = this.searchInput.current.value;
    this.setState({ searchTerm })
  }

  componentDidMount() {

    if (this.state.pokemon.length === 0) this.addPokemon();
    window.addEventListener("scroll", this.handleScroll)
    
  }

  render(){
    const pokecards = this.state.pokemon.filter((mon) => mon.name.includes(this.state.searchTerm.toLowerCase()))
    console.log(pokecards)
    return (
      <div className="App">
          <div className="App-header">
            <h1 className="title">Pokedex</h1>
            <div class="searchBar">
              <input ref={this.searchInput} type="text" class="searchTerm" placeholder="Find pokemon" onChange={this.filterCards}/>
            </div>
          </div>
          <div className="App-body">
            {pokecards.map(pokemon =>{
              return(<Pokecard
                name={pokemon.name}
                id={pokemon.id}
                sprite={pokemon.sprite}
              />)
            })}
          </div>
        </div>
    );
  }
  
}

export default App;
