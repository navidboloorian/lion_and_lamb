import Section from "../common/Section";
import image8 from "../assets/background_8.jpg";

const About = () => {
    return(
        <Section title={"About"} leftFrac={1} rightFrac={3}>
            <img className="section-image" src={image8} />
            <p>
                Welcome to Lion & Lamb, the pinnacle of creative consultancy where visionary art meets strategic brilliance. At  Lamb & Lion, we specialize in seamlessly fusing the realms of artistic expression and business acumen, transforming ideas into masterpieces and ventures into triumphs.<br /><br />
                Lamb & Lion is not just a consultancy; it's a commitment to elevating the intersection of art and business. We pride ourselves on our dedication to excellence, attention to detail, and an unwavering passion for bringing artistic visions to life. With us, your creative journey becomes a seamless, inspiring, and triumphant experience.
            </p>
        </Section>
    );
}

export default About;