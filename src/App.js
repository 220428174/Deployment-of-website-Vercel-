import './App.css';

import Header from './Header';
import CardList from './CardList';
import CardList2 from './CardList2';

import { useState } from 'react';
import Footer from './Footer';
import { Button } from "@mantine/core";

import { getAuth } from "firebase/auth";

import { useNavigate } from "react-router-dom";





function App() {

  const [searchTerm, setSearchTerm] = useState("")

  const auth = getAuth();

  let navigate = useNavigate();


  const logout = async () => {
    
    navigate("/logout");

  }

  
  
  
  return (

    <div className="App">

    

      <div className = "header-div">

      
      
        <div className = "header" > <Header /> 
          <div className = "moveBar">
          
            <input className="strechbar" 
            type="text" 
            placeholder="Search..." 
            onChange={
            (e)=>{setSearchTerm(e.target.value)}
            }
          value={searchTerm}/> 

        </div>

      </div>

      { auth.currentUser && < Button onClick={logout}> LOGOUT </Button >}

    </div>
        
    <div > <img class="profile-image" src="./bannerimage313.jpg" width="1491vm" height="300px" alt="banner"/></div>

    <div className = "body">

      <hr></hr>
      <h1> Articles </h1>
      <CardList searchTopic = {searchTerm} />
      <button name="button" value="OK" type="button" width = "20px">See more articles...</button>

      <br></br>
      <br></br>
      <br></br>
      
      <h1><u> The Team! </u></h1>
      
      <CardList2/>

      <button name="button" value="OK" type="button">Other Listed Projects...</button>

      <hr></hr>
      
      <Footer />
       
      <div class="grid-container">
        <div class="item1">
          <h4><u>About</u></h4>
          <p><a href="..." rel="noopener" >Home</a></p>
          <p><a href="..." rel="noopener" >About Us</a></p>
          <p><a href="..." rel="noopener" >Articles</a></p>
          <p><a href="..." rel="noopener" >Calculators</a></p>
        </div>
        <div class="item2">
          <h4><u>Support</u></h4>
          <p><a href="..." rel="noopener" >FAQS</a></p>
          <p><a href="..." rel="noopener" >Help</a></p>
          <p><a href="... to be continued" rel="noopener" >Contact Us</a></p>
        </div>
        <div class="item3">
          <h4><u>Stay Connected</u></h4>
          <p><img class="profile-image" src="./linkedinimage.png" width="auto" height="50px" alt="banner"/></p>
        </div>  
        <div class="item4">
          <h4><a href="https://policy.deakin.edu.au/view.current.php?id=00084." rel="noopener" >Privacy</a></h4>
        </div>
        <div class="item5">
          <h4>
          <a href="https://policy.deakin.edu.au/view.current.php?id=00084." rel="noopener" >Code of Conduct</a>
          </h4>
        </div>
        
    </div>

      <div>
      
        
      </div>

      

      </div>

      

    </div>
  );
}

export default App;

