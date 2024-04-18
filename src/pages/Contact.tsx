import BackgroundVideo from "../background_video/BackgroundVideo";
import Section from "../common/Section";
import ContactForm from "../contact_form/ContactForm";
import headshot from "../assets/rachael.png";
import styles from ".//Contact.module.css";

const Contact = () => {
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
                With more than ten years of experience in the contemporary fine arts  industry, including a recent position as director of a renowned gallery  in Southern California, and possessing an MBA with a specialization in  the arts, I am equipped with a vast amount of expertise to contribute to  artist studios,  curation, projects, and collection management.
                </p>
            </Section>
        </>
    );
}

export default Contact;