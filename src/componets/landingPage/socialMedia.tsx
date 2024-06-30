import React from "react";
import {FaFacebook, FaWhatsapp,FaGithub,FaTiktok,FaLinkedin} from "react-icons/fa"

const SocialMedia: React.FC = () =>{
    return(
        <div className="flex justify-center gap-12 mt-80">
            <div><a href=""><FaFacebook/></a></div>
            <div><a href=""><FaWhatsapp/></a></div>
            <div><a href=""><FaGithub/></a></div>
            <div><a href=""><FaTiktok/></a></div>
            <div><a href=""><FaLinkedin/></a></div>
        </div>
    );

}

export default SocialMedia;