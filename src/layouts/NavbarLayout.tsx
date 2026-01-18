import { Outlet } from 'react-router-dom';
import NavMenu from '../components/menubars/NavMenu.tsx';

const NavbarLayout = () => (
    <>
        <NavMenu />
        <main>
            <Outlet /> {/* Target pages render here */}
        </main>
    </>
);

export default NavbarLayout;