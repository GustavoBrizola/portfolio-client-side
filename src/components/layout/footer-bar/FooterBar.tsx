// import { useEffect, useState } from 'react';
import styles from './FooterBar.module.css'
import siteConfig from '@/app/config/SiteConfig';

const FooterBar = () => {

    // help: `Date` is an impure function. Calling an impure function can produce unstable results that update unpredictably when the component re-renders
    // note: React Compiler skipped optimizing this component or hook. Additional guidance: https://react.dev/reference/eslint-plugin-react-hooks/lints/purity
    const currentYear = new Date().getUTCFullYear();

    return (
        <footer className={styles.footer}>
            <span>©{currentYear} {siteConfig.author}</span>
            <span>v2.0-1</span>
        </footer>
    )
}

export default FooterBar;