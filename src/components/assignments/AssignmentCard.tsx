import { FC, useState } from "react";
import Modal from "./Modal";
import { AssignmentType } from "../../models/assignment";
import { useNavigate } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";
import { VscPass } from "react-icons/vsc";

type AssignemntCardType = { assignmentData: AssignmentType; key: string };

const AssignmentCard: FC<AssignemntCardType> = ({ assignmentData }) => {
  var dueDate = new Date(assignmentData.due_date);
  const isLate = new Date() > dueDate;
  const [isSubmitted, setSubmitted] = useState(
    assignmentData.submissions.length != 0
  );

  const [showSubmit, setShowSubmit] = useState(false);
  const [submissionLink, setSubmissionLink] = useState(
    isSubmitted ? assignmentData.submissions[0].submission_link : "#"
  );

  const handelCalcel = () => {
    setShowSubmit(!showSubmit);
  };
  const updateSubmissionLink = (link: string) => {
    setSubmissionLink(link);
    setSubmitted(true);
  };

  const navigate = useNavigate();

  return (
    <div
      className={
        "bg-white flex flex-col rounded-lg p-4 pb-0 border-gray-100 border space-y-1 shadow-lg font-medium text-gray-900 w-full" +
        (!showSubmit && " hover:drop-shadow-lg")
      }
    >
      <div onClick={() => navigate(assignmentData.id + "/details")}>
        <div className="flex gap-4 flex-wrap">
          <h1>{`#${assignmentData.id} ${assignmentData.title}`}</h1>
          <p className="text-gray-500">
            {"(" + new Date(assignmentData.created_at).toDateString() + ")"}
          </p>
        </div>
        <div className="flex justify-between mt-2">
          <div>
            <p
              className={
                (isLate ? "text-red-600 " : "text-gray-500 ") + "font-normal"
              }
            >
              Due Date: {dueDate.toDateString()}
            </p>
            {isLate && (
              <p className="text-red-600 font-normal text-sm">
                (Submission will count as late now)
              </p>
            )}
          </div>
          {isSubmitted ? (
            <p className="text-green-600">Submitted</p>
          ) : (
            <p className="text-red-600">Not Submitted</p>
          )}
        </div>
        <p className="h-3"></p>
      </div>
      <div className="divide-x-2 flex justify-center divide-gray-200">
        <button
          onClick={() => setShowSubmit(!showSubmit)}
          className="relative inline-flex items-center justify-center flex-1 w-full py-4 font-medium text-center text-green-600 border-transparent hover:text-green-700"
        >
          <VscPass className="mr-2 w-6 h-6" />
          {isSubmitted ? "Re-Submit" : "Submit"}
        </button>
        {isSubmitted && (
          <a
            href={submissionLink}
            target="_blank"
            className="relative inline-flex items-center justify-center flex-1 w-full py-2 sm:py-4 font-medium text-center text-indigo-500 underline border-transparent hover:text-indigo-700"
          >
            <FaExternalLinkAlt className="mr-1" />
            Click to see your submition
          </a>
        )}
      </div>
      {showSubmit && (
        <Modal
          update={updateSubmissionLink}
          cancel={handelCalcel}
          id={assignmentData.id}
        />
      )}
    </div>
  );
};

export default AssignmentCard;
