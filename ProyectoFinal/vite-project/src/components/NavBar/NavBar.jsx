import { Link, NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
        <nav className={styles['nav']}>

            <div className={styles['enlaces-menu']}>
                <h1>
                    <Link to="/" className={styles['enlaces-menu-titulo']} >ReactTech Hub</Link>
                </h1>
                <ul className={styles['enlaces-menu-item']}>
                    <li>
                        <NavLink to="/category/Smartphones" className={styles['enlaces-menu-item-li']}>Smartphones</NavLink>
                    </li>
                    <li>
                        <NavLink to="/category/Notebooks" className={styles['enlaces-menu-item-li']}>Notebooks</NavLink>
                    </li>
                    <li>
                        <NavLink to="/category/Televisores" className={styles['enlaces-menu-item-li']}>Televisores</NavLink>
                    </li>
                    <li>
                        <NavLink to="/category/Ofertas" className={styles['enlaces-menu-item-li']}>Ofertas</NavLink>
                    </li>
                    <div>
                        <NavLink to="/cart" className={styles['enlaces-menu-item-cart']}>
                            <CartWidget />
                        </NavLink>
                    </div>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
