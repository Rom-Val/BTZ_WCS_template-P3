import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import MenuBurger from '../components/MenuBurger';
import '../styles/InscriptionForm.css';
import { postUser } from '../services';
import { useNavigate,  } from 'react-router-dom';

function calculateAge(birthdate) {
  const today = new Date();
  const selectedDate = new Date(birthdate);
  const age = today.getFullYear() - selectedDate.getFullYear();
  const month = today.getMonth() - selectedDate.getMonth();
  if (month < 0 || (month === 0 && today.getDate() < selectedDate.getDate())) {
    return age - 1;
  }
  return age;
}

const InscriptionForm = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');
  const [isAgeValid, setIsAgeValid] = useState(false);
  const [password, setPassword] = useState('');
  const [samePassword, setSamePassword] = useState('');
  const [totalPrice, setTotalPrice] = useState('0 €');

  const [formValues, setFormValues] = useState({
    firstname: '',
    lastname: '',
    age: '',
    phone: '',
    mail: '',
    atelier: '',
    date: '',
    password: '',
    samepassword: '',
  });

  const handlePassword = (e) => {
    let newPassword = e.target.value;
    setPassword(newPassword);

    //REGEX RULES FOR A VALID & STRONG PASSWORD
    let lCase = /[a-z]/g; // check for lowercase letters
    let uCase = /[A-Z]/g; // check for uppercase letters
    let numCase = /[0-9]/g; // check for numbers
    let speCase = /\W|_/g; // check for special characters

    // REGEX TESTS
    if (newPassword.length === 0) {
      setErrorMessage('');
    } else if (!newPassword.match(lCase)) {
      setErrorMessage('Le mot de passe doit contenir des lettres minuscules');
    } else if (!newPassword.match(uCase)) {
      setErrorMessage('Le mot de passe doit contenir des lettres majuscules');
    } else if (!newPassword.match(numCase)) {
      setErrorMessage('Le mot de passe doit contenir un chiffre');
    } else if (!newPassword.match(speCase)) {
      setErrorMessage('Le mot de passe doit contenir un caractère spécial');
    } else if (newPassword.length < 8) {
      setErrorMessage('Le mot de passe doit avoir au moins 8 caractères');
    } else {
      setErrorMessage('');
    }
  };

  const handleSamePassword = (e) => {
    setSamePassword(e.target.value);
  };

  const onChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });

    if (e.target.name === 'atelier') {
      handlePrice()
    }
    if (e.target.name === 'password') {
      handlePassword(e);
    }

    if (e.target.name === 'samepassword') {
      handleSamePassword(e);
    }
  };

  const handlePrice = () => {
    if(formValues.atelier === "dégustation") {
      setTotalPrice('70 €')
    } else {
      setTotalPrice('30 €')
    }
  }

  const onSubmit = (e) => {
    e.preventDefault();

    postUser(formValues)
      .then(({data})=> (data))
      .then(function (result) {
        navigate(`/user/${result.id}/renseignement/`);
      })
      .catch(function (err) {
        alert(err.message);
      });
  };

  useEffect(() => {
    const validateAge = () => {
      const birthdate = new Date(formValues.age);
      const age = calculateAge(birthdate);
      setIsAgeValid(age >= 18);
    };

    validateAge();
  }, [formValues.age]);

  return (
    <div className="inscription-page">
      <Navbar />
      <MenuBurger />

      <h1>Inscription</h1>
      <form onSubmit={onSubmit} className="inscription-form">
        <label htmlFor="last-name">Nom</label>
        <input
          onChange={onChange}
          type="text"
          name="lastname"
          id="last-name"
          placeholder="Entrez votre nom..."
          required
        />

        <label htmlFor="first-name">Prénom</label>
        <input
          onChange={onChange}
          type="text"
          name="firstname"
          id="first-name"
          placeholder="Entrez votre prénom..."
          required
        />

        <label htmlFor="age">Age</label>
        <input
          onChange={onChange}
          type="date"
          name="age"
          id="age"
          placeholder="Sélectionner votre date de naissance..."
          required
          />
          {!isAgeValid && formValues.age && (
            <p className='error-msg'>Vous devez avoir au moins 18 ans pour participer.</p>
          )}

        <label htmlFor="phone">Numéro de téléphone</label>
        <input
          onChange={onChange}
          type="tel"
          name="phone"
          id="phone"
          placeholder="Entrez votre numéro de téléphone..."
          required 
        />

        <label htmlFor="email">Adresse mail</label>
        <input
          onChange={onChange}
          type="email"
          name="mail"
          id="email"
          placeholder="Entrez votre adresse mail..."
          required
        />

        <label htmlFor="atelier">Choix de l'atelier</label>
        <select onChange={onChange} name="atelier" id="atelier" required>
          <option value="" hidden>
            Sélection de l'atelier
          </option>
          <option value="création">Atelier Création</option>
          <option value="dégustation">Atelier Dégustation</option>
        </select>

        <label htmlFor="date">Date d'atelier préférée</label>
        <input onChange={onChange} type="date" name="date" id="date" />

        <label htmlFor="password">Mot de passe</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Choisissez votre mot de passe"
          onChange={onChange}
          value={formValues.password}
          required
          />
        <p className="error-msg">{errorMessage}</p>

        <label htmlFor="same-password">Confirmation mot de passe</label>
        <input
          type="password"
          name="samepassword"
          id="same-password"
          placeholder="Choisissez votre mot de passe"
          onChange={onChange}
          value={formValues.samepassword}
          required
          />
        <p className={formValues.samepassword === formValues.password ? "same-pwd" : "error-msg"}>
          Erreur : les mots de passe sont différents
        </p>
        <h2>Montant : <span>{totalPrice}</span></h2>
        <button type="submit">Valider l'inscription</button>
      </form>
    </div>
  );
};

export default InscriptionForm;
