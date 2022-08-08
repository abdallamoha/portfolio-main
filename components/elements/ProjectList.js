import ProjectItem from "./ProjectItem";
import commerce from "../../public/images/projects/commerce.png";
import {
    faHtml5,
    faCss3,
    faJs,
    faSass,
    faBootstrap,
    faNode,
    faReact
} from "@fortawesome/free-brands-svg-icons";

function ProjectList() {
    return (
        <>
            <ProjectItem
                title="E-Commerce website"
                description={
                    <>
                        <p>
                            This is a fully functional e-commerce website which is fast, has good SEO and is fully responsive across all screens. It uses google maps api to
                            calculate delivery fee and give accurate directions for efficient deliveries. The payment system is powered by daraja api which enables m-pesa, Kenya&apos;s most popular payment system. Lastly, its integrated with google analytics and facebook pixel to boost sales.
                        </p>
                        <p>
                            I have two variants running at real time, <a
                            href="http://alpha-supplement.com/" target="_blank" rel="noreferrer">Alpha Fitness</a> which
                            sells gym accessories and <a href="http://139.162.233.144/ "target="_blank" rel="noreferrer">Amazon Cellular</a> which
                            sells electronics. My clients are pleased with the website and have reported a smooth
                            operation of their online businesses.
                        </p>
                    </>
                }
                techUsed={[faHtml5, faCss3, faSass, faBootstrap, faJs, faNode, "mongodb.svg"]}
                demo="https://alpha-supplement.com"
                sourceCode="https://github.com/faizscripts/amazon-cellular"
                youtube={true}
                link="https://www.youtube.com/embed/uCpxKfBrX7k"
            />




        </>
    )
}

export default ProjectList