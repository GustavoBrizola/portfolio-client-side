import NavigationBar from "@/components/layout/navigation-bar";
import FooterBar from "@/components/layout/footer-bar";
import ContentDisplay from "@/components/layout/content-display";
import TopBar from "@/components/layout/top-bar";
import { BurguerMenuButton } from '@/components/layout/burguer-menu';

function About() {
    return (
        <main id='about'>
            <TopBar>
                <NavigationBar/>
                <BurguerMenuButton/>
            </TopBar>
            <ContentDisplay>
            </ContentDisplay> 
            <FooterBar/>
        </main>
    )
}

export default About;