import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://127.0.0.1:8000/api-utilisateur/authentification', {
                username: username,
                password: password
            });

            console.log('Connexion réussie:', response.data);


            localStorage.setItem('token', response.data.access);
            localStorage.setItem('username', response.data.username);
            localStorage.setItem('iduser', response.data.id);
            //navigate('/tache');

        } catch (err) {
            console.error('Erreur lors de la connexion:', err);
            setError('Nom d’utilisateur ou mot de passe incorrect');
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <div className="login-header">
                    <h4 className="login-title">Login</h4>
                </div>
                <div className="login-body">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <div className="input-group">
                                <span className="input-group-addon"><i className="fa fa-user"></i></span>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="username"
                                    placeholder="Nom utilisateur"
                                    required
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="input-group">
                                <span className="input-group-addon"><i className="fa fa-lock"></i></span>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    className="form-control"
                                    name="password"
                                    placeholder="Mot de passe"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <span
                                    className="input-group-addon"
                                    onClick={toggleShowPassword}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <i className={`fa ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                                </span>
                            </div>
                        </div>
                     
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary btn-block btn-lg">Se connecter</button>
                        </div>
                        {error && (
                            <div className="alert alert-danger" role="alert">
                                {error}
                            </div>
                        )}
                        <p className="hint-text"><a href="#">Mot de passe oublié?</a></p>
                    </form>
                </div>
                <hr />
                <div className="login-footer">Avez-vous un compte? <a href="/register">Créer un compte</a></div>
            </div>
        </div>
    );
};

export default Login;
