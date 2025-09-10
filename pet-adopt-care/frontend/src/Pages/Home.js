import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css';
import { motion } from 'framer-motion';

const Home = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const fetchPets = async () => {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/pets`);
      setPets(res.data);
    };
    fetchPets();
  }, []);

  return (
    <div className="home-container">
      <h2>Available Pets for Adoption</h2>
      <div className="card-grid">
        {pets.map((pet) => (
          <motion.div
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="pet-card"
            key={pet._id}
          >
            <img src={pet.image} alt={pet.name} />
            <h3>{pet.name}</h3>
            <p>Breed: {pet.breed}</p>
            <p>Age: {pet.age} years</p>
            <p>Gender: {pet.gender || 'Unknown'}</p>
            <button>Adopt</button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Home;
