import React, { useState } from 'react';

function useInputValidation(initialState, validate) {
  const [state, setState] = useState(initialState);

  const [errors, setErrors] = React.useState({});
  const [isSubmitting, setSubmitting] = React.useState(false);

  const [step, setStep] = useState(1);

  const onChangeStep = e => {
    setStep(2);
  };

  React.useEffect(() => {
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0;
      if (noErrors) {
        setSubmitting(false);
      } else {
        setSubmitting(false);
      }
    }
  }, [errors, isSubmitting]);

  const handleChange = evt => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const validationErrors = validate(state);
    setErrors(validationErrors);
    setSubmitting(true);
    const noErrors = Object.keys(validate(state)).length === 0;
    if (noErrors) onChangeStep();
  };

  return {
    handleSubmit,
    handleChange,
    isSubmitting,
    errors,
    state,
    step,
    setStep
  };
}

export default useInputValidation;
