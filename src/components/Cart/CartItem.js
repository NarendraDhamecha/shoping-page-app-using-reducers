import classes from './CartItem.module.css';
import { CartItemActions } from '../../redux-store/CartItemSlice';
import { useDispatch, useSelector } from 'react-redux';

const CartItem = (props) => {
  const { title, quantity, price } = props.item;
  const dispatch = useDispatch();
  const items = useSelector(state => state.cartItem.items)

  const total = items.reduce((sum, item) => {
    return sum + (item.price * item.quantity)
  },0)

  const addItemHandler = () => {
     dispatch(CartItemActions.addToCart({title: title, quantity: 1, price: price}))
  }

  const removeItemHandler = () => {
    dispatch(CartItemActions.removeItem(title));
  }

  return (
    <li key={Math.random()} className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
