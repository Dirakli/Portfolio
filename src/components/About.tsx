import styled from "styled-components";
import UniversityImage from "/assets/Vector.svg"


function About() {
  return (
    <MainWrapper>
      <AboutText>About Me</AboutText>
      <Paragraph>As a motivated and detail-oriented front-end developer with over a year of experience in programming, web design, and development, I am proficient in HTML, CSS, and JavaScript, with experience in ReactJS and other front-end frameworks. I have a strong focus on user experience and problem-solving, and I am skilled in web design principles and best practices, as well as responsive design and cross-browser compatibility. With excellent communication and collaboration skills, I am a collaborative team player who is eager to contribute to innovative and dynamic projects.</Paragraph>
      <Education>Education</Education>
      <EducationWrapper>
        <MiniWrapper>
          <University>Bachelor in Faculty of Economics and Business</University>
          <Button>Full Time</Button>
        </MiniWrapper>
        <Universities>
          <img src={UniversityImage} alt="building image" />
          <UniversityName>IVANE JAVAKHISHVILI TBILISI STATE UNIVERSITY</UniversityName>
          <Duration style={{ marginLeft: "240px" }} >SEP 2014 - AUG 2018</Duration>
        </Universities>
        <Line></Line>
      </EducationWrapper>
      <EducationWrapper>
        <MiniWrapper>
          <University>Master in Business Administration and Modern Technologies</University>
          <Button>Full Time</Button>
        </MiniWrapper>
        <Universities>
          <img src={UniversityImage} alt="building image" />
          <UniversityName>BUSINESS AND TECHNOLOGY UNIVERSITY</UniversityName>
          <Duration>SEP 2020 - AUG 2022</Duration>
        </Universities>
        <Line></Line>
      </EducationWrapper>
      <EducationWrapper>
        <MiniWrapper>
          <University>Certificate on Achievement in FRONT-END COURSE</University>
          <Button>Full Time</Button>
        </MiniWrapper>
        <Universities>
          <img src={UniversityImage} alt="building image" />
          <UniversityName>ACADEMY OF DIGITAL INDUSTRIES</UniversityName>
          <Duration style={{marginLeft: "325px"}} >OCT 2021 - APR 2022</Duration>
        </Universities>
        <Line></Line>
      </EducationWrapper>
    </MainWrapper>
  )
}

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #EBEAED;
  margin-top: 24px;
`

const Duration = styled.span`
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
  color: #A7A7A7;
  font-size: 12px;
  margin-left: 5px;
  line-height: 28px;
  margin-left: 280px;
  letter-spacing: 1px; 
`

const UniversityName = styled.p`
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
  color: #A7A7A7;
  font-size: 12px;
  margin-left: 5px;
  line-height: 28px;
  letter-spacing: 1px; 
`

const Universities = styled.div`
  display: flex;
  align-items: center;
`

const MiniWrapper = styled.div`
  display: flex;
  margin-top: 38px;
`

const Button = styled.button`
  width: 84px;
  height: 24px;
  margin-left: 130px;
  border-radius: 100px;
  background-color: #D7FFE0;
  color: #018C0F;
  display: block;
  align-items: center;
  justify-content: center;
  border: none;
`

const University = styled.span`
  font-weight: 400;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  color: #666666;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 1px;    
`

const EducationWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Education = styled.h1`
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  color: #42446E;
  font-size: 42px;
  line-height: 52px;
  margin-top: 38px;
  letter-spacing: -0.4px;  
`

const Paragraph = styled.p`
  font-weight: 400;
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  line-height: 26px;
  color: 18px;
  margin-top: 38px;
`

const AboutText = styled.h1`
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  color: #42446E;
  font-size: 42px;
  line-height: 52px;
  color: #42446E;
  letter-spacing: -0.4px;
`

const MainWrapper = styled.div`
  width: 710px;
  height: 100vh;
  display: flex;
  background-color: #FFFFFF;
  flex-direction: column;
  align-items: flex-start;
  margin: 100px auto;
`

export default About;