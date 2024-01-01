import React, { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Personal from "./personal.js";
import Template from "./template.js";
import Education from "./Education.js";
import Exp from "./Experience.js";
import Extra from "./Extra.js";



function Routing() {

    const [ResumeStates, SetResumeStates] = useState({
        Personal: {
            FirstName: "",
            LastName: "",
            Email: "",
            Phone: "",
            Website: "",
            Github: "",
            Linkedin: "",
            Gfg: "",
            Instagram: ""

        },
        Education: {
            University: "",
            Year1: "",
            Year2: "",
            UniDesc: "",
            School: "",
            Year3: "",
            Year4: "",
            percentage10: "",
            percentage12: ""
        },
        Experience: {
            Year5: "",
            Year6: "",
            Year7: "",
            Year8: "",
            Org1: "",
            Position1: "",
            JobDesc1: "",
            Org2: "",
            Position2: "",
            JobDesc2: ""
        },
        Extra: {
            Skill1: "",
            Skill2: "",
            Skill3: "",
            Skill4: "",
            Skill5: "",
            Skill6: "",
            Service: "",
            Address: "",
            Aboutme: "",
            Skill1Rating: "",
            Skill2Rating: "",
            Skill3Rating: "",
            Skill4Rating: "",
            Skill5Rating: "",
            Skill6Rating: "",
            ImageURL:""
        }
    })
    return (

        <BrowserRouter>
            <Routes>
               <Route path="/" element={<Personal ResumeStates={ResumeStates} SetResumeStates={SetResumeStates}/>}></Route>    {/*sending resumedata as prop */}
                <Route path="/Edu" element={<Education ResumeStates={ResumeStates} SetResumeStates={SetResumeStates} />}></Route>
                <Route path="/Exp" element={<Exp ResumeStates={ResumeStates} SetResumeStates={SetResumeStates} />}></Route>
                <Route path="/Extra" element={<Extra ResumeStates={ResumeStates} SetResumeStates={SetResumeStates}/>}></Route>
                <Route path="/Resume" element={<Template ResumeStates={ResumeStates} SetResumeStates={SetResumeStates}/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Routing;