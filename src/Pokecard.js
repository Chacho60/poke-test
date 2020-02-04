import React from "react";
import './Pokecard.css';

class Pokecard extends React.Component {

  handleClick = () =>{
    this.props.addToOrder(this.props.index)
  }

  render (){
    const {name, id, sprite} = this.props;

    return(
       <li className="card">
         <div className="pokedata">
          <div className="pokename">{name}</div>
          <div className="pokeindex">#{id}</div>
         </div>
        <img src={sprite} alt=""/>
       </li>
    );
  }
}

export default Pokecard;