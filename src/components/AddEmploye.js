import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addEmploye } from '../actions';

const AddEmploye = () => {
  const [employe, setEmploye] = useState({
    numero: '',
    nom: '',
    prenom: '',
    dateNaissance: '',
    adresse: '',
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setEmploye({ ...employe, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (employe.nom && employe.numero) {
      dispatch(addEmploye(employe));
      setEmploye({
        numero: '',
        nom: '',
        prenom: '',
        dateNaissance: '',
        adresse: '',
      });
    } else {
      alert('Please fill in all required fields!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="numero" placeholder="Numéro" value={employe.numero} onChange={handleChange} required />
      <input name="nom" placeholder="Nom" value={employe.nom} onChange={handleChange} required />
      <input name="prenom" placeholder="Prénom" value={employe.prenom} onChange={handleChange} />
      <input name="dateNaissance" type="date" value={employe.dateNaissance} onChange={handleChange} />
      <input name="adresse" placeholder="Adresse" value={employe.adresse} onChange={handleChange} />
      <button type="submit">Ajouter Employé</button>
    </form>
  );
};

export default AddEmploye;
