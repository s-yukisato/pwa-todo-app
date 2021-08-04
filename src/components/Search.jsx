import { AiOutlineSearch } from "react-icons/ai"
import IconButton from '@material-ui/core/IconButton';

const Search = ({inputValue, setInputValue, loadingState}) => {
      return (
        <div className="p-2">
          <div className="bg-white flex items-center rounded-full shadow-xl">
            <input className="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none"
            id="search" type="text" placeholder="Search" value={inputValue} onChange={e => setInputValue(e.target.value)} />
            <div className="p-4" onClick={loadingState}>
              <IconButton color="primary" style={{ color: "#000", backgroundColor: "skyblue" }} >
                <AiOutlineSearch />
              </IconButton>
            </div>
          </div>
        </div>
      );
  };

  export default Search