import { Parallax } from "react-scroll-parallax";
import { motion } from "framer-motion";
import { Routes, Route, NavLink } from "react-router-dom";
import Web from "../components/Web";
import Video from "../components/video";
import Photoshoot from "../components/photoshoot";
import Branding from "../components/branding";
import All from "../components/All";

export const GridSection = () => {
  return (
    <Parallax speed={0} className="grid-container" id="portfolio">
      <motion.div className="grid-container__filters">
        {[
          { name: "ALL", path: "/" },
          { name: "WEB SERVICES", path: "/web-services" },
          { name: "VIDEOS", path: "/videos" },
          { name: "SOCIAL MEDIA", path: "/social-media" },
          { name: "BRAND IDENTITY", path: "/brand-identity" },
        ].map((filter) => (
          <NavLink
            key={filter.name}
            to={filter.path}
            className={({ isActive }) =>
              isActive
                ? "grid-container__filter-btn active"
                : "grid-container__filter-btn"
            }
            end
          >
            {filter.name}
          </NavLink>
        ))}
      </motion.div>

      <Routes>
        <Route path="/" element={<All />} />
        <Route path="/all" element={<All />} />
        <Route path="/web-services" element={<Web />} />
        <Route path="/videos" element={<Video />} />
        <Route path="/social-media" element={<Photoshoot />} />
        <Route path="/brand-identity" element={<Branding />} />
      </Routes>
    </Parallax>
  );
};
