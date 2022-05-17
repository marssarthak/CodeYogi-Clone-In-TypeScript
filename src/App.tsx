import { FC } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./components/mainLayout/MainLayout";
import LectureList from "./components/lectures/LectureList";
import AssignmentList from "./components/assignments/AssignmentList";
import AssignmentDetails from "./components/assignments/AssignmentDetail";
import QuizPage from "./components/quiz/QuizPage";
import RandomUser from "./components/randomUser/RandomUser";
import Profile from "./components/profile/Profile";

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/lectures" />} />
      <Route path="/" element={<MainLayout />}>
        <Route
          path="assignments/:number/details"
          element={<AssignmentDetails />}
        />
        <Route path="assignments" element={<AssignmentList />} />
        <Route path="lectures" element={<LectureList />} />
        <Route path="users" element={<RandomUser />} />
        <Route path="profile" element={<Profile />} />
      </Route>
      <Route path="quiz" element={<QuizPage />} />
    </Routes>
  );
};

export default App;
