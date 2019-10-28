import React from 'react';

const UserForm = ({
  handleChange,
  filename,
  onChangeFileName,
  onChangeRapport,
  handleSubmit,
  errors
}) => {
  return (
    <>
      <h4 className='display-4 text-center mb-4'>
        Dépôt Electronique de Rapports
      </h4>
      <form onSubmit={handleSubmit}>
        <div className='form-row'>
          <div className='form-group col-md-6'>
            {/* Nom de l'étudiant */}
            <label htmlFor='Nom'>Nom</label>
            <input
              type='text'
              className={'form-control' + (errors.nom ? ' is-invalid' : '')}
              id='Nom'
              name='nom'
              onChange={handleChange}
              placeholder="Nom de l'étudiant"
            />
            {errors.nom && <div className='invalid-feedback'>{errors.nom}</div>}
          </div>

          <div className='form-group col-md-6'>
            {/* Prénom de l'étudiant */}
            <label htmlFor='Prenom'>Prénom</label>
            <input
              type='text'
              className={'form-control' + (errors.prenom ? ' is-invalid' : '')}
              id='Prenom'
              name='prenom'
              onChange={handleChange}
              placeholder="Nom de l'étudiant"
            />
            {errors.prenom && (
              <div className='invalid-feedback'>{errors.prenom}</div>
            )}
          </div>
        </div>
        <div className='form-group'>
          {/* Adresse Email @ */}
          <label htmlFor='exampleInputEmail1'>Email</label>
          <input
            type='email'
            className={'form-control' + (errors.email ? ' is-invalid' : '')}
            id='exampleInputEmail1'
            name='email'
            onChange={handleChange}
            aria-describedby='emailHelp'
            placeholder='Adresse Email'
          />
          {errors.email && (
            <div className='invalid-feedback'>{errors.email}</div>
          )}
        </div>
        <div className='form-group'>
          {/*  CIN */}
          <label htmlFor='cin'>CIN</label>
          <input
            type='text'
            className={'form-control' + (errors.cin ? ' is-invalid' : '')}
            id='cin'
            name='cin'
            onChange={handleChange}
            placeholder='CIN'
          />
          {errors.cin && <div className='invalid-feedback'>{errors.cin}</div>}
        </div>
        <div className='form-group'>
          {/*  Code d'autorisation */}
          <label htmlFor='code'>Code d'autorisation</label>
          <input
            type='text'
            className={'form-control' + (errors.code ? ' is-invalid' : '')}
            id='code'
            name='code'
            onChange={handleChange}
            placeholder="Code d'autorisation de dépôt (communiqué par l'encadrant)"
          />
          {errors.code && <div className='invalid-feedback'>{errors.code}</div>}
        </div>
        <div className='form-group'>
          {/*  Nom du projet */}
          <label htmlFor='titre'>Nom du projet</label>
          <input
            type='text'
            className={
              'form-control' + (errors.projectName ? ' is-invalid' : '')
            }
            id='titre'
            name='projectName'
            onChange={handleChange}
            placeholder='Titre du projet réalisé'
          />
          {errors.projectName && (
            <div className='invalid-feedback'>{errors.projectName}</div>
          )}
        </div>
        {/* Rapport fichier PDF */}
        <div className='custom-file'>
          <input
            type='file'
            className='custom-file-input'
            id='validatedCustomFile'
            name='projectName'
            onChange={onChangeFileName}
            onMouseLeave={onChangeRapport}
            required
          />
          <label className='custom-file-label' htmlFor='validatedCustomFile'>
            {filename}
          </label>
          <small>Rapport de stage sou format PDF</small>
          <div className='invalid-feedback'>Invalide</div>
        </div>

        <button type='submit' className='btn btn-primary btn-block mt-4'>
          ENVOYER
        </button>
      </form>
    </>
  );
};

export default UserForm;
