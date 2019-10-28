export default function validateHook(values) {
  let errors = {};

  //Email Errors
  if (!values.email) {
    errors.email = 'Entrer votre adresse Email';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Email invalide';
  }

  //Prenom Errors
  if (!values.prenom) {
    errors.prenom = 'Entrer votre prenom';
  } else if (values.prenom.length < 3 || values.prenom.length > 20) {
    errors.prenom = 'Longeur du prenom invalide';
  }

  //Nom Errors
  if (!values.nom) {
    errors.nom = 'Entrer votre nom';
  } else if (values.nom.length < 3 || values.nom.length > 14) {
    errors.nom = 'Longeur du nom invalide';
  }

  //CIN Errors
  if (!values.cin) {
    errors.cin = 'Entrer votre CIN';
  } else if (values.cin.length !== 8) {
    errors.cin = 'Le numéro CIN doit avoir 8 chiffres';
  }

  //code Errors
  if (!values.code) {
    errors.code =
      'Veuillez contacter votre encadrant pour obtenir ce code de 20 caractères';
  } else if (values.code.length !== 20) {
    errors.code =
      'Veuillez contacter votre encadrant pour obtenir ce code de 20 caractères';
  }

  //projectName Errors
  if (!values.projectName) {
    errors.projectName = 'Entrer le nom du sujet';
  }

  return errors;
}
