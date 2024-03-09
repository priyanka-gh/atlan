import PropTypes from 'prop-types';
import { IoCodeSlashOutline } from "react-icons/io5";
import { useSelector } from "react-redux";

const AvailableQueries = ({ setQuery }) => {
    const queries = useSelector(state => state.queries.queries);

    const handleQuery = (query) => {
        setQuery(query.query); 
    };
    
    return (
        <div className="mr-2">
            <h2 className="text-2xl m-3 text-blue-600 mt-0 p-1 flex items-center gap-3">Available Queries<IoCodeSlashOutline/> </h2>
            <ul className="fixed overflow-auto h-[42vh] no-scrollbar flex flex-col mr-2 w-fit">
                {queries.map((query, index) => (
                    // <div className="w-full">
                        <li
                        key={index}
                        className="bg-gray-50 border border-gray-200 m-1 p-1 text-sm break-words cursor-pointer"
                        onClick={() => handleQuery(query)}
                        >
                        {query.name}
                    </li>
                    // </div>
                    
                ))}
            </ul>
        </div>
    );
};

AvailableQueries.propTypes = {
    setQuery: PropTypes.func.isRequired,
};

export default AvailableQueries;