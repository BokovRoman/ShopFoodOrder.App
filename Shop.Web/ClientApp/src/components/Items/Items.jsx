import styles from './Items.module.css';
import { useState, useEffect } from 'react';



const Items = ({ productItems,selectItems}) => {
    
    const localStorItem = JSON.parse(localStorage.getItem('cartItems')) ? JSON.parse(localStorage.getItem('cartItems')) : [];

    const [cartItems, setCartItems] = useState(localStorItem);

    useEffect(() => {
         if (selectItems) {
             selectItems(cartItems);
         }
    }, [cartItems]);

    const handleAddItems = (product) => {
        const produciExist = cartItems.find((item) => item.id === product.id);
        // debugger;
        if (produciExist) {
            let items = [];
            cartItems.forEach((item) => item.id === product.id ?
                items.push({ ...produciExist, quantity: produciExist.quantity + 1 }) : items.push(item))
            setCartItems(items);
        } else {
           setCartItems([...cartItems, { ...product, quantity: 1 }]);
        }

        selectItems(cartItems);
    };

    const getQuantity = (product) => {
        const exist = cartItems.find((cartItem) => cartItem.id === product.id);
        return exist ? `Perfect! ${exist.name} was added to Shopping Cart in quantity-${exist.quantity}` : "";
    }

    return (
        <div className={styles.Container}>
            {productItems.map((item) => (
                    <div className={styles.Item} key={item.id}>
                    <div>
                            <img src={`data:image/jpg;base64, ${item.image.picture}`} alt={item.image.name} className={styles.Image}/>
                        </div>
                        <div>
                            <h2 className={styles.Name}>{item.name}</h2>
                            <h3 className={styles.Description}>{item.description}</h3>
                            <h4 className={styles.Price}>Price: {item.price}</h4>
                        </div>
                    <div className={styles.Order}>{getQuantity(item)}</div>
                        <button type="button" onClick={()=>handleAddItems(item)} className={styles.Button}>
                            add to Cart 
                        </button>
                    </div>
                ))}
        </div>
  )
}

export default Items;