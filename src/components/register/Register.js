import React, { useState } from 'react';
import axios from 'axios';
import './Register.css';

function Register() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirm_password: ''
  });

  const [showPassword, setShowPassword] = useState(false); 
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(''); 

  const { username, email, password, confirm_password } = formData;


  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== confirm_password) {
      setError("Les mots de passe ne correspondent pas !");
      return;
    }

    try {
      const res = await axios.post('http://127.0.0.1:8000/api-utilisateur/inscription', {
        username,
        email,
        password
      });

      console.log(res.data);
      setSuccess(true); 
      setError(''); 
    } catch (err) {
      console.error(err);
      setError("Une erreur s'est produite lors de l'inscription. Veuillez réessayer."); 
    }
  };

  return (
    <div className="signup-form">
      {success && <div className="alert alert-success">Inscription réussie !</div>} {}
      {error && <div className="alert alert-danger">{error}</div>} {}
      <form onSubmit={onSubmit}>
        <h2>Créer compte</h2>
        <p className="lead">C'est gratuit et cela ne prend guère plus de 30 secondes.</p>
        <div className="form-group">
          <div className="input-group">
            <span className="input-group-addon"><i className="fa fa-user"></i></span>
            <input
              type="text"
              className="form-control"
              name="username"
              placeholder="Nom utilisateur"
              value={username}
              onChange={onChange}
              required
            />
          </div>
        </div>
        <div className="form-group">
          <div className="input-group">
            <span className="input-group-addon"><i className="fa fa-paper-plane"></i></span>
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Adresse email"
              value={email}
              onChange={onChange}
              required
            />
          </div>
        </div>
        <div className="form-group">
          <div className="input-group">
            <span className="input-group-addon"><i className="fa fa-lock"></i></span>
            <input
              type={showPassword ? "text" : "password"}
              className="form-control"
              name="password"
              placeholder="Mot de passe"
              value={password}
              onChange={onChange}
              required
            />
          </div>
        </div>
        <div className="form-group">
          <div className="input-group">
            <span className="input-group-addon">
              <i className="fa fa-lock"></i>
              <i className="fa fa-check"></i>
            </span>
            <input
              type={showPassword ? "text" : "password"} 
              className="form-control"
              name="confirm_password"
              placeholder="Confirmation mot de passe"
              value={confirm_password}
              onChange={onChange}
              required
            />
          </div>
        </div>
        <div className="form-group">
          <input type="checkbox" onChange={toggleShowPassword} /> {}
          <label>Afficher le mot de passe</label>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary btn-block btn-lg">Créer</button>
        </div>
        <p className="small text-center">En cliquant sur le bouton S'inscrire, vous acceptez nos <br/><a href="#">Conditions générales</a>, et <a href="#">Politique de confidentialité</a>.</p>
      </form>
      <div className="text-center">Vous avez déjà un compte? <a href="/login">Connectez-vous ici</a>.</div>
    </div>
  );
}

export default Register;
