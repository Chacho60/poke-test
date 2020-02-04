# Pokedex Test

------

## Overview

This a react app for integ.ro showcasing some react skills. Tt was made using `create-react-app` and no framework or package outside create-react-app was used.

## **Infinite Scroll**

Infinite scroll was implemented using javascript event listeners, on `componentDidMount()`, it listens  for the `scroll` event on browser and checks if it is at the bottom of the page. If that's true it fires up `addPokemon` which adds another 20 cards into the App

```
handleScroll = (e) =>{
    // Detect when scrolled to bottom
    if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
      this.addPokemon();
    }
  }

.
.
.

  componentDidMount() {
    if (this.state.pokemon.length === 0) this.addPokemon();
    window.addEventListener("scroll", this.handleScroll)
    window.addEventListener("touchend", this.handleScroll)
    
  }
```

## Search

Search functionality was implemented with just a filter function on the Pokemon array, we have a search condition on the state that allows us to compare the current array of pokemon with the term to search. Array.prototype.filter() makes the match and it only maps the filtered cards.

```
 filterCards = e =>{
    const searchTerm = this.searchInput.current.value;
    this.setState({ searchTerm })
  }

.
.
.

  render(){
    const pokecards = this.state.pokemon.filter((mon) => 		  mon.name.includes(this.state.searchTerm.toLowerCase()))
```



## Useful Links

This project is hosted in github as: https://github.com/Chacho60/poke-test

It is also deployed on netlify for convenience: https://eager-ramanujan-f699c9.netlify.com/
