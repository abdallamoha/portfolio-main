import useWindowDimensions from "../hooks/useWindowDimensions";
import Image from "next/image";
import me from "../public/images/me.png"

function About() {
    const [windowDimensions, setWindowDimensions] =useWindowDimensions()

    const renderAboutPhoto = () => {
        if (windowDimensions){
            const {width} = windowDimensions
            if (width< 768){
                return(
                    <div className="about-photo-container">
                        <div className="about-photo" data-aos="fade-up">
                            <Image src={me} alt={me} layout="fill" placeholder="blur"  />
                        </div>
                    </div>
                )
            } else return null
        }
    }

    return (
        <div id="about">
            <h1 className="heading" data-aos="fade-up">About</h1>
            {renderAboutPhoto()}
            <p className="paragraph" data-aos="fade-up">
                My name is <strong>Abdalla mohamed .</strong> I am a fullstack developer, and I`m very passionate and dedicated to my work. With 4 years experience as a professional a fullstack developer, I have acquired the skills and knowledge.
            </p>
            <p className="paragraph" data-aos="fade-up">
                I am a Developer  from nairobi , with a strong focus in backend development . I love to get new experiences and always learn from my surroundings. I`ve done more than 15 projects. You can check it through portfolio section on
                    this website. I looking forward to any opportunities and challenges.
            </p>
            <div className="d-flex justify-content-center">
                <a href="/cv.pdf" className="btn btn-primary mt-4" data-aos="fade-up">Download CV</a>
            </div>
        </div>
    )
}

export default About