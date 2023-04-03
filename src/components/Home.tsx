import styled from "styled-components";
import profilePhoto from "/assets/profilePhoto.png"
import { useSelector } from "react-redux/es/exports"

function Home() {
  const changer = useSelector((item: any) => item.name.value)

  return (
    <WholeScreen color={changer ? "#191919" : "transparent"} >
      <NameandPicture>
        <DescriptionMyself color={changer ? "#D9D9D9" : " #42446E"} >Hello 👋 <NameSurname>I'm Irakli Dgebuadze</NameSurname> a front-end developer focused on building engaging and responsive websites.
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
    @media (max-width: 1200px) {
    width: 300px;
    font-size: 20px;
    line-height: 30px;
    font-weight: 500;
    letter-spacing: 0.25;
  }
`

const ProfileImage = styled.img`
  border-radius: 50%;
  padding: 9px;
  background: linear-gradient(90deg, #13B0F5 -2.06%, #E70FAA 100%);

  @media (max-width: 1200px) {
    width: 70%;
    margin-top: 50px;
  }
`

const DescriptionMyself = styled.h1`
  width: 636px;
  font-family: 'Poppins', sans-serif;  
  font-weight: 700;
  font-style: normal;
  color: ${(props) => props.color};
  font-size: 40px;
  line-height: 70px;
  letter-spacing: -1;

  @media (max-width: 1200px) {
    width: 350px;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    letter-spacing: 0.25;
  }
`

const NameandPicture = styled.div`
  width: 1123.45px;
  height: 350px;
  margin-top: 150px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  @media (max-width: 1200px) {
    flex-direction: column;
    width: initial;
    margin-top: 150px;
  }
`

const WholeScreen = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: ${(props) => props.color};
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  `

export default Home;