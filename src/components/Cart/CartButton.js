import classes from './CartButton.module.css';
import { CartActions } from '../../redux-store/CartSlice';
import { useDispatch, useSelector } from 'react-redux';


const CartButton = (props) => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cartItem.items)

  const totalCartQuantity = items.reduce((sum, item) => {
    return sum + item.quantity;
  },0)

  const showCartHandler = () => {
    dispatch(CartActions.setShowCart())
  }

  return (
    <button onClick={showCartHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalCartQuantity}</span>
    </button>
  );
};

export default CartButton;
