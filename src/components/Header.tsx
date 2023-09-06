const Header = () => {
    return ( 
        <>
            <div className="header px-8 flex items-center justify-between">
                <div className="greetings">
                    <h1 className="text-3xl text-#101828 mt-12 font-semibold">Good Morning</h1>
                    <span className="text-gray-600 text-base">You got some task to do. </span>
                </div>
                <div className="btn">
                    <button className="flex items-center justify-center px-4 py-2 text-white font-semibold rounded-lg bg-custom-blue">
                        <img src="/assets/images/icons/plus.png" alt="" />
                        Create New Task
                    </button>
                </div>
            </div>
        </>
    );
}
 
export default Header;