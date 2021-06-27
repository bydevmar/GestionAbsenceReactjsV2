import React, { useEffect, useState } from "react";
import DashboardNavbar from "../Dashboard/DashboardNavbar";
import { getAllFormateurs } from "../../../helpers/Formateur/getAllFormateurs";
import { getAllStagiaires } from "../../../helpers/Stagiaires/getAllStagiaires";
import { putAbsence } from "../../../helpers/Absences/putAbsence";
import { useHistory, useParams } from "react-router-dom";
import moment from "moment";
import { getAbsenceByAdmin } from "../../../helpers/Absences/getAbsenceById";

function UpdateAbsence({ user }) {
  const [stagiaires, setStagiaires] = useState([]);
  const [formateurs, setFormateurs] = useState([]);

  const [stagiaire, setStagiaire] = useState("");
  const [formateur, setFormateur] = useState("");
  const [dateAbsence, setDateAbsence] = useState("");
  const [heureDebut, setHeureDebut] = useState("");
  const [heureFin, setheureFin] = useState("");
  const { id_absence } = useParams();

  const history = useHistory();

  useEffect(() => {
    getAbsenceByAdmin(user._id, id_absence)
      .then((res) => {
        if (res.status === "OK") {
          let absenceToUpdate = res.details;
          setStagiaire(absenceToUpdate.stagiaire);
          setFormateur(absenceToUpdate.formateur);
          setDateAbsence(
            moment(absenceToUpdate.dateabsence).format("YYYY-MM-DD")
          );
          setHeureDebut(moment(absenceToUpdate.heuredebut).format("HH:mm"));
          setheureFin(moment(absenceToUpdate.heurefin).format("HH:mm"));
        }
      })
      .catch((err) => {
        console.log("err");
      });

    getAllStagiaires(user._id)
      .then((result) => {
        setStagiaires(result.stagiaires);
      })
      .catch((err) => {
        setStagiaires([]);
      });

    getAllFormateurs(user._id)
      .then((result) => {
        setFormateurs(result.formateurs);
      })
      .catch((err) => {
        setFormateurs([]);
      });
  }, [user._id, id_absence]);

  const handleSubmit = (e) => {
    e.preventDefault();

    putAbsence(
      user._id,
      id_absence,
      stagiaire,
      formateur,
      dateAbsence,
      heureDebut,
      heureFin
    )
      .then((result) => {
        if (result.status === "OK") {
          history.push("/admin/absences");
        } else {
          console.log(result.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const remplirComboformateurs = () => {
    if (formateurs.length > 0) {
      return formateurs.map((item, index) => {
        return (
          <option value={item._id} key={index}>
            {item.nom + " " + item.prenom}
          </option>
        );
      });
    }
  };

  const remplirComboStagiaires = () => {
    return stagiaires.map((item, index) => {
      return (
        <option value={item._id} key={index}>
          {item.nom + " " + item.prenom}
        </option>
      );
    });
  };

  return (
    <div>
      <div>
        <DashboardNavbar />
        <div>
          <div className="container mt-4">
            <div className="row justify-content-center">
              <div className="col-md-6">
                <h2 className="h2 pb-4">Modifier une absence</h2>
                <form className="form mt-4" onSubmit={(e) => handleSubmit(e)}>
                  <div className="form-group ">
                    <label htmlFor="stagiaire">stagiaire :</label>
                    <br />
                    <select
                      className="form-control mb-3"
                      aria-label="stagiaire"
                      onChange={(e) => setStagiaire(e.target.value)}
                      value={stagiaire}
                    >
                      <option>Selectionner stagiaire</option>
                      {remplirComboStagiaires()}
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="formateur">formateur :</label>
                    <br />
                    <select
                      className="form-control mb-3"
                      ria-label="formateur"
                      onChange={(e) => setFormateur(e.target.value)}
                      value={formateur}
                    >
                      <option>Selectionner formateur</option>
                      {remplirComboformateurs()}
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="dateabsence">date absence :</label>
                    <br />
                    <input
                      className="form-control"
                      type="date"
                      value={dateAbsence}
                      onChange={(e) => setDateAbsence(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="heuredebut">Heure debut :</label>
                    <br />
                    <input
                      className="form-control"
                      type="time"
                      min="08:00"
                      max="18:30"
                      onChange={(e) => setHeureDebut(e.target.value)}
                      value={heureDebut}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="heurefin">Heure Fin :</label>
                    <br />
                    <input
                      className="form-control"
                      type="time"
                      min="08:00"
                      max="18:30"
                      onChange={(e) => setheureFin(e.target.value)}
                      value={heureFin}
                    />
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
}

export default UpdateAbsence;
