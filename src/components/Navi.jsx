import { useState } from "react";
import { Link } from "react-router-dom"
import { BASE_URL } from "../App"

import { GoHome } from "react-icons/go"
import { BiListPlus } from "react-icons/bi"
import { AiOutlineSearch } from "react-icons/ai"
import { IoSettingsOutline } from "react-icons/io5"

export default function Navi() {
    const [openPage, setOpenPage] = useState(1);
    return (
        <>
            <nav>
                <div className="flex justify-center">
                    <div className="m-3">
                        <div className={"shadow-2xl rounded-2xl h-16 w-16  p-2 " +
                            (openPage === 1 ? "bg-gray-400 border-t-4 border-l-4 border-gray-600" : "text-gray-900 bg-gray-200 border-b-4 border-r-4 border-t border-l border-gray-700")
                        } onClick={() => setOpenPage(1)}>
                            <Link to={BASE_URL}><GoHome size={42} /></Link>
                        </div>
                    </div>
                    <div className="m-3">
                        <div className={"shadow-2xl rounded-2xl h-16 w-16 p-2 " +
                            (openPage === 2 ? "bg-gray-400 border-t-4 border-l-4 border-gray-600" : "text-gray-900 bg-gray-200 border-b-4 border-r-4 border-t border-l border-gray-700")
                        } onClick={() => setOpenPage(2)}>
                            <Link to={`${BASE_URL}content`}><BiListPlus size={42} /></Link>
                        </div>
                    </div>
                    <div className="m-3">
                        <div className={"shadow-2xl rounded-2xl h-16 w-16 p-2 " +
                            (openPage === 3 ? "bg-gray-400 border-t-4 border-l-4 border-gray-600" : "text-gray-900 bg-gray-200 border-b-4 border-r-4 border-t border-l border-gray-700")
                        } onClick={() => setOpenPage(3)}>
                            <Link to={`${BASE_URL}picture`}><AiOutlineSearch size={42} /></Link>
                        </div>
                    </div>
                    <div className="m-3">
                        <div className={"shadow-2xl rounded-2xl h-16 w-16 p-2 " +
                            (openPage === 4 ? "bg-gray-400 border-t-4 border-l-4 border-gray-600" : "text-gray-900 bg-gray-200 border-b-4 border-r-4 border-t border-l border-gray-700")
                        } onClick={() => setOpenPage(4)}>
                            <Link to={`${BASE_URL}loading`}><IoSettingsOutline size={42} /></Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}