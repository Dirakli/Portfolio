import styled from "styled-components";

function Stack() {
    return (
        <Wrapper>
            Hello, I am Stack
        </Wrapper>
    )
}


const Wrapper = styled.div`
  width: 1123.45px;
  height: 800px;
  display: flex;
  margin: 0 auto;
  background-color: red;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`

export default Stack;