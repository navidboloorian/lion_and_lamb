import Section from "../common/Section";
import image8 from "../assets/background_8.jpg";
import { useEffect } from "react";

const About = () => {
    useEffect(() => {
        const contents : NodeListOf<HTMLDivElement> = document.querySelectorAll(`.content`);

        for(const content of contents) {
            content.style.maxWidth = "900px";
        }
    }, []);
    
    return(
        <>
            <Section title={"About"} leftFrac={1} rightFrac={3}>
                <img className="section-image" src={image8} />
                <div>
                    <p>Our company values the partnerships we have with our clients, approaching each relationship as a strategic collaboration. We work closely with clients to understand their objectives, create innovative solutions, and deliver exceptional results. Throughout our engagement, we are committed to helping you achieve your goals effectively.</p>
                    <ul>
                        <li>Gallery and Artist Branding/Rebranding Assistance</li>
                        <li>Gallery/Artist Studio Builds and Scalability Solutions</li>
                        <li>Marketing and Content Strategy Development</li>
                        <li>Sales Support and Logistics Provision</li>
                        <li>Project Management</li>
                        <li>Public, Corporate, and Private Acquisitions </li>
                        <li>Software Implementation Services</li>
                        <li>Crisis management </li>
                        <li>Event Planning and Execution</li>
                        <li>PR Strategy Building</li>
                        <li>Curating, Writing, and Fair/Exhibition Strategy Construction</li>
                    </ul>
                </div>
            </Section>
            <Section leftFrac={1} rightFrac={1} title={"We specialize in bespoke, innovative strategies that offer tailored solutions to their unique needs."}>
                <></>
                <></>
            </Section>
        </>
    );
}

export default About;