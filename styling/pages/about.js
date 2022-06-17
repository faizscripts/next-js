import styles from "../styles/About.module.scss"

function About() {
    return(
        <div className={styles.containerscss}>
            <button className="btn btn-primary">About page</button>
            <h3 style={{color: "blue"}}>Inline styling</h3>
        </div>
    )
}

export default About