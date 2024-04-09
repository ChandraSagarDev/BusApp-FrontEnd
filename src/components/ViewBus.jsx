import React from 'react'
import Navbar from './Navbar'

const ViewBus = () => {
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                    <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 collg-12 col-xl-12 col-xxl-12">
                                <center>
                                    <img src="https://www.keralartc.com/storage/images/bus_1.png" alt="" />
                                </center>
                            </div>
                        </div>
                        <br />

                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">S. no</th>
                                            <th scope="col">Bus ID</th>
                                            <th scope="col">Route</th>
                                            <th scope="col">Service Type</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>1455TVMBNG</td>
                                            <td>Trivandrum-Bangalore</td>
                                            <td>SWIFT-HYBRID AC SEATER CUM SLEEPER</td>
                                            <td><button className="btn btn-dark">Book Tickets</button></td>
                                        </tr>

                                        <tr>
                                            <th scope="row">2</th>
                                            <td>1505TVMBNG</td>
                                            <td>Trichy-Thrissur</td>
                                            <td>AC MULTI AXLE</td>
                                            <td><button className="btn btn-dark">Book Tickets</button></td>
                                        </tr>

                                        <tr>
                                            <th scope="row">3</th>
                                            <td>0710CAPEEKM</td>
                                            <td>Kanyakumari-Attingal</td>
                                            <td>SWIFT-GAJARAJ MULTI AXLE VOLVO A/C SLEEPER BUS</td>
                                            <td><button className="btn btn-dark">Book Tickets</button></td>
                                        </tr>

                                        <tr>
                                            <th scope="row">4</th>
                                            <td>1530TVMBNG</td>
                                            <td>Trivandrum-Bangalore</td>
                                            <td>AC MULTI AXLE</td>
                                            <td><button className="btn btn-dark">Book Tickets</button></td>

                                        </tr>

                                        <tr>
                                            <th scope="row">4</th>
                                            <td>2000CNIEKM</td>
                                            <td>Chennai-Palakkad</td>
                                            <td>SWIFT-GARUDA A/C SEATER BUS</td>
                                            <td><button className="btn btn-dark">Book Tickets</button></td>

                                        </tr>

                                        <tr>
                                            <th scope="row">5</th>
                                            <td>2010TVMOTY</td>
                                            <td>Ernakulam-Ooty</td>
                                            <td>DELUXE AIR BUS</td>
                                            <td><button className="btn btn-dark">Book Tickets</button></td>

                                        </tr>

                                        <tr> <th scope="row">6</th>
                                            <td> 0815TVMMLP</td>
                                            <td>Kollam-Malappuram</td>
                                            <td>SUPER FAST</td>
                                            <td><button className="btn btn-dark">Book Tickets</button></td>

                                        </tr>

                                        <tr>
                                            <th scope="row">7</th>
                                            <td>0431PTACBE</td>
                                            <td>Pala-Chalakudy</td>
                                            <td>LOWER FLOOR AC</td>
                                            <td><button className="btn btn-dark">Book Tickets</button></td>

                                        </tr>

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

export default ViewBus