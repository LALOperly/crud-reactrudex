import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { deleteEmploye, updateEmploye } from '../actions';



const ListEmploye = () => {
  const employes = useSelector((state) => state.employes);
  const dispatch=useDispatch();

  return (
    <div>
      {employes.length > 0 ? (
        employes.map((emp) => (
          <div key={emp.numero} className="card">
            <h3>{emp.nom} {emp.prenom}</h3>
            <p>Numéro: {emp.numero}</p>
            <p>Date de Naissance: {emp.dateNaissance}</p>
            <p>Adresse: {emp.adresse}</p>
            <button type='submit' onClick={dispatch(updateEmploye(emp))} >Modifier</button>
            <button onClick={dispatch(deleteEmploye(emp.numero))} >Supprimer</button>
          </div>
        ))
      ) : (
        <p>Aucun employé ajouté.</p>
      )}
    </div>
  );
};

export default ListEmploye;
