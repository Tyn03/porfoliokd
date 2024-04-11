import Navbar from"../navbar";
import AV from "../image/avatar.jpg";
import styled, { keyframes,css } from "styled-components"
import "./style.css"
import linkedin from "../image/linkedinn.png"
import instagram from "../image/instagramm.png"
import facebook from "../image/facebookk.png"
import FB from "../image/facebook.png"

const animation = keyframes`
  0% { opacity: 0; transform: translateY(-100px); }
  25% { opacity: 1; transform: translateY(0px); }
  75% { opacity: 1; transform: translateY(0px); }
  100% { opacity: 0; transform: translateY(-100px); }
`;

const Wrapper = styled.div`
  display: inline-block;
  font-size: 30px;
  color : #04fffb;

  span {
    opacity: 0;
    display: inline-block;
    animation: ${animation} 6s cubic-bezier(0.075, 0.82, 0.165, 1) forwards infinite;
  }
  @media (max-width: 360px) {
    font-size: 20px; /* Kích thước font cho thiết bị di động */
  }
`;

export default function Root() {
    const text = "Web Developper";

    const words = text.split('&nbsp');
  return (
    <div className="Root">
      <div className="content">
        <img src={AV} alt="" />

        <div className="text">
          
          <div className="name">
            <h3 className="it">It's</h3>
            <h3 className="kaido">KaiDo</h3>
          </div>

          <div className="TextAnimation">
          <h3>I am a </h3>
          <a>
          {text.split('').map((char, index) => (
    <Wrapper key={index} style={{ animationDelay: `${index * 0.1}s` }}>
        {char === ' ' ? <span>&nbsp;</span> : <span>{char}</span>}
    </Wrapper>
))}

          </a>
  
          </div>
            
        </div>


        <div className="social">
        <div className="Facebook">
                    <a href= "https://www.facebook.com/profile.php?id=100019283413603" target="_blank">
                    <img src = {facebook} alt=""/>
                    </a>
                </div>

                <div className="Linkedin">
                    <a href= "https://www.linkedin.com/in/khang-do-a8aa96224/" target="_blank">
                    <img src = {linkedin} alt=""/>
                    </a>
                </div>


                <div className="Instagram">
                    <a href= "https://www.instagram.com/khangdoooo/" target="_blank">
                    <img src = {instagram} alt=""/>
                    </a>
                </div>
        </div>


      </div>
    </div>
  );
}