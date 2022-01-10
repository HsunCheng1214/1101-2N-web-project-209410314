import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value

// React
// value, onChange

const rootUrl ="http://localhost:5000";

const T43_14_ControlledInputs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!name || !email) return;

    const user={name,email};

    try{
        const url=`${rootUrl}/crown2_14/create`;
        await fetch(url,{
          method:'POST',
          headers:{
            'Content-Type':'application/json',
          },
          body:JSON.stringify(user)
        });
        setName('');
        setEmail('');

        
    } catch(err) {
      console.log(err);
    }
  };

  return (
    <>
      <article>
        <from ClassName="form" onSubmit={handleSubmit}>
          <div ClassName="form-control">
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);}}/>
          </div>
          <div ClassName="form-control">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit">Add Person</button>
        </from>
      </article>
    </>
  );
};

export default T43_14_ControlledInputs;
