import { Link } from "react-router-dom";
import { Icons } from "../icons/Icons.ts";

const NavMenu = () => {
    const navItems = [
        {
            label: "Search",
            icon: Icons.Search,
            href: "/search",
        },
        {
            label: "Home",
            icon: Icons.House,
            href: "/",
        },
        {
            label: "Profile",
            icon: Icons.User,
            href: "/profile",
        },
    ]
    return (
        <div className="flex items-center justify-around bg-[#EBE2D0] text-white bottom-0 fixed z-10 lg:rounded-2xl m-auto lg:max-w-3xl w-full">
            {navItems.map((item) => (
                <Link className="focus:border-t-2 border-t-orange-950 p-4" to={item.href} key={item.label}>
                    <item.icon className="w-6 h-6" />
                </Link>
            ))}
        </div>
    )
}

export default NavMenu;