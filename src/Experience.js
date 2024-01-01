import React, { useState ,useEffect} from "react";
import "./Form.css";
import { useNavigate } from 'react-router-dom';
import { MdNavigateNext } from "react-icons/md";
import { IoChevronBackOutline } from "react-icons/io5";
import { BiSolidSchool } from "react-icons/bi";

function Exp({ ResumeStates, SetResumeStates }) {

    const navigate = useNavigate();
    // input states
    const [Year5, SetYear5] = useState("")
    const [Year6, SetYear6] = useState("")
    const [Year7, SetYear7] = useState("")
    const [Year8, SetYear8] = useState("")
    const [Org1, SetOrg1] = useState("")
    const [Position1, SetPosition1] = useState("")
    const [JobDesc1, SetJobDesc1] = useState("")
    const [Org2, SetOrg2] = useState("")
    const [Position2, SetPosition2] = useState("")
    const [JobDesc2, SetJobDesc2] = useState("")

    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem('ExpData')) || {};
        SetYear5(savedData.Year5 || '');// setting the states data from localStorage  as the page is revisited
        SetYear6(savedData.Year6 || '');
        SetYear7(savedData.Year7 || '');
        SetYear8(savedData.Year8 || '');
        SetOrg1(savedData.Org1 || "");
        SetPosition1(savedData.Position1 || "");
        SetPosition2(savedData.Position2 || "");
        SetJobDesc1(savedData.JobDesc1 || "");
        SetOrg2(savedData.Org2 || "");
        SetJobDesc2(savedData.JobDesc2 || "");

    }, []);

    useEffect(() => {
        // formData is an object with states
        const ExpData = {
            Year5,
            Year6,
            Year7,
            Year8,
            Org1,
            Position1,
            JobDesc1,
            Org2,
            Position2,
            JobDesc2,

        };
        localStorage.setItem('ExpData', JSON.stringify(ExpData));//saving in local storage as the state changes
    }, [Year5,
        Year6,
        Year7,
        Year8,
        Org1,
        Position1,
        JobDesc1,
        Org2,
        Position2,
        JobDesc2]);

    function HandleNext() {

        const Edudata = {
            Year5: Year5,
            Year6: Year6,
            Year7: Year7,
            Year8: Year8,
            Org1: Org1,
            Position1: Position1,
            JobDesc1: JobDesc1,
            Org2: Org2,
            Position2: Position2,
            JobDesc2: JobDesc2

        }
        // updating the states
        SetResumeStates({ ...ResumeStates, Experience: Edudata })
        navigate("/Extra");
    }
    function Handleback() {
        navigate("/Edu")
    }
    return (

        <section className="Experience_details" >
            <div className="Education_Form-Parent">
                <div style={{ width: "100%", textAlign: "center" }}>
                    <h3 style={{ fontWeight: "700" }}>Experience Details</h3>
                    <div className="line"></div>
                </div>

                <form className="ExperienceInputs">
                    <div style={{ display: "block", width: "100%" }}>
                        <h5 style={{ fontWeight: "700", marginLeft: "4rem" }}>Experience 1</h5>
                    </div>

                    <input type="text" style={{ width: "30%" }} placeholder=" Institute/Organisation" onChange={(e) => { SetOrg1(e.target.value) }} required value={Org1}></input><BiSolidSchool className="School" />
                    <input type="text" style={{ width: "20%" }} placeholder=" Position" onChange={(e) => { SetPosition1(e.target.value) }} required value={Position1}></input>
                    <span className="EduationSpan"><p style={{ margin: "0", fontWeight: "700" }}>from</p>
                        <input type="date" placeholder="year" required style={{ width: "90%" }} onChange={(e) => { SetYear5(e.target.value) }} value={Year5}></input>
                    </span>

                    <span className="EduationSpan"><p style={{ margin: "0", fontWeight: "700" }}>To</p>
                        <input type="date" placeholder="year" required style={{ width: "90%" }} onChange={(e) => { SetYear6(e.target.value) }} value={Year6}></input>
                    </span>
                    <input type="text" required placeholder=" Description" style={{ width: "95%", height: "3rem" }} maxlength="400" onChange={(e) => { SetJobDesc1(e.target.value) }} value={JobDesc1}></input>
                </form>

                <form className="ExperienceInputs" onSubmit={() => { HandleNext() }} >
                    <div style={{ display: "block", width: "100%" }}>
                        <h5 style={{ fontWeight: "700", marginLeft: "4rem" }}>Experience 2</h5>
                    </div>

                    <input type="text" style={{ width: "30%" }} placeholder=" Institute/Organisation" onChange={(e) => { SetOrg2(e.target.value) }} required   value={Org2} ></input><BiSolidSchool className="School2" />
                    <input type="text" style={{ width: "20%" }} placeholder=" Position" onChange={(e) => { SetPosition2(e.target.value) }} required value={Position2}></input>

                    <span className="EduationSpan"><p style={{ margin: "0", fontWeight: "700" }}>from</p>
                        <input type="date" placeholder="year" required style={{ width: "90%" }} onChange={(e) => { SetYear7(e.target.value) }} value={Year7}></input>
                    </span>

                    <span className="EduationSpan"><p style={{ margin: "0", fontWeight: "700" }}>To</p>
                        <input type="date" placeholder="year" required style={{ width: "90%" }} onChange={(e) => { SetYear8(e.target.value) }} value={Year8}></input>
                    </span>
                    <input type="text" placeholder=" Description" required style={{ width: "95%", height: "3rem" }} maxlength="400" onChange={(e) => { SetJobDesc2(e.target.value) }} value={JobDesc2}></input>
                    <div className="EduButtons">
                        <button className="Prev_button" onClick={() => { Handleback() }}><IoChevronBackOutline />Back</button>
                        <button type="submit" className="EduNext_button" >Next <MdNavigateNext /></button>
                    </div>
                </form>


                <div className="line" style={{ marginTop: "3rem" }}></div>


            </div>

        </section>

    )
}

export default Exp;