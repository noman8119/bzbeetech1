import React from "react";
const Footer=()=>{
    const year=new Date().getFullYear();
return(
<>
    <footer className="bg-transparent pb-4 text-center py-1 ">
        <p className="mb-0 pt-3">Ⓒ {year} Octa Solution. All Rights Reserved | Terms and Conditions</p>
    </footer>
</>
)
}
export default Footer;