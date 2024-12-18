import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './Home.css'; 

function Home() {
  return (
    <div className="container py-5">
      {/* En-tête avec titre et bouton d'ajout de compte */}
      <header className="d-flex justify-content-between align-items-center mb-5">
        <h1 className="display-4 text-dark">Bienvenue sur Instagram Manager</h1>
        <button className="btn btn-custom btn-lg">Ajouter un compte</button>
      </header>

      {/* Résumé de la page */}
      <section className="row mb-5">
        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-body text-center">
              <h5 className="card-title">Comptes Instagram</h5>
              <p className="card-text">5 comptes actifs</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-body text-center">
              <h5 className="card-title">Publications récentes</h5>
              <p className="card-text">3 nouvelles publications</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-body text-center">
              <h5 className="card-title">Planification</h5>
              <p className="card-text">3 publications planifiées</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tableau des comptes Instagram */}
      <section>
        <h2 className="mb-4">Comptes Instagram</h2>
        <table className="table table-bordered table-striped custom-table">
          <thead className="thead-light">
            <tr>
              <th>Nom</th>
              <th>Photo de Profil</th>
              <th>Bio</th>
              <th>Lien en Bio</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Exemple de ligne dans le tableau */}
            <tr>
              <td>Compte1</td>
              <td><img src="https://via.placeholder.com/40" alt="Profile" className="rounded-circle" /></td>
              <td>Bio du compte1</td>
              <td><a href="https://instagram.com/compte1" className="text-primary">Visiter</a></td>
              <td>
                <button className="btn btn-warning btn-sm mr-2">Modifier</button>
                <button className="btn btn-danger btn-sm">Supprimer</button>
              </td>
            </tr>
            {/* Ajouter d'autres comptes ici */}
          </tbody>
        </table>
      </section>

      {/* Tableau de gestion des publications */}
      <section>
        <h2 className="mb-4">Gestion des Publications</h2>
        <button className="btn btn-success mb-3">Ajouter une publication</button>
        <table className="table table-bordered table-striped custom-table">
          <thead className="thead-light">
            <tr>
              <th>Titre</th>
              <th>Image</th>
              <th>Date de Publication</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Exemple de ligne de publication */}
            <tr>
              <td>Publication 1</td>
              <td><img src="https://via.placeholder.com/100" alt="Post" className="img-fluid" /></td>
              <td>2024-12-18</td>
              <td>
                <button className="btn btn-warning btn-sm mr-2">Modifier</button>
                <button className="btn btn-danger btn-sm">Supprimer</button>
              </td>
            </tr>
            {/* Ajouter d'autres publications ici */}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Home;
