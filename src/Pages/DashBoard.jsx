import { useState } from "react"
import AvailableQueries from "../components/AvailableQueries"
import Editor from "../components/Editor"
import Navbar from "../components/Navbar"
import Tables from "../components/Tables"

const DashBoard = () => {

    const [query, setQuery] = useState('')
    console.log('query is ', query)
    
  return (
    <div className="h-screen overflow-auto bg-gray-100 ">
        <Navbar/>
        <div className="flex flex-row mt-12" style={{height: 'calc(100vh - 3rem)'}}>
            <Tables/>
            <div>
                <div className="flex">
                    <div>
                        <Editor query={query}/>
                    </div>
                    <div >
                        <AvailableQueries setQuery={setQuery}/>
                    </div>
                </div>
                {/* <div className="fixed overflow-auto no-scrollbar h-[40vh] no-scrollbar  bottom-2">
                    <Output/>
                </div> */}
            </div>
        </div>
    </div>
  )
}

export default DashBoard;