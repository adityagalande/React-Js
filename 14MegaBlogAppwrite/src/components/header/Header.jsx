import React from "react"
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { Container, LogoutBtn, Logo } from '../index'


function Header() {

    const authStatus = useSelector((state) => state.auth.status)

    const navigate = useNavigate();

    //use array to add eg. buttons (if many items come we just need to add it in array)
    const navItems = [ //those are active: true we will display them
        {
            name: 'Home',
            slug: "/",
            active: true,
        },
        {
            name: "Login",
            slug: "/login",
            active: !authStatus,
        },
        {
            name: "Signup",
            slug: "/signup",
            active: !authStatus,
        },
        {
            name: "All Posts",
            slug: "/all-posts",
            active: authStatus,
        },
        {
            name: "Add Posts",
            slug: "/add-post",
            active: authStatus,
        },
    ]

    return (
        <header className="py-3 shadow bg-gray-500">
            <Container>
                <nav className="flex">
                    <div className="mr-4">
                        <Link to='/'>
                            <Logo width="70px" />
                        </Link>
                    </div>

                    <ul className="flex ml-auto">
                        {navItems.map((item) => (
                            item.active ? (
                                <li key={item.name}>
                                    <button className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full" 
                                    onClick={() => (navigate(item.slug))} //useNavigate works similar like Link or NavLink.....
                                    >{item.name}</button>
                                </li>
                            ) : null
                        ))}

                        {/* it will be visible only if authStatus is true else it will be invisible */}
                        {authStatus && (
                            <li>
                                <LogoutBtn />
                            </li>
                        )}
                    </ul>
                </nav>
            </Container>
        </header>
    );
}

export default Header;