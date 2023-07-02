import { IoHome } from "react-icons/io5"
import { RiTableFill } from "react-icons/ri"
const NavDashboard = () => {
    return (
        <div className=" w-60 h-screen px-10 bg-red-600 ">
            <div className="logo text-center">KBBTY</div>
            <hr />
            <div className="navlink">
                <ul>
                    <li className=" flex"> <IoHome /> Dashboard</li>
                    <li className="flex"> <RiTableFill />Tables</li>
                    <li>Billing</li>
                    <li>Virtual Reality</li>
                    <li>Profile</li>
                </ul>
            </div>
        </div>
    )
}

export default NavDashboard