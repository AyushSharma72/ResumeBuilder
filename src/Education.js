import React, { useState,useEffect } from "react";
import "./Form.css";
import { useNavigate } from 'react-router-dom';
import { MdNavigateNext } from "react-icons/md";
import { IoChevronBackOutline } from "react-icons/io5";
import { IoIosSchool } from "react-icons/io";

function Education({ ResumeStates, SetResumeStates }) {

    // input states
    const [University, SetUniversity] = useState("")
    const [Year1, SetYear1] = useState("")
    const [Year2, SetYear2] = useState("")
    const [UniDesc, SetUniDesc] = useState("")
    const [School, SetSchool] = useState("")
    const [Year3, SetYear3] = useState("")
    const [Year4, SetYear4] = useState("")
    const [percentage10, Setpercentage10] = useState("")
    const [percentage12, Setpercentage12] = useState("")

    const navigate = useNavigate();

    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem('EducationData')) || {};
        SetUniversity(savedData.University || '');// setting the states data from localStorage  as the page is revisited
        SetYear1(savedData.Year1 || '');
        SetYear2(savedData.Year2 || '');
        SetUniDesc(savedData.UniDesc || '');
        SetSchool(savedData.School || "");
        SetYear3(savedData.Year3 || "");
        SetYear3(savedData.Year3 || "");
        SetYear4(savedData.Year4 || "");
        Setpercentage10(savedData.percentage10 || "");
        Setpercentage12(savedData.percentage12 || "");

    }, []);

    useEffect(() => {
        // formData is an object with states
        const EducationData = {
            University,
            Year1,
            Year2,
            UniDesc,
            School,
            Year3,
            Year4,
            percentage10,
            percentage12,
        };
        localStorage.setItem('EducationData', JSON.stringify(EducationData));//saving in local storage as the state changes
    }, [University, Year1, Year2, UniDesc, School, Year3, Year4, percentage10, percentage12]);


    function HandleNext() {
        const Edudata = {
            University: University,
            Year1: Year1,
            Year2: Year2,
            UniDesc: UniDesc,
            School: School,
            Year3: Year3,
            Year4: Year4,
            percentage10: percentage10,
            percentage12: percentage12

        }
        // updating the states
        SetResumeStates({ ...ResumeStates, Education: Edudata })
        navigate("/Exp");


    }
    function Handleback() {
        navigate("/")
    }
    return (
        <section className="Education_details">
            <div className="Education_Form-Parent">
                <div style={{ width: "100%", textAlign: "center" }}>
                    <h3 style={{ fontWeight: "700" }}>Education Details</h3>
                    <div className="line"></div>
                </div>

                <form className="EducationInputs" onSubmit={HandleNext} >
                    <input type="text" placeholder=" University Name" onChange={(e) => { SetUniversity(e.target.value) }} value={University}></input><IoIosSchool className="ClgEducation" />

                    <span className="EduationSpan"><p style={{ margin: "0", fontWeight: "700" }}>from</p>
                        <input type="text" placeholder="year" style={{ width: "90%" }} onChange={(e) => { SetYear1(e.target.value) }} value={Year1}></input>
                    </span>

                    <span className="EduationSpan"><p style={{ margin: "0", fontWeight: "700" }}>To</p>
                        <input type="text" placeholder="year" style={{ width: "90%" }} onChange={(e) => { SetYear2(e.target.value) }} value={Year2}></input>
                    </span>

                    <input type="text" placeholder=" Description" style={{ width: "100%", height: "3rem" }} maxlength="500" onChange={(e) => { SetUniDesc(e.target.value) }} value={UniDesc}></input>

                    <div className="line"></div>

                    <input type="text" placeholder=" School Name" onChange={(e) => { SetSchool(e.target.value) }} value={School}></input><IoIosSchool className="ClgEducation" />

                    <span className="EduationSpan"><p style={{ margin: "0", fontWeight: "700" }}>from</p>
                        <input type="number" placeholder="year" style={{ width: "90%" }} onChange={(e) => { SetYear3(e.target.value) }} value={Year3}></input>
                    </span>

                    <span className="EduationSpan"><p style={{ margin: "0", fontWeight: "700" }}>To</p>
                        <input type="number" placeholder="year" style={{ width: "90%" }} onChange={(e) => { SetYear4(e.target.value) }} value={Year4}></input>
                    </span>

                    <input type="text" placeholder="Enter 10th class percentage" onChange={(e) => { Setpercentage10(e.target.value) }} value={percentage10}></input>
                    <input type="text" placeholder="Enter 12th class percentage" onChange={(e) => { Setpercentage12(e.target.value) }} value={percentage12}></input>

                    <div className="EduButtons">
                        <button className="Prev_button" onClick={() => { Handleback() }}><IoChevronBackOutline />Back</button>
                        <button type="submit" className="EduNext_button" >Next <MdNavigateNext /></button>
                    </div>

                </form>




                <div className="line" style={{ marginTop: "2rem" }}></div>
            </div>

        </section>
    )

}

export default Education;