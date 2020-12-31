import React from 'react'
import {Link} from 'react-router-dom';
import '../styles/Header.css'
import { useSelector } from 'react-redux';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const Header = () => {

    const cart = useSelector((state) => state.cart);
    const {cartItems} = cart;


    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;


    return (
        <header>
            <div className="container">
                <div className="inner-content">
                    <div className="brand">
                        <Link to="/">Amazon Clone</Link>
                    </div>

                    <ul className="nav-links">
                        <li>
                            <Link to="/cart"><ShoppingCartIcon/>
                                {
                                    cartItems.length > 0 && 
                                    (<p className="badge">{cartItems.length}</p>)
                                }
                            </Link>
                        </li>
                        <li>
                            {
                                userInfo ? (
                                    <div>
                                        <Link to="#">
                                            {userInfo.name}
                                            <ArrowDropDownIcon/>
                                        </Link>
                                    </div>
                                    
                                ) :
                                (
                                    <Link to="/sign-in"><AccountCircleIcon/></Link>
                                )
                            }
                        </li>
                            
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header
