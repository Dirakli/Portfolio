import styled from "styled-components"
import { createGlobalStyle } from "styled-components"
import Home from "./components/Home"
import BurgerBar from "/assets/bar.svg"
import BurgerBarWhite from "/assets/barWhite.svg"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import dayLight from "/assets/dayLight.svg"
import nightLight from "/assets/nightLight.svg"
import github from "/assets/github.svg"
import twitter from "/assets/twitter.svg"
import mainImage from "/assets/mainImage.svg"
import linkedin from "/assets/linkedin.svg"
import About from "./components/About"
import Stack from "./components/Stack"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import { updateFunction, BurgerbarFunction } from "./store/handleChange"
import { useDispatch, useSelector } from "react-redux/es/exports"
import Main from "./components/Main"

function App() {
  const dispatch = useDispatch();
  const changer = useSelector((item: any) => item.name.value)
  const burgerValue = useSelector((item: any) => item.name.burgerValue)

  function handler() {
    console.log(changer)
    return (
      dispatch(updateFunction(!changer))
    )
  }

  function BurgerFunc() {
    console.log(changer)
    return (
      dispatch(BurgerbarFunction(!burgerValue))
    )
  }
  return (
    <Router>
      <WholeScreen color={changer ? "#191919" : "transparent"} className="App">
        <GlobalStyles />

        
        <HeaderWrapper color={changer ? "#191919" : "white"} >
          <HeaderMiniWrapper justify="space-around" color={changer ? "#191919" : "white"} >
          <Link style={{ display: burgerValue ? "none" : "flex" }} to="/"><Img src={mainImage} /></Link>
          <BurgImage onClick={BurgerFunc} style={{ width: "24px" }} src={ changer ? BurgerBarWhite : BurgerBar} alt="burger bar icon" />
          <Navigation>
            <UnorderedList display={ burgerValue ? "flex" : "none" } >
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
          <ImgUL style={{ display: burgerValue ? "none" : "flex" }} >
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
          <img style={{ width: "50px", cursor: "pointer", display: burgerValue ? "none" : "flex" }} onClick={handler} src={changer ? dayLight : nightLight} />
          </HeaderMiniWrapper>
        </HeaderWrapper>
        
      </WholeScreen>
      <Routes>
        <Route path="/" Component={Main} />
        <Route path="/main" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/stack" Component={Stack} />
        <Route path="/projects" Component={Projects} />
        <Route path="/contact" Component={Contact} />
      </Routes>
    </Router>
  )
}

const BurgImage = styled.img`

  display: none;

  @media (max-width: 1200px) {
    display: flex;
  }
`

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

  @media (max-width: 1200px) {
    font-size: 12px;
  }
`

const UnorderedList = styled.ul<any>`
  width: 587px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1200px) {
    width: 320px;
    display: ${(props) => props.display};
  }
`

const Navigation = styled.nav`
  width: 587px;
  @media (max-width: 1200px) {
    width: initial;
  }
`

const Img = styled.img`
  width: 59px;
  height: 59px;
`
const HeaderMiniWrapper = styled.div<any>`
  width: 1123.45px;
  height: 89px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => props.color};

  @media (max-width: 1200px) {
    justify-content: ${(props) => props.justify};
    width: 100%;
  }
`

const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  position: fixed;
  align-items: center;
  border-radius: 0 0 10px 10px;
  justify-content: center;
  background-color: ${props => props.color};

  @media (max-width: 1200px) {
    width: 100%;
    height: auto;
    align-items: center;
  }
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
