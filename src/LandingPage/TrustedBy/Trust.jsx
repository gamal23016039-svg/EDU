import style from "./Trust.module.css";
import CountUp from "./CountUp";

function Trust() {
  return (
    <div className={style.container}>
      {/* the section of trust */}
      <div className={style.students}>
        <CountUp
          from={0}
          to={500}
          separator=","
          direction="up"
          duration={1}
          delay={0}
          className={style.CountUp}
        />
        <span>+</span> <br />
        <span>Students</span>
      </div>
      <div className={style.border}></div>
      <div className={style.teachers}>
        <CountUp
          from={0}
          to={20}
          separator=","
          direction="up"
          duration={1}
          delay={0}
          className={style.CountUp}
        />
        <span>+</span> <br />
        <span>Theachers</span>
      </div>
      <div className={style.border}></div>
      <div className={style.courses}>
        <CountUp
          from={0}
          to={100}
          separator=","
          direction="up"
          duration={1}
          delay={0}
          className={style.CountUp}
        />
        <span>+</span> <br />
        <span>Courses</span>
      </div>
    </div>
  );
}

export default Trust;
