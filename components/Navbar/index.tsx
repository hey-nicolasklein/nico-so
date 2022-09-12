const Navbar = () => {
    return (
        <div className="relative">
            <div
                className="z-50 bg-none dark:bg-white fixed top-0 inset-x-0 sm:inset-x-auto 
            sm:right-0 flex duration-700 justify-around align-center drop-shadow-3xl hover:drop-shadow-4xl 
            rounded-lg mx-5 my-5 dark:bg-opacity-30 backdrop-filter backdrop-blur-lg"
            >
                <div className="flex justify-between align-center w-full px-6 py-4 sm:px-6 max max-w-screen-2xl">
                    <img
                        src="/logo.svg"
                        alt="SVG mit img laden"
                        width="50"
                        height="50"
                        className="dark:invert"
                    />
                    <div className="flex justify-center align-center">
                        <ContactButton />
                    </div>
                </div>
            </div>
        </div>
    );
};

const NavItem = (props: { name: string }) => {
    return (
        <a
            href={`#${props.name != "Home" ? props.name : ""}`}
            className={
                "leading-none text-gray-700 dark:text-white px-10 py-6 text-2xl hidden sm:block"
            }
        >
            {props.name}
        </a>
    );
};

const ContactButton = () => {
    return (
        <button
            className="leading-none	background bg-transparent px-2.5 py-2.5 rounded border-solid border-2 
            text-xl	font-normal	text-black border-black	ml-5 dark:text-white dark:border-white"
            onClick={() =>
                (window.location.href =
                    "mailto:hey@nico.so?subject=Hey&body=Let%20us%20talk%20:)")
            }
        >
            Get In Touch
        </button>
    );
};

export default Navbar;
