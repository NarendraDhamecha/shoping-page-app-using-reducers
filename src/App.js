import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { CartActions } from "./redux-store/CartSlice";
import Notification from "./components/UI/Notification";
import { CartItemActions } from "./redux-store/CartItemSlice";

function App() {
  const showCart = useSelector((state) => state.cart.showCart);
  const cart = useSelector((state) => state.cartItem.items);
  const notification = useSelector((state) => state.cart.notification);
  const dispatch = useDispatch();

  useEffect(() => {
     const getCartData = async () => {
      const res = await fetch('https://shopping-page-app-using-redux-default-rtdb.firebaseio.com/cart.json');
      const data = await res.json();
      dispatch(CartItemActions.setCartItem(data));
     }
     getCartData();
  },[dispatch])

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(CartActions.setNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data!",
      }));
      const res = await fetch(
        "https://shopping-page-app-using-redux-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      if (!res.ok) {
        throw new Error("Sending cart data failed");
      }

      dispatch(CartActions.setNotification({
        status: "success",
        title: "Success!",
        message: "Sent cart data successfully!",
      }));
    };
    sendCartData().catch((r) => {
      dispatch(CartActions.setNotification({
        status: "error",
        title: "Error!",
        message: "Sending cart data failed",
      }));
    });
  }, [cart, dispatch]);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
