import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Login from "../Components/login"
import Home from "../Components/Home"
import AdminDashboard from '../Components/admin/Dashboard';
import FormateurDashboard from '../Components/formateur/Dashboard';
import Absences from '../Components/admin/Absences';
import AddAbsence from '../Components/admin/Absences/addAbsence';
import UpdateAbsence from '../Components/admin/Absences/updateAbsence';
import Stagiaires from '../Components/admin/Stagiaires';
import AddStagiaire from '../Components/admin/Stagiaires/addStagiaire';
import UpdateStagiaire from '../Components/admin/Stagiaires/updateStagiaire';
import Formateurs from '../Components/admin/Formateurs';
import AddFormateur from '../Components/admin/Formateurs/addFormateur';
import UpdateFormateur from '../Components/admin/Formateurs/updateFormateur';
import Groupes from '../Components/admin/Groupe';
import AddGroupe from '../Components/admin/Groupe/AddGroupe';
import UpdateGroupe from '../Components/admin/Groupe/UpdateGroupe';
import Filiers from '../Components/admin/Filiers';
import Niveaux from '../Components/admin/Niveaux';
import AddNiveau from '../Components/admin/Niveaux/addNiveau';
import AddFilier from '../Components/admin/Filiers/AddFilier';
import UpdateFilier from '../Components/admin/Filiers/UpdateFilier';
import UpdateNiveau from '../Components/admin/Niveaux/UpdateNiveau';
import Affectations from '../Components/admin/Affectations';
import AddAffectation from '../Components/admin/Affectations/AddAffectation';
import UpdateAffectation from '../Components/admin/Affectations/UpdateAffectation';
import GroupesFormateur from '../Components/formateur/Groupes';
import StagiairesFormateur from '../Components/formateur/Stagiaires';
import AbsenceFormateur from '../Components/formateur/Absences';
import AddAbsenceFormateur from '../Components/formateur/Absences/addAbsence';
import UpdateAbsenceFormateur from '../Components/formateur/Absences/updateAbsence';
import { useSelector } from 'react-redux';



const Routes = () => {
    let user = useSelector(state => state.auth.user);
    if (user.type === "Gestionnaire") {
        return (
            <Switch>
                {/*Admin dashboard*/}

                <Route
                    path="/admin/dashboard"
                    exact
                    render={() => <AdminDashboard user={user} />}
                />

                {/*Admin Absences*/}

                <Route
                    path="/admin/absences"
                    exact
                    render={() => <Absences user={user} />}
                />

                <Route
                    path="/admin/absences/create"
                    exact
                    render={() => <AddAbsence user={user} />}
                />

                <Route
                    path="/admin/absences/:id_absence/update"
                    exact
                    render={() => <UpdateAbsence user={user} />}
                />

                {/*Admin Formateurs*/}

                <Route
                    path="/admin/stagiaires"
                    exact
                    render={() => <Stagiaires user={user} />}
                />

                <Route
                    path="/admin/stagiaires/create"
                    exact
                    render={() => <AddStagiaire user={user} />}
                />

                <Route
                    path="/admin/stagiaires/:id_stagiaire/update"
                    exact
                    render={() => <UpdateStagiaire user={user} />}
                />

                {/*Admin Formateurs*/}

                <Route
                    path="/admin/formateurs"
                    exact
                    render={() => <Formateurs user={user} />}
                />

                <Route
                    path="/admin/formateurs/create"
                    exact
                    render={() => <AddFormateur user={user} />}
                />

                <Route
                    path="/admin/formateurs/:id_f/update"
                    exact
                    render={() => <UpdateFormateur user={user} />}
                />

                {/*Admin Groupes*/}

                <Route
                    path="/admin/groupes"
                    exact
                    render={() => <Groupes user={user} />}
                />

                <Route
                    path="/admin/groupes/create"
                    exact
                    render={() => <AddGroupe user={user} />}
                />

                <Route
                    path="/admin/groupes/:id_g/update"
                    exact
                    render={() => <UpdateGroupe user={user} />}
                />

                {/*Admin Filiers*/}

                <Route
                    path="/admin/filiers"
                    exact
                    render={() => <Filiers user={user} />}
                />

                <Route
                    path="/admin/filiers/create"
                    exact
                    render={() => <AddFilier user={user} />}
                />

                <Route
                    path="/admin/filiers/:id_filier/update"
                    exact
                    render={() => <UpdateFilier user={user} />}
                />

                {/*Admin Niveau*/}

                <Route
                    path="/admin/niveaux"
                    exact
                    render={() => <Niveaux user={user} />}
                />

                <Route
                    path="/admin/niveaux/create"
                    exact
                    render={() => <AddNiveau user={user} />}
                />

                <Route
                    path="/admin/niveaux/:id_niveau/update"
                    exact
                    render={() => <UpdateNiveau user={user} />}
                />

                {/*Admin Affectations*/}

                <Route
                    path="/admin/affectations"
                    exact
                    render={() => <Affectations user={user} />}
                />

                <Route
                    path="/admin/affectations/create"
                    exact
                    render={() => <AddAffectation user={user} />}
                />

                <Route
                    path="/admin/affectations/:id_affectation/update"
                    exact
                    render={() => <UpdateAffectation user={user} />}
                />

                <Route path="*" exact component={Home} />

            </Switch>
        )
    } else if (user.type === "Formateur") {
        return (
            <Switch>
                {/*Formateur*/}
                <Route
                    path="/formateur/dashboard"
                    exact
                    render={() => <FormateurDashboard user={user} />}
                />

                <Route
                    path="/formateur/groupes"
                    exact
                    render={() => <GroupesFormateur user={user} />}
                />

                <Route
                    path="/formateur/stagiaires"
                    exact
                    render={() => <StagiairesFormateur user={user} />}
                />

                <Route
                    path="/formateur/absences"
                    exact
                    render={() => <AbsenceFormateur user={user} />}
                />

                <Route
                    path="/formateur/absences/create"
                    exact
                    render={() => <AddAbsenceFormateur user={user} />}
                />

                <Route
                    path="/formateur/absences/:id_absence/update"
                    exact
                    render={() => <UpdateAbsenceFormateur user={user} />}
                />

                <Route path="*" exact component={Home} />

            </Switch>
        )
    }
    return (
        <Switch>
            <Route path="/login" exact component={Login} />
            <Route path="*" exact component={Home} />
        </Switch>
    )
}
export default Routes