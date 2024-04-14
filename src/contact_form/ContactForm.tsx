import styles from "./ContactForm.module.css"

const ContactForm = () => {
    return(
        <div className={`content ${styles.formWrapper}`}>
            <h2>Contact</h2>
            <form>
                <div className={styles.inputs}>
                    <input type="text" placeholder="Name" />
                    <input type="text" placeholder="Company" />
                    <input type="email" placeholder="Email" />
                    <input type="text" placeholder="Number" />
                    <textarea placeholder="Message" rows={10}></textarea>
                </div>
                <input type="submit"/>
            </form>
        </div>
    );
}

export default ContactForm;