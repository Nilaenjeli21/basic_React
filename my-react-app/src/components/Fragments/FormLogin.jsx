import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormLogin = () => {
    const handleLogin = () => {
        event.preventDefault();
        localStorage.setItem('email', event.target.email.value);
        localStorage.setItem('password', event.target.password.value);
        window.location.href = "/products";
    };
    return(
        <form onSubmit={handleLogin}>
 <InputForm
     label ="email" 
     type="email" 
     placeholder="example@gmail.com" 
     name ="email"
     />
    
    <InputForm
     label ="Password" 
     type="password" 
     placeholder="*******" 
     name ="password"
     />
     <Button variant="bg-blue-600 w-full" type="submit">Login</Button>
     </form>
    
    )
};

export default FormLogin;