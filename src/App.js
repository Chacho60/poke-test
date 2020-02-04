import React from 'react';
import './App.css';
import Pokecard from './Pokecard'

class App extends React.Component {
  state = {
    pokemon:[],
    searchTerm: "",
    page: 1
  }

  searchInput = React.createRef();

  addPokemon = (base, counter) =>{
    const promises = [];
    const page = this.state.page;
    console.log(page)
    console.log(counter)
    for(let i = base; i < counter; i++){
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

  handleNext = () =>{
    const next = this.state.page + 20
    this.addPokemon(next, next + 20)
    this.setState({ 
      page : next,
     })
  }

  handlePrevious = () =>{
    const previous = this.state.page - 20
    this.addPokemon(previous, previous + 20)

    this.setState({ 
      page : previous,
     })
  }

  filterCards = e =>{
    const searchTerm = this.searchInput.current.value;
    this.setState({ searchTerm })
  }

  componentDidMount() {

    if (this.state.pokemon.length === 0) this.addPokemon(1, 20)
    
  }

  render(){
    const {searchTerm, page} = this.state;
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
            {page === 1 || searchTerm !== "" ? <div className="pageDisabled"></div>:<div className="pagination" onClick={this.handlePrevious}><i class="fa fa-arrow-left"></i></div>}
            <ul className="cards">
              {pokecards.map(pokemon =>{
                return(<Pokecard
                  name={pokemon.name}
                  id={pokemon.id}
                  sprite={pokemon.sprite}
                />)
              })}
            </ul>
            {searchTerm !== "" ? <div className="pageDisabled"></div>:<div className="pagination" onClick={this.handleNext}><i class="fa fa-arrow-right"></i></div>}
          </div>
          
      </div>
          
    );
  }
  
}

export default App;
