import { FC } from "react";
import { Link } from "react-router-dom";
import { MdTimer } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";

const QuizPage: FC = () => {
  return (
    <>
      <header className="bg-gray-800 text-white py-1 h-14 flex justify-between items-center px-16 fixed z-10 w-full">
        <h1>
          <Link className="font-medium" to="/">
            Codeyogi
          </Link>{" "}
          | Welcome, Yoger
        </h1>
        <div className="flex gap-2">
          <div className="flex px-4 py-3 gap-3 items-center bg-blue-600">
            <MdTimer />
            00:00
          </div>
          <button className="flex px-4 py-3 gap-1 items-center bg-blue-600">
            <BiLogOut />
            Logout
          </button>
        </div>
      </header>
      <div className="flex justify-center items-center text-gray-900 min-h-screen">
        No active Question
      </div>
    </>
  );
};
export default QuizPage;
