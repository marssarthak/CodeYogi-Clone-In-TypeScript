import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAssignmentDetails } from "../../API";
import MDEditor from "@uiw/react-md-editor";
import Modal from "./Modal";
import { AssignmentDetailsType } from "../../models/assignment";

const AssignmentDetails: FC = () => {
  const data = useParams();
  const id = +data.number;
  const [AssignmentDesc, setAssignmentDesc] = useState<AssignmentDetailsType>({
    created_at: null,
    description: null,
    due_date: null,
    id: null,
    submissions: [],
    title: null,
  });

  const [isSubmitted, setSubmitted] = useState(false);
  const [showSubmit, setShowSubmit] = useState(false);

  const handelCancel = () => {
    setShowSubmit(!showSubmit);
  };

  useEffect(() => {
    getAssignmentDetails(id).then((data) => {
      setAssignmentDesc(data);
      setSubmitted(data.submissions.length != 0);
    });
  }, []);

  var dueDate = new Date(AssignmentDesc.due_date);

  return (
    <div className="bg-white p-4 rounded-md relative ">
      <div className="space-y-5">
        <h1 className="text-lg font-medium text-gray-900 ">
          Assigemnt Details
        </h1>
        <hr />
        <div className="text-sm space-y-5 font-medium">
          <div className="grid sm:grid-cols-3">
            <dd className="text-gray-500">Title</dd>
            <dl className=" text-gray-900 sm:ml-1 font-normal">
              {AssignmentDesc.title}
            </dl>
          </div>
          <hr />
          <div className="grid sm:grid-cols-3">
            <dd className="text-gray-500">Due date</dd>
            <dl className=" text-gray-900 sm:ml-1 font-normal">
              {dueDate.toDateString()}
            </dl>
          </div>
          <hr />

          <div className="grid sm:grid-cols-3 py-2">
            <dd className="text-gray-500">Description</dd>
            <dl className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <MDEditor.Markdown
                source={AssignmentDesc.description}
                className="p-2 rounded-md !text-gray-900 !bg-transparent"
              />
            </dl>
          </div>
          <hr />
        </div>
        <div className="flex items-center gap-5">
          <button
            onClick={() => setShowSubmit(!showSubmit)}
            className="flex justify-center text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 items-center focus:outline-none focus:ring-2 focus:ring-offset-2 m-1 group focus:ring-indigo-500 py-2 px-4"
          >
            Submit
          </button>
          {isSubmitted && (
            <a
              target="_blank"
              href={AssignmentDesc.submissions[0].submission_link}
              className="text-indigo-600 hover:text-indigo-700 text-base"
            >
              See your submissions
            </a>
          )}
        </div>
      </div>
      {showSubmit && <Modal cancel={handelCancel} id={AssignmentDesc.id} />}
    </div>
  );
};

export default AssignmentDetails;
