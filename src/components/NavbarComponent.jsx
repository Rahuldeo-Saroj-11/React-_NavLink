import { NavLink } from 'react-router-dom';

function NavbarComponent() {
    return (
        <>
            <nav className="bg-gray-800 p-4">
                <ul className="flex space-x-6 justify-center">
                    <li>
                        <NavLink
                            to="/Home"
                            className="text-white hover:text-blue-400"
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/Services"
                            className="text-white hover:text-blue-400"
                        >
                            Services
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/About"
                            className="text-white hover:text-blue-400"
                        >
                           About 
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/StateComponent"
                            className="text-white hover:text-blue-400"
                        >StateComponent
                        </NavLink>

                    </li>
                    <li>
                        <NavLink
                         to="/StateComponentArray"
                         className="text-white hover:text-blue-400"
                         >StateComponentArray
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                         to="/ProductComponent"
                         className="text-white hover:text-blue-400"
                         >
                            ProductComponent
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                         to="/Forms"
                         className="text-white hover:text-blue-400"
                         >
                            Forms
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                         to="/FormikandYup"
                         className="text-white hover:text-blue-400"
                         >
                          FormikandYup
                        </NavLink>
                    </li>
                        
                </ul>
            </nav>
        </>
    );
}

export default NavbarComponent;
