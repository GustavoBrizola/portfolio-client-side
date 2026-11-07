import ContentDisplay from '@/components/layout/content-display';
import FooterBar from '@/components/layout/footer-bar';
import NavigationBar from '@/components/layout/navigation-bar';
import TopBar from '@/components/layout/top-bar';

function Home() { 
	return (
        <main id="home"> 
            <TopBar>
                <NavigationBar/>
            </TopBar>
            <ContentDisplay>
                <h1><b>Hello!</b> I'm Gustavo Brizola</h1>
                <p>This is my website I share all my work I create. Select one of the tabs to explore my work.</p>
            </ContentDisplay> 
            <FooterBar/>
        </main>
	);
}

export default Home;