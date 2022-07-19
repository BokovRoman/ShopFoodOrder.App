import Header from './components/Header/Header';
import Shops from "./components/Shops/Shops";
import Items from "./components/Items/Items";
import Container from "./components/Container/Container";
import { useState, useEffect } from 'react';
import { getShops } from './services/api';


const App = () => {

    // const shops  = [
    //     {
    //         id: "1",
    //         name: "McDonald",
    //         items: [{
    //             id: "1",
    //             name: "Burger",
    //             description: "McDonald Our tasty burger",
    //             price: 200,
    //             quantity:0,
    //             image: "https://klopotenko.com/wp-content/uploads/2020/06/Burger-s-kuricei_siteWeb.jpg?v=1592647859",
    //         },
    //         {
    //             id: "2",
    //             name: "Borsch",
    //             description: "McDonald Without worlds...Borsch",
    //             price: 100,
    //             quantity:0,
    //             image: "https://klopotenko.com/wp-content/uploads/2020/06/Burger-s-kuricei_siteWeb.jpg?v=1592647859",
    //             },
    //         {
    //             id: "3",
    //             name: "Shaurma",
    //             description: "McDonald Our tasty shaurma with cheese",
    //             price: 150,
    //             quantity:0,
    //             image: "https://klopotenko.com/wp-content/uploads/2020/06/Burger-s-kuricei_siteWeb.jpg?v=1592647859",
    //             },
    //         {
    //             id: "4",
    //             name: "Hot-Dog",
    //             description: "McDonald Uhhhh....Hot-Dog with pork",
    //             price: 220,
    //             quantity:0,
    //             image: "https://klopotenko.com/wp-content/uploads/2020/06/Burger-s-kuricei_siteWeb.jpg?v=1592647859",
    //             },
    //         ]
    //     },
    //     {
    //         id: "2",
    //         name: "KFS",
    //         items: [{
    //             id: "1",
    //             name: "Burger",
    //             description: "KFS Our tasty burger",
    //             price: 200,
    //             quantity:0,
    //             image: "https://klopotenko.com/wp-content/uploads/2020/06/Burger-s-kuricei_siteWeb.jpg?v=1592647859",
    //         },
    //         {
    //             id: "2",
    //             name: "Borsch",
    //             description: "KFS Without worlds...Borsch",
    //             price: 100,
    //             quantity:0,
    //             image: "https://klopotenko.com/wp-content/uploads/2020/06/Burger-s-kuricei_siteWeb.jpg?v=1592647859",
    //             },
    //         {
    //             id: "3",
    //             name: "Shaurma",
    //             description: "KFS Our tasty shaurma with cheese",
    //             price: 150,
    //             quantity:0,
    //             image: "https://klopotenko.com/wp-content/uploads/2020/06/Burger-s-kuricei_siteWeb.jpg?v=1592647859",
    //             },
    //         {
    //             id: "4",
    //             name: "Hot-Dog",
    //             description: "KFS Uhhhh....Hot-Dog with pork",
    //             price: 220,
    //             quantity:0,
    //             image: "https://klopotenko.com/wp-content/uploads/2020/06/Burger-s-kuricei_siteWeb.jpg?v=1592647859",
    //             },
    //         ]
    //     }];

    const [shops, setShops]=useState([]);
    const localStorItem = JSON.parse(localStorage.getItem('cartItems')) ? JSON.parse(localStorage.getItem('cartItems')) : [];
    const [productItems, setProductItems] = useState([]);
    const [cartItems, setCartItem] = useState(localStorItem);

    useEffect(() => {
        // localStorage.removeItem('cartItems');
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

    useEffect(() => {
   console.log('Effect!!')

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
                {/* <Shops
                    shops={shops}
                    addProductItems={addProductItems}
                />
                <Items
                    productItems={productItems}
                    selectItems={selectItems}
                /> */}
            </Container>    
        </>
    )
}

export default App;