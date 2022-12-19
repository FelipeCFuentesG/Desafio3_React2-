import { NavLink } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";


const Navbar1 = () => {
    const setActive = ({ isActive }) => isActive ? 'active' : undefined

    return (

        <>
            <Navbar bg="dark" variant="dark">
                <Container className="justify-content-start fs-3 fw-bold">
                    <NavLink className={setActive} to='/'>Home</NavLink>
                </Container>
                <Container className="justify-content-end fs-3 fw-bold">
                    <NavLink className={setActive} to='/pokemon' >Pokemones</NavLink>
                </Container>
            </Navbar>
        </>
    )
}
export default Navbar1;