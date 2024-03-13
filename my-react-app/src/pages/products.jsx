import { Fragment } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button";

const products = [
    {
        id: 1,
        name: "Gamis Minimals",
        price: "Rp.250.000",
        image: "/images/gamis.jpg",
        description:` Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        Corporis velit inventore nihil sed mollitia nemo, 
        officia odio at ipsa consequatur doloribus voluptatum quisquam, 
        quod nisi tenetur? Adipisci inventore ad recusandae.`
    },
    {
        id: 2,
        name: "Gamis Syari",
        price: "Rp.250.000",
        image: "/images/gamis.jpg",
        description:` Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        Corporis velit inventore nihil sed mollitia nemo,`
    },
    {
        id: 3,
        name: "Abaya Cirle",
        price: "Rp.180.000",
        image: "/images/gamis.jpg",
        description:` Ini adalah Gamis terbaru koleksi Nila Enjeli.`
    }
];

const email = localStorage.getItem('email');

const ProductsPage = () => {
    const handleLogout =() =>{
        localStorage.removeItem('email');
        localStorage.removeItem('password');
        window.location.href="/login";
    };
    return(
        <Fragment>
            <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-5">
                {email}
                <Button className="ml-5 bg-black" onClick={handleLogout}>Logout</Button>
            </div>
        <div className="flex justify-center py-3">
           
            {products.map((products) => (
                 <CardProduct key={products.id}>
                 <CardProduct.Header image={products.image}/>
                 <CardProduct.Body title={products.name}>
                 {products.description}
                 </CardProduct.Body>
                 <CardProduct.Footer price={products.price}/>
                 </CardProduct>
           ))}
           
        </div>
        </Fragment>
    );
 };

export default ProductsPage;