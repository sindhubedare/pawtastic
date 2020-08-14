import React from 'react';

function Navbar (){
    return (
    <div className = "title">
        <h2 className="nav">Pawtastic</h2>
        <ul>
            <li>Human profile</li>
            <li>Pet basics</li>
            <li>Pet details</li>
            <li>Confirm</li>
        </ul>
        <img className="dog"  src = "https://cdn.wimmel-napkins.com/F/1/AM/g13312895.jpg" width= "250pt" height="250pt" />
        <br/>
        <button className="button1">Save & exit</button>
    </div>
    );
}
export default Navbar;