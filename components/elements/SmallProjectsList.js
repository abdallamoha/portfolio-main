import SmallProjectItem from "./SmallProjectItem";
import {
    faCss3,
    faHtml5,
    faJs,
    faNode, faPython,
    faReact,
    faSass, faSwift,
    faWordpress
} from "@fortawesome/free-brands-svg-icons";

function SmallProjectsList({more, setMore}) {
    return(
        <div className={more ? "d-block" : "d-none"}>
            <div className="row">
                <SmallProjectItem title="FoodPlus" sourceCode="https://github.com/abdallamoha/foodplus.git" techUsed={[faHtml5, faCss3, faJs,faPython,faSwift ]} />
                <SmallProjectItem title="CleanCare" sourceCode="https://github.com/abdallamoha/CleanCare.git" techUsed={[ faSwift,]} />
                <SmallProjectItem title="Moetjubaland" sourceCode="https://github.com/abdallamoha/moetjubaland.git" techUsed={[faHtml5, faCss3, faJs, ]} />
            </div>
            <div className="d-flex justify-content-center mb-5">
                <button onClick={() => setMore(!more)} className="btn btn-primary">Show {more ? "less" : "more"} projects</button>
            </div>
        </div>
    )
}

export default SmallProjectsList