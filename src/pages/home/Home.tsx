
import ContentDisplay from '@/components/layout/content-display/ContentDisplay';
import FooterBar from '@/components/layout/footer-bar/FooterBar';


function Home() {

    // console.log(getRouteByPath('contact'));
    
   
	return (
        <main id="home"> 
            <ContentDisplay/> 
            <FooterBar/>
        </main>
	);
}

export default Home;