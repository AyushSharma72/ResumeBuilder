import React, { useState, useEffect } from "react";
import "./Form.css";
import { useNavigate } from 'react-router-dom';
import { MdNavigateNext } from "react-icons/md";
import { FaGlobe } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


function Form({ ResumeStates, SetResumeStates }) {


    // input states
    const [FirstName, SetFirstName] = useState("")
    const [LastName, SetLastName] = useState("")
    const [Email, SetEmail] = useState("")
    const [Phone, SetPhoneNumber] = useState("")
    const [Website, SetWebsite] = useState("")
    const [Github, SetGithub] = useState("")
    const [Linkedin, SetLinkedin] = useState("")
    const [Gfg, SetGfg] = useState("")
    const [Instagram, SetInstagram] = useState("")

    const navigate = useNavigate();

    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem('PersonalData')) || {};
        SetFirstName(savedData.FirstName || '');// setting the states data from localStorage  as the page is revisited
        SetLastName(savedData.LastName || '');
        SetEmail(savedData.Email || '');
        SetPhoneNumber(savedData.Phone || '');
        SetWebsite(savedData.Website || "");
        SetGithub(savedData.Github || "");
        SetLinkedin(savedData.Linkedin || "");
        SetGfg(savedData.Gfg || "");
        SetInstagram(savedData.Instagram || "");

    }, []);

    useEffect(() => {
        // formData is an object with states
        const PersonalData = {
            FirstName,
            LastName,
            Email,
            Phone,
            Website,
            Github,
            Linkedin,
            Gfg,
            Instagram
        };
        localStorage.setItem('PersonalData', JSON.stringify(PersonalData));//saving in local storage as the state changes
    }, [FirstName, LastName, Email, Phone, Website, Github, Linkedin, Gfg, Instagram]);

    function HandleNext() {

        const Personaldata = {
            FirstName: FirstName,
            LastName: LastName,
            Email: Email,
            Phone: Phone,
            Website: Website,
            Github: Github,
            Linkedin: Linkedin,
            Gfg: Gfg,
            Instagram: Instagram

        }
        SetResumeStates({ ...ResumeStates, Personal: Personaldata })
        navigate("/Edu");
    }

    return (
        <div className="Main">
            <section className="Personal_details" >
                <div className="Form-Parent">
                    <h3 style={{ fontWeight: "700" }}>Personal Details</h3>
                    <div className="line"></div>


                    <form className="PersonalInputs" onSubmit={(e) => { e.preventDefault(); HandleNext(); }}>

                        <input type="text" placeholder=" First Name *" required onChange={(e) => { SetFirstName(e.target.value) }} value={FirstName}></input>
                        <input type="text" placeholder=" Last Name *" required onChange={(e) => { SetLastName(e.target.value) }} value={LastName}></input>
                        <input type="text" placeholder=" Email *" required onChange={(e) => { SetEmail(e.target.value) }} value={Email}></input ><MdEmail className="Email" />
                        <input type="text" placeholder=" Phone Number" required onChange={(e) => { SetPhoneNumber(e.target.value) }} value={Phone}></input><FaPhoneAlt className="Phone" />
                        <input type="text" placeholder=" Your Website " required onChange={(e) => { SetWebsite(e.target.value) }} value={Website}></input><FaGlobe className="GlobeWebsite" />
                        <input type="text" placeholder=" Github" required onChange={(e) => { SetGithub(e.target.value) }} value={Github}></input><FaGithub className="Github" />
                        <input type="text" placeholder=" Linked in " required onChange={(e) => { SetLinkedin(e.target.value) }} value={Linkedin}></input ><FaLinkedin className="Linkedin" />
                        <input type="text" placeholder=" Gfg id" required onChange={(e) => { SetGfg(e.target.value) }} value={Gfg}></input>
                        <input type="text" placeholder=" Instagram " required onChange={(e) => { SetInstagram(e.target.value) }} value={Instagram}></input>< FaInstagramSquare className="instagram" />
                        <button type="submit" className="Next_button" >Next <MdNavigateNext /></button>


                    </form>
                    <div className="line" style={{ marginTop: "2rem" }}></div>
                </div>
            </section >
        </div>
    )
}

export default Form;