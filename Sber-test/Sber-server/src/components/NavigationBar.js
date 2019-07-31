import React from 'react';

import {Link} from 'react-router-dom';

const Navigationbar = () => {
    return(
        <div>
            <nav className="links">
                <ul>
                    <li>
                        <Link to="/getUser" className="menu__links">
                        Get user via ID
                        </Link>
                    </li>
                    <li>
                        <Link to="/getAll" className="menu__links">
                        Get all users
                        </Link>
                    </li>
                    <li>
                        <Link to="/addUser" className="menu__links">
                        Add new
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigationbar;