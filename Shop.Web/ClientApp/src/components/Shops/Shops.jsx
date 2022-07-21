import styles from './Shops.module.css';
import { useState} from 'react';

const Shops = ({ shops, addProductItems }) => {
    
    const [isShopSelected, setisShopSelected]=useState(false);

    const handleIsShopSelected = (value) => {
        setisShopSelected(value);
    }

    const selectedShop = (shop) => {
        addProductItems(shop.items);
    }

    return (
        <>
            <div className={styles.Container}>
                <h1 className={styles.Title}>Shops:</h1>
                <ul className={styles.Shops}>
                    {shops.map((shop) => (
                            <li key={shop.id} className={styles.Items}>
                            <button type="button"
                                className={styles.Button}
                                onClick={() => { selectedShop(shop); handleIsShopSelected(true) }}
                                disabled={isShopSelected}
                            >
                                {shop.name} 
                            </button>
                            </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Shops;
