import { RiTableLine } from 'react-icons/ri';
import { Resizable } from 're-resizable';
import { tableHeadings } from '../constants/Constants';

const Tables = () => {
    return (
        <div className="flex overflow-hidden">
            <Resizable
                defaultSize={{ width: '23vw', height: '100vh' }}
                maxWidth={'33vw'}
                minWidth={'15vw'}
                style={{ border: '1px solid #ccc', overflowY: 'auto', overflowX: 'hidden' }} 
            >
                <div className="w-full bg-gray-100 border border-gray-200 p-4 z-0">
                    {tableHeadings.map((heading, index) => (
                        <div key={index} className='flex m-1 items-center gap-4 border-b-2'>
                            <span><RiTableLine className="table-icon" /></span>
                            <span>{heading}</span>
                        </div>
                    ))}
                </div>
            </Resizable>
        </div>
    );
};

export default Tables;
