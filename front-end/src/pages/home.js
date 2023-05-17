import ProductList from '../components/product-list';
import Nav from '../components/navbar';
import Carousel from '../components/carousel';
import Footer from '../components/footer';
import {useDispatch, useSelector} from 'react-redux';
import { ADD_TO_CART, addToCartAC, initializeProductsAC } from '../actions';
import { useEffect } from 'react';

const Home = () => {
    const dispatch = useDispatch();
  const products = useSelector(state=>state.product.products);
  const cartItems = useSelector(state=>state.cart.items)
  useEffect(()=>{
    dispatch(initializeProductsAC());
  },[])

  const addToCart = (product)=>{
    dispatch(addToCartAC(product))
  }


  return (
    <>
    <Nav cartCount={cartItems.length}></Nav>
    <Carousel></Carousel>
    <ProductList products={products} addToCart={addToCart}> </ProductList>
    <Footer></Footer>
    </>
  );
}

export default Home;