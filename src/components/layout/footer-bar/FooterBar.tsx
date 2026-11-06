import styles from './FooterBar.module.css'

const FooterBar = () => {
    return (
        <footer className={styles.footer}>
            {/* <span>© 2026 Desenvolvido por {portfolio.developer}</span> */}
            <div>
                <a href='https://github.com/GustavoBrizola/Portfolio' target='_blank' rel='noopener noreferrer'>Repositório</a>
                <a href='https://github.com/GustavoBrizola/Portfolio/issues' target='_blank' rel='noopener noreferrer'>Report Bug</a>
            </div>
            {/* <span>{portfolio.version}</span> */}
        </footer>
    )
}

export default FooterBar;