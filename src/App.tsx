import styled from "styled-components"
import { createGlobalStyle } from "styled-components"
import Home from "./components/Home"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import IconTagMain from "/assets/Tag-Icon.svg"
import github from "/assets/github.svg"
import twitter from "/assets/twitter.svg"
import moon from "/assets/moon.png"
import sun from "/assets/sun.png"
import linkedin from "/assets/linkedin.svg"
import About from "./components/About"
import Stack from "./components/Stack"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import { updateFunction } from "./store/handleChange"
import { useDispatch, useSelector } from "react-redux/es/exports"
import Main from "./components/Main"

function App() {
  const dispatch = useDispatch();
  const changer = useSelector((item: any) => item.name.value)

  function handler() {
    console.log(changer)
    return (
      dispatch(updateFunction(!changer))
    )
  }

  return (
    <Router>
      <WholeScreen color={changer ? "#191919" : "transparent"} className="App">
        <GlobalStyles />
        <HeaderWrapper color={changer ? "#191919" : "white"} >
          <Link to="/"><Img src={IconTagMain} /></Link>
          <Navigation>
            <UnorderedList>
              <Link to="/main">
                <List color={changer ? "#A7A7A7" : "#666666"} > Home
                </List>
              </Link>
              <Link to="/about">
                <List color={changer ? "#A7A7A7" : "#666666"} >About</List>
              </Link>
              <Link to="/stack">
                <List color={changer ? "#A7A7A7" : "#666666"} >Tech Stack</List>
              </Link>
              <Link to="/projects">
                <List color={changer ? "#A7A7A7" : "#666666"} >Projects</List>
              </Link>
              <Link to="/contact">
                <List color={changer ? "#A7A7A7" : "#666666"} >Contact</List>
              </Link>

            </UnorderedList>
          </Navigation>
          <ImgUL>
            <li>
              <a href="https://github.com/Dirakli" target="_blank" ><img src={github} alt="github icon" /></a>
            </li>
            <li>
              <a href="https://twitter.com/i/flow/login" target="_blank" ><img src={twitter} alt="twitter icon" /></a>

            </li>
            <li>
              <a href="https://www.linkedin.com/in/irakli-dgebuadze-128789122/" target="_blank" ><img src={linkedin} alt="linkedin icon" /></a>
            </li>
          </ImgUL>
          <img style={{width: "56px", cursor: "pointer"}} onClick={handler} src={ changer ? sun : moon} />
        </HeaderWrapper>
      </WholeScreen>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/main" Component={Main} />
        <Route path="/about" Component={About} />
        <Route path="/stack" Component={Stack} />
        <Route path="/projects" Component={Projects} />
        <Route path="/contact" Component={Contact} />
      </Routes>
    </Router>
  )
}

const ImgUL = styled.ul`
  width: 130px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const List = styled.li`
  font-family: 'DM Sans', sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 26px;
  color: ${(props) => props.color};
  align-items: Center;
`

const UnorderedList = styled.ul`
  width: 587px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Navigation = styled.nav`
  width: 587px;
`

const Img = styled.img`
  width: 59px;
  height: 59px;
`

const HeaderWrapper = styled.div`
  width: 1123.45px;
  height: 89px;
  display: flex;
  position: fixed;
  align-items: center;
  border-radius: 0 0 10px 10px;
  justify-content: space-between;
  background-color: ${props => props.color};
`

const WholeScreen = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.color};
  margin: 0 auto;
`

const GlobalStyles = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
a {
  text-decoration: none;
}
* {
  box-sizing: border-box;
}

textarea {
  resize: none;
}

button {
  cursor: pointer;
}
`

export default App
