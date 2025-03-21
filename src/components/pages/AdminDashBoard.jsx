import React from "react";
const AdminDashBoard = () => {
  const handleSubmit = (e) =>{
    e.preventDefault()
  }
  return (
    <div className="h-screen ">
      <div className="flex justify-between   ml-5 mr-5 ">
        <div className="text-xl text-white mt-5 ">
          <h3 className="text-black">Hello,</h3>
          <h1 className="ml-3 font-bold text-2xl text-black">Sarthak </h1>
        </div>
        <div>
          <button className="bg-red-500 w-20 h-1/2 rounded-md cursor-pointer mt-5 ">
            Log Out
          </button>
        </div>
      </div>
      <form className="flex text-white  bg-[#101010] justify-between">
        <div className="flex flex-col ml-5  w-1/2">
          <label>Task Title</label>
          <input
            placeholder="Make a Ui design"
            className="bg-black border-2 border-white w-full"
          />
          <label className="mt-3">Date</label>
          <input
            type="date"
            className="bg-black border-2 border-white w-full"
          />
          <label className="mt-3">Assign to</label>
          <input
            placeholder="Employee name"
            className="bg-black border-2 border-white w-full"
          />
          <label className="mt-3">Category</label>
          <input
            placeholder="dev,design,etc"
            className="bg-black border-2 border-white w-full"
          />
        </div>
        <div className=" mr-5 flex flex-col  ">
          <label>Description</label>
          <textarea
            rows="6"
            overflow-y-scroll
            cols="80"
            className="bg-black border-2 border-white"
          />
          <button className="bg-green-500  h-10 mt-3"
          onClick={handleSubmit}
          >Create Task</button>
        </div>
      </form>

      <div className="overflow-y-clip">
        <div className=" ml-5 mr-5 mt-3 p-3 flex justify-between border-2 border-white bg-pink-500">
          <h2>Sarthak</h2>
          <h2>Make a UI design</h2>
          <h2>date</h2>
        </div>
        <div className=" ml-5 mr-5 mt-3 p-3 flex justify-between border-2 border-white bg-green-500">
          <h2>Sarthak</h2>
          <h2>Make a UI design</h2>
          <h2>date</h2>
        </div>
        <div className=" ml-5 mr-5 mt-3 p-3 flex justify-between border-2 border-white bg-yellow-500">
          <h2>Sarthak</h2>
          <h2>Make a UI design</h2>
          <h2>date</h2>
        </div>
        <div className=" ml-5 mr-5 mt-3 p-3 flex justify-between border-2 border-white bg-red-500">
          <h2>Sarthak</h2>
          <h2>Make a UI design</h2>
          <h2>date</h2>
        </div>
        <div className=" ml-5 mr-5 mt-3 p-3 flex justify-between border-2 border-white bg-red-500">
          <h2>Sarthak</h2>
          <h2>Make a UI design</h2>
          <h2>date</h2>
        </div>
        <div className=" ml-5 mr-5 mt-3 p-3 flex justify-between border-2 border-white bg-red-500">
          <h2>Sarthak</h2>
          <h2>Make a UI design</h2>
          <h2>date</h2>
        </div>
        <div className=" ml-5 mr-5 mt-3 p-3 flex justify-between border-2 border-white bg-red-500">
          <h2>Sarthak</h2>
          <h2>Make a UI design</h2>
          <h2>date</h2>
        </div>
        <div className=" ml-5 mr-5 mt-3 p-3 flex justify-between border-2 border-white bg-red-500">
          <h2>Sarthak</h2>
          <h2>Make a UI design</h2>
          <h2>date</h2>
        </div>
        <div className=" ml-5 mr-5 mt-3 p-3 flex justify-between border-2 border-white bg-red-500">
          <h2>Sarthak</h2>
          <h2>Make a UI design</h2>
          <h2>date</h2>
        </div>
        <div className=" ml-5 mr-5 mt-3 p-3 flex justify-between border-2 border-white bg-red-500">
          <h2>Sarthak</h2>
          <h2>Make a UI design</h2>
          <h2>date</h2>
        </div>
        <div className=" ml-5 mr-5 mt-3 p-3 flex justify-between border-2 border-white bg-red-500">
          <h2>Sarthak</h2>
          <h2>Make a UI design</h2>
          <h2>date</h2>
        </div>
      </div>
    </div>
  );
};

export default AdminDashBoard;
