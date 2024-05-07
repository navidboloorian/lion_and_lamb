import Section from "../common/Section";
import image1 from "../assets/background_1.jpg";
import image2 from "../assets/background_2.jpg";
import image3 from "../assets/background_3.jpg";
import image4 from "../assets/background_4.jpg";
import { useEffect } from "react";

const Work = () => {
    useEffect(() => {
        const contents : NodeListOf<HTMLDivElement> = document.querySelectorAll(`.content`);

        for(const content of contents) {
            content.style.maxWidth = "900px";
        }
    }, []);
    
    return(
        <>
            <Section title={"Building and nurturing authentic connections with collaborators and audiences is the core of our success and remains a key factor in our achievements. Lion & Lamb builds relevance and excitement to each of our projects through impeccable market research and ongoing extensive knowledge of the US market and art ecosystem."} leftFrac={1} rightFrac={1}>
                <></>
                <></>
            </Section>
            <Section title={"Project Management"} leftFrac={2} rightFrac={3}>
                <img className="section-image" src={image1} />
                <p>
                Whether collaborating with esteemed institutions, curating private collections, overseeing public installations, or orchestrating exhibitions of unparalleled sophistication, our consultancy services redefine artistic excellence. Meticulously tailored to elevate your vision, Lion & Lamb ensures a seamless fusion of artistic brilliance, cultural resonance, and logistical precision, setting a new standard for prestige in every project we undertake. With us, your artistic endeavors transcend the ordinary, becoming extraordinary expressions that captivate and endure. With unparalleled efficiency, Lion & Lamb consistently delivers results.
                </p>
            </Section>
            <Section title={"Art Fairs & Exhibitions"} reversed={true} leftFrac={3} rightFrac={2}>
                <p>
                Elevate your art fair roster and exhibitions to unprecedented heights. Our team of experts offers a refined and immersive experience for both exhibitors and attendees. From organizing exhibitions at prestigious events like Venice Biennale, to creating engaging exhibition calendars and hosting pop-up events in unique locations like Majorca, we excel in curating exhibition spaces, managing artist relationships, logistics, and branding. We ensure a seamless orchestration of all aspects of your event, transforming it into a premier showcase of your identity to a global audience.
                </p>
                <img className="section-image" src={image2} />
             </Section>
            <Section title={"Acquisition"} leftFrac={2} rightFrac={3}>
                <img className="section-image" src={image3} />
                <p>
                Our bespoke services cater to designers, corporate collections, and exclusive private sales. With an unwavering commitment to sophistication, Lion & Lion seamlessly integrates art into diverse environments, ensuring each piece not only complements but enhances its surroundings.<br /><br />
                Armed with a decade of client relations worldwide Lion & Lamb is unparallel in our ability to navigate the delicate balance between artistic vision and discerning taste, as we curate, acquire, and place artworks with unparalleled precision, transforming spaces into curated masterpieces that resonate with our elite clientele.<br /><br />
                At Lion & Lamb, we focus on curating collections that honor the historical and cultural importance of artists from varied backgrounds. We highlight artists and artworks that explore uncharted territory and have something to say.
                </p>
            </Section>
            <Section title={"Studio Assistance"} reversed={true} leftFrac={3} rightFrac={2}>
                <p>
                At Lion & Lamb, we specialize in building artistic brands, scaling them for global introduction, and refining artistic vision. With over a decade of experience in art dealing, spanning both studio and gallery levels, we have honed our expertise to meet the diverse needs of our clients. Whether you're looking to establish your artistic brand, expand its reach internationally, or refine your creative vision, Lion & Lamb is equipped with the knowledge, resources, and network to bring your project to fruition. Our track record of success in the art world speaks volumes about our commitment to excellence and our ability to deliver results. Let us help you navigate the intricacies of the art market and elevate your artistic endeavors to new heights.
                </p>
                <img className="section-image" src={image4} />
            </Section>
        </>
    );
}

export default Work;