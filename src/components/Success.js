import React from 'react';

const Success = ({ state, filename }) => {
  return (
    <>
      <h4 className='display-4 text-center mb-4'>
        Votre dépôt électronique de rapport a été effectué avec Succès.
      </h4>
      <ul className='list-group list-group-flush'>
        <li className='list-group-item'>
          Nom: <span className='text-primary'> {state.nom} </span>
        </li>
        <li className='list-group-item'>
          Prenom: <span className='text-primary'> {state.prenom} </span>
        </li>
        <li className='list-group-item'>
          Adresse mail: <span className='text-primary'> {state.email} </span>
        </li>
        <li className='list-group-item'>
          Numéro CIN: <span className='text-primary'> {state.cin} </span>
        </li>
        <li className='list-group-item'>
          Code d'autorisation:{' '}
          <span className='text-primary'> {state.code} </span>
        </li>
        <li className='list-group-item'>
          Nom du projet:{' '}
          <span className='text-primary'> {state.projectName} </span>
        </li>
        <li className='list-group-item'>
          Rapport PDF: <span className='text-primary'> {filename}</span>
        </li>
        <li className='list-group-item'></li>
      </ul>
    </>
  );
};

export default Success;
