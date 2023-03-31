import styled from "styled-components"
import { createGlobalStyle } from "styled-components"
import Home from "./components/Home"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import IconTagMain from "/assets/Tag-Icon.svg"
import github from "/assets/github.svg"
import twitter from "/assets/twitter.svg"
import linkedin from "/assets/linkedin.svg"
import About from "./components/About"
import Stack from "./components/Stack"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

function App() {

  return (
    <Router>
      <WholeScreen className="App">
        <GlobalStyles />
        <HeaderWrapper>
          <Link to="/"><Img src={IconTagMain} /></Link>
          <Navigation>
            <UnorderedList>
              <List>
                <Link to="/">Home</Link>
              </List>
              <List>
                <Link to="/about">About</Link>
              </List>
              <List>
                <Link to="/stack">Tech Stack</Link>
              </List>
              <List>
                <Link to="/projects">Projects</Link>
              </List>
              <List>
                <Link to="/contact">Contact</Link>
              </List>
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
        </HeaderWrapper>
      </WholeScreen>
      <Routes>
        <Route path="/" Component={Home} />
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
  color: #666666;
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
  height: 59px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const WholeScreen = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding-top: 30px;
  flex-direction: column;
  align-items: center;
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
