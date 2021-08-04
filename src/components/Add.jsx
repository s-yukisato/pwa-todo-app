import {RiAddLine} from "react-icons/ri"
import IconButton from '@material-ui/core/IconButton';

export default function Add() {
    return (
        <>
            <IconButton style={{color: "white", backgroundColor: "#b30027"}}>
                <RiAddLine />
            </IconButton>
        </>
    )
}