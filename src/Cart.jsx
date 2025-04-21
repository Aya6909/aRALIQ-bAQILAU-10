import{useCart}from "./CartContext";
import './App.css'


export function Cart(){
  const{ state, dispatch} = useCart();
  const total = state.cart.reduce((sum, item) => sum + item.price, 0);

  return(
    <div>
      <h2>Cart</h2>
      {state.cart.length === 0 ? (
        <p>Cart is empty</p>
      ):(
        <ul>
          {state.cart.map((item, index) =>(
            <li key={index}>
              {item.name} - {item.price} ₸
              <button
                onClick={() => dispatch({ type: "REMOVE_ITEM", payload: index })}
                style={{ marginLeft: "10px" }}
              >
                Remove</button>
            </li>
          ))}</ul>
      )}
      {state.cart.length > 0 &&(
        <>
          <p><strong>Total:</strong>{total} ₸</p>
          <button
  onClick={() => dispatch({ type: "CLEAR_CART" })}
  className="clear-button"
>
  Clear Cart
</button>
        </>)}
    </div>
  );
}
