import'./App.css' 
import  Header from './components/Header';  //This line imports a component named Header so you can use it in this file (usually App.jsx).
import Footer from './components/Footer';
function App() {
  
  const arr =[2024, 2025, 2026];
  const c={name:"KIET", location:"Ghaziabad", EstYear:1990} //here we have create objcd
  return (
    <div>
       <Header title="My first app"/>
       <Header app="Thanks"/>
       
  
      <Footer year={arr} company={c}/>
    </div>
     
  )
}

export default App
