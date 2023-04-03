import styled from "styled-components";
import github from "/assets/stack/github.png"
import css from "/assets/stack/css.png"
import bootstrap from "/assets/stack/bootstrap.png"
import ts from "/assets/stack/ts.png"
import html from "/assets/stack/html.png"
import js from "/assets/stack/js.png"
import react from "/assets/stack/react.png"
import vscode from "/assets/stack/vscode.png"
import sass from "/assets/stack/sass.png"
import linkedin from "/assets/stack/linkedin.png"
import { useDispatch, useSelector } from "react-redux/es/exports"


function Stack() {
  const changer = useSelector((item: any) => item.name.value)

  return (
    <Screen color={ !changer ? "#FFFFFF" : "#191919"}>
    <Wrapper color={ !changer ? "#FFFFFF" : "#191919"}>
      <StackHeading color={ !changer ? "#42446E" : "#D9D9D9"}  >My Tech Stack</StackHeading>
      <StackText color={ !changer ? "#42446E" : "#A7A7A7 "}> Technologies I have been working with recently</StackText>
      <Images>
        <a href="https://www.w3schools.com/html/" target="_blank" ><img src={html} alt="html" /></a>
        <a href="https://www.w3schools.com/css/" target="_blank"><img src={css} alt="css" /></a>
        <a href="https://www.javascript.com/" target="_blank"><img src={js} style={{borderRadius: "10px", width: "95px"}} alt="js" /></a>
        <a href="https://react.dev/" target="_blank"><img src={react} alt="react" /></a>
        <a href="https://code.visualstudio.com/" target="_blank"><img src={vscode} alt="vscode" /></a>
        <a href="https://sass-lang.com/" target="_blank"><img src={sass} alt="sass" /></a>
        <a href="https://github.com/Dirakli" target="_blank"><img src={github} alt="github" /></a>
        <a href="https://git-scm.com/" target="_blank"><img style={{ width: "85px", borderRadius: "10px" }} src={ts} alt="git" /></a>
        <a href="https://getbootstrap.com/" target="_blank"><img src={bootstrap} alt="bootstrap" /></a>
        <a href="https://www.linkedin.com/in/irakli-dgebuadze-128789122/" target="_blank"><img style={{ width: "95px" }} src={linkedin} alt="linkedin" /></a>
      </Images>
    </Wrapper>
    </Screen>

  )
}

const Screen = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 130px;
  background-color: ${(props) => props.color};
`

const Images = styled.div`
  margin-top: 120px;
  display: grid;
  grid-template-columns: 150px 150px 150px 150px 150px 150px 150px;
  grid-gap: 20px;

    @media (max-width: 1200px) {
    margin-top: 70px;
    grid-template-columns: 100px 100px 100px;
    grid-gap: 20px;
  }
`

const StackText = styled.span`
  font-weight: 400;
  font-family: 'Poppins', sans-serif;
  color: ${(props) => props.color};
  font-size: 20px;
  line-height: 26px;
  margin-top: 28px;
  align-items: center;

    @media (max-width: 1200px) {
    font-size: 16px;
    line-height: 20px;
    margin-top: 15px;
  }
`

const StackHeading = styled.h1`
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
  color: ${(props) => props.color};
  font-size: 42px;
  line-height: 26px;
  align-items: center;

    @media (max-width: 1200px) {
    font-weight: 500px;
    font-size: 28px;
    line-height: 20px;
  }
`

const Wrapper = styled.div`
  width: 1123.45px;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  background-color: ${(props) => props.color};
  flex-direction: column;
  align-items: flex-start;

    @media (max-width: 1200px) {
    width: 350px;
  } 
`

export default Stack;