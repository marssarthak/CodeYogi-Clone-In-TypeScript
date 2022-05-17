import React, { useState } from "react";
import { useField } from "formik";

function ProfileRow(props) {
  const value = props.value;
  let [val, setVal] = useState(value);
  // onChange={(event) => {setVal(event.target.value)}}

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
          value={props.value}
          name={props.name}
          placeholder={props.placeHolder}
          className="inline-block w-full px-3 py-2 flex-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-r-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10  undefined bg-gray-50 rounded-md"
        />
      </div>
      <hr className="mt-4" />
    </div>
  );
}

export default ProfileRow;
