import React from 'react';
import './header.css'
function Header(props) {
    return (
        <div className='row'>
            
            <div class="col-lg-4 offset-lg-4">
                <h4 id='to'>{props.header.text}</h4>
            </div>
        </div>


    )
}
export default Header;