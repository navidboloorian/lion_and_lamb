import Section from "../common/Section";
import image1 from "../assets/background_1.jpg";
import image2 from "../assets/background_2.jpg";
import image3 from "../assets/background_3.jpg";
import image4 from "../assets/background_4.jpg";
import { useEffect } from "react";
import style from "./Work.module.css";

const Work = () => {
    useEffect(() => {
        const contents : NodeListOf<HTMLDivElement> = document.querySelectorAll(`.content`);

        for(const content of contents) {
            content.style.maxWidth = "900px";
        }
    }, []);
    
    return(
        <>
            <Section title={"Project Management"} leftFrac={2} rightFrac={3}>
                <img className="section-image" src={image1} />
                <p>
                Whether collaborating with esteemed institutions, curating private collections, overseeing public installations, or orchestrating exhibitions of unparalleled sophistication, our consultancy services redefine artistic excellence. Meticulously tailored to elevate your vision, Lion & Lamb ensures a seamless fusion of artistic brilliance, cultural resonance, and logistical precision, setting a new standard for prestige in every project we undertake. With us, your artistic endeavors transcend the ordinary, becoming extraordinary expressions that captivate and endure.
                </p>
            </Section>
            <Section title={"Art Fairs & Exhibitions"} reversed={true} leftFrac={3} rightFrac={2}>
                <p>
                Elevate your art fair roster and exhibitions to unprecedented heights. Our unrivaled expertise and discerning eye for excellence ensure an immersive and sophisticated experience for both exhibitors and patrons. From Zona Maco to Dallace Art Fair meticulously curating exhibition spaces to managing artist relations, logistics, and branding, we seamlessly orchestrate every facet of your prestigious art fair, transforming it into an unparalleled showcase of the world's finest artistic expressions.
                </p>
                <img className="section-image" src={image2} />
             </Section>
            <Section title={"Acquisition"} leftFrac={2} rightFrac={3}>
                <img className="section-image" src={image3} />
                <p>
                Our bespoke services cater to designers, high-end clients, corporate  collections, and exclusive private sales. With an unwavering commitment  to sophistication, Lamb and Lion seamlessly integrates art into diverse  environments, ensuring each piece not only complements but enhances its  surroundings. Trust us to navigate the delicate balance between artistic  vision and discerning taste, as we curate, acquire, and place artworks  with unparalleled precision, transforming spaces into curated  masterpieces that resonate with our elite clientele.
                </p>
            </Section>
            <Section title={"Studio Assistance"} reversed={true} leftFrac={3} rightFrac={2}>
                <p>
                Our bespoke services cater to designers, high-end clients, corporate  collections, and exclusive private sales. With an unwavering commitment  to sophistication, Lamb and Lion seamlessly integrates art into diverse  environments, ensuring each piece not only complements but enhances its  surroundings. Trust us to navigate the delicate balance between artistic  vision and discerning taste, as we curate, acquire, and place artworks  with unparalleled precision, transforming spaces into curated  masterpieces that resonate with our elite clientele.
                </p>
                <img className="section-image" src={image4} />
            </Section>
        </>
    );
}

export default Work;