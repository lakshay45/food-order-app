import { useContext, useEffect, useState} from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../store/cart-context';

const HeaderCartButton=props=>{
    const[btnIsHighlighted,setBtnIsHighlighted]=useState(false);
    const cartCtx=useContext(CartContext);
// since we wnat every item in cart ,so if we will call item.length ,then it will give only types of food amount
// like if we have 3 item of same type then it will be counted as 1 since each object will be stored in item
// and each object can have many items of that type so we are using reduce which takes 2 parameters in function
// first variable which will have result return by cart, second the item which the function is inspecting
// also remember result of return will stored in next cartNumber ,thats why we use 0 for initial cartNumber 
    const numberOfCartItems=cartCtx.items.reduce((cartNumber,item)=>{
        return cartNumber +item.amount;
    },+0);

    const btnClasses=`${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;
    const {items}= cartCtx;

    useEffect(()=>{
        if(items.length===0)
        {   return; }
        setBtnIsHighlighted(true);

        const timer=setTimeout(() => {
            setBtnIsHighlighted(false);
        }, 300);

        return()=>{
            clearTimeout(timer);
        };
    },[items]);

    return <button className={btnClasses} onClick={props.onClicking}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span> Your Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
};
export default HeaderCartButton;