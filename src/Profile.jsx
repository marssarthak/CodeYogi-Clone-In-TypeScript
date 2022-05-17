import React, { useEffect, useState } from "react";
import ProfileRow from "./ProfileRow";
import { DateTime } from "luxon";
import { useFormik } from "formik";
import { object, string } from "yup";
import { getProfile } from "./API";

function Profile() {
  const [myData, setMyData] = useState({});

  const [dataReceived, setDataReceived] = useState(false);

  useEffect(() => {
    getProfile().then((data) => {
      setMyData(data);
      setDataReceived(true);
    });
  }, []);

  const validationRule = object().shape({
    "first name": string().min(5).max(10),
    email: string().email(),
  });

  const onChange = (data) => {
    console.log(data);
  };

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      "first name": myData.first_name,
      "last name": myData.last_name,
      email: myData.email,
      "passout year": myData.year_of_pass_out,
    },
    onChange,
    validationSchema: validationRule,
  });

  console.log("errors : ", errors);

  /*{dataReceived &&
          profileItems.map((item) => (
            <ProfileRow
              title={item.title}
              placeHolder={item.placeHolder}
              name={item.name}
              value={formix.values[item.name]}
              onChange={handleChange}
            />
          ))}*/
  const profileItems = [
    {
      title: "First Name",
      placeHolder: "First Name",
      name: "first name",
    },
    { title: "Last Name", placeHolder: "Last Name", name: "last name" },
    {
      title: "Email address",
      placeHolder: "Email",
      name: "email",
      type: "email",
    },
  ];

  if (dataReceived) {
    return (
      <div className="h-full rounded-sm px-4 bg-white flex flex-col gap-4 pt-4">
        <p className="text-lg text-gray-900 font-medium">Personal Details</p>
        <hr />
        {dataReceived &&
          profileItems.map((item) => (
            <ProfileRow
              title={item.title}
              placeHolder={item.placeHolder}
              name={item.name}
              value={values[item.name]}
              onChange={handleChange}
            />
          ))}
        <ProfileRow
          title="First Name"
          placeHolder="First Name"
          name="first name"
          value={myData.first_name}
          onChange={handleChange}
        />
        <ProfileRow
          title="Last Name"
          placeHolder="Last Name"
          name="last name"
          value={myData.last_name}
          onChange={handleChange}
        />
        <ProfileRow
          title="Email address"
          placeHolder="Email"
          name="email"
          value={myData.email}
          type="email"
          onChange={handleChange}
        />
        <ProfileRow
          title="Institute Name"
          placeHolder="Institute Name"
          name="institute name"
          value={myData.meta.institute_name}
          onChange={handleChange}
        />
        <ProfileRow
          title="Year Of Passout"
          placeHolder="Year of passout"
          name="passout year"
          value={myData.year_of_pass_out}
          onChange={handleChange}
        />
        <ProfileRow
          title="Phone Number"
          placeHolder="Enter your phone Number"
          name="phone no"
          value={myData.phone_no}
          onChange={handleChange}
        />
        <ProfileRow
          title="Date Of Birth"
          placeHolder="dd-mm-yyyy"
          name="dob"
          value={DateTime.fromISO(myData.date_of_birth).toFormat("yyyy-LL-dd")}
          type="date"
          onChange={handleChange}
        />
        <ProfileRow
          title="Institute roll no."
          placeHolder="Institute roll no."
          name="roll no"
          value={myData.institute_roll_no}
          onChange={handleChange}
        />
        <ProfileRow
          title="Branch"
          placeHolder="Branch"
          name="branch"
          value={myData.branch}
          onChange={handleChange}
        />
      </div>
    );
  } else {
    return <></>;
  }
}

export default Profile;
