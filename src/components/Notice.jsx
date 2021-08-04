import { IoIosNotifications } from "react-icons/io"
import IconButton from '@material-ui/core/IconButton';

export default function Notice() {
    return (
        <>
            <IconButton color="primary" >
                <IoIosNotifications size={30} />
            </IconButton>
        </>
    )
}