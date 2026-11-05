// Depedencies

// Imports 
import ContentDisplay from '@/components/layout/content-display';
import FooterBar from '@/components/layout/footer-bar';
import NavigationBar from '@/components/layout/navigation-bar';
import TopBar from '@/components/layout/top-bar';

function Home() { 

   
	return (
        <main id="home"> 
            <TopBar>
                {/* <NavigationBar/> */}
            </TopBar>
            <ContentDisplay/> 
            <FooterBar/>
        </main>
	);
}

export default Home;