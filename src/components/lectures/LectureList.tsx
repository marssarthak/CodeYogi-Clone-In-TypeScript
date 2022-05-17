import { FC, useEffect, useState } from "react";
import LectureCard from "./LectureCard";
import uuid from "react-uuid";
import { getLectures } from "../../API";
import { LecturesType } from "../../models/lectures";

const LectureList: FC = () => {
  const [lecturesData, setLecturesData] = useState<LecturesType[]>([]);
  useEffect(() => {
    getLectures().then((data) => {
      setLecturesData(data);
    });
  }, []);

  const len = lecturesData.length;
  return (
    <>
      <p className="font-medium text-xl mb-4">Lecture List</p>
      <div className="h-full rounded-sm px-4 sm:px-16 bg-gray-50 flex flex-col gap-4 pt-4">
        {lecturesData.map((item, index) => (
          <LectureCard
            lectureData={item}
            key={uuid()}
            lNumber={len - index}
          ></LectureCard>
        ))}
      </div>
    </>
  );
};

export default LectureList;
