import React from 'react';
import { Route  , Switch} from 'react-router-dom'
import Login from "../Components/login"
import Home from "../Components/Home"
import Dashboard from '../Components/admin/Dashboard';
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

 const Routes = () => {
    return (
        <div>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" exact component={Login} />
                <Route path="/admin/dashboard" exact component={Dashboard} />

                <Route path="/admin/absences" exact component={Absences} />
                <Route path="/admin/absences/create" exact component={AddAbsence} />
                <Route path="/admin/absences/update" exact component={UpdateAbsence} />

                <Route path="/admin/stagiaires" exact component={Stagiaires} />
                <Route path="/admin/stagiaires/create" exact component={AddStagiaire} />
                <Route path="/admin/stagiaires/update" exact component={UpdateStagiaire} />

                <Route path="/admin/formateurs" exact component={Formateurs} />
                <Route path="/admin/formateurs/create" exact component={AddFormateur} />
                <Route path="/admin/formateurs/:id_f/update" exact component={UpdateFormateur} />

                <Route path="/admin/groupes" exact component={Groupes} />
                <Route path="/admin/groupes/create" exact component={AddGroupe} />
                <Route path="/admin/groupes/:id_g/update" exact component={UpdateGroupe} />

                <Route path="/admin/filiers" exact component={Filiers} />
                <Route path="/admin/filiers/create" exact component={AddFilier} />
                <Route path="/admin/filiers/:id_filier/update" exact component={UpdateFilier} />

                <Route path="/admin/niveaux" exact component={Niveaux} />
                <Route path="/admin/niveaux/create" exact component={AddNiveau} />
                <Route path="/admin/niveaux/:id_niveau/update" exact component={UpdateNiveau} />

                <Route path="*" exact component={Home} />
            </Switch>
        </div>
    )
}
export default Routes