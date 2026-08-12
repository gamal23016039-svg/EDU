import cl from "./CoursesLanding.module.css";
import { GetCourses } from "../../Api/Courses";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";

function CoursesRevel() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    async function HandleCourses() {
      const course = await GetCourses();
      setCourses(course);
    }
    HandleCourses();
  }, []);
  return (
    <div className={cl.theHoldingErea}>
      <div className={cl.title} id="Courses">
        <h1>Courses</h1>
      </div>
      <div className={cl.borderCourses}></div>
      <div className={cl.thecourses}>
        <Swiper
          modules={[Navigation, Mousewheel]}
          navigation
          spaceBetween={30}
          slidesPerView={4}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {courses.map((course) => (
            <SwiperSlide key={course.id}>
              <div className={cl.courseapper}>
                <div className={cl.thePhoto}>
                  <img src={course.image} alt="" />
                </div>
                <div className={cl.theAddres}>
                  <h3>{course.title}</h3>
                </div>
                <div className={cl.theDiscription}>
                  <p>{course.teacher}</p>
                </div>
                <div className={cl.actionGoCourse}>
                  <Link to={`/courses/${course.id}`}>
                    <button className={cl.actionGo}>Go To The Course</button>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default CoursesRevel;
