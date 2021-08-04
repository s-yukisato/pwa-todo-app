import { useState } from "react"
import Search from "../components/Search"
import Loading from "../components/Loading"

import { RiMenuUnfoldLine } from "react-icons/ri"
import Slider from "../components/Slider"
import IconButton from '@material-ui/core/IconButton';

const Content = () => {
    const [inputValue, setInputValue] = useState("")
    const [loading, setLoading] = useState(false)

    const [openMenu, setOpenMenu] = useState(false)

    const loadingState = async () => {
        setLoading(true)
        await setTimeout(function () {
            setInputValue("")
            setLoading(false)
            console.log(window.location.pathname.split('/'))
        }, 3000)
    }
    return (
        <>
            <div>
                <Search inputValue={inputValue} setInputValue={setInputValue} loadingState={loadingState} />
                <div>
                    {loading ? <Loading /> : <div>here</div>}
                </div>

                <div className="flex justify-end">
                    <IconButton onClick={() => setOpenMenu(!openMenu)}>
                        <RiMenuUnfoldLine />
                    </IconButton>
                </div>
                <div className="absolute z-10 top-0 left-0 transition-all duration-500 ease-in" style={openMenu ? { maxWidth: "500px" } : { maxWidtht: 0, opacity: 0, overflow: "hidden" }}>
                    <Slider />
                </div>
            </div>
        </>
    )
}

export default Content