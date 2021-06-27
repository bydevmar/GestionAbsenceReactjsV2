import React, { useEffect, useState } from "react";
import DashboardNavbar from "../Dashboard/DashboardNavbar";
import { getAllGroupes } from "../../../helpers/groupes/getAllGroupes";
import { putStagiaireByAdmin } from "../../../helpers/Stagiaires/putStagiaireByAdmin";
import { useHistory, useParams } from "react-router-dom";
import { getStagiaireById } from "../../../helpers/Stagiaires/getStagiaireById";

const UpdateStagiaire = ({ user }) => {
  const [nom, setnom] = useState("");
  const [prenom, setprenom] = useState("");
  const [groupe, setgroupe] = useState("");
  const [numinscription, setnuminscription] = useState("");
  const [idStagiaire, setIdStagiaire] = useState("");

  const [groupes, setgroupes] = useState([]);

  const history = useHistory();
  const { id_stagiaire } = useParams();

  useEffect(() => {
    getAllGroupes(user._id)
      .then((result) => {
        setgroupes(result.groupes);
      })
      .catch((err) => {
        setgroupes([]);
      });
    getStagiaireById(user._id, id_stagiaire)
      .then((stagiaire) => {
        setnuminscription(stagiaire.numinscription);
        setIdStagiaire(stagiaire._id);
        setnom(stagiaire.nom);
        setprenom(stagiaire.prenom);
        setgroupe(stagiaire.idgroupe);
      })
      .catch();
  }, [user._id, id_stagiaire]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      window.confirm("Vous etez sour de vouloire modifier cette stagiaire!") ===
      true
    ) {
      putStagiaireByAdmin(
        user._id,
        idStagiaire,
        numinscription,
        nom,
        prenom,
        groupe
      )
        .then((result) => {
          console.log(result);
          history.goBack();
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div>
      <div>
        <DashboardNavbar />
        <div>
          <div className="container mt-4">
            <div className="row justify-content-center">
              <div className="col-md-6">
                <h2 className="h2 pb-4">Modifier un Stagiaire</h2>
                <form className="form mt-4" onSubmit={(e) => handleSubmit(e)}>
                  <div className="form-group">
                    <label htmlFor="numins">Numero d'inscription :</label>
                    <br />
                    <input
                      className="form-control"
                      type="text"
                      id="numins"
                      value={numinscription}
                      onChange={(e) => setnuminscription(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="nomstagiaire">Nom :</label>
                    <br />
                    <input
                      value={nom}
                      className="form-control"
                      type="text"
                      id="nomstagiaire"
                      onChange={(e) => setnom(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="prenomstagiaire">Prenom :</label>
                    <br />
                    <input
                      value={prenom}
                      className="form-control"
                      type="text"
                      id="prenomstagiaire"
                      onChange={(e) => setprenom(e.target.value)}
                    />
                  </div>

                  <div className="form-group ">
                    <label htmlFor="groupe">Groupe :</label>
                    <br />
                    <select
                      id="groupe"
                      className="form-control mb-3"
                      aria-label="stagiaire"
                      value={groupe}
                      onChange={(e) => setgroupe(e.target.value)}
                    >
                      <option>Selectionner un Groupe</option>
                      {groupes.map((item, index) => {
                        return (
                          <option value={item._id} key={index}>
                            {item.designation}
                          </option>
                        );
                      })}
                    </select>
                  </div>

                  <div className="form-group justify-content-center">
                    <input
                      type="submit"
                      className="btn btn-success form-control"
                      value="Modifier"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateStagiaire;
