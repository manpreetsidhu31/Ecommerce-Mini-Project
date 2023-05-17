
import Nav from '../components/navbar';
import Footer from '../components/footer';
import {useDispatch, useSelector} from 'react-redux';
import ProductDetails from '../components/product-details';
import { useParams } from 'react-router-dom';
import { ADD_TO_CART } from '../actions';
import { addToCartAC } from './../actions/index';
import { changeQuantityAC } from '../actions';


const ProductDetailsPage = () => {
const dispatch = useDispatch();
let { productId } = useParams();
const cartItems = useSelector(state=>state.cart.items)
const products = useSelector(state=>state.product.products)
const product = products.find(p=>p._id===productId)
console.log(productId,products,product);

const addToCart = (product)=>{
  dispatch(addToCartAC(product))
}


 
  return (
    <>
    <Nav cartCount={cartItems.length}></Nav>
    <ProductDetails product={product} addToCart={addToCart}></ProductDetails>
    <Footer></Footer>
    </>
  );
}

export default ProductDetailsPage;