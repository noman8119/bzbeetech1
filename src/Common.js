import React from "react";
import {NavLink} from "react-router-dom";
const Common = (props) => {
    return ( 
    <>
    <div className="container-fluid py-5">
        <div className="row pt-md-5">
            <div className="col-10 mx-auto">
                <div className="row py-md-5 p">
                    <div className="col-md-6 py-md-5 pt-5  order-2 order-lg-1">
                        <h1>{props.name}
                            <strong>
                                Octa Solution</strong>
                        </h1>
                        <h2 className="my-5">We are the team of talented Developer making Websites</h2>
                        <div className="mt-5">
                            <NavLink className="btn-started" to={props.visit}>{props.btnname}</NavLink>
                        </div>
                    </div>
                    <div className="col-md-6    order-1 order-lg-2">
                        <div className="header-img">
                            <img src={props.imgsrc} className="img-fluid animated" alt="header"/></div>
                    </div>
                </div>
            </div>
        </div>
    </div> 
    </>
    )
}
export default Common;