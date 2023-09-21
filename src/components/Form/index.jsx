import React from 'react'
import { useState } from 'react';

const Form = (props) => {
    
    const [formData, setFormData] = useState({searchTerm: ""});

    const handleChange = (e) =>{
        setFormData({...formData, [event.target.name]: event.target.value});
    };

    const handleSubmit = (e) =>{
        event.preventDefault();

        props.moviesearch(formData.searchterm);
    };

  return (
    <div>
        <h1>The Form Component</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" name="searchterm" onChange={handleChange} value={formData.searchterm} />
            <input type="submit" value="submit" />
        </form>
    </div>
  )
};

export default Form