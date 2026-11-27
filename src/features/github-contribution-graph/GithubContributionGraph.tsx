// Contribution calendar powered by react-github-calendar:
// https://github.com/grubersjoe/react-github-calendar
import { GitHubCalendar } from "react-github-calendar";
import styles from './GithubContributionGraph.module.css'
import { useEffect } from "react";

const GithubContributionGraph = () => {

    // help: `Date` is an impure function. Calling an impure function can produce unstable results that update unpredictably when the component re-renders
    // note: React Compiler skipped optimizing this component or hook. Additional guidance: https://react.dev/reference/eslint-plugin-react-hooks/lints/purity
    const currentYear = new Date().getUTCFullYear();

    useEffect(() => {
        
    }, [])

    return (
        <GitHubCalendar 
            className={styles.githubContributionGraph}
            username={`${import.meta.env.VITE_GITHUB_USERNAME}`}
            blockMargin={1.2}
            // blockRadius={}
            // blockSize={} 
            year={currentYear}
        />
    )
}

export default GithubContributionGraph;