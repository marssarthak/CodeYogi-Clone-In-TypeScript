import { FC } from "react";
import { GrTwitter } from "react-icons/gr";
import { GrLinkedin } from "react-icons/gr";

const UserCard: FC<{
  name: string;
  pic: string;
  twitter: string;
  linkedin: string;
}> = (data) => {
  return (
    <div className=" flex-col rounded-md mb-10 shrink-0 space-y-2">
      <img
        className="rounded-md  w-64  h-44 object-cover "
        src={data.pic}
      ></img>
      <h1 className="text-gray-900 font-medium text-sm">{data.name}</h1>
      <div className="flex">
        <a target="_blank" href="https://twitter.com">
          {" "}
          <GrTwitter className=" w-4 h-4 text-gray-400 mr-5" />
        </a>
        <a href="https://linkedin.com">
          {" "}
          <GrLinkedin className="w-4 h-4 bg-gray-50 text-gray-400" />{" "}
        </a>
      </div>
    </div>
  );
};

export default UserCard;
