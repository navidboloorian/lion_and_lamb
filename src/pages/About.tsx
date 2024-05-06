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
        <Section title={"About"} leftFrac={1} rightFrac={3}>
            <img className="section-image" src={image8} />
            <p>
                Welcome to Lion & Lamb, the pinnacle of creative consultancy where visionary art meets strategic brilliance. At  Lamb & Lion, we specialize in seamlessly fusing the realms of artistic expression and business acumen, transforming ideas into masterpieces and ventures into triumphs.<br /><br />
                Lamb & Lion is not just a consultancy; it's a commitment to elevating the intersection of art and business. We pride ourselves on our dedication to excellence, attention to detail, and an unwavering passion for bringing artistic visions to life. With us, your creative journey becomes a seamless, inspiring, and triumphant experience.<br /><br />
                Building and nurturing authentic connections with collaborators and audiences is the core of our success and remains a key factor in our achievements. Lion & Lamb builds relevance and excitement to each of our projects through impeccable market research and ongoing extensive knowledge of the US market and art ecosystem.
            </p>
        </Section>
    );
}

export default About;