import React from 'react';
import { connect } from 'react-redux';

import { toogleCartHidden } from '../../redux/cart/cart.action';
import { selectCardItemsCount } from '../../redux/cart/cart.selectors';

import { ReactComponent as ShoppingIcon } from '../../assests/shopping-bag.svg'; 

import './cart-icon.styles.scss';


const CartIcon = ({toogleCartHidden, itemCount}) => {
    return (
        <div className="cart-icon" onClick={toogleCartHidden}>
            <ShoppingIcon className='shopping-icon' />
            <span className="item-count">{itemCount}</span>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    toogleCartHidden: () => dispatch(toogleCartHidden())
});

const mapStateToProps = (state) =>({
    itemCount: selectCardItemsCount(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);