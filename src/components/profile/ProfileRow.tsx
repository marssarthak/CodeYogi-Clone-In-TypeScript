import { FC, useState, useEffect } from "react";
import { useField } from "formik";

type inputType = {
  name: string;
  title: string;
  placeHolder: string;
  type?: string;
  value?: string | number;
};

const ProfileRow: FC<inputType> = ({ name, value, ...props }) => {
  const [feild] = useField(name);
  let [val, setVal] = useState(value);
  useEffect(() => setVal(value), [value]);
  return (
    <div>
      <div className="px-6 flex items-center py-3 justify-center">
        <label className="text-gray-500 text-sm font-medium flex-1">
          {props.title}
        </label>
        <input
          type={props.type ? props.type : "text"}
          onChange={(event) => {
            setVal(event.target.value);
          }}
          onBlur={feild.onBlur}
          value={val}
          name={name}
          placeholder={props.placeHolder}
          className="inline-block w-full px-3 py-2 flex-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-r-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10  undefined bg-gray-50 rounded-md"
        />
      </div>
      <hr className="mt-4" />
    </div>
  );
};

export default ProfileRow;
