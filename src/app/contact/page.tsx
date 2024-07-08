import React from "react";
import Link from 'next/link';
 
 const Contact = ()=>{
    return(
      <div>
        <h1>Contact Us Here</h1>
        <p>This is the contact page</p>
        <li><Link href="/services">Contact Us here</Link></li>
      </div>
    )
}
export default Contact;