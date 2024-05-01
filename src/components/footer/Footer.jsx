import { FaLinkedin } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import "./footer.css";

const Footer = () => {
    return (
        <div className="footer w-[100%] flex justify-center items-center flex-col mt-40">
            
        <p className="section__text__p1 text-slate-500 text-4xl mb-6">Get in Touch</p>
        <h1 className="title text-white text-6xl">Contact me</h1>

        <div className="border border-white py-10 px-16 flex gap-14 my-10 cursor-pointer rounded-full">
            <div className="flex justify-center items-center gap-4 text-3xl text-white">
                <MdOutlineMail/>
                <h1 className="pt-2">mohitchoudharu2@gmail.com</h1>
            </div>

            <div className="flex justify-center items-center gap-4 text-3xl text-white">
                <FaLinkedin/>
                <h1 className="pt-2">Linkdein</h1>
            </div>
        </div>
        </div>
    )
}

export default Footer