import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = ({cartItems}) => {
    return (
        <>
            <header className={styles.Header}>
                <div>
                    <ul className={styles.List}>
                        <li>
                            <Link to="/" className="Header-nav">
                                Shop
                            </Link>
                        </li>
                        <li>
                            <Link to="/cart" className="Header-nav">
                                <span className={styles.Label}>Shopping Cart</span>
                                <i className="fas fa-shopping-cart" />
                                <span className={styles.Quantity}>{ cartItems.length===0? "": cartItems.length}</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    )
}

export default Header;