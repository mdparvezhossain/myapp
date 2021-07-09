import React, { useState } from 'react';
import './style.css';

function Form() {

   const [name, setName] = useState(' ');
   const [email, setEmail] = useState(' ');
   const [password, setPassword] = useState(' ');

    const nameChange = (e) =>{
        setName(e.target.value);
    }
    const emailChange = (e) =>{
        setEmail(e.target.value);
    }
    const pwdChange = (e) =>{
        setPassword(e.target.value);
    }
    const handleSubmit = (e) =>{
        console.log("Form is Submitted");
        console.log(name, email, password);
        e.preventDefault();
    }

    return (
        <div>
            <h1>Registration</h1>
            <form action="" onSubmit={handleSubmit}>
               <div>
                 <label htmlFor="name">Name  :</label>   
                 <input type="text" name="name" id="name" value={name} onChange={nameChange} placeholder="Please Enter Your Name" required />
               </div>
                    <br/>
               <div>
                 <label htmlFor="email">Email :</label>   
                 <input type="email" name="email" id="email" value={email} onChange={emailChange} placeholder="Please Enter Your Email" required />
               </div>
                    <br/>
               <div>
                 <label htmlFor="password">Pswrd :</label>   
                 <input type="password" name="password" id="password" value={password} onChange={pwdChange}  placeholder="Please Enter Your Password" required />
               </div>
                    <br/>
               <div>   
                 <button type="submit">Register</button>
               </div>
            </form>
        </div>
    )
}

export default Form;
