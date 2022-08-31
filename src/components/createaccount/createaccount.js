// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import { Link } from 'react-router-dom';
// import Nav from 'react-bootstrap/Nav';
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';


// function CreateAccount() {
//    return (
//       <Card style={{ width: '18rem' }}>
//         <Card.Header>Crear Cuenta</Card.Header>
//         <Card.Body>
//         <InputGroup className="name">
//         <Form.Control
//           placeholder="Nombre"
//           aria-label="Nombre"
//           aria-describedby="basic-addon1"
//         />
//       </InputGroup>   <InputGroup className="e-mail">
//         <Form.Control
//           placeholder="e-mail"
//           aria-label="e-mail"
//           aria-describedby="basic-addon1"
//         />
//       </InputGroup>
//       <InputGroup className="password">
//         <Form.Control
//           placeholder="password"
//           aria-label="password"
//           aria-describedby="basic-addon1"
//         />
//       </InputGroup>
//           <Button variant="primary">Crear Cuenta</Button>
//         </Card.Body>
//       </Card>
//     );
// }

// export default CreateAccount;

import { useState, useContext, useEffect } from 'react';
import { UserContext, Card } from '../../context';
import { Link } from 'react-router-dom';
import React from 'react';

// function CreateAccount({ updateUser }) {
//     const [show, setShow] = useState(true);
//     const [status, setStatus] = useState('');
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const ctx = React.useContext(UserContext);

//     function handleCreate () {
//         if (!validate(name, 'Name')) return;
//         if (!validate(email, 'Email')) return;
//         if (!validate(password, 'Password')) return;
//         ctx.users.push({ name, email, password, balance: 100, isLogged: "false" });
//         updateUser(user)
//         setShow(false);
//     }

//     const validateEmail = (email) => {
//         // Taken from a tutorial from:
//         // https://www.w3docs.com/snippets/javascript/how-to-validate-an-e-mail-using-javascript.html
//         const res = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//         return res.test(String(email).toLowerCase());
//     }

//     const checkPassword = (password) => {
//         const res = /^[A-Za-z]\w{7,14}$/;
//         return res.test((String(password)));
//     }

//     function clearForm () {
//         const user = { name: "", email: "", password: "", balance: 0 }
//         updateUser(user);
//         setName('')
//         setEmail('')
//         setPassword('')
//         setShow(true)
//     }

//     const validate = (field, label) => {
//         /*
//         Validations:
//             Name cannot be blank
//             Email cannot be blank
//             Password cannot be blank
//             Email is valid
//             Password is 8 characters long
//             Password contains valid characters
//         */
//         if (!field) {
//             setStatus(`Error: ${label} cannot be blank.`)
//             setTimeout(() => setStatus(''), 3000);
//             return false
//         }
//         else if (!validateEmail(email)) {
//             setStatus(`Error: Email is not valid.`)
//             setTimeout(() => setStatus(''), 3000);
//             return false
//         }
//         else if (password.length < 8) {
//             setStatus(`Error: Password must be at least 8 characters.`);
//             setTimeout(() => setStatus(''), 3000);
//             return false
//         }
//         else if (!checkPassword(password)) {
//             setStatus(`Error: Password contains invalid characters.`);
//             setTimeout(() => setStatus(''), 3000);
//             return false
//         }
//         return true
//     }


//     useEffect(() => {
//         const btn = document.getElementById('createButton')
//         const condition_disable = name || email || password
//         if (condition_disable) btn.removeAttribute('disabled', '')
//         else btn.setAttribute('disabled', '')
//     }, [name, email, password])

//     return (
//         <Card
//             header="Create Account"
//             body={show ? (
//                 <>
//                     <div className="create-account-error" id="error">{status}</div>
//                     <label htmlFor="name" id="start_form">Name</label>
//                     <input type="input" className="form-control" id="name"
//                         placeholder="Enter Name" value={name}
//                         onChange={e => setName(e.currentTarget.value)} /><br />

//                     <label htmlFor="email">Email</label>
//                     <input type="input" className="form-control" id="email"
//                         placeholder="Enter email" value={email}
//                         onChange={e => setEmail(e.currentTarget.value)} /><br />

//                     <label htmlFor="password">Password</label>
//                     <input type="password" className="form-control" id="password"
//                         placeholder="Enter password" value={password}
//                         onChange={e => setPassword(e.currentTarget.value)} /><br />

//                     <button id="createButton" type="submit" className="btn btn-light" onClick={handleCreate}>
//                         Submit
//                     </button>
//                 </>
//             ) : (
//                 <>
//                     <h5>Success</h5>
//                     <>
//                         <img src='images/dollars.png' alt='Bundle of dollar bills from freepngimg.com' />
//                         <hr />
//                         <p>Welcome to the Bad Bank</p>
//                     </>
//                     <Link to="/deposit">Make a deposit</Link><br />
//                     <Link to="/deposit">Make a Withdrawal</Link><br />
//                     <Link to="#" onClick={clearForm}>Create new account</Link><br />
//                 </>
//             )}
//         />
//     )
// }

// export default CreateAccount

const CreateAccount=()=>{
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [name, setName]         = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const ctx = React.useContext(UserContext);  

  function validate(field, label){
      let isValid = true;
      if (!field) {
        setStatus('Error: ' + label);
        setTimeout(() => setStatus(''),3000);
        return false;
      }
      if (label == 'email'){
        isValid = String(field).toLowerCase().match(
          /\S+@\S+\.\S+/
        );
        setStatus(isValid ? '' : 'Email is invalid');
      }
      if (label == 'password'){
        isValid = field.length >= 8;
        setStatus(isValid ? '': 'Password is too short');
      }
      if (label == 'name')
      {
        isValid = field.length >= 3;
        setStatus(isValid ? '': 'Name is too short');
      }
      if (!isValid){
        console.log(status);
        return false;
      }
      else {
        return true;
      }
  }

  function handleCreate(){
    console.log(name,email,password);
    if (!validate(name,     'name'))     return;
    if (!validate(email,    'email'))    return;
    if (!validate(password, 'password')) return;
    ctx.users.push({name,email,password,balance:100});
    setShow(false);
  }    

  function clearForm(){
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
  }

  return (
    <Card
      bgcolor="warning"
      txtcolor="white"
      header="Create Account"
      status={status}
      body={show ? (  
              <>
              Name<br/>
              <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)} /><br/>
              Email address<br/>
              <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
              Password<br/>
              <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
              <button type="submit" disabled={ (name && email && password) ?false:true} className="btn btn-light" onClick={handleCreate}>Create Account</button>
              </>
            ):(
              <>
              <h5>Success</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>
              </>
            )}
    />
  )
}

export default CreateAccount;