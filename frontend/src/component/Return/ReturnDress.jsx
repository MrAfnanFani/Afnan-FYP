import React, { Fragment, useEffect } from "react";
import "./ReturnDress.css";
import { useSelector, useDispatch } from "react-redux";
import MetaData from "../layout/MetaData";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import { getOrderDetails, clearErrors } from "../../actions/orderAction";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
import { useState} from "react";

// import ProductDetails from "../Product/ProductDetails";

const ReturnDress = ({ match },{returns}) => {
  const { order, error, loading } = useSelector((state) => state.orderDetails);
 


  const dispatch = useDispatch();
  const alert = useAlert();

  // setReturnDate(JSON.parse(localStorage.getItem(id)));

  
console.log(returns)


  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getOrderDetails(match.params.id));
    
  }, [dispatch, alert, error, match.params.id]);




  

  //   const addToCartHandler = () => {
  //   alert.success("Item Added To Cart");
 
const [price, setPrice] = useState(0);

  const maxLengthCheck = (object) => {
 if (object.target.value.length > object.target.maxLength) {
  object.target.value = object.target.value.slice(0, object.target.maxLength)
   }
  }  

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="Order Details" />
          <div className="orderDetailsPage">
            <div className="orderDetailsContainer">
              <Typography component="h1">
                Order #{order && order._id}
              </Typography>
              
           

            <div className="fine">
          <h2>Calculate Fine </h2>
            <pre>
            Late Return Policies <br/><br/>
               </pre> <span className="finefine"> 1-Day(24Hrs) =  1*(5% of the Original Price)<br/>
               2-Day(48Hrs) = 2*(5% of the Original Price)<br/>
               3-Day(72Hrs) = 3*(5% of the Original Price)<br/><br/>
               1-Week or more = 15% Add-Up to Original Price/Day
                 </span>
<form >

          <h2 className="late">Enter No of Exceeded Days
                           <input type="number" maxLength="1" onInput={maxLengthCheck} onChange={e => { setPrice( ((e.target.value*700)+150) ) } }/>



         <h3>FINE : 
           {price}
           
      
         </h3>
          </h2>

                {/* <input type="number" onChange={e => { setDay( (e.target.value*500) - 10000 ) } }/> */}


        
         </form>
        </div>

              <Typography>Shipping Info</Typography>
              <div className="orderDetailsContainerBox">
                <div>
                  <p>Name:</p>
                  <span>{order.user && order.user.name}</span>
                </div>
                <div>
                  <p>Phone:</p>
                  <span>
                    {order.shippingInfo && order.shippingInfo.phoneNo}
                  </span>
                </div>
                <div>
                  <p>Address:</p>
                  <span>
                    {order.shippingInfo &&
                      `${order.shippingInfo.address}, ${order.shippingInfo.city}, ${order.shippingInfo.state}, ${order.shippingInfo.pinCode}, ${order.shippingInfo.country}`}
                  </span>
                </div>
              </div>
              <Typography>Payment</Typography>
              <div className="orderDetailsContainerBox">
                <div>
                  <p
                    className={
                      order.paymentInfo &&
                      order.paymentInfo.status === "succeeded"
                        ? "greenColor"
                        : "redColor"
                    }
                  >
                    {order.paymentInfo &&
                    order.paymentInfo.status === "succeeded"
                      ? "PAID"
                      : "NOT PAID"}
                  </p>
                </div>

                <div>
                  <p>Amount:</p>
                  <span>{order.totalPrice && order.totalPrice}</span>
                </div>
              </div>

              {/* <Typography>Order Status</Typography>
              <div className="orderDetailsContainerBox">
                <div>
                  <p
                    className={
                      order.orderStatus && order.orderStatus === "Returned"
                        ? "greenColor"
                        : "redColor"
                    }
                  >
                    {order.orderStatus && order.orderStatus}
                  </p>
                </div>
              </div> */}
            </div>

                        
            {/* <button onClick={addToCartHandler}
                  >
                    Add to Cart
                  </button> */}
                  


            <div className="orderDetailsCartItems">
              <Typography>Order Items:</Typography>
              <div className="orderDetailsCartItemsContainer">
                {order.orderItems &&
                  order.orderItems.map((item) => (
                    <div key={item.product}>
                      <img src={item.image} alt="Product" />
                      <Link to={`/product/${item.product}`}>
                        {item.name}
                      </Link>{" "}
                      <span>
                        {item.quantity} X Rs. {item.price} ={" "}
                        <b>Rs. {item.price * item.quantity}</b>
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default ReturnDress;

