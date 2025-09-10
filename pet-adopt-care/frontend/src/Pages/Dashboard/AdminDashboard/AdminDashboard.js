import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddPet from './AddPet';
import EditPet from './EditPet';
import './AdminDashboard.css'; // Create this for styles

const AdminDashboard = () => {
  const [pets, setPets] = useState([]);
  const [editingPetId, setEditingPetId] = useState(null);

  const fetchPets = async () => {
    const res = await axios.get('http://localhost:5000/api/pets');
    setPets(res.data);
  };

  useEffect(() => {
    fetchPets();
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/pets/${id}`);
    fetchPets();
  };

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      <AddPet onPetAdded={fetchPets} />
      <div className="admin-pet-grid">
        {pets.map((pet) => (
          <div key={pet._id} className="admin-pet-card">
            <img src={pet.image} alt={pet.name} className="admin-pet-img" />
            <h4>{pet.name}</h4>
            <p><strong>Breed:</strong> {pet.breed}</p>
            <div className="admin-buttons">
              <button onClick={() => setEditingPetId(pet._id)}>Edit</button>
              <button onClick={() => handleDelete(pet._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>

      {editingPetId && (
        <EditPet petId={editingPetId} onUpdateDone={() => {
          setEditingPetId(null);
          fetchPets();
        }} />
      )}
    </div>
  );
};

export default AdminDashboard;
