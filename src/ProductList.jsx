import {useCart} from "./CartContext";
import './App.css'


const products =[
  {id: 1, name: "Book", price: 2000},
  {id: 2, name: "Pen", price: 500},
  {id: 3, name: "Notebook", price: 1500},
  {id: 4, name: "Backpack", price: 5000},
];

export function ProductList(){
  const{ dispatch } = useCart();
  return(
    <div>
      <h2>Products</h2>
      {products.map((item) =>(
        <div key={item.id} style={{ marginBottom: "10px" }}>
          <span>{item.name} - {item.price} ₸</span>
          <button
            onClick={() => dispatch({ type: "ADD_ITEM", payload: item })}
            style={{ marginLeft:"10px" }}>add to Car</button>
        </div>))}
    </div>
  );
}



