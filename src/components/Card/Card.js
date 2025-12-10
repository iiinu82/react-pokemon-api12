import React from "react";
import "./Card.css";

function Card({ pokemon }) {
  return (
    <div className="card">
      <div className="cardId">
        <img src={pokemon.sprites.front_default} />
        <img src={pokemon.sprites.front_shiny} />
        {/* <img src={pokemon.sprites.back_default} /> */}
      </div>
      <h3 className="cardName">
        {pokemon.id} {pokemon.name}
      </h3>

      <div className="cardType">
        <div>タイプ</div>
        {pokemon.types.map((type) => {
          return (
            <div key={type.type.name}>
              <span className="typeName">{type.type.name}</span>
            </div>
          );
        })}
      </div>
      <div className="cardInfo">
        <div className="cardData">
          <p className="title">重さ:{pokemon.weight}</p>
        </div>
        <div className="cardData">
          <p className="title">高さ:{pokemon.height}</p>
        </div>
        <div className="cardData">
          <p className="title">
            アビリティ:{pokemon.abilities[0].ability.name}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
