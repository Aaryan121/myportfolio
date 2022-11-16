import "./Contract.css"
import {AiOutlineMail} from "react-icons/ai"
import {MdLocationOn} from "react-icons/md"
import {AiFillGithub , AiFillLinkedin , AiFillInstagram} from "react-icons/ai"
import { useRef } from "react"
import emailjs from '@emailjs/browser';



const Contract = () => {

    const form = useRef();
    let name ="";


    const handelSubmit = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_7cz91wo', 'template_6z4gjij', form.current, "EGEgdFf2UPAELVaTf")
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };


  return (
    <div className='contractWraper'>
        <div className="leftcon">
            <p className="title">Connect With Me</p>
            <div className="add">
                <p>
                <AiOutlineMail className="conIco"/>
                aaryan.cs01@gmail.com
                </p>
                <p>
                <MdLocationOn className="conIco"/>
                Gausala-09, Kathmandu, Nepal
                </p>
                <div className="clinks">
                    <AiFillGithub className="clink" />
                    <AiFillLinkedin className="clink" />
                    <AiFillInstagram className="clink" />

                </div>
            </div>
        </div>
        <div className="rightcon">
            <p className="title">
            Do you have any query ?</p>
            <form ref={form} className="conform" onSubmit={handelSubmit}>
                <input  className="smInp"  type="text" name="user_name" placeholder="Your Name..."/>
                <input  className="smInp"  type="text" name="user_email" placeholder="Email Address..."/>
                <textarea  className="smInp" name="message"  type="text"  placeholder="Message...."/>
                <button className="subtn" type="submit" value="Send">Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Contract