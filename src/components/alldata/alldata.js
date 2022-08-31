import React from 'react'
class AllData extends React.Component {
   render() {
      return <h1> All Data </h1>
   }
}
export default AllData;


// import { useState, useContext, useEffect } from 'react';
// import { UserContext, Card } from '../../context';
// import { Link } from 'react-router-dom';
// import React from 'react';

// function AllData(){
//    const ctx = React.useContext(UserContext);
//    const rows = [];
//    let i = 0;
//    for (const row of ctx.users) {
//      rows.push(
//        <tr key={i}>
//          <td>{row.name}</td>
//          <td>{row.email}</td>
//          <td>{row.password}</td>
//          <td>{row.balance}</td>
//        </tr>
//      );
 
//      i++;
//    }
 
//    return (
 
//      <>
 
//          <table className="table table-striped">
//                  <thead>
//                      <tr>
//                      <th>Name</th>
//                      <th>Email</th>
//                      <th>Password</th>
//                      <th>Balance</th>
//                      </tr>
//                  </thead>
//                  <tbody>
//                  {rows}
                     
//                  </tbody>
//              </table>
 
 
//      </>
//    )
//  }

//  export default AllData;