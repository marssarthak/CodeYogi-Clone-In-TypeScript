import { FC, useEffect, useState } from "react";
import AssignmentCard from "./AssignmentCard";
import uuid from "react-uuid";
import { getAssignment } from "../../API";
import { AssignmentType } from "../../models/assignment";

const AssignmentList: FC = () => {
  const [AssignmentData, setAssignmentData] = useState<AssignmentType[]>([]);
  useEffect(() => {
    getAssignment().then((data) => {
      setAssignmentData(data);
    });
  }, []);

  return (
    <>
      <p className="font-medium text-xl mb-4">Assignment List</p>
      <div className="rounded-sm px-4 sm:px-16 bg-gray-50 flex flex-col gap-4 pt-4 pb-6">
        {AssignmentData.map((item) => (
          <AssignmentCard assignmentData={item} key={uuid()} />
        ))}
      </div>
    </>
  );
};
export default AssignmentList;
