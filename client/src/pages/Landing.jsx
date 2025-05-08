import styled from "styled-components"

// creating the styled-button
// const StyledBtn = styled.button`
//   font-size: 1.5rem;
//   background: red;
//   color: white;
// `;

function Landing() {
  return (
    <Wrapper>
      <h1>Landing Page</h1>
      <div className="content">some content</div>
      {/* attaching the styled-button */}
      {/* <StyledBtn>styled-btn</StyledBtn> */}
    </Wrapper>
  )
}

// using Wrapper for better styling 
const Wrapper = styled.div`
  background: red;

  h1 {
    color: white;
  }

  .content {
    background-color: blue;
    color: yellow;
  }
`


export default Landing