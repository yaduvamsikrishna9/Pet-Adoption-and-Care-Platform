import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditPet = ({ petId, onUpdateDone }) => {
  const [pet, setPet] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/pets`).then(res => {
      const found = res.data.find(p => p._id === petId);
      setPet(found);
    });
  }, [petId]);

  const handleChange = (e) => {
    setPet({ ...pet, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:5000/api/pets/${petId}`, pet);
    onUpdateDone();
  };

  if (!pet) return <p>Loading...</p>;

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={pet.name} onChange={handleChange} />
      <input name="breed" value={pet.breed} onChange={handleChange} />
      <input name="age" value={pet.age} onChange={handleChange} />
      <input name="description" value={pet.description} onChange={handleChange} />
      <input name="image" value={pet.image} onChange={handleChange} />
      <button type="submit">Update Pet</button>
    </form>
  );
};

export default EditPet;
