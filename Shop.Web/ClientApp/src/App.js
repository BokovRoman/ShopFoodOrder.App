import Header from './components/Header/Header';
import Container from "./components/Container/Container";
import { useState, useEffect } from 'react';
import { getShops } from './services/api';


const App = () => {
    const [shops, setShops]=useState([]);
    const localStorItem = JSON.parse(localStorage.getItem('cartItems')) ? JSON.parse(localStorage.getItem('cartItems')) : [];
    const [productItems, setProductItems] = useState([]);
    const [cartItems, setCartItem] = useState(localStorItem);

    useEffect(() => {
        if (cartItems.length > 0) {
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
        }
    }, [cartItems]);

    useEffect(() => {
        getShops()
            .then((data) => {
                setShops(data);
            });
        
  }, [])

    const addProductItems = (items) => {
        setProductItems(items); 
        console.log(productItems);
    }
    
    const selectItems = (items) => {
            setCartItem(items);
    }

    return (
        <>
            <Header
                cartItems={cartItems}
            />
            <Container
                shops={shops}
                addProductItems={addProductItems}
                productItems={productItems}
                selectItems={selectItems}
            >
            </Container>    
        </>
    )
}

export default App;