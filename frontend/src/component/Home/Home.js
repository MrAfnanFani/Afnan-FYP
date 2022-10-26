import React, { Fragment, useEffect } from "react";
// import { CgMouse } from "react-icons/all";
import "./Home.css";
import ProductCard from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
import imga from "../../images/imga.jpg";
import imgb from "../../images/imgb.jpg";
import imgc from "../../images/imgc.jpg";
import Main from "../../component/Main/Main";


const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);
    const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="ŜŘ-SHADI RENTALS" />
        
          <div className="banner">
            <p>***FREE SHIPPING. FREE DRY CLEANING. FREE STYLLING HELP. @SIGN UP ***</p>
            {/* <h1>FIND AMAZING PRODUCTS BELOW</h1>  */}
          <div class="getmarriage">
          <h2>GETTING MARRIED ?</h2>
            <p>
              Wanna Try your Dream Wedding Look, We Got You Covered. <span className="vtr"> TRY OUR VIRTUAL DRESSING ROOM </span>
            </p>
            <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="vb"
                onClick={handleClick}
              >
                TRY VIRTUALLY
              </NavLink>
        </div>
         
            </div>


<div className="asian-back">
     <section class="course">
        <h1>Why Asian Bridal Dressing is our Priority</h1>
    
           <div class="row">
               <div class="course-col">
            <img src={imga} alt="Image1"></img>
            <p>
              Our increasingly diverse society is resulting in a rise in multi-cultural weddings.
               Indian wedding celebrations are spread out over several days, incorporating elaborate
                traditional clothing and customs.
            </p>
               </div>
                        <div class="course-col">
                        <img src={imgb} alt="Image1"></img>

            <p>South Asian wedding attire is stunning and intricate with multiple style options. However, for 
            the first-time attendee, the options and styles can be a little overwhelming
             and often come with a heavy price tag!</p>
        </div>
        <div class="course-col">
                        <img src={imgc} alt="Image1"></img>

            <p>We'll find the right outfit for your event all without breaking the bank. 
            Our Indian clothing rental collection is pre-stitched,pre-pleated, and 
            adjustable to different body’s.We are a one-stop shop where you can get the full look! </p>
        </div>
    </div>



    </section>

             <Main />
         </div>
          <h2 className="homeHeading">Featured Products</h2>

          <div className="container" id="container">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>
          
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
