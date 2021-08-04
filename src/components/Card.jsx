import { useState } from "react"

import { BiChevronsDown } from "react-icons/bi"
import AlarmIcon from '@material-ui/icons/Alarm';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import IconButton from '@material-ui/core/IconButton';

export default function Card({ value }) {
    const [openColumn, setOpenColumn] = useState(false)

    return (
        <>
            <div className="m-1">
                <div className="rounded-3xl shadow-2xl h-14 w-full p-4  bg-gray-200 flex relative">
                    <div className="text-gray-900 rounded-xl shadow-2xl bg-gray-300 h-12 w-12 absolute top-0 left-0
                      oldstyle-nums font-serif  font-bold italic border-b-4 border-r-4 border-gray-800">{value}</div>
                    <div className="h-12 w-full flex justify-end">
                        <div>Complete Task!</div>
                        <IconButton>
                            <DoneAllIcon />
                        </IconButton>
                        <IconButton>
                            <AlarmIcon />
                        </IconButton>
                        <IconButton onClick={() => setOpenColumn(!openColumn)}>
                            <BiChevronsDown />
                        </IconButton>
                    </div>
                </div>
                <div className="rounded-3xl bg-gray-200 transition-all duration-500 ease-in" style={openColumn ? { maxHeight: "500px" } : { maxHeight: 0, opacity: 0, overflow: "hidden" }}>
                    <p>今日の予定<br />9:00<br />10:00<br />11:00<br />12:00<br />13:00<br />14:00<br />15:00<br />16:00</p>
                </div>
            </div>
        </>
    )
}