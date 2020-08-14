import React from 'react';
import { render } from '@testing-library/react';
function Header(){
    render(
        <div className= "title">
            <h2>Yay, we love dogs! Give us the basics about your pup.</h2>
        </div>
    );
}
export default Headers;