import { useNavigate } from "react-router-dom";
import "./VideoPage.css";

const VideoPage = () => {
  const navigate = useNavigate();

  // Видеоматериалы по теме "O'lkashunoslik"
  const videos = [
    {
      title: "Information field theory: from astronomical imaging to artificial intelligence",
      embedId: "gfV4QBuziaE",
    },
    { title: "IRAF Tutorial Part 5: Cosmetic Corrections", embedId: "HWuVThbipKc" },
    {
      title: "Astrophotography Image Processing Workflow",
      embedId: "-_YN4syEJ7Y", // правильный ID с дефисом
    },
    {
      title: "Astrophotography Made Easy — Final Processing",
      embedId: "diYZ8dcEdto", // видео о том, как обработать астрофото
    },
    { title: "Charge Coupled Device (CCD chip) | X-ray Physics | Radiology Physics Course #34", embedId: "E58CFlXhSUQ" },
    {
      title: "My 2021 Astrophotography Image Processing Tutorial!",
      embedId: "ph-cpjqlv0Q",
    },
    {
      title: "Siril 1.4 Beginner Tutorial: From Raw to Finished",
      embedId: "KMED8_sWu5c",
    },
    {
      title: "The Science of Deep Space Imaging | Featuring the James Webb Space Telescope",
      embedId: "88ys9CsNW08",
    },
    {
      title: "How Hubble Images Are Made",
      embedId: "QGf0yzdM5OA",
    },

  ];

  return (
    <div className="videos-container">
      <button className="back-button" onClick={() => navigate(-1)}>
        {" "}
        {/* Back button */}
        Back
      </button>
      <div className="header-section">
        <h1 className="page-title">
          Astronomical Image Processing Video Materials
        </h1>
        <p className="page-description">
          Watch educational content on astronomical imaging, image processing techniques, and celestial data analysis.
        </p>
      </div>

      <div className="video-list">
        {videos.map((video, index) => (
          <div className="video-item" key={index}>
            <h3>{video.title}</h3>
            <iframe
              src={`https://www.youtube.com/embed/${video.embedId}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={video.title}
              className="video-frame"
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoPage;
