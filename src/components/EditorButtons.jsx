import { useState } from 'react';
import PropTypes from 'prop-types';
import { FaSave, FaPlay } from "react-icons/fa";
import { BsToggle2Off, BsToggle2On } from "react-icons/bs";
import 'ace-builds/src-noconflict/theme-github';
import 'ace-builds/src-noconflict/theme-monokai';
import Loader from './loader/Loader';
import { useDispatch } from 'react-redux';
import { addQuery } from '../reducers/queries';
import QueryModal from './QueryModal'; // Import the QueryModal component

const EditorButtons = ({ setTheme, theme, loading, setLoading, setOutput, sqlCode }) => {
    const [toggle, setToggle] = useState(false);
    const [showModal, setShowModal] = useState(false); // State to manage modal visibility

    EditorButtons.propTypes = {
        setTheme: PropTypes.func.isRequired,
        theme: PropTypes.string.isRequired,
        sqlCode: PropTypes.string.isRequired,
        loading: PropTypes.bool.isRequired,
        setLoading: PropTypes.func.isRequired,
        setOutput: PropTypes.func.isRequired
    };

    const dispatch = useDispatch();

    const toggleTheme = () => {
        setTheme(theme === 'monokai' ? 'github' : 'monokai');
        setToggle(!toggle);
    };

    const execute = () => {
        setLoading(true);
        setOutput(false);
        setTimeout(() => {
            setLoading(false);
            setOutput(true);
        }, 3000);
    }

    const handleQuery = (name, query) => {
        dispatch(addQuery({ name, query }));
    };
    
    return (
        <div className='flex justify-between px-4 bg-blue-50 z-10'>
            <button onClick={toggleTheme}>
                {toggle ?
                    <BsToggle2On className='text-blue-700' size={"30px"} /> :
                    <BsToggle2Off className='text-blue-700' size={"30px"} />
                }
            </button>
            <div className='flex gap-4 py-2'>
                <button className='flex items-center gap-2 bg-gray-300 px-2 py-1 text-gray-800' onClick={() => setShowModal(true)}><FaSave /> Save</button>
                <button className='flex items-center gap-2 bg-blue-700 px-2 py-1 text-white' onClick={execute}>{loading ? <Loader /> : <FaPlay />}</button>
            </div>

            <QueryModal
                showModal={showModal}
                setShowModal={setShowModal}
                handleQuery={handleQuery}
                sqlCode={sqlCode}
            />
        </div>
    )
}

export default EditorButtons;
