
//import  Header from 'I/components/Header'
 import "./Header.css";
export default function Header(props) //props is an object that contains data passed from the parent component to Header. 
//export default function Header(obj) we can also use obj in place of props
{
return(
    <header>

        
    <h1>{props.title} {props.app}</h1>
    <nav className="nav">
        <a href="#">Home</a>
        <a href="#">About  us</a>
        <a href="#">Contact us</a>

       
    </nav>
    </header>
)
}
