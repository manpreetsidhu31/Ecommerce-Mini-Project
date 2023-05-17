
import Nav from '../components/navbar';
import Footer from '../components/footer';
import Cart from '../components/cart';
import { REMOVE_ITEM, removeItemAC } from '../actions';
import {useDispatch, useSelector} from 'react-redux';
import { CHANGE_ORDER_CART,CHANGE_QUANTITY,changeOrderWithCart,changeQuantityAC } from '../actions';
import { useEffect } from 'react';


const CartPage = () => {
    const dispatch = useDispatch();
  
  const cartItems = useSelector(state=>state.cart.items)
  const order = useSelector(state=>state.order)
  useEffect(()=>{
    dispatch(changeOrderWithCart(cartItems));

  },[cartItems])

  const changeQuantity = (quantity,item)=>{
    dispatch(changeQuantityAC({...item,quantity:quantity}))
  }

  const removeItem = (item)=>{
    dispatch(removeItemAC(item))
  }


 
  return (
    <>
    <Nav cartCount={cartItems.length}></Nav>
    <Cart items={cartItems} order={order} changeQuantity={changeQuantity} removeItem={removeItem}></Cart>
    <Footer></Footer>
    </>
  );
}

export default CartPage;