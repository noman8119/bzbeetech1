import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Faqs from './Faqs';
import Footer from './Footer';
import Contact from './Contact';
const App=()=>{
   return(
       <>
       <section>
     <Navbar/>
       <Switch>
       <Route exact path="/" component={Home}/>
       <Route exact path="/about" component={About}/>
       <Route exact path="/faqs" component={Faqs}/>
       <Route exact path="/contact" component={Contact}/>
       </Switch>
       <Footer/>
</section>
       </>
   )
    }
export default App;