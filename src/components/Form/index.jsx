import React, { useState } from 'react';
import './style.css';

function Form() {

   const [user, setUser] = useState({name: '', email: '', password: ''});
   const {name, email, password} = user

    const handleChange = (e) => {
     setUser(...user, {[e.target.name]: e.target.value});
    };

    const handleSubmit = (e) =>{
        console.log("Form is Submitted");
        console.log(user);
        e.preventDefault();
    }

    return (
        <div>
            <h1>Registration</h1>
            <form action="" onSubmit={handleSubmit}>
               <div>
                 <label htmlFor="name">Name  :</label>   
                 <input 
                 type="text" 
                 name="name" 
                 id="name" 
                 value={name} 
                 onChange={handleChange} 
                 placeholder="Enter Your Name" 
                 required />
               </div>
                    <br/>
               <div>
                 <label htmlFor="email">Email :</label>   
                 <input 
                 type="email" 
                 name="email" 
                 id="email" 
                 value={email} 
                 onChange={handleChange} 
                 placeholder="Enter Your Email" 
                 required />
               </div>
                    <br/>
               <div>
                 <label htmlFor="password">Pswrd :</label>   
                 <input 
                 type="password" 
                 name="password" 
                 id="password" 
                 value={password} 
                 onChange={handleChange}  
                 placeholder="Enter Your Password" 
                 required />
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
