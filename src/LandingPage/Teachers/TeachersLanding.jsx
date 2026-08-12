import tl from "./TeachersLanding.module.css";
import GetUsers from "../../Api/GetUsers";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

function TeachersLanding() {
  const [teachers, setTheachers] = useState([]);

  useEffect(() => {
    async function HandleRuleTeachers() {
      const teachers = await GetUsers();
      setTheachers(teachers);
    }
    HandleRuleTeachers();
  }, []);
  return (
    <div className={tl.teacherslanding}>
      {/* the title of teachers */}
      <div className={tl.theacherstitle}>
        <h1>Teachers</h1>
      </div>
      {/* the border that separete */}
      <div className={tl.boredertlsep}></div>
      {/* the palce of teachers */}
      <div className={tl.teachersdetails}>
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
          mousewheel={true}
        >
          {teachers.map((t) =>
            t.role === "teacher" ? (
              <SwiperSlide key={t.id}>
                <div className={tl.teachersid}>
                  <span>{t?.name}</span>
                  <span>{t?.email}</span>
                </div>
              </SwiperSlide>
            ) : (
              ""
            ),
          )}
        </Swiper>
      </div>
    </div>
  );
}
export default TeachersLanding;
