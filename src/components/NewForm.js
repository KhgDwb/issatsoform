import React, { useState } from 'react';
import UserForm from './UserForm';

import useInputValidation from './hooks/useInputValidation';
import validateHook from './hooks/validateHook';
import Success from './Success';

const INITIAL_STATE = {
  nom: '',
  prenom: '',
  email: '',
  cin: '',
  code: '',
  projectName: '',
  rapportTest: null
};

const NewForm = () => {
  const {
    handleSubmit,
    handleChange,
    errors,
    state,
    step
  } = useInputValidation(INITIAL_STATE, validateHook);

  const [rapport, setRapport] = useState(null);
  const [filename, setfilename] = useState(
    'Rapport : Déposez votre rapport complet (avec la page de garde) .pdf'
  );

  const onChangeFileName = e => {
    setfilename(e.target.files[0].name);
  };
  const onChangeRapport = e => {
    setRapport(e.target.files[0]);
  };

  return (
    <>
      {step === 1 ? (
        <UserForm
          handleChange={handleChange}
          filename={filename}
          onChangeFileName={onChangeFileName}
          onChangeRapport={onChangeRapport}
          handleSubmit={handleSubmit}
          errors={errors}
        />
      ) : (
        <Success state={state} filename={filename} rapport={rapport} />
      )}
    </>
  );
};

export default NewForm;
