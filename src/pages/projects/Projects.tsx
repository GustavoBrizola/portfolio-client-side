import NavigationBar from "@/components/layout/navigation-bar";
import FooterBar from "@/components/layout/footer-bar";
import ContentDisplay from "@/components/layout/content-display";
import TopBar from "@/components/layout/top-bar";
import ProjectDisplay from "@/components/layout/project-display";
import ProjectsData from "./ProjectsData.json";

function Projects() {
    return (
        <main id="projects">
            <TopBar>
                <NavigationBar/>
            </TopBar>
            <ContentDisplay>
                <div style={{display:'flex', justifyContent:'center', flexWrap:'wrap', gap:'20px', margin:'20px 0'}}>
                {Object.values(ProjectsData).map((projects, index) => (
                    <ProjectDisplay
                        key={index}
                        title={projects.name}
                        description={projects.description}
                    />
                ))}
                </div>
            </ContentDisplay>
            <FooterBar/>
        </main>
    )
}

export default Projects;