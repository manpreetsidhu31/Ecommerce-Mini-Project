import { ADD_ADDRESS, ADD_TO_CART, CHANGE_ORDER_CART, CHANGE_QUANTITY, PLACE_ORDER, SET_SHIP_ADDRESS,EMPTY_CART,REMOVE_ITEM, INIT_PRODUCTS } from "../actions";

const initialStateProducts = {
    products:[
    {
    id:1,
    name:'Sony WX-5',
    category:'Headphones',
    price: 100.75,
    rating: 3,
    color:'red',
    size:'S',
    details:{
        product:"",
        warranty:"",
        merchant:""
    },
    image:'product-1-square',
    images:['product-1-square','product-1-square','product-1-square']
  },
  {
    id:2,
    name:'Apple Watch 2',
    category:'SmartWatches',
    price: 500.75,
    rating: 4,
    color:'black',
    size:'',
    details:{
        product:"",
        warranty:"",
        merchant:""
    },
    image:'product-2-square',
    images:['product-2','product-2-2','product-2-3']
  },
  {
    id:3,
    name:'Apple iPhone 11',
    category:'Mobile',
    price: 799.75,
    rating: 4,
    color:'black',
    size:'',
    details:{
        product:"",
        warranty:"",
        merchant:""
    },
    image:'product-3-square',
    images:['product-3','product-3-2','product-3-3']
  }
  ]
  }
  
const initialStateCart = {
  items:[]
}

const initialStateOrder = {
  items : [],
  shipping_charges : 50,
  discount_in_percent : 10,
  shipping_address:'',
  total_items:0,
  total_cost:0,
}

const initialStateUser = {
  name:'John',
  email: 'john@example.com',
  addresses: [{
    first_name:'John',
    last_name:'Smith',
    address1:'123',
    address2:'New Street',
    country:'India',
    state:'Maharashtra',
    pin_code:411001,
    phone:'+91 8654443098'
  },
  {
    first_name:'John',
    last_name:'Doe',
    address1:'245',
    address2:'Old Street',
    country:'India',
    state:'Maharashtra',
    pin_code:411003,
    phone:'+91 9988241645'
  }
],
  orders: []
}

  const productReducer = (state=initialStateProducts,action)=>{
    switch(action.type){
    case INIT_PRODUCTS:
      return {...state,products:action.payload}
    default:  
       return state;
  }
  };

  const cartReducer = (state=initialStateCart,action)=>{
    switch(action.type){
      case ADD_TO_CART:
       /* if(state.items.find((item)=>item._id===action.payload._id)){
          return state;
        }*/
        return {...state,items:[...state.items,{...action.payload,quantity:1}]}//cart state
      case CHANGE_QUANTITY:
        const oldItem = state.items.find((item)=>item._id===action.payload._id);
        const index = state.items.indexOf(oldItem);
        const newItems = [...state.items];
        newItems[index] = action.payload;
        return {...state,items:newItems};
      case REMOVE_ITEM:
        const item = action.payload;
        const i = state.items.findIndex(it=>it._id===item._id);
        const itemsArray = [...state.items];
        itemsArray.splice(i,1);
        return {...state,items:itemsArray}

      case EMPTY_CART:
        return {...state,items:[]}
      default:
        return state;
    }
    
  }


  const orderReducer = (state=initialStateOrder,action)=>{
    switch(action.type){
      case CHANGE_ORDER_CART:
        const items = action.payload;
        const total_items = items.reduce((total,item)=>total+(item.quantity*1),0);
        const total_cost = items.reduce((total,item)=>total+item.price*item.quantity,0);
        return {...state,items:action.payload,total_items,total_cost}
      case SET_SHIP_ADDRESS:
          return {...state,shipping_address:action.payload}
      default:
        return state;
    }
    
  }

  const userReducer = (state=initialStateUser,action)=>{
    switch(action.type){
      case ADD_ADDRESS:
        return {...state,addresses:[...state.addresses,action.payload]}
        case PLACE_ORDER:
          return {...state,order:[...state.orders,action.payload]}
      default:
        return state;
    }
    
  }

  export {productReducer,cartReducer,orderReducer,userReducer};