import { FC } from "react";
import { DateTime } from "luxon";
import MDEditor from "@uiw/react-md-editor";
import { LecturesType } from "../../models/lectures";

type propsType = {
  lNumber: number;
  key: string;
  lectureData: LecturesType;
};

const LectureCard: FC<propsType> = ({ lectureData, lNumber }) => {
  const createDate = new Date(lectureData.created_at).toDateString();
  const startTime = DateTime.fromISO(lectureData.start_time);
  const endTime = DateTime.fromISO(lectureData.end_time);
  const duration = endTime.diff(startTime).toFormat("hh:mm:ss");

  return (
    <div className="bg-white flex flex-col rounded-md p-4 border-gray-100 border shadow-lg hover:drop-shadow-lg font-medium text-gray-900 w-full">
      <div className="flex gap-4">
        <h1>{"Lecture #" + lNumber}</h1>
        <p className="text-gray-500">{"(" + createDate + ")"}</p>
      </div>
      <p className="text-sm text-gray-500 font-normal">
        {"Duration: " + duration}
      </p>

      {lectureData.id == 3 || lectureData.id == 4 ? (
        <ul className="list-disc ml-8 mt-4">
          <li> {lectureData.topic}</li>
        </ul>
      ) : (
        <MDEditor.Markdown
          source={lectureData.topic}
          className=" !text-gray-900 !bg-transparent markdown mt-4"
        />
      )}

      <a
        href={lectureData.recording_url}
        target="_blank"
        className="text-gray-600 text-sm mt-10 self-center"
      >
        Watch/Download Recording
      </a>
    </div>
  );
};

export default LectureCard;
