import React from 'react'
import TaskList from './ohters/TaskList';
import TaskEntries from './ohters/TaskEntries';

const EmpDashBoard = () => {
  return (
    <div className="w-screen h-screen bg-[#242323] overflow-y-hidden   ">
      <div className="flex justify-between   ml-5 mr-5 ">
        <div className="text-xl text-white mt-5 ">
          <h3>Hello,</h3>
          <h1 className="ml-3 font-bold text-2xl">Sarthak </h1>
        </div>
        <div>
          <button className="bg-red-500 w-20 h-1/2 rounded-md cursor-pointer mt-5 ">
            Log Out
          </button>
        </div>
      </div>

      <div>
        <TaskList />
      </div>
      <div>
        <TaskEntries />
      </div>
    </div>
  );
}

export default EmpDashBoard