// import styles from '../styles/About.module.css'
import styles from '../styles/About.module.scss'

function About() {
    return(
        <div className={styles.containerscss}>
            <h2>About page</h2>
            <button className="btn btn-primary">Bootstrap button</button>
            <h3 style={{color: 'blueviolet'}}>Iniline styling</h3>
        </div>
    )
}

export default About