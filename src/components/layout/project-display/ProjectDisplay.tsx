
interface ProjectDisplayInterface {
    title: string;
    description: string;
}

const ProjectDisplay = ({
    title = 'null',
    description = 'null',
}: ProjectDisplayInterface) => {
    return (
        <article>
            <div style={{height:'fit-content'}}>
                {/* <img src={imgSrc} alt={imgAlt}/>   */}
                <h4>{title?.substring(0, 50)}</h4>
            </div>
            <p>{description?.substring(0, 200)}</p>
            {/* <div style={{justifyContent:'center', alignContent:'end'}}>
                {link && Object.entries(link).map(([platform, url]) => (
                    <a key={platform} href={url} target="_blank" rel="noopener noreferrer">
                        {platform}
                    </a>
                ))}
            </div> */}
        </article>
    )
}

export default ProjectDisplay