import styled from "styled-components";
import UniversityImage from "/assets/Vector.svg"
import { useDispatch, useSelector } from "react-redux/es/exports"

function About() {
  const changer = useSelector((item: any) => item.name.value)
  return (
    <Screen color={ !changer ? "#FFFFFF" : "#191919"}>
    <MainWrapper color={ !changer ? "#FFFFFF" : "#191919"}>
      <AboutText color={ !changer ? "#42446E" : "#D9D9D9"} >About Me</AboutText>
      <Paragraph  color={ !changer ? "#42446E" : "#CCCCCC"}>As a motivated and detail-oriented front-end developer with over a year of experience in programming, web design, and development, I am proficient in HTML, CSS, and JavaScript, with experience in ReactJS and other front-end frameworks. I have a strong focus on user experience and problem-solving, and I am skilled in web design principles and best practices, as well as responsive design and cross-browser compatibility. With excellent communication and collaboration skills, I am a collaborative team player who is eager to contribute to innovative and dynamic projects.</Paragraph>
      <Education color={ !changer ? "#42446E" : "#D9D9D9"}>Education</Education>
      <EducationWrapper>
        <MiniWrapper>
          <University>Bachelor in Faculty of Economics and Business</University>
          <Button>Full Time</Button>
        </MiniWrapper>
        <Universities>
          <img src={UniversityImage} alt="building image" />
          <UniversityName>IVANE JAVAKHISHVILI TBILISI STATE UNIVERSITY</UniversityName>
          <Duration >SEP 2014 - AUG 2018</Duration>
        </Universities>
        <Line></Line>
      </EducationWrapper>
      <EducationWrapper>
        <MiniWrapper>
          <University>Master degree in Business Administration and Modern Technologies</University>
          <ButtonOne>Full Time</ButtonOne>
        </MiniWrapper>
        <Universities>
          <img src={UniversityImage} alt="building image" />
          <UniversityName>BUSINESS AND TECHNOLOGY UNIVERSITY</UniversityName>
          <DurationTwo>SEP 2020 - AUG 2022</DurationTwo>
        </Universities>
        <Line></Line>
      </EducationWrapper>
      <EducationWrapper>
        <MiniWrapper>
          <University>Certificate on Achievement in FRONT-END COURSE</University>
          <ButtonThree>Full Time</ButtonThree>
        </MiniWrapper>
        <Universities>
          <img src={UniversityImage} alt="building image" />
          <UniversityName>ACADEMY OF DIGITAL INDUSTRIES</UniversityName>
          <DurationThree >OCT 2021 - APR 2022</DurationThree>
        </Universities>
      </EducationWrapper>
    </MainWrapper>
    </Screen>
  )
}

const Screen = styled.div`
  width: 100%;
  padding-top: 130px;
  background-color: ${(props) => props.color};

  @media (max-width: 1200px) {
    margin: 0 auto;
    padding-left: 10px;
    padding-right: 10px;
  }
`

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
  margin-left: 400px;
  line-height: 28px;
  margin-left: 400x;
  letter-spacing: 1px; 

    @media (max-width: 1200px) {
    font-size: 10px;
    line-height: 20px;
    margin-left: 0;
  }
`

const DurationTwo = styled.span`
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
  color: #A7A7A7;
  font-size: 12px;
  margin-left: 5px;
  line-height: 28px;
  margin-left: 445px;
  letter-spacing: 1px; 

    @media (max-width: 1200px) {
    font-size: 10px;
    line-height: 20px;
    margin-left: 0;
  }
`
const DurationThree = styled.span`
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
  color: #A7A7A7;
  font-size: 12px;
  margin-left: 5px;
  line-height: 28px;
  margin-left: 485px;
  letter-spacing: 1px; 

    @media (max-width: 1200px) {
    font-size: 10px;
    line-height: 20px;
    margin-left: 0;
  }
`

const UniversityName = styled.p`
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
  color: #A7A7A7;
  font-size: 12px;
  margin-left: 5px;
  line-height: 28px;
  letter-spacing: 1px; 

    @media (max-width: 1200px) {
    font-size: 10px;
    line-height: 20px;
    margin-left: 0;
  }
`

const Universities = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 1200px) {
    display: table-column;
  }
`

const MiniWrapper = styled.div`
  display: flex;
  margin-top: 38px;

  @media (max-width: 1200px) {
    width: 100%;
    justify-content: space-between;
  }
`

const ButtonThree = styled.button`
  width: 84px;
  height: 24px;
  border-radius: 100px;
  background-color: #D7FFE0;
  color: #018C0F;
  display: block;
  margin-left: 240px;
  align-items: center;
  justify-content: center;
  border: none;

  @media (max-width: 1200px) {
    margin-left: 0;
  }
`

const Button = styled.button`
  width: 84px;
  height: 24px;
  border-radius: 100px;
  background-color: #D7FFE0;
  color: #018C0F;
  display: block;
  margin-left: 280px;
  align-items: center;
  justify-content: center;
  border: none;

  @media (max-width: 1200px) {
    margin-left: 0;
  }
`

const ButtonOne = styled.button`
  width: 84px;
  height: 24px;
  border-radius: 100px;
  background-color: #D7FFE0;
  color: #018C0F;
  display: block;
  margin-left: 50px;
  align-items: center;
  justify-content: center;
  border: none;

  @media (max-width: 1200px) {
    margin-left: 0;
  }
`

const University = styled.span`
  font-weight: 400;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  color: #666666;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 1px;    

    @media (max-width: 1200px) {
    font-size: 12px;
    width: 250px;
    line-height: 25px;
    letter-spacing: 0;
  }
`

const EducationWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Education = styled.h1`
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  color: ${(props) => props.color};
  font-size: 42px;
  line-height: 52px;
  margin-top: 38px;
  letter-spacing: -0.4px;  

    @media (max-width: 1200px) {
    font-weight: 500;
    font-size: 28px;
    line-height: 30px;
  }
`

const Paragraph = styled.p`
  font-weight: 400;
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  line-height: 26px;
  color: ${(props) => props.color};
  margin-top: 38px;

    @media (max-width: 1200px) {
    font-size: 15px;
    line-height: 20px;
  }
`

const AboutText = styled.h1`
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  color: ${(props) => props.color};
  font-size: 42px;
  line-height: 52px;
  letter-spacing: -0.4px;

  @media (max-width: 1200px) {
    font-weight: 500;
    font-size: 28px;
    line-height: 30px;
  }
`

const MainWrapper = styled.div`
  width: 1123.45px;
  height: 100vh;
  display: flex;
  background-color: ${(props) => props.color};
  flex-direction: column;
  align-items: flex-start;
  margin: 0 auto;

  @media (max-width: 1200px) {
    width: 100%;
    height: 100%;
    align-items: initial;
  }
`

export default About;