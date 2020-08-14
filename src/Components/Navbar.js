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
        <button className="button1">Save & exit</button>

    </div>
    );
}
export default Navbar;