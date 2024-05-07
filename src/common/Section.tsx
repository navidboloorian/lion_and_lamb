import styles from './Section.module.css';

interface SectionProps {
    title: string;
    leftFrac: number;
    rightFrac: number;
    children: Array<React.ReactNode>;
    reversed?: boolean;
    centered?: boolean;
}

const Section = ({title, leftFrac, rightFrac, children, reversed=false, centered=false} : SectionProps) => {
    return (
        <div className={styles.wrapper}>
            <section className={styles.section}>
                <h2 className={centered ? "centered" : ""}>{title}</h2>
                <div className={`content ${styles.sectionContent} ${reversed ? styles.reversed : ""}`}>
                    <div className={styles.left} style={{flex: leftFrac}}>{children[0]}</div>
                    <div className={styles.right} style={{flex: rightFrac}}>{children[1]}</div> 
                </div>
            </section>
        </div>
    )
}

export default Section;