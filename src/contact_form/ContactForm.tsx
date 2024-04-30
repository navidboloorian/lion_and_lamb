import styles from "./ContactForm.module.css"
import { useForm } from "@formspree/react";


const ContactForm = () => {
    const [state, handleSubmit, reset] = useForm("xqkrnqdn");
    const successBox : HTMLDivElement | null = document.querySelector(`.${styles.success}`);
    const errorBox : HTMLDivElement | null = document.querySelector(`.${styles.error}`);


    if(!state.submitting) {    
        if(state.succeeded) {
            if(errorBox && successBox) {
                successBox.classList.remove(`${styles.hidden}`);

                if(!errorBox.classList.contains(`${styles.hidden}`)) {
                    errorBox.classList.add(`${styles.hidden}`);
                }
            }
        }
        else {
            if(errorBox && successBox) {
                errorBox.classList.remove(`${styles.hidden}`);

                if(!successBox.classList.contains(`${styles.hidden}`)) {
                    successBox.classList.add(`${styles.hidden}`);
                }
            }
        }
    }

    return(
        <div className={`content ${styles.formWrapper}`}>
            <h2>Contact</h2>
            <form onSubmit={handleSubmit}>
                <div className={styles.inputs}>
                    <div className={`${styles.responseBox} ${styles.success} ${styles.hidden}`}>Submitted! Thank you for your inquiry!</div>
                    <div className={`${styles.responseBox} ${styles.error} ${styles.hidden}`}>Error! There was an issue submitting the form!</div>
                    <input type="text" placeholder="Name" name="Name" required />
                    <input type="text" placeholder="Company" name="Company" required />
                    <input type="email" placeholder="Email" name="Email" required />
                    <input type="text" placeholder="Number" name="Number" required />
                    <textarea placeholder="Message" rows={5} name="Message"></textarea>
                </div>
                <div className={styles.secondHalf}>
                    <h3>What would you like to discuss?</h3>
                    <div className={styles.checkboxes}>
                        <label className={styles.checkboxContainer}>
                            <input type="checkbox" value="Acquisition" name="Want to discuss:" />
                            <span className={styles.checkmark}></span>
                            <p>Acquisition</p>
                        </label>
                        <label className={styles.checkboxContainer}>
                            <input type="checkbox" value="Exhibitions/Art Fair" name="Want to discuss:" />
                            <span className={styles.checkmark}></span>
                            <p>Exhibitions/Art Fair</p>
                        </label>
                        <label className={styles.checkboxContainer}>
                            <input type="checkbox" value="Studio Assistance" name="Want to discuss:" />
                            <span className={styles.checkmark}></span>
                            <p>Studio Assistance</p>
                        </label>
                        <label className={styles.checkboxContainer}>
                            <input type="checkbox" value="Projects" name="Want to discuss:" />
                            <span className={styles.checkmark}></span>
                            <p>Projects</p>
                        </label>    
                        <label className={styles.checkboxContainer}>
                            <input type="checkbox" value="Corporate Collections" name="Want to discuss:" />
                            <span className={styles.checkmark}></span>
                            <p>Corporate Collections</p>
                        </label>  
                        <label className={styles.checkboxContainer}>
                            <input type="checkbox" value="Industry Relationships" name="Want to discuss:" />
                            <span className={styles.checkmark}></span>
                            <p>Industry relationships</p>
                        </label>  
                        <label className={styles.checkboxContainer}>
                            <input type="checkbox" value="Gallery build/rebrand" name="Want to discuss:" />
                            <span className={styles.checkmark}></span>
                            <p>Gallery build/rebrand</p>
                        </label>  
                    </div>
                    <h3>How did you hear about us?</h3>
                    <div className={styles.checkboxes}>
                        <label className={styles.checkboxContainer}>
                            <input type="checkbox" value="Instagram" name="Referred through:" />
                            <span className={styles.checkmark}></span>
                            <p>Instagram</p>
                        </label>
                        <label className={styles.checkboxContainer}>
                            <input type="checkbox" value="LinkedIn" name="Referred through:" />
                            <span className={styles.checkmark}></span>
                            <p>LinkedIn</p>
                        </label>
                        <label className={styles.checkboxContainer}>
                            <input type="checkbox" value="Recommendation" name="Referred through:" />
                            <span className={styles.checkmark}></span>
                            <p>Recommendation</p>
                        </label>
                        <label className={styles.checkboxContainer}>
                            <input type="checkbox" value="Existing client" name="Referred through:" />
                            <span className={styles.checkmark}></span>
                            <p>Existing client</p>
                        </label>    
                        <label className={styles.checkboxContainer}>
                            <input type="checkbox" value="Newsletter" name="Referred through:" />
                            <span className={styles.checkmark}></span>
                            <p>Newsletter</p>
                        </label>  
                        <label className={styles.checkboxContainer}>
                            <input type="checkbox" value="Search engine" name="Referred through:" />
                            <span className={styles.checkmark}></span>
                            <p>Search engine</p>
                        </label>  
                        <label className={styles.checkboxContainer}>
                            <input type="checkbox" value="Publication" name="Referred through:" />
                            <span className={styles.checkmark}></span>
                            <p>Publication</p>
                        </label>  
                    </div>
                </div>
                <input type="submit" disabled={state.submitting} value="Send" />
            </form>
        </div>
    );
}

export default ContactForm;