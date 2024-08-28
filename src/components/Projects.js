import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion"; // Importa o Framer Motion
import viplant from "../assets/images/viplant.webp";
import traquinices from "../assets/images/traquinices.webp";
import dbs from "../assets/images/dbs.webp";
import misscan from "../assets/images/misscan.webp";
import think from "../assets/images/think.webp";
import vigias from "../assets/images/vigias.webp";
import portugal from "../assets/images/portugal.webp";
import coma from "../assets/images/coma.webp";
import hotspotty from "../assets/images/hotspotty.webp";

export const Projects = () => {

    const slideshow = [
        {
            title: "Viplant",
            description: "We created a new website for VIPLANT with the main aim of enhancing the user experience, extending the quality of the physical purchase to the digital environment.",
            image: viplant,
            alt: "Viplant"
        },
        {
            title: "Traquinices",
            description: "Traquinices is a company that was born in Portugal in 1996. It specializes in the distribution of premium Childcare products to provide the best satisfaction to customers.",
            image: traquinices,
            alt: "Traquinices"
        },
        {
            title: "DBS",
            description: "We built this platform and APP that allowed primary users to track medical tests.",
            image: dbs,
            alt: "DBS"
        },
        {
            title: "Miss Can",
            description: "A Portuguese and family project of the canning industry with 3 generations of history and tradition. Canned food produced in Portugal, with Portuguese fish and artisanal.",
            image: misscan,
            alt: "Miss Can"
        },
        {
            title: "ThinkFeridas",
            description: "ThinkFeridas is an application that responds to the need of many health professionals who work alone in the clinical decision regarding treating complex wounds.",
            image: think,
            alt: "ThinkFeridas"
        },
        {
            title: "Vigias da Arriba",
            description: "Vigias da Arriba is a luxury, unique and exclusive condominium with several villas with a superb sea view. It is located in Torres Vedras.",
            image: vigias,
            alt: "Vigias da Arriba"
        },
        {
            title: "Portugal Advanced Health",
            description: "Portugal Advanced Health or PAH is an innovative and pioneering project in the area of health in Portugal, specializing in hyperbaric treatments at 1.4atm (atmosphere).",
            image: portugal,
            alt: "Portugal Advanced Health"
        },
        {
            title: "Coma ou Leve",
            description: "An original concept, on the market since 1976. Meals ready to eat, with a history that stay in the memory of those who visit them.",
            image: coma,
            alt: "Coma ou Leve"
        },
        {
            title: "Hotspotty",
            description: "An innovative All-in-One platform to plan, manage and optimize decentralized networks such as the global Helium network for the Internet of Things.",
            image: hotspotty,
            alt: "Hotspotty"
        }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    };

    return (
        <div className="project" id="projects">
            <h2>Projects</h2>
            <Slider {...settings} >
                {slideshow.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <img src={project.image} alt={project.alt} style={{ padding: 30, width: "100%" }} />
                        <motion.div
                            style={{ padding: "20px", textAlign: "center" }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            <h2>{project.title}</h2>
                            <p>{project.description}</p>
                        </motion.div>
                    </motion.div>
                ))}
            </Slider>
        </div>
    );
}