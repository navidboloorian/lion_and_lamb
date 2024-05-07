import BackgroundVideo from "../background_video/BackgroundVideo";
import Section from "../common/Section";
import ContactForm from "../contact_form/ContactForm";
import headshot from "../assets/rachael.png";
import styles from ".//Contact.module.css";
import { useEffect } from "react";

const Contact = () => {
    useEffect(() => {
        const contents : NodeListOf<HTMLDivElement> = document.querySelectorAll(`.content`);

        for(const content of contents) {
            content.style.maxWidth = "900px";
        }
    }, []);

    return (
        <>
            <BackgroundVideo>
                <ContactForm />
            </BackgroundVideo>
            <Section title="Meet the Team" leftFrac={1} rightFrac={6}>
                <div className={styles.headshot}>
                    <img src={headshot} />
                    <h3>Rachael Lambert</h3>
                </div>
                <p>
                Rachael Lambert brings over a decade of experience in the contemporary fine arts industry, backed by an MBA in international contemporary fine arts. She has held prestigious positions in galleries spanning from emerging underrepresented communities in Los Angeles to globally established galleries, showcasing her diverse expertise. A skilled marketer, Rachael has a proven ability to anticipate and capitalize on global trends, establishing herself as a trailblazer in the field. She excels at building strong relationships with clients and consumers, driving innovation and success. Rachael's passion and deep knowledge have led to the creation and launch of multiple artist studios, galleries and projects solidifying her reputation as a transformative figure in the art world.
                </p>
            </Section>
        </>
    );
}

export default Contact;