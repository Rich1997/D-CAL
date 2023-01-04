import Logo from '../assets/logos/Logo';

const Navbar = () => {
    return (
        <nav className="px-8 py-16 w-full">
            <div className="flex max-w-5xl mx-auto justify-between">
                <Logo size={20} />
                <div className="text-sm font-black dark:text-neutral-500">
                    <ul className="flex gap-8">
                        <li className="dark:hover:text-white cursor-pointer">
                            About
                        </li>
                        <li className="dark:hover:text-white cursor-pointer">
                            Info
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
