import { useState, FC, useEffect } from "react";
import UserCard from "./UserCard";
import { getUsers } from "../../API";
import { randomUserType } from "../../models/randomUser";

const RandomUser: FC = () => {
  const [users, setUsers] = useState<randomUserType[]>([]);

  useEffect(() => {
    getUsers().then((data) => {
      setUsers(data);
    });
  }, []);

  return (
    <div>
      <strong className="text-gray-900 font-medium text-xl">
        Meet our team
      </strong>
      <div className="flex flex-row flex-wrap justify-between mt-4">
        {users.map((item) => (
          <UserCard
            name={`${item.name.title} ${item.name.first} ${item.name.last}`}
            pic={item.picture.large}
            twitter=""
            linkedin=""
          ></UserCard>
        ))}
      </div>
    </div>
  );
};
export default RandomUser;
