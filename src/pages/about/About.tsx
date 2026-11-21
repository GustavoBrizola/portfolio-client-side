import NavigationBar from "@/components/layout/navigation-bar";
import FooterBar from "@/components/layout/footer-bar";
import ContentDisplay from "@/components/layout/content-display";
import TopBar from "@/components/layout/top-bar";

function About() {
    return (
        <main id='about'>
            <TopBar>
                <NavigationBar/>
            </TopBar>
            <ContentDisplay>
                <span>Nothing here yet</span>
            </ContentDisplay> 
            <FooterBar/>
        </main>
    )
}

export default About;