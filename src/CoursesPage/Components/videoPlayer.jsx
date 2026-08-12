import cp from "../CoursesPage.module.css";

function VideoPlayer({ lesson }) {
  return (
    <div className={cp.videoPlayer}>
      <h2>{lesson?.title}</h2>
      <video controls>
        <source src={lesson?.videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
export default VideoPlayer;
