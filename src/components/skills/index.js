import React from "react";
import "./style.css"
import Atom from "../image/atom.png";
import TS from "../image/typescript.png";
import NJ from "../image/nodejs.png";
import PG from "../image/postgresql.png";
import FB from "../image/firebase.png";
import EX from "../image/express.png";
import AS from "../image/AndroidStudio.png";
import KL from "../image/kotlin.png";
import IT from "../image/intellj.png";
import LN from "../image/linux.png";
import GH from "../image/github.png";
import VS from "../image/VisualCode.png";
import MD from "../image/mongoDB.png";
import Git from "../image/git.png";
import Java from "../image/java.png"
import C from "../image/C.png"
const Skill = () => {
    return (
        <div className = "Skill">
            <div className="SkillElement">
                <div className="WebDevelopper">
                    <div className="FrontEnd">
                        <p>Frontend</p>
                        <div className="Element">
                            <div className="SkillItem"> 
                                <img src="https://www.w3.org/html/logo/badge/html5-badge-h-solo.png" alt=""/>
                                <figcaption>HTML</figcaption>
                            </div>
                            
                            <div className="SkillItem">
                                <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png" alt=""/>
                                <figcaption>CSS</figcaption> 
                            </div>
                            
            
                        
                        </div>


                        <div className="Element">
                            <div className="SkillItem">
                                <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png" alt=""/>
                                <figcaption>JavaScript</figcaption>
                            </div>

                            <div className="SkillItem"> 
                                <img src= {Atom} alt=""/>
                                <figcaption>React</figcaption>
                            </div>
                            
                            
                        </div>

                    </div>

                    <div className="Backend">
                        <p>Backend</p>
                        <div className="Element">
                            <div className="SkillItem"> 
                                <img src={NJ} alt=""/>
                                <figcaption>Node JS</figcaption>
                            </div>
                            
                            <div className="SkillItem">
                                <img src = {EX} alt=""/>
                                <figcaption>Express JS</figcaption> 
                            </div>

                            <div className="SkillItem">
                                <img src = {MD} alt=""/>
                                <figcaption>MongoDB</figcaption> 
                            </div>
                            
                        
                        </div>


                        <div className="Element">
                            <div className="SkillItem"> 
                                <img src= {PG} alt=""/>
                                <figcaption>Postgre SQL</figcaption>
                            </div>
                            
                            <div className="SkillItem">
                                <img src = {FB} alt=""/>
                                <figcaption>Firebase</figcaption> 
                            </div>
                        </div>

                    
                    
                    </div>
                </div>

                <div className="ToolsAndOther">
                    <div className="Tools">
                            <p>Android</p>
                            <div className="Element">
                                <div className="SkillItem"> 
                                    <img src={KL} alt=""/>
                                    <figcaption>Kotlin</figcaption>
                                </div>
                                
                                <div className="SkillItem">
                                    <img src = {AS} alt=""/>
                                    <figcaption>Android Studio</figcaption> 
                                </div>
                                
                            
                            </div>


                            

                    </div>
                    
                    <div className="Others">
                            <p>Others</p>
                            <div className="Element">
                                <div className="SkillItem"> 
                                    <img src={Git} alt=""/>
                                    <figcaption>Git</figcaption>
                                </div>
                                
                                <div className="SkillItem">
                                    <img src = {Java} alt=""/>
                                    <figcaption>java</figcaption> 
                                </div>
                                
                                <div className="SkillItem">
                                    <img src = {LN} alt=""/>
                                    <figcaption>Linux</figcaption>
                                </div>
                            
                            </div>


                            <div className="Element">
                                <div className="SkillItem"> 
                                    <img src= {C} alt=""/>
                                    <figcaption>C Programming</figcaption>
                                </div>
                                
                                
                            </div>

                        
                        
                    </div>
                </div>

            </div>

            
            
            
                
   
        </div>
    );
}

export default Skill;