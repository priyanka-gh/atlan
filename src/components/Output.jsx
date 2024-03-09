import { employees } from "../constants/Constants";

const Output = () => {
    return (
        <div className="w-fit z-0">
            <div className="w-fit">
                <table className="w-fit  border border-blue-300 m-6">
                    <thead>
                        <tr className="bg-blue-300 text-white">
                            <th className="py-2 px-4 border border-blue-300">ID</th>
                            <th className="py-2 px-4 border border-blue-300">Name</th>
                            <th className="py-2 px-4 border border-blue-300">Position</th>
                            <th className="py-2 px-4 border border-blue-300">Age</th>
                            <th className="py-2 px-4 border border-blue-300">Department</th>
                            <th className="py-2 px-4 border border-blue-300">Salary</th>
                            <th className="py-2 px-4 border border-blue-300">Location</th>
                            <th className="py-2 px-4 border border-blue-300">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((employee) => (
                            <tr key={employee.id} className="border-b border-blue-300">
                                <td className="py-2 px-4 border border-blue-300">{employee.id}</td>
                                <td className="py-2 px-4 border border-blue-300">{employee.name}</td>
                                <td className="py-2 px-4 border border-blue-300">{employee.position}</td>
                                <td className="py-2 px-4 border border-blue-300">{employee.age}</td>
                                <td className="py-2 px-4 border border-blue-300">{employee.department}</td>
                                <td className="py-2 px-4 border border-blue-300">{employee.salary}</td>
                                <td className="py-2 px-4 border border-blue-300">{employee.location}</td>
                                <td className="py-2 px-4 border border-blue-300">{employee.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Output;
