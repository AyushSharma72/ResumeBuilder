import React, { useState, useEffect } from "react";
import "./Form.css";
import { useNavigate } from 'react-router-dom';
import { MdNavigateNext } from "react-icons/md";
import { IoChevronBackOutline } from "react-icons/io5";


function Extra({ ResumeStates, SetResumeStates }) {
    const [Skill1, SetSkill1] = useState("")
    const [Skill2, SetSkill2] = useState("")
    const [Skill3, SetSkill3] = useState("")
    const [Skill4, SetSkill4] = useState("")
    const [Skill5, SetSkill5] = useState("")
    const [Skill6, SetSkill6] = useState("")
    const [Service, SetService] = useState("")
    const [Address, SetAddress] = useState("")
    const [Aboutme, SetAboutme] = useState("")
    const [Skill1Rating, SetSkill1Rating] = useState("")
    const [Skill2Rating, SetSkill2Rating] = useState("")
    const [Skill3Rating, SetSkill3Rating] = useState("")
    const [Skill4Rating, SetSkill4Rating] = useState("")
    const [Skill5Rating, SetSkill5Rating] = useState("")
    const [Skill6Rating, SetSkill6Rating] = useState("")
    const [ImageURL, setImageURL] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem('ExtraData')) || {};
        SetSkill1(savedData.Skill1 || '');// setting the states data from localStorage  as the page is revisited
        SetSkill2(savedData.Skill2 || '');
        SetSkill3(savedData.Skill3 || '');
        SetSkill4(savedData.Skill4 || '');
        SetSkill5(savedData.Skill5 || "");
        SetSkill6(savedData.Skill6 || "");
        SetSkill1Rating(savedData.Skill1Rating || "");
        SetSkill2Rating(savedData.Skill2Rating || "");
        SetSkill3Rating(savedData.Skill3Rating || "");
        SetSkill4Rating(savedData.Skill4Rating || "");
        SetSkill5Rating(savedData.Skill5Rating || "");
        SetSkill6Rating(savedData.Skill6Rating || "");
        SetService(savedData.Service || "");
        SetAddress(savedData.Address || "");
        SetAboutme(savedData.Aboutme || "");


    }, []);

    useEffect(() => {
        // formData is an object with states
        const ExtraData = {
            Skill1,
            Skill2,
            Skill3,
            Skill4,
            Skill5,
            Skill6,
            Service,
            Address,
            Aboutme,
            Skill1Rating,
            Skill2Rating,
            Skill3Rating,
            Skill4Rating,
            Skill5Rating,
            Skill6Rating,
            ImageURL

        };
        localStorage.setItem('ExtraData', JSON.stringify(ExtraData));//saving in local storage as the state changes
    }, [Skill1,
        Skill2,
        Skill3,
        Skill4,
        Skill5,
        Skill6,
        Service,
        Address,
        Aboutme,
        Skill1Rating,
        Skill2Rating,
        Skill3Rating,
        Skill4Rating,
        Skill5Rating,
        Skill6Rating,
        ImageURL
    ]);


    function HandleNext() {

        const Extradata = {
            Skill1: Skill1,
            Skill2: Skill2,
            Skill3: Skill3,
            Skill4: Skill4,
            Skill5: Skill5,
            Skill6: Skill6,
            Service: Service,
            Address: Address,
            Aboutme: Aboutme,
            ImageURL: ImageURL,
            Skill1Rating: Skill1Rating,
            Skill2Rating: Skill2Rating,
            Skill3Rating: Skill3Rating,
            Skill4Rating: Skill4Rating,
            Skill5Rating: Skill5Rating,
            Skill6Rating: Skill6Rating

        }
        // updating states
        SetResumeStates({ ...ResumeStates, Extra: Extradata })
        navigate("/Resume");
    }

    const handleImageUpload = (event) => {
        const file = event.target.files[0];

        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImageURL(imageUrl);
        }
    };


    function Handleback() {
        navigate("/Exp")
    }

    return (
        <section className="Experience_details" >
            <div className="Education_Form-Parent">
                <div style={{ width: "100%", textAlign: "center" }}>
                    <h3 style={{ fontWeight: "700" }}>Extra Details</h3>
                    <div className="line"></div>
                </div>

                <div className="ExtraInputs">
                    <div style={{ display: "block", width: "100%" }}>
                        <h5 style={{ fontWeight: "700", marginLeft: "1rem" }}>Skills</h5>
                    </div>

                    <div style={{ width: "30%" }}> <input type="text" placeholder=" Skill 1" onChange={(e) => { SetSkill1(e.target.value) }} value={Skill1}></input> <input type="number" style={{ width: "15%" }} onChange={(e) => { SetSkill1Rating(e.target.value) }} min="1" max="10" value={Skill1Rating}></input></div>
                    <div style={{ width: "30%" }}><input type="text" placeholder=" Skill 2" onChange={(e) => { SetSkill2(e.target.value) }} value={Skill2}></input> <input type="number" style={{ width: "15%" }} onChange={(e) => { SetSkill2Rating(e.target.value) }} min="1" max="10" value={Skill2Rating}></input></div>
                    <div style={{ width: "30%" }}><input type="text" placeholder=" Skill 3" onChange={(e) => { SetSkill3(e.target.value) }} value={Skill3}></input> <input type="number" style={{ width: "15%" }} onChange={(e) => { SetSkill3Rating(e.target.value) }} min="1" max="10" value={Skill3Rating}></input></div>
                    <div style={{ width: "30%" }}><input type="text" placeholder=" Skill 4" onChange={(e) => { SetSkill4(e.target.value) }} value={Skill4}></input> <input type="number" style={{ width: "15%" }} onChange={(e) => { SetSkill4Rating(e.target.value) }} min="1" max="10" value={Skill4Rating}></input></div>
                    <div style={{ width: "30%" }}><input type="text" placeholder=" Skill 5" onChange={(e) => { SetSkill5(e.target.value) }} value={Skill5}></input> <input type="number" style={{ width: "15%" }} onChange={(e) => { SetSkill5Rating(e.target.value) }} min="1" max="10" value={Skill5Rating}></input></div>
                    <div style={{ width: "30%" }}><input type="text" placeholder=" Skill 6" onChange={(e) => { SetSkill6(e.target.value) }} value={Skill6}></input> <input type="number" style={{ width: "15%" }} onChange={(e) => { SetSkill6Rating(e.target.value) }} min="1" max="10" value={Skill6Rating}></input></div>

                </div>
                <div className="line" style={{ marginTop: "2rem" }}></div>

                <form className="MoreAboutYou" onSubmit={() => { HandleNext() }}>
                    <div style={{ display: "block", width: "100%" }}>
                        <h5 style={{ fontWeight: "700" }}>More About you</h5>
                    </div>

                    <input type="text" style={{ width: "40%" }} placeholder="Describe Your Service in One Word (Doctor / Enginner / Software Developer)" onChange={(e) => { SetService(e.target.value) }} required value={Service}></input>

                    <input type="file" style={{ width: "30%" }} className="Photo" onChange={(event) => { handleImageUpload(event) }} />

                    <input type="text" style={{ width: "30%" }} placeholder="Your Address" onChange={(e) => { SetAddress(e.target.value) }} required value={Address}></input>
                    <input type="text" placeholder="Tell Something About You" required style={{ width: "90%", height: "3rem" }} maxlength="400" onChange={(e) => { SetAboutme(e.target.value) }} value={Aboutme}></input>
                    <div className="ExtraButtons">
                        <button className="Prev_button" onClick={() => { Handleback() }} ><IoChevronBackOutline />Back</button>
                        <button type="submit" className="EduNext_button" >Generate Resume <MdNavigateNext /></button>

                    </div>
                </form>


                <div className="line" style={{ marginTop: "1rem" }}></div>


            </div>

        </section>
    )
}

export default Extra;