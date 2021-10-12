import React from "react";
import web from '../src/images/home.png';
import Common from "./Common";
const Home = () => {
    return (<Common
        name="Grow Your Business with"
        imgsrc={web}
        btnname="Get Started"
        visit="/"/>)
}
export default Home;