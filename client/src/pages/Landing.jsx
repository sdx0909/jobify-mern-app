// import styled from "styled-components"
import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";
import { Link } from "react-router-dom";
import { Logo } from "../components";

// creating the styled-button
// const StyledBtn = styled.button`
//   font-size: 1.5rem;
//   background: red;
//   color: white;
// `;

function Landing() {
  return (
    <Wrapper>
      <nav>
        {/* <img src={logo} alt="jobify" className="logo" /> */}
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            I'm baby wayfarers hoodie next level taiyaki brooklyn cliche blue
            bottle single-origin coffee chia. Aesthetic post-ironic venmo quinoa
            lo-fi tote bag adaptogen everyday carry meggings +1 brunch narwhal.
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login | Demo User
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
}

// using Wrapper for better styling
// we can't use it :: we created the styling seperately
// in assets -> wrapper (folder)
// -----------------------------------------------------
// const Wrapper = styled.div`
//   background: red;

//   h1 {
//     color: white;
//   }

//   .content {
//     background-color: blue;
//     color: yellow;
//   }
// `

export default Landing;
