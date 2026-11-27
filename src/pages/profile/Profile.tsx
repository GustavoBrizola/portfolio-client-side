import NavigationBar from "@/components/layout/navigation-bar";
import FooterBar from "@/components/layout/footer-bar";
import ContentDisplay from "@/components/layout/content-display";
import TopBar from "@/components/layout/top-bar";
import styles from './Profile.module.css'

import ProfileBlock from "./components/ProfileBlock";
import AcademicBlock from "./components/AcademicBlock";
import AboutMeBlock from "./components/AboutMeBlock";

function profile() {
    return (
        <main id='profile' style={styles}>
            <TopBar>
                <NavigationBar/>
            </TopBar>
            <ContentDisplay>
                <ProfileBlock/>
                <AcademicBlock/>
                <AboutMeBlock/>   
            </ContentDisplay> 
            <FooterBar/>
        </main>
    )
}

export default profile;