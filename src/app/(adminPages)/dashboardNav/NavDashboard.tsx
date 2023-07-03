import { IoHome } from "react-icons/io5"
import { RiTableFill } from "react-icons/ri"
const NavDashboard = () => {
    return (
        <nav className=" fixed top-0 bottom-0  py-10 left-0  px-3 bg-[#ebe8ee] border">
            <div className="logo text-center mb-3">KBBTY <hr /></div>

            <div className="navlink">
                <ul>
                    <li className=" flex bg-white p-3 px-10 mb-2 cursor-pointer gap-3"> <IoHome /> Dashboard</li>
                    <li className="flex hover:bg-white p-3 px-10 mb-2 cursor-pointer gap-3"> <RiTableFill />Tables</li>
                    <li className="flex hover:bg-white p-3 px-10 mb-2 cursor-pointer">Billing</li>
                    <li className="flex hover:bg-white p-3 px-10 mb-2 cursor-pointer">Virtual Reality</li>
                    <li className="flex hover:bg-white p-3 px-10 mb-2 cursor-pointer">Profile</li>
                </ul>
            </div>
        </nav>
    )
}

export default NavDashboard