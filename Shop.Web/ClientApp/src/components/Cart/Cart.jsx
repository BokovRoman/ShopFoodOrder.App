import styles from "./Cart.module.css";
import { useState, useEffect } from 'react';
import Forma from '../Form/Form';
import Header from "../Header/Header";
import CartItems from '../CartItems/CartItems';
import { notifi } from "../../services/notifi";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { createOrder } from '../../services/api';



const Cart = () => {

    const [cartItems, setCartItem] = useState([]);
    const [isFormValid, setisFormValid] = useState(false);
    const [form, setForm] = useState({});

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('cartItems'));
        if (items) {
            setCartItem(items);
        }
    }, []);

    const handleCartClear = () => {
        localStorage.removeItem('cartItems');
        setCartItem([]);
    }

    const handleAddItems = (product) => {
        const exist = cartItems.find((item) => item.id === product.id);

        if (exist) {
            setCartItem(
                cartItems.map((item) =>
                    item.id === product.id ?
                        { ...exist, quantity: exist.quantity + 1 } : item
                )
            );
        } else {
            setCartItem([...cartItems, { ...product, quantity: 1 }]);
         }
         console.log(cartItems);
    };

    const handleRemoveItems = (product) => {
        const exist = cartItems.find((item) => item.id === product.id);

        if (exist.quantity === 1) {
            setCartItem(cartItems.filter((item) => item.id !== product.id));
        } else {
            setCartItem(
                cartItems.map((item) =>
                    item.id === product.id
                        ? { ...exist, quantity: exist.quantity - 1 }
                        : item
                )
            );
        }
    };

    const itemsTotalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const handleisFormValid = (value) => {
        setisFormValid(value); 
    }

    const handleSubmit = () => {
        const order = {
            ...form, 
            items: cartItems.map((cart) => {
                return {
                    id: cart.id,
                    quantity: cart.quantity
                }
            })
        }
        createOrder(order);
    }


    return (
        <>  <ToastContainer />
            <Header cartItems={cartItems }/>
                <div className={styles.CartItems}>
                <div className={styles.Header}>Shopping Cart</div>
                {cartItems.length === 0 && (
                        <div className={styles.CartEmpty}>No items are added. Please, choose some meal in our Shops</div>
                )}
                {cartItems.length >= 1 &&
                    <>
                    <button type="button" onClick={handleCartClear} className={styles.ClearButton}>Clear Cart</button>
                        <div className={styles.Flex}>
                            <Forma
                            itemsTotalPrice={itemsTotalPrice}
                            isFormValid={handleisFormValid}
                            setForm={setForm}
                            />
                            <CartItems
                                cartItems={cartItems}
                                handleAddItems={handleAddItems}
                                handleRemoveItems={handleRemoveItems}
                            />
                        </div>
                        <div className={styles.TotalPrice}>
                            <p className={styles.Price}>
                                Total price: {itemsTotalPrice}
                            </p>
                        <button onClick={() => { handleSubmit(); handleCartClear(); notifi('Thanks! The order was created!')}} className={styles.Submit} disabled={!isFormValid} type="submit">Submit</button>
                        </div>
                    </>
                }
            </div>
        </>
  )
}

export default Cart;

