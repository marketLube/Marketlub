import { Parallax } from "react-scroll-parallax";
import Image1 from "../assets/Services/Branding & Designing 2.png";
import Image2 from "../assets/Services/perphomance.png";
import Image3 from "../assets/Services/VideoProduction 2.png";
import Image4 from "../assets/images/protienNutMob.jpeg";
import Image5 from "../assets/images/accoundings2.jpeg";
import { GoArrowDownLeft } from "react-icons/go";

export const MobWorkSection = () => {
  const items = [
    {
      image: Image3,
      pills: ["Best in Kerala", "Podcast Videos", "Corporate Shoots"],
      heading: "Video Production",
      description:
        "As Calicut's best video production agency, we create stunning visual content that captivates audiences and elevates your brand. From concept to execution, our expert team delivers high-quality videos tailored to your business goals.",
      link: "",
    },
    {
      image: Image1,
      pills: ["Branding & Designing", "Illustrations"],
      heading: "Branding & Designing",
      description:
        "Maximize ROI with data-driven performance marketing strategies. We focus on measurable results through targeted campaigns, optimizing ad spend and delivering high-quality leads to accelerate growth and achieve your business objectives effectively.",
      link: "",
    },
    {
      image: Image2,
      pills: ["Performance Marketing", "SEO", "Social Media Ads"],
      heading: "Performance Marketing",
      description:
        "Mannson Freight operates import and export consolidation services involving sea freight. They engaged Phunk to rebrand their corporate identity and develop a new higher-performance website, as well as a custom-built portal — MFS Pro— including ongoing support.",
      link: "",
    },
    {
      image: Image4,
      pills: ["Web Applications", "UI/UX design"],
      heading: "Website Development",
      description:
        "Transform your online presence with modern, responsive websites designed for functionality and aesthetics. Our website development services ensure seamless user experiences, robust performance, and scalability to meet evolving business needs.",
      link: "",
    },
    {
      image: Image5,
      pills: ["Enterprise Software", "E-commerce Solutions"],
      heading: "Custom Web Solutions",
      description:
        "Empower your business with tailored web solutions designed to address unique challenges. From custom software to advanced integrations, we deliver scalable and innovative tools that drive efficiency and support long-term success.",
      link: "",
    },
  ];

  return (
    <div className="mob-work-section" id="service">
      <div className="mob-work-section__header-container">
        <h1 className="mob-work-section__title">Dive into the work.</h1>
      </div>

      <div className="mob-work-section__scroll-container">
        {items.map((item, index) => (
          <div key={index} className="mob-work-section__item">
            <div className="mob-work-section__item-image-container">
              <img src={item.image} alt={item.heading} />
            </div>
            <div className="mob-work-section__item-pills">
              {item.pills.map((pill, pillIndex) => (
                <div key={pillIndex} className="mob-work-section__pill-item">
                  {pill}
                </div>
              ))}
              <div>
                <h1 className="work-section__heading-style">{item.heading}</h1>
                <p
                  className="work-section__para-style"
                  style={{ color: "#696969", fontSize: "20px" }}
                >
                  {item.description}
                </p>
              </div>
            </div>
            <a
              href={item.link}
              className="work-section__linktag"
              target="_blank"
              rel="noreferrer"
            >
              <div style={{ color: "white" }}>See full case study</div>
              <div className="work-section__icon">
                <GoArrowDownLeft />
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
