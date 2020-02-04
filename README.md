# Pokedex Test

------

## Overview

This a react app for integ.ro showcasing some react skills. Tt was made using `create-react-app` and no framework or package outside create-react-app was used.

## **Pagination**

Pagination was implemented with buttons on each side of the screen, one button goes forward and calls the function that fetches the next 20 indexes of the current saved state from the API. The other one goes backwards and subtracts by 20 the indexes from the API call.

```
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

It is also deployed on netlify for convenience: https://objective-joliot-376222.netlify.com/
