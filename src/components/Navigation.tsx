const NavBar = () => {
    return ( 
        <>
            <div className="nav flex items-center justify-between px-8 py-6">
                <div className="logo">
                    <h1 className="text-2xl font-bold">ToDo </h1>
                </div>
                <div className="icons hidden md:flex items-center">
                    <img className="cursor-pointer" src="/assets/images/icons/settings.png" alt="" />
                    <img className="cursor-pointer" src="/assets/images/icons/bell.png" alt="" />
                    <img className="ml-4 cursor-pointer" src="/assets/images/img/avatar.png" alt="" />
                </div>
                <div className="hamburger md:hidden">
                    <img src="/assets/images/icons/hamburger.png" alt="" />
                </div>
            </div>
        </>
    );
}
 
export default NavBar;