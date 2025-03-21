import React from 'react'

const TaskList = () => {
  return (
    <div className="flex mr-5 p-5 ">
      <div className="bg-blue-500 w-1/3 ml-5 mt-10 h-32 text-center rounded-md p-3">
        <h1 className="font-bold text-4xl">0</h1>
        <h3 className="text-2xl font-bold ">NewTask</h3>
      </div>
      <div className="bg-green-500 w-1/3 ml-5 mt-10 h-32 text-center rounded-md p-3">
        <h1 className="font-bold text-4xl">2</h1>
        <h3 className="text-2xl font-bold ">Accepted</h3>
      </div>
      <div className="bg-red-500 w-1/3 ml-5 mt-10 h-32 text-center rounded-md p-3">
        <h1 className="font-bold text-4xl">3</h1>
        <h3 className="text-2xl font-bold ">Completed</h3>
      </div>
      <div className="bg-yellow-500 w-1/3 ml-5 mt-10 h-32 text-center rounded-md p-3">
        <h1 className="font-bold text-4xl">2</h1>
        <h3 className="text-2xl font-bold ">Failed</h3>
      </div>
    </div>
  );
}

export default TaskList