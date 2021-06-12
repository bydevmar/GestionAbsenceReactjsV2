import React, { useEffect, useState } from 'react';
import DashboardNavbar from "../Dashboard/DashboardNavbar";
import { getAllGroupes } from '../../../helpers/getAllGroupes';

const GroupesFormateur = () => {
    const [groupes, setgroupes] = useState([])
    useEffect(() => {
        loadData()
    }, [])

    const loadData = () => {
        getAllGroupes("6099e10b7ea02b34e4f75cbb")
            .then((result) => {
                console.log(result);
                setgroupes(result.groupes);
            })
    }

    const loadTable = () => {
        return groupes.map((item) => {
            const { _id, designation, annee, filier } = item
            return (
                <tr key={_id} >
                    <td> {designation} </td>
                    <td> {annee} </td>
                    <td> {filier} </td>
                </tr>
            )
        })
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg">
                        <DashboardNavbar />
                        <div className="card-body">
                            <h1>Groupes</h1>
                            <div className="table-responsive">
                                <table className="table table-bordered" width="100%" cellSpacing={0}>
                                    <thead className="thead-dark">
                                        <tr>
                                            <th scope="col">Designation</th>
                                            <th scope="col">Annee</th>
                                            <th scope="col">Filier</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            loadTable()
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GroupesFormateur;