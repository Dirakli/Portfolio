import styled from "styled-components"
import { useSelector } from "react-redux/es/exports"

function Contact() {
  const changer = useSelector((item: any) => item.name.value)

    return (
      <Screen color={changer ? "#191919" : "transparent"} >
        <Wrapper>
            <Text color={ changer ? "#CCCCCC" : "#1E0E62"} >For any questions please mail us:</Text>
            <Gmail href="mailto:dgebuadzeirakli28@gmail.com">dgebuadzeirakli28@gmail.com</Gmail>
        </Wrapper>
      </Screen>
    )
} 

const Screen = styled.div`
  width: 100%;
  padding-top: 130px;
  height: 100vh;
  background-color: ${(props) => props.color};
  @media (max-width: 1200px) {
    padding-top: 130px;
  }
`

const Gmail = styled.a`
font-weight: 700;
font-family: 'Poppins', sans-serif;
font-size: 35px;
line-height: 70px;
letter-spacing: -1px;
align-items: center;
text-align: center;
background: linear-gradient(90deg, #13B0F5 -2.06%, #E70FAA 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
text-fill-color: transparent;

  @media (max-width: 1200px) {
    font-size: 20px;
    line-height: 40px;
    letter-spacing: 0;
  }
`

const Text =  styled.p`
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
  color: ${(props) => props.color};
  font-size: 40px;
  line-height: 70px;
  letter-spacing: -1px;
  align-items: center;
  text-align: center;

  @media (max-width: 1200px) {
    font-size: 28px;
    line-height: 40px;
    letter-spacing: 0;
  }
`

const Wrapper = styled.div`
  width: 890px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 1200px) {
    width: 375px;
  }
`

export default Contact;