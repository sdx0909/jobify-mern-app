import styled from "styled-components"

// creating the styled-button
const StyledBtn = styled.button`
  font-size: 1.5rem;
  background: red;
  color: white;
`;

function Landing() {
  return (
    <div>
      <h1>Landing Page</h1>
      {/* attaching the styled-button */}
      <StyledBtn>styled-btn</StyledBtn>
    </div>
  )
}
export default Landing