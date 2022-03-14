import React from "react";
import uuid from "uuid";
import PlayingCard from "./PlayingCard";
import "./PlayingCardList.css";
import useAxios from "./hooks/useAxios";

/* Renders a list of playing cards.
 * Can also add a new card at random. */
const BASE_URL = "https://deckofcardsapi.com/api/deck/new/draw/";
function CardTable() {
  const [cards, setCards, error, removeCards] = useAxios(BASE_URL);
  const addCard = async () => {
    await setCards();
  };

  if (error) {
    <div>Oops! Something is wrong.</div>;
  }

  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={addCard}>Add a playing card!</button>
        <button onClick={removeCards}>Remove all cards!</button>
      </div>
      <div className="PlayingCardList-card-area">
        {cards.map(cardData => (
          <PlayingCard key={uuid()} front={cardData.data.cards[0].image} />
        ))}
      </div>
    </div>
  );
}

CardTable.defaultProps = {};

export default CardTable;
