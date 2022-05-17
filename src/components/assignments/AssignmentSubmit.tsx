import { FC, useState } from "react";
import { MdHighlightOff } from "react-icons/md";
import { string } from "yup";
import { submitAssignment } from "../../API";

type dataType = {
  update?: (link: string) => void;
  cancel: () => void;
  id: number;
};
const AssignmentSubmit: FC<dataType> = ({ id, cancel, update }) => {
  const [submissionLink, setSubmissionLink] = useState("");
  const [isValid, setIsValid] = useState(true);

  let validater = string().url();

  const handelSubmit = () => {
    const b = validater.isValidSync(submissionLink, { strict: true });
    setIsValid(b);
    if (b) {
      submitAssignment(submissionLink, id).then((Link) => {
        update(Link);
      });
      cancel();
    }
  };
  return (
    <div className="h-screen w-full fixed left-0 top-0 bg-opacity-75 z-50 bg-gray-500 flex items-center justify-center px-6 sm:px-0">
      <div className="p-4 py-8 w-full sm:w-1/2 rounded-md bg-white space-y-5 relative">
        <hr />
        <div className="flex justify-between items-center">
          <label className="text-gray-500 font-medium text-sm">
            Submission link
          </label>
          <input
            onChange={(event) => setSubmissionLink(event.target.value)}
            value={submissionLink}
            className={
              "relative w-2/3 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-r-md focus:ring-indigo-500 focus:border-indigo-500 focus:z-10  bg-gray-50 rounded-md " +
              (!isValid && " shake")
            }
            placeholder="Submission Link"
          />
        </div>
        <div className="relative">
          <hr />
          {!isValid && (
            <p className="text-sm text-red-500 absolute bottom-px ">
              Please enter a valid URL
            </p>
          )}
        </div>
        <button
          onClick={handelSubmit}
          className="border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 m-1 group focus:ring-indigo-500 py-2 px-4 w-32"
        >
          Submit
        </button>
        <button
          onClick={() => {
            cancel();
          }}
          className="absolute -right-6 -top-14"
        >
          <MdHighlightOff className="w-8 h-8 text-gray-100" />
        </button>
      </div>
    </div>
  );
};

export default AssignmentSubmit;
