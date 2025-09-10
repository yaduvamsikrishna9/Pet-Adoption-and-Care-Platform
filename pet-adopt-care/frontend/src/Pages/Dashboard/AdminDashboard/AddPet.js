import React, { useState } from 'react';
import axios from 'axios';

const AddPet = ({ onPetAdded }) => {
  const [pet, setPet] = useState({ name: '', breed: '', age: '', description: '', image: '' });

  const handleChange = (e) => {
    setPet({ ...pet, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/pets', pet);
    onPetAdded(); // callback to refresh pet list
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="breed" placeholder="Breed" onChange={handleChange} />
      <input name="age" placeholder="Age" type="number" onChange={handleChange} />
      <input name="gender" placeholder="Gender" onChange={handleChange} />
      <input name="image" placeholder="Image URL" onChange={handleChange} />
      <button type="submit">Add Pet</button>
    </form>
  );
};

export default AddPet;
