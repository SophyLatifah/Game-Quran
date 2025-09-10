import { Link, NavLink } from "react-router-dom";
import Button from "./button";

function Navbar () {
    return (
        <header className="bg-[#380069] fixed top-0 left-0 right-0 h-16 flex justify-between items-center shadow w-full z-50 px-4 py-4">
            <h1 className="text-white font-extrabold">DEEN QUIZ</h1>
            
            <div className="flex space-x-4">
                <Button>
                    <Link 
                        to="/login"
                        className="bg-[#FF9102] text-white px-4 py-2 font-semibold rounded-4xl text-center hover:bg-amber-600 transition-colors">
                        Login
                    </Link>
                </Button>

                <Button>
                    <Link
                        to="/signup"
                        className="bg-[#FF9102] text-white px-4 py-2 font-semibold rounded-4xl text-center hover:bg-amber-600 transition-colors"
                    >
                        Sign Up
                    </Link>
                </Button>
            </div>

        </header>
    );
};

export default Navbar;