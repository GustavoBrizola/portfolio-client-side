import HorizontalLine from "@/components/common/horizontal-line";
import AcademicDisplay from "@/pages/profile/components/academic-display";
import data from './AcademicBlock.json'

import collegelogo from '@/assets/icons/services/favicon-fadergs.svg'
import googlelogo from '@/assets/icons/services/googleCloud.svg'
import oraclelogo from '@/assets/icons/services/oracle.svg'

// Refactor as soon as possible, as server-side is build 
const AcademicBlock = () => {
    return (
        <article>
            <h3>Academic History</h3>
            <HorizontalLine/>
            <section style={{display:'flex', justifyContent:'center', flexWrap:'wrap'}}>
            {Object.entries(data.academic).map(([name, values]) => (
                <AcademicDisplay key={name}>
                    <img src={values.name === 'University Center FADERGS' ? collegelogo : values.name === 'Google Skills' ? googlelogo : oraclelogo}/>
                    <h3>{values.gratification}</h3>
                    <span>{values.name}</span>
                    {/* <h5>{values.level}</h5> */}
                    <h5>{values.year}</h5>
                </AcademicDisplay>
            ))}
            </section>
        </article>
    )
}

export default AcademicBlock;