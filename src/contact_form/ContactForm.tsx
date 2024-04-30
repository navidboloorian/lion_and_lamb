import styles from "./ContactForm.module.css"

const ContactForm = () => {
    return(
        <div className={`content ${styles.formWrapper}`}>
            <h2>Contact</h2>
            <form action="https://formspree.io/f/xqkrnqdn" method="POST">
                <div className={styles.inputs}>
                    <input type="text" placeholder="Name" />
                    <input type="text" placeholder="Company" />
                    <input type="email" placeholder="Email" />
                    <input type="text" placeholder="Number" />
                    <textarea placeholder="Message" rows={5}></textarea>
                </div>
                <div className={styles.secondHalf}>
                    <h3>What would you like to discuss?</h3>
                    <div className={styles.checkboxes}>
                        <label className={styles.checkboxContainer}>
                            <input type="checkbox" value="Acquisition" name="discuss" />
                            <span className={styles.checkmark}></span>
                            <p>Acquisition</p>
                        </label>
                        <label className={styles.checkboxContainer}>
                            <input type="checkbox" value="Exhibitions/Art Fair" name="discuss" />
                            <span className={styles.checkmark}></span>
                            <p>Exhibitions/Art Fair</p>
                        </label>
                        <label className={styles.checkboxContainer}>
                            <input type="checkbox" value="Studio Assistance" name="discuss" />
                            <span className={styles.checkmark}></span>
                            <p>Studio Assistance</p>
                        </label>
                        <label className={styles.checkboxContainer}>
                            <input type="checkbox" value="Projects" name="discuss" />
                            <span className={styles.checkmark}></span>
                            <p>Projects</p>
                        </label>    
                        <label className={styles.checkboxContainer}>
                            <input type="checkbox" value="Corporate Collections" name="discuss" />
                            <span className={styles.checkmark}></span>
                            <p>Corporate Collections</p>
                        </label>  
                        <label className={styles.checkboxContainer}>
                            <input type="checkbox" value="Industry Relationships" name="discuss" />
                            <span className={styles.checkmark}></span>
                            <p>Industry relationships</p>
                        </label>  
                        <label className={styles.checkboxContainer}>
                            <input type="checkbox" value="Gallery build/rebrand" name="discuss" />
                            <span className={styles.checkmark}></span>
                            <p>Gallery build/rebrand</p>
                        </label>  
                    </div>
                    <h3>How did you hear about us?</h3>
                    <div className={styles.checkboxes}>
                        <label className={styles.checkboxContainer}>
                            <input type="checkbox" value="Instagram" name="referrer" />
                            <span className={styles.checkmark}></span>
                            <p>Instagram</p>
                        </label>
                        <label className={styles.checkboxContainer}>
                            <input type="checkbox" value="LinkedIn" name="referrer" />
                            <span className={styles.checkmark}></span>
                            <p>LinkedIn</p>
                        </label>
                        <label className={styles.checkboxContainer}>
                            <input type="checkbox" value="Recommendation" name="referrer" />
                            <span className={styles.checkmark}></span>
                            <p>Recommendation</p>
                        </label>
                        <label className={styles.checkboxContainer}>
                            <input type="checkbox" value="Existing client" name="referrer" />
                            <span className={styles.checkmark}></span>
                            <p>Existing client</p>
                        </label>    
                        <label className={styles.checkboxContainer}>
                            <input type="checkbox" value="Newsletter" name="referrer" />
                            <span className={styles.checkmark}></span>
                            <p>Newsletter</p>
                        </label>  
                        <label className={styles.checkboxContainer}>
                            <input type="checkbox" value="Search engine" name="referrer" />
                            <span className={styles.checkmark}></span>
                            <p>Search engine</p>
                        </label>  
                        <label className={styles.checkboxContainer}>
                            <input type="checkbox" value="Publication" name="referrer" />
                            <span className={styles.checkmark}></span>
                            <p>Publication</p>
                        </label>  
                    </div>
                </div>
                <input type="submit" value="Send" />
            </form>
        </div>
    );
}

export default ContactForm;