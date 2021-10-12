// import { PinDropSharp } from '@material-ui/icons';
import React from 'react';
import Accordian from './Accordian';
import Faqsdata from './Faqsdata';


const Faqs=()=>{

   return(
       <>
       <div className="container">
       <div class="jumbotron py-5">
  <h1>FAQs</h1>      
  <p>Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile-first projects on the web.</p>
</div>
       </div>
       <div className="container">
<div className="row">
<div className="col-md-6 col-12">
<div className="faqs_div">
<h2>Frequently Asked Questions</h2>
<p> An FAQ is a list of commonly asked questions and answers on a website about topics such as hours, shipping and handling, product information, and return policies. ... Now they are on most websites because they save time for both the customer and employees.
An FAQ is a list of commonly asked questions and answers on a website about topics such as hours, shipping and handling, product information, and return policies. ... Now they are on most websites because they save time for both the customer and employees.
An FAQ is a list of commonly asked questions and answers on a website about topics such as hours, shipping and handling, product information, and return policies. ... Now they are on most websites because they save time for both the customer and employees.
An FAQ is a list of commonly asked questions and answers on a website about topics such as hours, shipping and handling, product information, and return policies. ... Now they are on most websites because they save time for both the customer and employees.
An FAQ is a list of commonly asked questions and answers on a website about topics such as hours, shipping and handling, product information, and return policies. ...</p>
</div>
</div>
<div className="col-md-6 col-12">
<div className="faqs_right">
{
 Faqsdata.map((val)=>{
     const {id}=val;
       return <Accordian 
       key={id}
       question={val.question}
       answer={val.answer}
         />;
 })
    }
{/* <Accordian question="hkjhkdj" answer="jhgkf"/> */}
</div>
</div>
</div>
</div>

       </>
   )
    }
export default Faqs;