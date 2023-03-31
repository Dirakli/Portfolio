import styled from "styled-components"

function Contact() {
    return (
        <Wrapper>
            <Text>For any questions please mail us:</Text>
            <Gmail href="mailto:dgebuadzeirakli28@gmail.com">dgebuadzeirakli28@gmail.com</Gmail>
        </Wrapper>
    )
}

const Gmail = styled.a`
font-weight: 700;
font-family: 'Poppins', sans-serif;
font-size: 50px;
line-height: 70px;
letter-spacing: -1px;
align-items: center;
text-align: center;
background: linear-gradient(90deg, #13B0F5 -2.06%, #E70FAA 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
text-fill-color: transparent;
`

const Text =  styled.p`
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
  color: #1E0E62;
  font-size: 50px;
  line-height: 70px;
  letter-spacing: -1px;
  align-items: center;
  text-align: center;
`

const Wrapper = styled.div`
  width: 890px;
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`

export default Contact;