import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaEdit, FaTrashAlt, FaInfoCircle, FaPlus } from "react-icons/fa";
import "./Home.css";

function Home() {
  const accounts = [
    {
      name: "Nature Explorer",
      bio: "Découvrez les merveilles de la nature.",
      profilePic: "https://via.placeholder.com/150?text=Nature+Explorer",
      link: "https://instagram.com/nature_explorer",
    },
    {
      name: "Fitness Guru",
      bio: "Motivation et conseils fitness quotidiens.",
      profilePic: "https://via.placeholder.com/150?text=Fitness+Guru",
      link: "https://instagram.com/fitness_guru",
    },
    {
      name: "Foodie Heaven",
      bio: "Recettes et critiques culinaires.",
      profilePic: "https://via.placeholder.com/150?text=Foodie+Heaven",
      link: "https://instagram.com/foodie_heaven",
    },
    {
      name: "Tech Savvy",
      bio: "Actualités et gadgets technologiques.",
      profilePic: "https://via.placeholder.com/150?text=Tech+Savvy",
      link: "https://instagram.com/tech_savvy",
    },
    {
      name: "Travel Addict",
      bio: "Voyages autour du monde.",
      profilePic: "https://via.placeholder.com/150?text=Travel+Addict",
      link: "https://instagram.com/travel_addict",
    },
    {
      name: "Artistic Soul",
      bio: "Peinture, dessin et photographie.",
      profilePic: "https://via.placeholder.com/150?text=Artistic+Soul",
      link: "https://instagram.com/artistic_soul",
    },
  ];

  return (
    <div className="container py-5">
      {/* En-tête */}
      <header className="text-center mb-5">
        <h1 className="display-4 text-dark mb-4">Instagram Manager</h1>
        <button className="btn btn-pink btn-lg shadow">Ajouter un compte</button>
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
                    src={account.profilePic}
                    alt={account.name}
                    className="rounded-circle profile-pic mb-3"
                  />
                  <h5 className="card-title">{account.name}</h5>
                  <p className="card-text text-muted">{account.bio}</p>
                  <a
                    href={account.link}
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
    </div>
  );
}

export default Home;
