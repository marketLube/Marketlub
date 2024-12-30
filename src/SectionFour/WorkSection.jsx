import { Parallax } from "react-scroll-parallax";
import Image1 from "../assets/Services/Branding & Designing 2.png";
import Image2 from "../assets/Services/perphomance.png";
import Image3 from "../assets/Services/VideoProduction 2.png";
import Image4 from "../assets/images/protienNutMob.jpeg";
import Image5 from "../assets/images/accoundings2.jpeg";
import { GoArrowDownLeft } from "react-icons/go";
import { useEffect } from "react";

export const WorkSection = () => {
  // useEffect(() => {
  //   const images = [Image1, Image2, Image3, Image4, Image5];
  //   images.forEach((image) => {
  //     const link = document.createElement("link");
  //     link.rel = "preload";
  //     link.as = "image";
  //     link.href = image;
  //     document.head.appendChild(link);
  //   });
  // }, []);

  const items = [
    {
      image: Image2,
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
      image: Image3,
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
    <div className="work-section" id="service">
      <div className="work-section__header-container">
        <h1 className="work-section__title">Dive into the work.</h1>
      </div>

      <Parallax className="work-section__cover"></Parallax>

      <div className="work-section__combo-set">
        <div className="work-section__scroll-container">
          {items.map((item, index) => (
            <div
              key={index}
              className={`work-section__sticky-section ${
                index === item.length - 1 ? "work-section__non-sticky" : ""
              }`}
            >
              <div className="work-section__imageDiv">
                <img
                  src={item.image}
                  alt={`Project ${index + 1}`}
                  className="work-section__workImage"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="work-section__second-tab">
          <div style={{ width: "100%" }}>
            {items.map((item, index) => (
              <div className="work-section__rightBottomDiv" key={index}>
                <div className="work-section__pills">
                  {item.pills.map((pill, pillIndex) => (
                    <div key={pillIndex} className="work-section__pill-item">
                      {pill}
                    </div>
                  ))}
                </div>
                <div>
                  <h1 className="work-section__heading-style">
                    {item.heading}
                  </h1>
                  <p
                    className="work-section__para-style"
                    style={{ color: "#696969", fontSize: "20px" }}
                  >
                    {item.description}
                  </p>
                </div>
                <a
                  href={item.link}
                  className="work-section__linktag"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div style={{ color: "white", fontSize: "20px" }}>
                    See full case study
                  </div>
                  <div className="work-section__icon">
                    <GoArrowDownLeft />
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
