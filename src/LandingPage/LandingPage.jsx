import Hero from "./Hero/Hero";
import Trusted from "./TrustedBy/Trust";
import NavBar from "./NavBar/NavBar";
import CoursesRevel from "./Courses/CoursesLnading";
import Footer from "./Footer/Footer";
import TeacherLanding from "./Teachers/TeachersLanding";

function LandingPage() {
  return (
    <>
      <NavBar />
      <Hero />
      <Trusted />
      <CoursesRevel />
      <TeacherLanding />
      <Footer />
    </>
  );
}

export default LandingPage;
