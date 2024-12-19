import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaEdit, FaTrashAlt, FaInfoCircle, FaPlus } from "react-icons/fa";
import { Modal, Button } from "react-bootstrap"; 
import "./Home.css";

function Home() {
  const [showModal, setShowModal] = useState(false); 
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState(""); 
  const [accounts, setAccounts] = useState([]); 

  const handleShowModal = () => setShowModal(true); 
  const handleCloseModal = () => setShowModal(false); 

  const handleCreateAccount = async () => {
    const userData = {
      username: username,
      password: password,
    };

    try {
      const response = await fetch("http://127.0.0.1:8000/api-instagram/register_instagram_user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json(); 

      if (response.ok) {
        alert("Compte créé avec succès !");
      } else {
        alert("Erreur : " + (data.message || "Quelque chose s'est mal passé"));
      }
    } catch (error) {
      alert("Erreur de connexion : " + error.message);
    }

    handleCloseModal(); // Ferme le modal après l'action
  };

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api-instagram/get_all_instagram_user");
        const data = await response.json();
        setAccounts(data.users); 
      } catch (error) {
        console.error("Erreur de récupération des comptes :", error);
      }
    };

    fetchAccounts();
  }, []); // L'effet est exécuté une seule fois au montage du composant

  return (
    <div className="container py-5">
      {/* En-tête */}
      <header className="text-center mb-5">
        <h1 className="display-4 text-dark mb-4">Instagram Manager</h1>
        <button
          className="btn btn-pink btn-lg shadow"
          onClick={handleShowModal} 
        >
          Ajouter un compte
        </button>
      </header>

      {/* Liste des comptes Instagram */}
      <section>
        <h2 className="mb-4">Comptes Instagram</h2>
        <div className="row">
          {accounts.map((account, index) => (
            <div className="col-md-6 mb-4" key={index}>
              <div className="card account-card shadow-lg">
                <div className="text-center py-4">
                  <img
                    src={account.profile_picture}
                    alt={account.username}
                    className="rounded-circle profile-pic mb-3"
                    width="150" 
                    height="150"
                  />
                  <h5 className="card-title">{account.username}</h5>
                  <p className="card-text text-muted">{account.bio}</p>
                  <a
                    href={`https://instagram.com/${account.username}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none text-pink"
                  >
                    Voir le profil
                  </a>
                </div>
                <div className="card-footer d-flex flex-column align-items-center">  
                  <div className="d-flex justify-content-around w-100">
                    <button className="btn btn-light btn-sm shadow-sm">
                      <FaInfoCircle className="text-primary me-1" />
                      Détails
                    </button>
                    <button className="btn btn-pink btn-sm shadow">
                      <FaPlus className="text-white me-1" />
                      Ajouter une publication
                    </button>
                    <button className="btn btn-warning btn-sm shadow-sm">
                      <FaEdit className="text-white me-1" />
                      Modifier
                    </button>
                    <button className="btn btn-danger btn-sm shadow-sm">
                      <FaTrashAlt className="text-white me-1" />
                      Supprimer
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal pour la création de compte */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Création de compte</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Nom d'utilisateur</label>
              <input 
                type="text" 
                className="form-control" 
                id="username" 
                placeholder="Nom d'utilisateur" 
                value={username}
                onChange={(e) => setUsername(e.target.value)} // Mettre à jour l'état
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Mot de passe</label>
              <input 
                type="password" 
                className="form-control" 
                id="password" 
                placeholder="Mot de passe" 
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Mettre à jour l'état
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Annuler
          </Button>
          <Button variant="primary" onClick={handleCreateAccount}>
            Créer le compte
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Home;
