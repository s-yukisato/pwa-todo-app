import { Link } from "react-router-dom"
import { BASE_URL } from "../App"
import { GoHome } from "react-icons/go"
import { BiListPlus } from "react-icons/bi"
import { AiOutlineSearch } from "react-icons/ai"
import { IoSettingsOutline } from "react-icons/io5"

export default function Navi() {
    return (
        <div className="bg-gray-300 shadow-2xl">
            <nav>
                <div className="flex justify-center">
                    <div className="m-3">
                        <div className="shadow-2xl rounded-2xl h-12 w-12 p-2  bg-gray-200">
                            <Link to={BASE_URL}><GoHome size={32} /></Link>
                        </div>
                    </div>
                    <div className="m-3">
                        <div class="shadow-2xl rounded-2xl h-12 w-12 p-2  bg-gray-200">
                            <Link to={`${BASE_URL}content`}><BiListPlus size={32} /></Link>
                        </div>
                    </div>
                    <div className="m-3">
                        <div class="shadow-2xl rounded-2xl h-12 w-12 p-2  bg-gray-200">
                            <Link to={`${BASE_URL}picture`}><AiOutlineSearch size={32} /></Link>
                        </div>
                    </div>
                    <div className="m-3">
                        <div class="shadow-2xl rounded-2xl h-12 w-12 p-2  bg-gray-200">
                            <Link to={`${BASE_URL}loading`}><IoSettingsOutline size={32} /></Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}