import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Routes
import LoginScreen from "./Screens/LoginScreen/LoginScreen";
import StudentSignUP from "./Screens/LoginScreen/Components/StudentSignUP";
import StaffSignUP from "./Screens/LoginScreen/Components/StaffSignUp";
import Footer from "./Screens/LoginScreen/Components/Footer";

import StudentProfile from "./Screens/LoginScreen/Components/StudentProfile";

import VerticalButtons from "./Screens/LoginScreen/Components/VerticalButtons";
import AccountMenu from "./Screens/LoginScreen/Components/AccountMenu";

import Home from "./Screens/LoginScreen/Components/Home";
import ResponsiveAppBar from "./Screens/LoginScreen/Components/ResponsiveAppBarStaff";
import StaffProfile from "./Screens/LoginScreen/Components/StaffProfile";

import StudentAnswerUploadPage from "./Screens/LoginScreen/Components/StudentAnswerUploadPage";
import StaffQVideoLinkUploadPage from "./Screens/LoginScreen/Components/StaffQVideoLinkUploadPage";
import VideoAndCommentPage from "./Screens/LoginScreen/Components/VideoAndCommentPage";
import StaffQuestionUploadPage from "./Screens/LoginScreen/Components/StaffQuestionUploadPage";
import AddLesson from "./Screens/LoginScreen/Components/AddLesson";
import UpdateLesson from "./Screens/LoginScreen/Components/UpdateLesson";
import LessonList from "./Screens/LoginScreen/Components/LessonList";
import AddAnswer from "./Screens/LoginScreen/Components/AddAnswer";
import AnswerList from "./Screens/LoginScreen/Components/AnswerList";
import UpdateAnswer from "./Screens/LoginScreen/Components/UpdateAnswer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/StudentSignUP" element={<StudentSignUP />} />
        <Route path="/StaffSignUP" element={<StaffSignUP />} />
        <Route path="/Footer" element={<Footer />} />

        <Route path="/StudentProfile" element={<StudentProfile />} />
        <Route path="/StudentProfile" element={<StudentProfile />} />
        <Route path="/VerticalButtons" element={<VerticalButtons />} />
        <Route path="/AccountMenu" element={<AccountMenu />} />

        <Route path="/Home" element={<Home />} />
        <Route path="/ResponsiveAppBar" element={<ResponsiveAppBar />} />
        <Route path="/StaffProfile" element={<StaffProfile />} />

        <Route
          path="/StudentAnswerUploadPage"
          element={<StudentAnswerUploadPage />}
        />
        <Route
          path="/StaffQVideoLinkUploadPage"
          element={<StaffQVideoLinkUploadPage />}
        />
        <Route path="/VideoAndCommentPage" element={<VideoAndCommentPage />} />
        <Route
          path="/StaffQuestionUploadPage"
          element={<StaffQuestionUploadPage />}
        />

        <Route path="/lessonList" element={<LessonList />} />
        <Route path="/AddLesson" element={<AddLesson />} />
        <Route path="/UpdateLesson/:lessonId" element={<UpdateLesson />} />

        <Route path="/answerList" element={<AnswerList />} />
        <Route path="/AddAnswer" element={<AddAnswer />} />
        <Route path="/UpdateAnswer/:answerId" element={<UpdateAnswer />} />
      </Routes>
    </Router>
  );
}

export default App;
