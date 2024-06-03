import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import { auth } from "../services/firebaseConnection";



export function PanelHeader() {

    async function handleLogout() {
        await signOut(auth);
    }

    return (
        <div
        className="w-full items-center flex h-10 bg-blue-300 rounded-lg text-white font-medium gap-8 px-4 mb-4"
        >

            <Link to="/dashboard" >
            Dashboard
            </Link>

            <Link to="/dashboard/newcars" >
             RegisterCar
            </Link>

            <button className="ml-auto" onClick={handleLogout} >
            Log Out
            </button>
        </div>
    )
}