import { useState, useEffect } from 'react';
import AceEditor from 'react-ace';
import EditorButtons from './EditorButtons';
import PropTypes from 'prop-types';

// Import SQL mode and language tools extension
import 'ace-builds/src-noconflict/mode-sql';
import 'ace-builds/src-noconflict/ext-language_tools';
import Output from './Output';

const Editor = ({ query }) => {
    const [sqlCode, setSqlCode] = useState('');
    const [theme, setTheme] = useState('github');
    const [loading, setLoading] = useState(false);
    const [output, setOutput] = useState(false);

    useEffect(() => {
        // Update sqlCode state when the query prop changes
        setSqlCode(query);
    }, [query]); // Add query to the dependency array

    const handleCodeChange = (newCode) => {
        setSqlCode(newCode);
    };

    return (
        <div  className='flex flex-col'>
            <AceEditor
                mode="sql"
                theme={theme}
                value={sqlCode}
                onChange={handleCodeChange}
                name="sql-editor"
                editorProps={{ $blockScrolling: false }}
                width='50vw'
                height='47vh'
                enableLiveAutocompletion={true}
                enableBasicAutocompletion={true}
                enableSnippets={true}
            />
            <EditorButtons setTheme={setTheme} theme={theme} loading={loading} setLoading={setLoading} setOutput={setOutput} sqlCode={sqlCode}/>
            {output ? 
                <div className="fixed overflow-auto no-scrollbar h-[40vh] no-scrollbar mt-2 z-0 bottom-2 w-fit">
                    <Output/>
                </div> : 
                <h1 className='self-center text-3xl text-center mt-24'>Execute and Await Results! </h1>
            }
        </div>
    );
};

Editor.propTypes = {
    query: PropTypes.string.isRequired,
};

export default Editor;
