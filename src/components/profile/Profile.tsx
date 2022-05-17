import React, { useEffect, useState } from "react";
import ProfileRow from "./ProfileRow";
import { DateTime } from "luxon";
import { useFormik, Formik } from "formik";
import { object, string } from "yup";
import { getProfile } from "../../API";
import { profileType } from "../../models/profile";

function Profile() {
  const [myData, setMyData] = useState<profileType>({
    id: null,
    first_name: "",
    last_name: "",
    email: "",
    institute_roll_no: "",
    branch: "",
    date_of_birth: "",
    phone_no: null,
    meta: {
      institute_name: "",
    },
    year_of_pass_out: null,
  });

  useEffect(() => {
    getProfile().then((data) => {
      setMyData(data);
    });
  }, []);

  const onSubmit = (data) => {
    console.log(data);
  };

  const initialValues = {
    "first name": myData.first_name,
    "last name": myData.last_name,
    email: myData.email,
    "passout year": myData.year_of_pass_out,
  };

  console.log(myData);

  return (
    <div className="h-full rounded-sm px-4 bg-white flex flex-col gap-4 pt-4">
      <p className="text-lg text-gray-900 font-medium">Personal Details</p>
      <hr />
      <Formik onSubmit={onSubmit} initialValues={initialValues}>
        <div>
          <ProfileRow
            title="First Name"
            placeHolder="First Name"
            name="first name"
            value={myData.first_name}
          />
          <ProfileRow
            title="Last Name"
            placeHolder="Last Name"
            name="last name"
            value={myData.last_name}
          />
          <ProfileRow
            title="Email address"
            placeHolder="Email"
            name="email"
            value={myData.email}
            type="email"
          />
          <ProfileRow
            title="Institute Name"
            placeHolder="Institute Name"
            name="institute name"
            value={myData.meta.institute_name}
          />
          <ProfileRow
            title="Year Of Passout"
            placeHolder="Year of passout"
            name="passout year"
            value={myData.year_of_pass_out}
          />
          <ProfileRow
            title="Phone Number"
            placeHolder="Enter your phone Number"
            name="phone no"
            value={myData.phone_no}
          />
          <ProfileRow
            title="Date Of Birth"
            placeHolder="dd-mm-yyyy"
            name="dob"
            value={DateTime.fromISO(myData.date_of_birth).toFormat(
              "yyyy-LL-dd"
            )}
            type="date"
          />
          <ProfileRow
            title="Institute roll no."
            placeHolder="Institute roll no."
            name="roll no"
            value={myData.institute_roll_no}
          />
          <ProfileRow
            title="Branch"
            placeHolder="Branch"
            name="branch"
            value={myData.branch}
          />
        </div>
      </Formik>
    </div>
  );
}

export default Profile;

/*
<ProfileRow
          title="First Name"
          placeHolder="First Name"
          name="first name"
          value={myData.first_name}
        />
        <ProfileRow
          title="Last Name"
          placeHolder="Last Name"
          name="last name"
          value={myData.last_name}
        />
        <ProfileRow
          title="Email address"
          placeHolder="Email"
          name="email"
          value={myData.email}
          type="email"
        />
        <ProfileRow
          title="Institute Name"
          placeHolder="Institute Name"
          name="institute name"
          value={myData.meta.institute_name}
        />
        <ProfileRow
          title="Year Of Passout"
          placeHolder="Year of passout"
          name="passout year"
          value={myData.year_of_pass_out}
        />
        <ProfileRow
          title="Phone Number"
          placeHolder="Enter your phone Number"
          name="phone no"
          value={myData.phone_no}
        />
        <ProfileRow
          title="Date Of Birth"
          placeHolder="dd-mm-yyyy"
          name="dob"
          value={DateTime.fromISO(myData.date_of_birth).toFormat("yyyy-LL-dd")}
          type="date"
        />
        <ProfileRow
          title="Institute roll no."
          placeHolder="Institute roll no."
          name="roll no"
          value={myData.institute_roll_no}
        />
        <ProfileRow
          title="Branch"
          placeHolder="Branch"
          name="branch"
          value={myData.branch}
        />

{profileItems.map((item) => (
            <ProfileRow
              name={item.name}
              title={item.title}
              placeHolder={item.placeHolder}
            />
          ))}



          const profileItems: inputType[] = [
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


*/
//validation RUle
/*
 const validationRule = object().shape({
    "first name": string().min(5).max(10),
    email: string().email(),
  });

*/

/*{dataReceived &&
          profileItems.map((item) => (
            <ProfileRow
              title={item.title}
              placeHolder={item.placeHolder}
              name={item.name}
              value={formix.values[item.name]}
  
            />
          ))}*/
