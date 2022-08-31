import React from 'react';
class Deposit extends React.Component {
   render() {
      return <h1> Deposit </h1>
   }
}
export default Deposit;

// import { useState, useContext, useEffect } from 'react';
// import { UserContext, Card } from '../../context';
// import { Link } from 'react-router-dom';
// import React from 'react';

// function Deposit(){
//    const ctx = React.useContext(UserContext); 
//    let inUser = ctx.loggedIn[0];
//    const [update, setUpdate] = React.useState('false');
//    const [value, setValue] = React.useState("");
//    const [show, setShow] = React.useState(true);
 
//    const handleTextChange = (event) => {
//      setValue(event.target.value);
//    }; 
 
//    function handleDeposit(){
//      let balance = document.getElementById("balance").value;
//      if (balance > 0 && !isNaN(balance)) {
//      inUser.user.balance += Number(balance);
//      setUpdate(true);
//      setShow(false);
//      }
//      else{
//        alert("Must be a positive number");
//      }
//    }
 
//    return (
//      <Card
//      txtcolor="blue"
//      header="Deposit"
//      body= {show? (inUser ? ( 
//        <>
       
//        <h5>{update ? "Balance: " + inUser.user.balance : "Balance: "+ inUser.user.balance}</h5>
//        <h6>Deposit Amount</h6>
//        <input type="number" width="300" id="balance" onChange={handleTextChange} value={value}></input>
//        <button type="submit" disabled={ value ?false:true} className="btn btn-light" onClick={handleDeposit}>Deposit</button>
//        </>
//        ) : ("Please Log In")) : ( "Awesome! Balance: $" + inUser.user.balance)}
     
//    />    
//    )
//  }

//  export default Deposit;