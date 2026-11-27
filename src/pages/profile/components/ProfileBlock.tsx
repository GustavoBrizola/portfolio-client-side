import Button from '@/components/common/button'
import data from './ProfileBlock.json'
import avatar from '/images/photos/avatar_placeholder.png'
import HorizontalLine from '@/components/common/horizontal-line'
import GithubContributionGraph from '@/features/github-contribution-graph'

import githubico from '@/assets/icons/services/github_white.svg'
import whatsappico from '@/assets/icons/services/whatsapp_white.svg'
import mailico from '@/assets/icons/services/gmail_white.svg'

// Refactor as soon as possible, as server-side is build 
const ProfileBlock = () => {
    return (
        <article>
            <h3>Profile Card</h3>
            <HorizontalLine/>
            <header>
                {/* API Call for image */}
                <img src={avatar} alt={`${data.profile.name}`}/>
                <div>
                    <div style={{marginBottom:'20px'}}>
                        <h1>{`${data.profile.name}`}</h1>
                        <h4>{`${data.profile.Tags}`}</h4>
                    </div>
                    
                    {/* Refactor */}
                    {/* API Call for contacts */}
                    {Object.entries(data.profile.contacts).map(([name, value]) => (
                        <address aria-label='Professional and Social Links' key={name}>
                            <Button isDisabled={false}>
                                <img
                                    src={name === 'github' ? githubico : name === 'mail' ? mailico : whatsappico}
                                    alt={name}
                                />
                            </Button>
                            <span>{value}</span>
                        </address>
                    ))}
                </div>
            </header>
            <GithubContributionGraph/>
            
        </article>
    )
}

export default ProfileBlock;