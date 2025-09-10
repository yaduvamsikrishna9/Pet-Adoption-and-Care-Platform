import React from 'react';

const PetList = ({ filteredPets }) => {
  return (
    <div className="card-container">
      {filteredPets.map((pet) => (
        <div key={pet._id} className="pet-card">
          <img src={pet.image} alt={pet.name} className="pet-image" />
          <h3 style={{ marginTop: '12px' }}>{pet.name}</h3>
          <p><strong>Breed:</strong> {pet.breed}</p>
          <p><strong>Age:</strong> {pet.age} years</p>
          <p><strong>Gender:</strong> {pet.gender || 'Unknown'}</p>
          <button className="adopt-button">Adopt</button>
        </div>
      ))}
    </div>
  );
};

export default PetList;
