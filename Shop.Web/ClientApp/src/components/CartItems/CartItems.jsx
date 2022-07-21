import styles from "./CartItems.module.css";

const CartItems = ({cartItems, handleAddItems, handleRemoveItems}) => {

    return (
        <div className={styles.Container}>
            {cartItems.map((item) => 
                (
                    <div key={item.id} className={styles.Item}>
                            <img src={`data:image/jpg;base64, ${item.image.picture}`} alt={item.image.name} className={styles.Image}/>
                            <div className={styles.Desc}>
                                <div className={styles.Name}>{item.name}</div>
                                <div className={styles.PriceItem}>
                                Price: {item.price*item.quantity}
                                </div>
                                <div className={styles.InputGroup}>
                                    <button className={`${styles.Button} ${styles.ButtonRemove}`} type="button" onClick={()=>handleRemoveItems(item)}>-</button>
                                    <div className={styles.Value}>{item.quantity}</div>
                                    <button className={`${styles.Button} ${styles.ButtonAdd}`} type="button" onClick={() => handleAddItems(item)}>+</button>
                                </div>
                            </div>
                    </div>  
            ))}
        </div>
  )
}

export default CartItems;
