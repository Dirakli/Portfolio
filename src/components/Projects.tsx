import styled from "styled-components";
import one from "/assets/projects/one.png"
import two from "/assets/projects/two.jpg"
import three from "/assets/projects/three.jpg"
import four from "/assets/projects/four.jpg"
import five from "/assets/projects/five.png"
import six from "/assets/projects/six.jpg"
import seven from "/assets/projects/seven.jpg"
import eight from "/assets/projects/eight.png"
import nine from "/assets/projects/nine.jpg"
import ten from "/assets/projects/ten.jpg"
import eleven from "/assets/projects/eleven.jpg"
import twelve from "/assets/projects/twelve.jpg"
import thirteen from "/assets/projects/thirteen.jpg"
import fourteen from "/assets/projects/fourteen.jpg"
import fifteen from "/assets/projects/fifteen.jpg"
import sixteen from "/assets/projects/sixteen.jpg"
import seventeen from "/assets/projects/seventeen.jpg"
import eighteen from "/assets/projects/eighteen.jpg"
import nineteen from "/assets/projects/nineteen.jpg"
import twenty from "/assets/projects/twenty.jpg"
import chain from "/assets/chain.png"
import github from "/assets/github.svg"


function Projects() {
    return (
        <Wrapper>
            <ProjectHeading>Projects</ProjectHeading>
            <ProjectText>Things I’ve built so far</ProjectText>
            <ProjectWrapper style={{ marginTop: "111px" }} >
                <PerProject>
                    <Picture src={four} alt="project image" />
                    <Heading>Interactive card details project</Heading>
                    <Paragrah>The project starts with a simple form where users can enter their credit card number, name, and expiry date. Users can also flip the card over to see the security code on the back.</Paragrah>
                    <TechStack>Tech stack : ReactJS, typescript, Vite</TechStack>
                    <MiniWrapper>
                        <img src={chain} alt="chain" />
                        <Span href="https://celebrated-fairy-2b0659.netlify.app/" target="_blank" >Live Preview</Span>
                        <img src={github} alt="github" />
                        <Span href="https://github.com/Dirakli/Interactive-card-details-form" target="_blank" >View Code</Span>
                    </MiniWrapper>
                </PerProject>
                <PerProject>
                    <Picture src={two} alt="project image" />
                    <Heading>Interactive comments section</Heading>
                    <Paragrah>This project allows users to reply. Overall, the "Interactive comments section" is a great showcase of interactive and user-friendly application.</Paragrah>
                    <TechStack>Tech stack : HTML, Vite, JavaScript, Typescript, ReactJS</TechStack>
                    <MiniWrapper>
                        <img src={chain} alt="chain" />
                        <Span href="https://ephemeral-dango-ba879c.netlify.app/" target="_blank" >Live Preview</Span>
                        <img src={github} alt="github" />
                        <Span href="https://github.com/Dirakli/interactive-components-section" target="_blank" >View Code</Span>
                    </MiniWrapper>
                </PerProject>
                <PerProject>
                    <Picture src={three} alt="project image" />
                    <Heading>Intro Component with Signup</Heading>
                    <Paragrah>This is my favorite project - "Intro Component with Signup". It's a modern sign-up form built</Paragrah>
                    <TechStack>Tech stack : TypeScript, JavaScript, HTML, CSS, React.js</TechStack>
                    <MiniWrapper>
                        <img src={chain} alt="chain" />
                        <Span href="https://euphonious-capybara-2b64e2.netlify.app/" target="_blank">Live Preview</Span>
                        <img src={github} alt="github" />
                        <Span href="https://github.com/Dirakli/intro-component-with-signup-form-master" target="_blank" >View Code</Span>
                    </MiniWrapper>
                </PerProject>
                <PerProject>
                    <Picture src={one} alt="project image" />
                    <Heading>QR code component</Heading>
                    <Paragrah>This is my QR code component project that is a useful tool for generating and displaying QR codes in a user-friendly way, and it demonstrates my skills in HTML, CSS  and React. Well done!</Paragrah>
                    <TechStack>Tech stack : HTML, CSS, ReactJS</TechStack>
                    <MiniWrapper>
                        <img src={chain} alt="chain image" />
                        <Span href="https://dirakli.github.io/QR-code/" target="_blank">Live Preview</Span>
                        <img src={github} alt="github icon" />
                        <Span href="https://github.com/Dirakli/QR-code" target="_blank" >View Code</Span>
                    </MiniWrapper>
                </PerProject>
                <PerProject>
                    <Picture src={five} alt="project image" />
                    <Heading>Friends App</Heading>
                    <Paragrah>This is a project named "Friends App" where you can find person and become friends</Paragrah>
                    <TechStack>Tech stack : ReactJS, Axios, Typescript, Styled-components</TechStack>
                    <MiniWrapper>
                        <img src={chain} alt="chain" />
                        <Span href="https://charming-maamoul-58fd54.netlify.app/" target="_blank" >Live Preview</Span>
                        <img src={github} alt="github" />
                        <Span href="https://github.com/Dirakli/Friends-App" target="_blank" >View Code</Span>
                    </MiniWrapper>
                </PerProject>
                <PerProject>
                    <Picture src={six} alt="project image" />
                    <Heading>Clock app</Heading>
                    <Paragrah>Developed a Clock app using React, which displays the current time based on the user's system clock. The app uses React's state management to update the time display in real-time.</Paragrah>
                    <TechStack>Tech stack : Typescript, ReactJS, Vite</TechStack>
                    <MiniWrapper>
                        <img src={chain} alt="chain" />
                        <Span href="https://effervescent-hummingbird-c770e7.netlify.app/" target="_blank" >Live Preview</Span>
                        <img src={github} alt="github" />
                        <Span href="https://github.com/Dirakli/Friends-App" target="_blank" >View Code</Span>
                    </MiniWrapper>
                </PerProject>
                <PerProject>
                    <Picture src={seven} alt="project image" />
                    <Heading>Password Generator App</Heading>
                    <Paragrah>Using this app you can generate password. It's fully responsive so you can try it on mobile, tablet and desktop. I hope this application will be useful for you.</Paragrah>
                    <TechStack>Tech stack: reactJS, Typescript, Vite</TechStack>
                    <MiniWrapper>
                        <img src={chain} alt="chain" />
                        <Span href="https://tourmaline-banoffee-587cd8.netlify.app/" target="_blank" >Live Preview</Span>
                        <img src={github} alt="github" />
                        <Span href="https://github.com/Dirakli/Password-Generator-App" target="_blank" >View Code</Span>
                    </MiniWrapper>
                </PerProject>
                <PerProject>
                    <Picture src={eight} alt="project image" />
                    <Heading>Taste of Pizza</Heading>
                    <Paragrah>This is my website where you can find and buy your favorite pizza here.</Paragrah>
                    <TechStack>Tech stack : HTML, CSS, JAVASCRIPT</TechStack>
                    <MiniWrapper>
                        <img src={chain} alt="chain" />
                        <Span href="https://dirakli.github.io/Final-project-/index.html" target="_blank" >Live Preview</Span>
                        <img src={github} alt="github" />
                        <Span href="https://github.com/Dirakli/Final-project-" target="_blank" >View Code</Span>
                    </MiniWrapper>
                </PerProject>
                <PerProject>
                    <Picture src={nine} alt="project image" />
                    <Heading>Entertainment Web App</Heading>
                    <Paragrah>You can find many genre movies and bookmark them. There is also registration form. </Paragrah>
                    <TechStack>Tech stack : reactJS, Typescript, Vite</TechStack>
                    <MiniWrapper>
                        <img src={chain} alt="chain" />
                        <Span href="https://dapper-genie-f15a16.netlify.app/" target="_blank" >Live Preview</Span>
                        <img src={github} alt="github" />
                        <Span href="https://github.com/Dirakli/Entertainment-web-app" target="_blank" >View Code</Span>
                    </MiniWrapper>
                </PerProject>
                <PerProject>
                    <Picture src={ten} alt="project image" />
                    <Heading>Tips Calculator App</Heading>
                    <Paragrah>You can calculate tips and total amount using this app if You and Your friends need help</Paragrah>
                    <TechStack>Tech stack : HTML, CSS, JavaScript</TechStack>
                    <MiniWrapper>
                        <img src={chain} alt="chain" />
                        <Span href="https://dirakli.github.io/Tip-Calculator-App/" target="_blank" >Live Preview</Span>
                        <img src={github} alt="github" />
                        <Span href="https://github.com/Dirakli/Tip-Calculator-App" target="_blank" >View Code</Span>
                    </MiniWrapper>
                </PerProject>
                <PerProject>
                    <Picture src={eleven} alt="project image" />
                    <Heading>Fylo Landing Page</Heading>
                    <Paragrah>This is fylo landing page with two colum layout master</Paragrah>
                    <TechStack>Tech stack : HTML, CSS</TechStack>
                    <MiniWrapper>
                        <img src={chain} alt="chain" />
                        <Span href="https://dirakli.github.io/fylo-landing-page-with-two-colum-layout-master/" target="_blank" >Live Preview</Span>
                        <img src={github} alt="github" />
                        <Span href="https://github.com/Dirakli/fylo-landing-page-with-two-colum-layout-master" target="_blank" >View Code</Span>
                    </MiniWrapper>
                </PerProject>
                <PerProject>
                    <Picture src={twelve} alt="project image" />
                    <Heading>Four Card Feature Section</Heading>
                    <Paragrah>In this Four card feature section responsive skills using html and css</Paragrah>
                    <TechStack>Tech stack : HTML, CSS</TechStack>
                    <MiniWrapper>
                        <img src={chain} alt="chain" />
                        <Span href="https://dirakli.github.io/four-card-feature-section-master/" target="_blank" >Live Preview</Span>
                        <img src={github} alt="github" />
                        <Span href="https://github.com/Dirakli/Equalizer-landing-page" target="_blank" >View Code</Span>
                    </MiniWrapper>
                </PerProject>
                <PerProject>
                    <Picture src={thirteen} alt="project image" />
                    <Heading>Typemaster pre Launch Landing Page</Heading>
                    <Paragrah>This landing page is fully responsive. so, you can try it on any devices.</Paragrah>
                    <TechStack>Tech stack : HTML, CSS</TechStack>
                    <MiniWrapper>
                        <img src={chain} alt="chain" />
                        <Span href="https://dirakli.github.io/Typemaster-pre-launch-landing-page/" target="_blank" >Live Preview</Span>
                        <img src={github} alt="github" />
                        <Span href="https://github.com/Dirakli/Typemaster-pre-launch-landing-page" target="_blank" >View Code</Span>
                    </MiniWrapper>
                </PerProject>
                <PerProject>
                    <Picture src={fourteen} alt="project image" />
                    <Heading>Equalizer Landing Page</Heading>
                    <Paragrah>This landing page is fully responsive that looks good on all devices (320px; 768px; 1440px)</Paragrah>
                    <TechStack>Tech stack : HTML, CSS</TechStack>
                    <MiniWrapper>
                        <img src={chain} alt="chain" />
                        <Span href="https://dirakli.github.io/Equalizer-landing-page/" target="_blank" >Live Preview</Span>
                        <img src={github} alt="github" />
                        <Span href="https://github.com/Dirakli/Equalizer-landing-page" target="_blank" >View Code</Span>
                    </MiniWrapper>
                </PerProject>
                <PerProject>
                    <Picture src={fifteen} alt="project image" />
                    <Heading>Art gallery website</Heading>
                    <Paragrah>This is art gallery website where you can see beautiful pictures</Paragrah>
                    <TechStack>Tech stack : HTML, CSS</TechStack>
                    <MiniWrapper>
                        <img src={chain} alt="chain" />
                        <Span href="https://dirakli.github.io/Art-gallery-website/" target="_blank" >Live Preview</Span>
                        <img src={github} alt="github" />
                        <Span href="https://github.com/Dirakli/Art-gallery-website" target="_blank" >View Code</Span>
                    </MiniWrapper>
                </PerProject>
                <PerProject>
                    <Picture src={sixteen} alt="project image" />
                    <Heading>Skilled E-learning Landing Page</Heading>
                    <Paragrah>It's landing page where you can see my front-end development skills (entry level)</Paragrah>
                    <TechStack>Tech stack : HTML, CSS</TechStack>
                    <MiniWrapper>
                        <img src={chain} alt="chain" />
                        <Span href="https://dirakli.github.io/Skilled-e-learning-landing-page/" target="_blank" >Live Preview</Span>
                        <img src={github} alt="github" />
                        <Span href="https://github.com/Dirakli/Skilled-e-learning-landing-page" target="_blank" >View Code</Span>
                    </MiniWrapper>
                </PerProject>
                <PerProject>
                    <Picture src={seventeen} alt="project image" />
                    <Heading>Profile Card Component</Heading>
                    <Paragrah>This is a project about person profile and its details</Paragrah>
                    <TechStack>Tech stack : HTML, CSS</TechStack>
                    <MiniWrapper>
                        <img src={chain} alt="chain" />
                        <Span href="https://dirakli.github.io/Profile-card-component/" target="_blank" >Live Preview</Span>
                        <img src={github} alt="github" />
                        <Span href="https://github.com/Dirakli/Profile-card-component" target="_blank" >View Code</Span>
                    </MiniWrapper>
                </PerProject>
                <PerProject>
                    <Picture src={eighteen} alt="project image" />
                    <Heading> Order Summary Component</Heading>
                    <Paragrah>This is a project about songs app</Paragrah>
                    <TechStack>Tech stack : HTML, CSS</TechStack>
                    <MiniWrapper>
                        <img src={chain} alt="chain" />
                        <Span href="https://dirakli.github.io/Order-summary-component/" target="_blank" >Live Preview</Span>
                        <img src={github} alt="github" />
                        <Span href="https://github.com/Dirakli/Order-summary-component" target="_blank" >View Code</Span>
                    </MiniWrapper>
                </PerProject>
                <PerProject>
                    <Picture src={nineteen} alt="project image" />
                    <Heading>NFT card component</Heading>
                    <Paragrah>NFT card shows equilibrium coin and its price in ETH</Paragrah>
                    <TechStack>Tech stack : HTML, CSS</TechStack>
                    <MiniWrapper>
                        <img src={chain} alt="chain" />
                        <Span href="https://dirakli.github.io/Dirakli-NFT-card-component/" target="_blank" >Live Preview</Span>
                        <img src={github} alt="github" />
                        <Span href="https://github.com/Dirakli/Dirakli-NFT-card-component" target="_blank" >View Code</Span>
                    </MiniWrapper>
                </PerProject>
            </ProjectWrapper>
        </Wrapper>
    )
}

const ProjectWrapper = styled.div`
  display: grid;
  grid-template-columns: 375px 375px 375px;
  gap: 50px;

`

const Span = styled.a`
  font-weight: 400;

  font-family: 'Poppins', sans-serif;
  color: #000000;
  font-size: 16px;
  line-height: 26px;
  text-decoration: underline;
    background: linear-gradient(90deg, #ff0000, #00ff22, #ff0055, #0033ff, #ff00c4, #ff0000);
  background-size: 400%;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  animation: animate 10s linear infinite;
  @keyframes animate {
    0%{
      background-position: 0%;
    }
    100%{
      background-position: 400%;
    }
  }
`

const MiniWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 292px;
`

const TechStack = styled.p`
  font-weight: 400;
  font-family: 'Poppins', sans-serif;
  color: #42446E;
  font-size: 16px;
  line-height: 26px;
  text-align: center;
`

const Paragrah = styled.p`
  font-weight: 300;
  font-family: 'Poppins', sans-serif;
  color: #666666;
  font-size: 18px;
  line-height: 26px;
  text-align: center;
`

const Heading = styled.h2`
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
  color: #000000;
  font-size: 28px;
  line-height: 26px;
  align-items: center;   
  text-align: center;
`

const Picture = styled.img`
  width: 100%;
  height: 260px;
`

const PerProject = styled.div`
  width: 330px;
  overflow: hidden;
  height: 580px;
  border-radius: 20px;
  box-shadow: 2px 2px 100px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
  justify-content: space-between;
  align-items: center;
`

const ProjectText = styled.span`
  font-weight: 400;
  font-family: 'Poppins', sans-serif;
  color: 400;
  font-size: 20px;
  line-height: 26px;
  margin-top: 28px;
  align-items: center;   
`

const ProjectHeading = styled.h1`
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
  color: #42446E;
  font-size: 42px;
  line-height: 26px;
  align-items: center;
`
const Wrapper = styled.div`
  width: 1123.45px;
  height: 525px;
  display: flex;
  margin: 100px auto;
  flex-direction: column;
  align-items: flex-start;
`


export default Projects;