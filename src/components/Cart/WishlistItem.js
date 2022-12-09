import classes from "./WishlistItem.module.css";

const WishlistItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>X</button>
      </div>
    </li>
  );
};

export default WishlistItem;
