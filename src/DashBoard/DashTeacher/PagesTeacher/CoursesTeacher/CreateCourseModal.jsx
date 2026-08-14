import { useState } from "react";
import modalStyle from "./CreateCourseModal.module.css";
import { createCourse } from "../../../../Api/GreatCourse";

function CreateCourseModal({ isOpen, onClose }) {
  const getInitialFormData = () => ({
    title: "",
    description: "",
    thumbnail: null,
    thumbnailPreview: null,
    lessons: [
      {
        id: crypto.randomUUID(),
        title: "",
        video: null,
      },
    ],
  });

  const [formData, setFormData] = useState(getInitialFormData());
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle course input changes
  function handleInputChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  // Handle thumbnail selection
  function handleThumbnailChange(e) {
    const file = e.target.files?.[0];

    if (!file) return;

    if (formData.thumbnailPreview) {
      URL.revokeObjectURL(formData.thumbnailPreview);
    }

    setFormData((prev) => ({
      ...prev,
      thumbnail: file,
      thumbnailPreview: URL.createObjectURL(file),
    }));
  }

  // Remove the selected thumbnail
  function handleRemoveThumbnail() {
    if (formData.thumbnailPreview) {
      URL.revokeObjectURL(formData.thumbnailPreview);
    }

    setFormData((prev) => ({
      ...prev,
      thumbnail: null,
      thumbnailPreview: null,
    }));
  }

  // Update a lesson title
  function handleLessonTitleChange(lessonId, value) {
    setFormData((prev) => ({
      ...prev,
      lessons: prev.lessons.map((lesson) =>
        lesson.id === lessonId ? { ...lesson, title: value } : lesson,
      ),
    }));
  }

  // Update a lesson video
  function handleLessonVideoChange(lessonId, file) {
    setFormData((prev) => ({
      ...prev,
      lessons: prev.lessons.map((lesson) =>
        lesson.id === lessonId ? { ...lesson, video: file } : lesson,
      ),
    }));
  }

  // Add a new lesson
  function handleAddLesson() {
    setFormData((prev) => ({
      ...prev,
      lessons: [
        ...prev.lessons,
        {
          id: crypto.randomUUID(),
          title: "",
          video: null,
        },
      ],
    }));
  }

  // Remove a lesson
  function handleRemoveLesson(lessonId) {
    setFormData((prev) => ({
      ...prev,
      lessons: prev.lessons.filter((lesson) => lesson.id !== lessonId),
    }));
  }

  // Reset the form and close the modal
  function handleClose() {
    if (formData.thumbnailPreview) {
      URL.revokeObjectURL(formData.thumbnailPreview);
    }

    setFormData(getInitialFormData());
    onClose();
  }

  // Submit course data to the backend
  async function handleSubmit(e) {
    e.preventDefault();

    if (!formData.title.trim()) {
      alert("Please enter a course title");
      return;
    }

    if (!formData.description.trim()) {
      alert("Please enter a course description");
      return;
    }

    if (!formData.thumbnail) {
      alert("Please upload a course thumbnail");
      return;
    }

    const invalidLesson = formData.lessons.some(
      (lesson) => !lesson.title.trim() || !lesson.video,
    );

    if (invalidLesson) {
      alert("Please fill in all lesson details");
      return;
    }

    try {
      setIsSubmitting(true);

      const data = new FormData();

      // Add course information
      data.append("title", formData.title);
      data.append("description", formData.description);
      data.append("thumbnail", formData.thumbnail);

      // Add lessons and videos
      formData.lessons.forEach((lesson, index) => {
        data.append(`lessons[${index}][title]`, lesson.title);
        data.append(`lessons[${index}][video]`, lesson.video);
      });

      // Send data to the backend
      const result = await createCourse(data);

      console.log("Course created successfully:", result);

      alert("Course created successfully!");

      handleClose();
    } catch (error) {
      console.error("Failed to create course:", error);

      alert(error.message || "Failed to create course. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (!isOpen) return null;

  return (
    <>
      <div className={modalStyle.backdrop} onClick={handleClose} />

      <div className={modalStyle.modal}>
        <button
          type="button"
          className={modalStyle.closeBtn}
          onClick={handleClose}
        >
          ✕
        </button>

        <div className={modalStyle.header}>
          <h2>Create New Course</h2>
          <p>Fill in the course information and upload your lessons.</p>
        </div>

        <form onSubmit={handleSubmit} className={modalStyle.form}>
          <fieldset className={modalStyle.fieldset}>
            <legend className={modalStyle.legend}>Course Information</legend>

            <div className={modalStyle.formGroup}>
              <label htmlFor="title" className={modalStyle.label}>
                Course Title
              </label>

              <input
                id="title"
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="Enter course title"
                className={modalStyle.input}
              />
            </div>

            <div className={modalStyle.formGroup}>
              <label htmlFor="description" className={modalStyle.label}>
                Course Description
              </label>

              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Enter course description"
                className={modalStyle.textarea}
                rows="4"
              />
            </div>

            <div className={modalStyle.formGroup}>
              <label htmlFor="thumbnail" className={modalStyle.label}>
                Course Thumbnail
              </label>

              {formData.thumbnailPreview ? (
                <div className={modalStyle.thumbnailPreview}>
                  <img
                    src={formData.thumbnailPreview}
                    alt="Course thumbnail preview"
                  />

                  <button type="button" onClick={handleRemoveThumbnail}>
                    Remove
                  </button>
                </div>
              ) : (
                <label htmlFor="thumbnail" className={modalStyle.uploadArea}>
                  <div className={modalStyle.uploadIcon}>📷</div>
                  <p>Click to upload thumbnail</p>
                  <span>PNG or JPG</span>
                </label>
              )}

              <input
                id="thumbnail"
                type="file"
                accept="image/*"
                onChange={handleThumbnailChange}
                className={modalStyle.fileInput}
              />
            </div>
          </fieldset>

          <fieldset className={modalStyle.fieldset}>
            <legend className={modalStyle.legend}>Lessons</legend>

            <div className={modalStyle.lessonsList}>
              {formData.lessons.map((lesson, index) => (
                <div key={lesson.id} className={modalStyle.lessonCard}>
                  <div className={modalStyle.lessonHeader}>
                    <h4>Lesson {index + 1}</h4>

                    {formData.lessons.length > 1 && (
                      <button
                        type="button"
                        onClick={() => handleRemoveLesson(lesson.id)}
                        className={modalStyle.removeBtn}
                      >
                        ✕ Remove
                      </button>
                    )}
                  </div>

                  <div className={modalStyle.formGroup}>
                    <label
                      htmlFor={`lesson-title-${lesson.id}`}
                      className={modalStyle.label}
                    >
                      Lesson Title
                    </label>

                    <input
                      id={`lesson-title-${lesson.id}`}
                      type="text"
                      value={lesson.title}
                      onChange={(e) =>
                        handleLessonTitleChange(lesson.id, e.target.value)
                      }
                      placeholder="Enter lesson title"
                      className={modalStyle.input}
                    />
                  </div>

                  <div className={modalStyle.formGroup}>
                    <label
                      htmlFor={`lesson-video-${lesson.id}`}
                      className={modalStyle.label}
                    >
                      Lesson Video
                    </label>

                    <label
                      htmlFor={`lesson-video-${lesson.id}`}
                      className={modalStyle.videoUploadLabel}
                    >
                      <div className={modalStyle.uploadIcon}>🎥</div>

                      <p>
                        {lesson.video
                          ? lesson.video.name
                          : "Click to upload video"}
                      </p>
                    </label>

                    <input
                      id={`lesson-video-${lesson.id}`}
                      type="file"
                      accept="video/*"
                      onChange={(e) =>
                        handleLessonVideoChange(
                          lesson.id,
                          e.target.files?.[0] || null,
                        )
                      }
                      className={modalStyle.fileInput}
                    />
                  </div>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={handleAddLesson}
              className={modalStyle.addLessonBtn}
            >
              + Add Another Lesson
            </button>
          </fieldset>

          <div className={modalStyle.formActions}>
            <button
              type="button"
              onClick={handleClose}
              className={modalStyle.cancelBtn}
              disabled={isSubmitting}
            >
              Cancel
            </button>

            <button
              type="submit"
              className={modalStyle.submitBtn}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Creating Course..." : "Create Course"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default CreateCourseModal;
