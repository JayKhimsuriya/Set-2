import { useDispatch } from "react-redux";

function Card({ card }) {
    const dispatch = useDispatch();
    const handleHideCard = () => {
      dispatch({ type: 'HIDE_CARD', payload: { id: card.id } });
    };
    return (
      <div>
        <div >{card.name}</div>
        <div >
          <p>This is the content of the card.</p>
          <button onClick={handleHideCard}>Hide Card</button>
        </div>
      </div>
    );
  }

  export default Card;