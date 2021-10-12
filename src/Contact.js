import React, {useState} from "react";
const Contact = () => {
    const [data,setData] = useState({fulName: '', phone: ' ', email: ' ', message: ' '});
    const inputEvent = (event) => {
        const {name, value} = event.target;
        setData((preVal) => {
            return {
                ...preVal,
                [name]: value
            };
        });
    };
    const formSubmit = (e) => {
        e.preventDefault();
        alert(`My Name is "${data.fulName}".My Phone Number is "${data.phone}",My Email is "${data.email}" and here is what I want to say " ${data.message} "`);
    };
    return ( <> <div className="mt-5 mx-auto text-center">
        <h1 className="pt-3 contact">Contact Us</h1>
    </div> <div className = "container py-5 " > <div className="row pb-5">
        <div className="col-md-6 col-10 mx-auto ">
            <form onSubmit={formSubmit}>
                <div className="form-group">
                    <label >Name</label>
                    <input
                        type="text"
                        className="form-control input"
                        aria-describedby="emailHelp"
                        name="fulName"
                        value={data.fulName}
                        onChange={inputEvent}
                        placeholder="Enter Your Name"/>
                </div>
                <div className="form-group">
                    <label >Phone #</label>
                    <input
                        type="number"
                        className="form-control input"
                        name="phone"
                        value={data.phone}
                        onChange={inputEvent}
                        placeholder="Enter your phone numner"/>
                </div>
                <div className="form-group">
                    <label >Email address</label>
                    <input
                        type="email"
                        className="form-control input"
                        aria-describedby="emailHelp"
                        name="email"
                        value={data.email}
                        onChange={inputEvent}
                        placeholder="Enter email"/>
                </div>
                <div className="form-group">
                    <label >Message</label>
                    <textarea
                        className="form-control input"
                        name="message"
                        value={data.message}
                        onChange={inputEvent}
                        rows="3"></textarea>
                </div>
                <button type="submit" className="btn submit-btn btn-outline-primary mt-2">Submit</button>
            </form>
        </div>
    </div>
    </div>
        </>)
}
export default Contact;