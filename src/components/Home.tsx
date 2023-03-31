import styled from "styled-components";
import profilePhoto from "/assets/profilePhoto.png"
import { Routes, Route, Link } from "react-router-dom"
import About from "./About"

function Home() {
  return (
    <WholeScreen>
      <NameandPicture>
        <DescriptionMyself>Hello 👋 <NameSurname>I'm Irakli Dgebuadze</NameSurname> a front-end developer focused on building engaging and responsive websites.
        </DescriptionMyself>
        <ProfileImage src={profilePhoto} alt="profile image" />
      </NameandPicture>
    </WholeScreen>
  )
}

const NameSurname = styled.h1<any>`
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-style: normal;
  display: flex;
  background: linear-gradient(90deg, #ff0000, #ffff00, #ff00f3, #0033ff, #ff00c4, #ff0000);
  background-size: 400%;
  font-size: 40px;
  line-height: 70px;
  letter-spacing: -1;
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

const ProfileImage = styled.img`
  border-radius: 50%;
  padding: 9px;
  background: linear-gradient(90deg, #13B0F5 -2.06%, #E70FAA 100%);
`

const DescriptionMyself = styled.h1`
  width: 636px;
  font-family: 'Poppins', sans-serif;  
  font-weight: 700;
  font-style: normal;
  color: #42446E;
  font-size: 40px;
  line-height: 70px;
  letter-spacing: -1;
`

const NameandPicture = styled.div`
  width: 1123.45px;;
  height: 350px;
  margin-top: 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const WholeScreen = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: #FFFFFF;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  `

export default Home;