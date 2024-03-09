import React, { useState } from 'react';
import PropTypes from 'prop-types';

const QueryModal = ({ showModal, setShowModal, handleQuery , sqlCode}) => {
    const [queryName, setQueryName] = useState('');

    const closeModal = () => {
        setShowModal(false);
    };

    const handleSubmit = () => {
        handleQuery(queryName, sqlCode);
        closeModal();
        setQueryName('')
    };

    return (
        showModal && (
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
                <div className="bg-white p-6 rounded-lg shadow-xl">
                    <h2 className="text-xl font-semibold mb-4">Add Query</h2>
                    <input
                        type="text"
                        placeholder="Query Name"
                        value={queryName}
                        initialvalue=""
                        onChange={(e) => setQueryName(e.target.value)}
                        className="w-full mb-2 p-2 border border-gray-300 rounded"
                    />
                    <textarea
                        placeholder="Query Text"
                        value={sqlCode}
                        disabled={!queryName}
                        readOnly
                        className="w-full h-32 mb-4 p-2 border border-gray-300 rounded"
                    />
                    <div className="flex justify-end">
                        <button className="bg-blue-600 text-white px-4 py-2 rounded mr-2" onClick={handleSubmit}>Save</button>
                        <button className="bg-gray-600 text-white px-4 py-2 rounded" onClick={closeModal}>Cancel</button>
                    </div>
                </div>
            </div>
        )
    );
};

QueryModal.propTypes = {
    showModal: PropTypes.bool.isRequired,
    setShowModal: PropTypes.func.isRequired,
    handleQuery: PropTypes.func.isRequired,
};

export default QueryModal;
