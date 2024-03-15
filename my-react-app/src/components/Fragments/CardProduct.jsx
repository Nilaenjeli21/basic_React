import React from "react";
import Button from "../Elements/Button";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";

const CardProduct = (props) => {
    const {children} = props;
  return (
      <div className="w-full max-w-sm bg-gray-700 border border-grey-700 rounded-lg shadow mx-3 my-2 flex flex-col justify-beetwen">
            {children}
        </div>
  );
};
const Header = (props) => {
    const {image, id} = props;
    
    return(
    <Link to={`/products/${id}`}>
        <img src={image} 
            alt="product"
            className="p-8 rounded-t-lg h-60 w-full object-cover" />
    </Link>
);
};


const Body = (props) => {
    const { children, title } = props;
    console.log(title);
    return (
        <div className="px-5 pb-5 h-full">
            <a href="#">
                <h5 className="text-xl font-semibold tracking-tigh text-white">
                    {title.substring(0, 20)}...
                </h5>
                <p className="text-m text-white">{children.substring(0, 100)}...</p>
            </a>
        </div>
    );
};


const Footer = (props) => {
    const {price, handleAddToCart, id} = props;
    const dispatch = useDispatch();
    return(
        <div className="flex items-center justify-between px-5 pb-5">
            <span className="text-xl font-bold text-white">
            {price.toLocaleString('id-ID', {style: 'currency', currency:'USD'})}
            </span>
            <Button variant="bg-blue-600" onClick={() => dispatch(addToCart({id, qty:1})) }>
                Add To Cart
            </Button>
        </div>
    );
};
CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;
export default CardProduct;
