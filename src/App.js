import { useState } from "react"
import "./AppStyle.css"

export default function App(){
  const [opennav, setopennav] = useState(false);
  
  return <div className="App">
    <div className=" navbar-option-mobile bg-new">
      <div className="d-flex flex-row justify-content-between">
        <span className="logo d-flex align-items-center justify-content ">My Portfolio</span>
        <div className="bars-btn mx-4" onClick={() => {setopennav(!opennav)}}>{""}</div>
      </div>
    </div>

      <nav className={!opennav ? "d-flex bg-new px-9 navbar-new py-5 flex-rows transition-all" : "d-flex bg-new px-9 navbar-fixed-new py-5 flex-rows transition-all" }>
        <span className="logo">My Portfolio</span>
        <div className="d-flex flex-rows">
          <a href="#home-page"className="mx-4 page-links">Home</a>
          <a href="#about-me-page"className="mx-4 page-links">About</a>
          <a href="#projects-page-section"className="mx-4 page-links">Projects</a>
        </div>
      </nav>

    <div className="landingPage px-10 py-2">
      

      <div className="landingPage-content row justify-content-center" id="home-page">
        <div className=" text-div col-lg-6 col-md-6 col-sm-12" >
          <div className="d-flex flex-column justify-content-center In-text-section">
            <p className="In-text">
            Hi, I'm Thuthukani Mthiyane <span className="wavingHand">👋🏿</span>
            </p>
            <p className="In-text ">
              I'm a Software Engineering Student at WeThinkCode_. My Passion for coding stems from curiosity and problem solving. I want to become a software engineer as I want to contribute into building software applications that will solve problems.
            </p>
            <div className="contact-icons d-flex flex-row justify-content-around">
              <a href="mailt:mthiyanemzwili@gmail.com" target="_blank" rel="noopener noreferrer"><span className="email-icon"><i class="fa-solid fa-envelope"></i></span></a>
              <a href="linkedin.com/in/mzwi-linked" target="_blank" rel="noopener noreferrer"><span className="linkedIn-icon"><i class="fa-brands fa-linkedin"></i></span></a>
              <a href="https://github.com/mzwili" target="_blank" rel="noopener noreferrer"><span className="github-icon"><i class="fa-brands fa-github"></i></span></a>
            </div>
            <div className="button-section d-flex flex-row justify-content-center mt-5">
              <a href="#about-me-page"className="about-btn">About</a>
              <a href="#projects-page-section" className="project-btn">Projects</a>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12" >
          <div className="my-photo d-flex justify-content-center">
            <img className="img-fluid custom-img" alt="landing-page" src="./images/ThuthukaniMthiyane.png"/>
          </div>
        </div>
      </div>
    </div>
    

    <div className="about-section aboutme-inside my-5 " id="about-me-page">
      <div className="d-flex flex-column">
        <p className="about-heading"> About Me</p>
        <div className="row justify-content-center shadow-lg my-5">
          <div className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-center justify-content-center">
          <lottie-player src="https://assets8.lottiefiles.com/packages/lf20_v1yudlrx.json"  background="transparent"  speed="1"  style={{width: "500px", height: "500px"}} loop autoplay>
          </lottie-player>
          </div>
          <div className="col-lig-6 col-md-6 col-sm-12 py-5 d-flex flex-column">
            <p className="about-me">
            As a qualified Electromechanician(Millwright) which I acquired through the Sappi Saiccor Apprenticeship programme, my interaction with PLC systems sparked an interest in software applications. So I began my journey into Software Engineering by studying and completing my courses at Web Design Academy and IT Varsity.I'm currently a second year student at WeThinkCode_ where I've acquired the following tech stack.
            </p>
            <span className="my-story">
            <p className="skills-heading">My Tech Stack</p>
            <span className="skills-list">
              <ul>
                <li>Git & GitLab/GitHub</li>
                <li>Python</li>
                <li>Java</li>
                <li>JavaScript</li>
                <li>SQLite3</li>
                <li>Html&CSS</li>
                <li>Intellij Idea</li>
                <li>Vs Code</li>
              </ul>
            </span>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div className="d-flex flex-column" id="projects-page-section"><p className="project-heading"> My Projects</p></div>
    <div className="projects-page px-10 py-5">
        
        <div className="projectPage-content row justify-content-center">
            
            <div className="shoe-store col-lg-6 col-md-6 col-sm-12" >
              <div className="my-photo d-flex justify-content-center">
                <a href="https://mzwili.github.io/SneakerHouse/" target="_blank" rel="noopener noreferrer">
                  <img className="img-fluid custom-img-project" alt="sneaker-store" src="./images/sneaker-house.png"/>
                </a>
                
              </div>
            </div>
            <div className="resturant col-lg-6 col-md-6 col-sm-12" >
              <div className="my-photo d-flex justify-content-center">
                <a href="https://mzwili.github.io/mzwili.simplyfood/" target="_blank" rel="noopener noreferrer">
                  <img className="img-fluid custom-img-project" alt="resturant" src="./images/simplyfood.png" />
                </a>
              </div>
            </div>
            <div className="photo-slider col-lg-6 col-md-6 col-sm-12" >
              <div className="my-photo d-flex justify-content-center">
                <a href="https://mzwili.github.io/Travel-SouthAfrica/" target="_blank" rel="noopener noreferrer">
                  <img className="img-fluid custom-img-project" alt="mountain" src="./images/travel-SA.png"/>
                </a>
              </div>
            </div>
            <div className="food-menu col-lg-6 col-md-6 col-sm-12" >
              <div className="my-photo d-flex justify-content-center">
                <a href="https://mzwili.github.io/mzwili.myrecipe/" target="_blank" rel="noopener noreferrer">
                  <img className="img-fluid custom-img-project" alt="food-menu" src="./images/myrecipe.png" />
                </a>
              </div>
            </div>
        </div>
    </div>

    

  </div>
}

