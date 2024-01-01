import React from "react";
import { toPng } from 'html-to-image';
import "./template.css";
import { NavLink } from "react-router-dom"
import "./Form.css"
import { FaPhoneAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { CiGlobe } from "react-icons/ci";
import { MdLocationPin } from "react-icons/md";
import Slider from '@mui/material-next/Slider';
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from 'react-icons/fa';
import { SiGeeksforgeeks } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { IoChevronBackOutline } from "react-icons/io5";
import { useRef } from "react";



function Template({ ResumeStates }) {
    const componentRef = useRef(null);

    // Function to handle image download
    const handleDownloadImage = async () => {
        try {
            const component = componentRef.current;

            // Ensure the component is available before proceeding
            if (!component) {
                console.error('Component reference is invalid');
                return;
            }

            // Use html-to-image's toPng function to convert the component to an image
            const dataUrl = await toPng(component);

            // Create a temporary <a> element to trigger the download
            const link = document.createElement('a');
            link.href = dataUrl;
            link.download = 'resume_image.png'; // Set the file name here
            document.body.appendChild(link);

            // Trigger the download
            link.click();

            // Clean up - remove the temporary <a> element
            document.body.removeChild(link);
        } catch (error) {
            console.error('Error while downloading image:', error);
        }
    };




    const FirstName = ResumeStates.Personal?.FirstName || "DefaultFirstName";
    const LastName = ResumeStates.Personal?.LastName || "DefaultFirstName";
    const Email = ResumeStates.Personal?.Email || "DefaultFirstName";
    const Phone = ResumeStates.Personal?.Phone || "DefaultFirstName";
    const Website = ResumeStates.Personal?.Website || "DefaultFirstName";
    const Github = ResumeStates.Personal?.Github || "DefaultFirstName";
    const Linkedin = ResumeStates.Personal?.Linkedin || "DefaultFirstName";
    const Gfg = ResumeStates.Personal?.Gfg || "DefaultFirstName";
    const Instagram = ResumeStates.Personal?.Instagram || "DefaultFirstName";
    const University = ResumeStates.Education?.University || "DefaultFirstName";
    const Year1 = ResumeStates.Education?.Year1 || "DefaultFirstName";
    const Year2 = ResumeStates.Education?.Year2 || "DefaultFirstName";
    const Year3 = ResumeStates.Education?.Year3 || "DefaultFirstName";
    const Year4 = ResumeStates.Education?.Year4 || "DefaultFirstName";
    const UniDesc = ResumeStates.Education?.UniDesc || "DefaultFirstName";
    const School = ResumeStates.Education?.School || "DefaultFirstName";
    const percentage10 = ResumeStates.Education?.percentage10 || "DefaultFirstName";
    const percentage12 = ResumeStates.Education?.percentage12 || "DefaultFirstName";
    const Org1 = ResumeStates.Experience?.Org1 || "DefaultFirstName";
    const Position1 = ResumeStates.Experience.Position1 || "DefaultFirstName";
    const Year5 = ResumeStates.Experience?.Year5 || "DefaultFirstName";
    const Year6 = ResumeStates.Experience?.Year6 || "DefaultFirstName";
    const JobDesc1 = ResumeStates.Experience.JobDesc1 || "DefaultFirstName";
    const Org2 = ResumeStates.Experience.Org2 || "DefaultFirstName";
    const Position2 = ResumeStates.Experience.Position2 || "DefaultFirstName";
    const Year7 = ResumeStates.Experience?.Year7 || "DefaultFirstName";
    const Year8 = ResumeStates.Experience?.Year8 || "DefaultFirstName";
    const JobDesc2 = ResumeStates.Experience.JobDesc2 || "DefaultFirstName";
    const Skill1 = ResumeStates.Extra?.Skill1 || "DefaultFirstName";
    const Skill2 = ResumeStates.Extra?.Skill2 || "DefaultFirstName";
    const Skill3 = ResumeStates.Extra?.Skill3 || "DefaultFirstName";
    const Skill4 = ResumeStates.Extra?.Skill4 || "DefaultFirstName";
    const Skill5 = ResumeStates.Extra?.Skill5 || "";
    const Skill6 = ResumeStates.Extra?.Skill6 || "";
    const Service = ResumeStates.Extra?.Service || "";
    const Address = ResumeStates.Extra?.Address || "";
    const Aboutme = ResumeStates.Extra?.Aboutme || "DefaultFirstName";
    const Skill1Rating = ResumeStates.Extra?.Skill1Rating || "DefaultFirstName";
    const Skill2Rating = ResumeStates.Extra?.Skill2Rating || "DefaultFirstName";
    const Skill3Rating = ResumeStates.Extra?.Skill3Rating || "DefaultFirstName";
    const Skill4Rating = ResumeStates.Extra?.Skill4Rating || "DefaultFirstName";
    const Skill5Rating = ResumeStates.Extra?.Skill5Rating || "DefaultFirstName";
    const Skill6Rating = ResumeStates.Extra?.Skill6Rating || "DefaultFirstName";
    const ImageURL = ResumeStates.Extra?.ImageURL||"";

    return (
        <div style={{ display: "flex", justifyContent: "center",flexDirection:"column",alignItems:"center" }} >
            <div className="Outerdiv" ref={componentRef}>
                <div className="Innerdiv">
                    <div className="LeftPart">
                        <div className="ProfilePhotoParent">

                            <div className="ProfilePhoto">
                                <img src={ImageURL} alt="Profile"></img>
                            </div>
                        </div>

                        <section>
                            <div className="ContactMe">
                                <h5 className="LeftFont">Contact Me</h5>
                                <div className="hr"></div>
                                <div > <FaPhoneAlt /> <p className="LeftFont" >{Phone}</p></div>
                                <div><SiGmail /> <p className="LeftFont" >{Email}</p></div>
                                <div> <CiGlobe /><p className="LeftFont" >{Website}</p></div>
                                <div>< MdLocationPin /> <p className="LeftFont" >{Address}</p></div>
                            </div>
                        </section>

                        <section>
                            <div className="AboutMe">
                                <h5 className="LeftFont">About Me</h5>
                                <div className="hr"></div>
                                <div style={{ padding: "1rem" }}>
                                    <p className="Font">
                                        {Aboutme}
                                    </p>
                                </div>
                            </div>
                        </section>

                        <div className="PersonalInfo">
                            <h4>Online Presence</h4>
                            <div className="hr2"></div>
                            <div className="Links">
                                <div className="icons" ><FaGithub /><a href="https://github.com/AyushSharma72" className="Anchor-style">{Github}</a></div>
                                <div className="icons"><FaLinkedin color="blue" /><a href="https://www.linkedin.com/in/ayush-sharma-a155a8267" className="Anchor-style">{Linkedin}</a></div>
                                <div className="icons"><SiGeeksforgeeks color="green" /><a href="https://www.linkedin.com/in/ayush-sharma-a155a8267" className="Anchor-style">{Gfg}</a></div>
                                <div className="icons"><FaInstagram color="purple" /><a href="https://www.linkedin.com/in/ayush-sharma-a155a8267" className="Anchor-style">{Instagram}</a></div>
                            </div>
                        </div>
                    </div>


                    <div className="RightPart">
                        <div className="Name">
                            <h2 className="RightFont">{FirstName}</h2>
                            <h2 className="RightFont">{LastName}</h2>
                            <h5 className="RightFont">{Service}</h5>


                        </div>

                        <section>
                            <div className="WorkExp">
                                <div>
                                    <p className="RightFont" style={{ fontWeight: "900", marginTop: "2rem" }}>Work Experience   <div className="hr2"></div></p>

                                    <div className="JobDescription">
                                        <div className="JobPosition"> <p style={{ fontWeight: "700", margin: "0rem" }}  >{Position1}</p> <p style={{ fontWeight: "700", margin: "0rem" }}>{Year5} - {Year6}</p></div>
                                        <p className="gap" style={{ fontWeight: "700" }}>{Org1}</p>
                                        <ul>
                                            <li>{JobDesc1}</li>


                                        </ul>
                                    </div>

                                    <div className="JobDescription">
                                        <div className="JobPosition"> <p style={{ fontWeight: "700", margin: "0rem" }}  >{Position2}</p> <p style={{ fontWeight: "700", margin: "0rem" }}>{Year7} - {Year8}</p></div>
                                        <p className="gap" style={{ fontWeight: "700" }}>{Org2}</p>
                                        <ul>
                                            <li>{JobDesc2}</li>


                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section>
                            <div className="Education">
                                <div>
                                    <p className="RightFont" style={{ fontWeight: "900", marginTop: "2rem" }}>Education<div className="hr2"></div> </p>
                                    <div className="University">
                                        <div className="Qualifications"> <p style={{ fontWeight: "700", margin: "0rem" }}  >{University}</p> <p style={{ fontWeight: "700", margin: "0rem" }}>{Year1}-{Year2}</p></div>
                                        <p style={{ marginTop: "0.5rem" }}>{UniDesc}</p>
                                    </div>


                                    <div className="University">
                                        <div className="Qualifications"> <p style={{ fontWeight: "700", margin: "0rem" }} >{School}</p>
                                            <p style={{ fontWeight: "700", margin: "0rem" }}>{Year3}-{Year4}</p></div>

                                        <p style={{ marginTop: "0.5rem" }}>12<sup>th</sup> class percentage:<b>{percentage10}% </b></p>
                                        <p >10<sup>th</sup> class percentage:<b>{percentage12}%</b> </p>
                                    </div>

                                </div>
                            </div>
                        </section>

                        <section>
                            <div className="Skills">
                                <p className="RightFont" style={{ fontWeight: "900", marginTop: "2rem" }}>Skills <div className="hr2"></div> </p>
                                <div className="SkillsContent">
                                    {ResumeStates.Extra.Skill1 ?
                                        <div className="SkillsDiv"> <p className="skillsCustom-para">{Skill1}</p><Slider disabled={true} marks={false} max={10} min={0} size="large" valueLabelDisplay="on" defaultValue={Skill1Rating} style={{ width: "60%", color: "darkblue" }} /></div>
                                        : null
                                    }
                                    {
                                        ResumeStates.Extra.Skill2 ?
                                            <div className="SkillsDiv"> <p className="skillsCustom-para" >{Skill2} </p><Slider disabled={true} marks={false} max={10} min={0} size="large" valueLabelDisplay="on" defaultValue={Skill2Rating} style={{ width: "60%", color: "darkblue" }} /></div>
                                            : null
                                    }
                                    {ResumeStates.Extra.Skill3 ?
                                        <div className="SkillsDiv"> <p className="skillsCustom-para">{Skill3} </p><Slider disabled={true} marks={false} max={10} min={0} size="large" valueLabelDisplay="on" defaultValue={Skill3Rating} style={{ width: "60%", color: "darkblue" }} /></div>
                                        : null
                                    }
                                    {ResumeStates.Extra.Skill4 ?
                                        <div className="SkillsDiv"> <p className="skillsCustom-para">{Skill4} </p><Slider disabled={true} marks={false} max={10} min={0} size="large" valueLabelDisplay="on" defaultValue={Skill4Rating} style={{ width: "60%", color: "darkblue" }} /></div>
                                        : null}
                                    {ResumeStates.Extra.Skill5 ?
                                        <div className="SkillsDiv"> <p className="skillsCustom-para">{Skill5} </p><Slider disabled={true} marks={false} max={10} min={0} size="large" valueLabelDisplay="on" defaultValue={Skill5Rating} style={{ width: "60%", color: "darkblue" }} /></div>

                                        : null}
                                    {ResumeStates.Extra.Skill6 ?
                                        <div className="SkillsDiv"> <p className="skillsCustom-para">{Skill6} </p><Slider disabled={true} marks={false} max={10} min={0} size="large" valueLabelDisplay="on" defaultValue={Skill6Rating} style={{ width: "60%", color: "darkblue" }} /></div>
                                        : null}
                                </div>


                            </div>

                        </section>


                    </div>
                </div>
            </div>

            <div className="buttonclass">
                <NavLink to="/Extra"><button className="Prev_button_resume"><IoChevronBackOutline />Back</button></NavLink>
            </div>
            <div>
            {/* ... (existing JSX code) */}
            <button onClick={handleDownloadImage} className="Downloadbutton">Download as Image</button>
        </div>
        </div>
    )
}
export default Template;
