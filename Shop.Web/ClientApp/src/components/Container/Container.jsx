import styles from './Container.module.css';
import Shops from '../Shops/Shops';
import Items from '../Items/Items';

const Container = ({ shops, addProductItems, productItems, selectItems }) => {

    return (
        <div className={styles.Container}>
                <Shops
                    shops={shops}
                    addProductItems={addProductItems}
                />
                <Items
                    productItems={productItems}
                    selectItems={selectItems}
                />
        </div>
    )
}

export default Container;