import { useNavigate } from "react-router-dom";
import "./ToolsPage.css";

const tools = [
  {
    title: "Siril — Astrophotography Image Processor",
    description: "Free software for preprocessing, stacking, calibration, and enhancing astronomical images.",
    url: "https://www.siril.org"
  },
  {
    title: "Astrometry.net — Astrometric Calibration",
    description: "Upload an astronomical image to get astrometric calibration and object identification.",
    url: "https://astrometry.net/"
  },
  {
    title: "PixInsight — Advanced Astro Image Processing",
    description: "Powerful image processing software designed specifically for deep‑sky astrophotography. (Paid)",
    url: "https://pixinsight.com"
  },
  {
    title: "StarTools — GPU‑Accelerated Image Processor",
    description: "Modern astrophotography image processor with advanced noise tracking and enhancement tools.",
    url: "https://www.startools.org/"
  },
  {
    title: "Aladin Sky Atlas",
    description: "Interactive portal to visualize astronomical images and overlay catalog data.",
    url: "https://aladin.u-strasbg.fr/"
  },
  {
    title: "TOPCAT — Tabular Data Explorer",
    description: "Graphical tool for visualization and manipulation of astronomical tables including FITS catalogs.",
    url: "http://www.star.bris.ac.uk/~mbt/topcat/"
  },
  // Добавленные ресурсы
  {
    title: "Astro Club Presentations",
    description: "Collection of astronomy presentations from Astro Club Augusta.",
    url: "https://astroclubaugusta.weebly.com/presentations.html"
  },
  {
    title: "Richard Cofer — Astro Club Member",
    description: "Profile page of Richard Cofer.",
    url: "https://astroclubaugusta.weebly.com/richard-cofer.html"
  },
  {
    title: "Garret Cooler — Astro Club Member",
    description: "Profile page of Garret Cooler.",
    url: "https://astroclubaugusta.weebly.com/garret-cooler.html"
  },
  {
    title: "Bruno Huguet — Astro Club Member",
    description: "Profile page of Bruno Huguet.",
    url: "https://astroclubaugusta.weebly.com/bruno-huguet.html"
  },
  {
    title: "Neil Miller — Astro Club Member",
    description: "Profile page of Neil Miller.",
    url: "https://astroclubaugusta.weebly.com/neil-miller.html"
  },
  {
    title: "Wade Bickford — Astro Club Member",
    description: "Profile page of Wade Bickford.",
    url: "https://astroclubaugusta.weebly.com/wade-bickford.html"
  }
];

const ToolsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="tools-container">
      <button className="back-button" onClick={() => navigate(-1)}>
      Back
      </button>

      <h1 className="page-title">Useful Tools & Resources for Astronomical Image Processing</h1>
      <p>Here are some essential software tools, online services, and resources to help you process, analyze, and explore astronomical images:</p>

      <ul className="tools-list">
        {tools.map((tool, index) => (
          <li key={index} className="tool-item">
            <a href={tool.url} target="_blank" rel="noopener noreferrer" className="tool-link">
              <h3>{tool.title}</h3>
              <p>{tool.description}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToolsPage;
