import React from "react";
import "./style.css";
import IM from "../image/imageweb.PNG"
import SL from "../image/solar.PNG"
import Home from "../image/home.png"
const Skill = () => {


    return (
        
        <div className="Project">
            <div className="listProject">
                <div className="text">
                        <h2>Projects</h2> 
                        <h4>what <span class="blue-text">I have built</span></h4>
                </div>


                <div className="PJ3">
                    
                    <img src= {Home} alt=""/>
                    

                    <div className="Left">
                        <div className="List">
                            <div className="P1">
                                <h2>Kstore</h2>
                                <h3>Completed</h3>
                                <div className="Tools">
                                    <a >ReactJs</a>
                                    <a >Javascript</a>
                                    <a >NodeJs</a>
                                    <a >MongoDB</a>
                                    
                                    
                                        
                                </div>
                            </div>
                        </div>

                        <div className="TextDescribe">
                                <p>The dynamic system that consists of the Sun, planets, moons, asteroids, <br/> comets, and other celestial objects bound together by gravity. .</p>
                        </div>

                        <div className="Website">
                            <a href= "https://github.com/Tyn03/Kstore" target="_blank">
                                <p>Source Code</p>    
                            </a>
                            <a href= "https://tyn03.github.io/Kstore/" target="_blank">
                                <p>View Page</p>    
                            </a>
                        </div>



                        
                        
                    </div>

                    
                    
                </div>


                <div className="PJ4">
                    
                <div style={{ backgroundColor: 'black', width: '65%', height: '300px' }}></div>

                    

                    <div className="Left">
                        <div className="List">
                            <div className="P1">
                                <h2>Chat-App</h2>
                                <h3>In Progress</h3>
                                <div className="Tools">
                                    <a >ReactJs</a>
                                    <a >TailwindCSS</a>
                                    <a >Socket.io</a>
                                    <a >NodeJs</a>
                                    <a >MongoDB</a>
                                    
                                    
                                        
                                </div>
                            </div>
                        </div>

                        <div className="TextDescribe">
                                <p>The dynamic system that consists of the Sun, planets, moons, asteroids, <br/> comets, and other celestial objects bound together by gravity. .</p>
                        </div>

                        <div className="Website">
                            <a href= "" >
                                <p>Source Code</p>    
                            </a>
                            <a href= "" >
                                <p>View Page</p>    
                            </a>
                        </div>



                        
                        
                    </div>

                    
                    
                </div>

                
                <div className="PJ1">
                    
                    <img src= {IM} alt=""/>
                    

                    <div className="Left">
                        <div className="List">
                            <div className="P1">
                                <h2>Web Music Player</h2>
                                <h3>Completed</h3>
                                <div className="Tools">
                                    <a >React Js</a>
                                    <a >Javascript</a>
                                    <a >Node Js</a>
                                    <a >Firebase</a>
                                        
                                </div>
                            </div>
                        </div>

                        <div className="TextDescribe">
                                <p>The web music player clone is a responsive and interactive <br/> application designed to provide users with a seamless <br/> music streaming experience.</p>
                        </div>

                        <div className="Website">
                            <a href= "https://github.com/Tyn03/SWeb" target="_blank">
                                <p>Source Code</p>    
                            </a>
                            <a href= "https://tyn03.github.io/SWeb/" target="_blank">
                                <p>View Page</p>    
                            </a>
                        </div>



                        
                        
                    </div>

                    
                    
                </div>





                <div className="PJ2">
                    
                    <img src= {SL} alt=""/>
                    

                    <div className="Left">
                        <div className="List">
                            <div className="P1">
                                <h2>Solar System</h2>
                                <h3>Completed</h3>
                                <div className="Tools">
                                    <a >React Js</a>
                                    <a >Three Js</a>
                                    
                                        
                                </div>
                            </div>
                        </div>

                        <div className="TextDescribe">
                                <p>The dynamic system that consists of the Sun, planets, moons, asteroids, <br/> comets, and other celestial objects bound together by gravity. .</p>
                        </div>

                        <div className="Website">
                            <a href= "https://github.com/Tyn03/solar-system" target="_blank">
                                <p>Source Code</p>    
                            </a>
                            <a href= "https://antiinsa.github.io/solar-demo/" target="_blank">
                                <p>View Page</p>    
                            </a>
                        </div>



                        
                        
                    </div>

                    
                    
                </div>
            </div>
            
            
            <div className="line">
            <p>© 2023 Khang DO. All rights reserved.</p>
            </div>



            

        </div>
    );
}

export default Skill;