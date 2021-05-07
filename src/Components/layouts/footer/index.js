import React, { Component } from 'react'

export class Footer extends Component {
    //<footer className="text-center text-white" style="background-color: #f1f1f1;">
    render() {
        return (
            <div>
                <footer className="text-center text-white" style={{backgroundColor : "#f1f1f1"}} >
                <div className="container pt-4">
                    <section className="mb-4">
                    <a
                        className="btn btn-link btn-floating btn-lg text-dark m-1"
                        href="https://web.facebook.com/abdelfattah.bouhlali.99"
                        role="button"
                        data-mdb-ripple-color="dark"
                        ><i className="fab fa-facebook-f"></i
                    ></a>

                    <a
                        className="btn btn-link btn-floating btn-lg text-dark m-1"
                        href="https://twitter.com/ABDELFA25474681"
                        role="button"
                        data-mdb-ripple-color="dark"
                        ><i className="fab fa-twitter"></i
                    ></a>


                    <a
                        className="btn btn-link btn-floating btn-lg text-dark m-1"
                        href="https://www.instagram.com/abdelfattahbouhlali/"
                        role="button"
                        data-mdb-ripple-color="dark"
                        ><i className="fab fa-instagram"></i
                    ></a>

                    <a
                        className="btn btn-link btn-floating btn-lg text-dark m-1"
                        href="https://www.linkedin.com/in/abdelfattah-bouhlali-0628191b8/"
                        role="button"
                        data-mdb-ripple-color="dark"
                        ><i className="fab fa-linkedin"></i
                    ></a>
                    <a
                        className="btn btn-link btn-floating btn-lg text-dark m-1"
                        href="https://github.com/DevLop99"
                        role="button"
                        data-mdb-ripple-color="dark"
                        ><i className="fab fa-github"></i
                    ></a>
                    </section>
                </div>

                <div className="text-center text-dark p-3" style={{backgroundColor : "rgba(0, 0, 0, 0.2)"}}>
                    © 2020 Copyright: Gestion Absence
                </div>
                </footer>
                 
            </div>
        )
    }
}

export default Footer
