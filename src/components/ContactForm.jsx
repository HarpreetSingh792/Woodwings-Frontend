import axios from "axios";
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { ImSpinner2 } from "react-icons/im";

const ContactForm = () => {

    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [mssg, setMssg] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);


    const submitHandler = async (e) => {

        e.preventDefault();


        if (!name) {
            toast.error("Please fill all the fields", {
                style: {
                    boxShadow: "2px 2px 7px #4A4032",
                    background: "#4A4032",
                    color: "white",
                }
            })
            return;
        }
        if (!mail) {
            toast.error("Please fill all the fields", {
                style: {
                    boxShadow: "2px 2px 7px #4A4032",
                    background: "#4A4032",
                    color: "white",
                }
            })
            return
        }
        if (!mssg) {
            toast.error("Please fill all the fields", {
                style: {
                    boxShadow: "2px 2px 7px #4A4032",
                    background: "#4A4032",
                    color: "white",
                }
            })
            return
        }

        if (!mail.includes("@")) {
            toast.error("Please enter a valid email", {
                style: {
                    boxShadow: "2px 2px 7px #4A4032",
                    background: "#4A4032",
                    color: "white",
                }
            })
            return
        }

        // 
        try {
            setIsSubmitting(true)

            await axios.post("https://woodwings-backend.onrender.com/send-mssg", {
                "name": name,
                "mail": mail,
                "mssg": mssg
            }, {
                headers: {
                    "Content-Type": "application/json"
                }
            })

            setName(" ");
            setMail(" ");
            setMssg(" ");
            setIsSubmitting(false);

            toast.success("Message Sent Successfully!")

        } catch (error) {
            setIsSubmitting(false);
            toast.error("Something went wrong.")
        }



    }


    return (
        <>
            {
                isSubmitting &&
                <div className="fixed h-screen overflow-hidden bg-white/70 z-[9999999] w-full top-0 left-0 flex justify-center items-center">
                    <ImSpinner2 className=" animate-spin w-1/4 h-1/4 fill-[#4A4032]" />
                </div>
            }
            <form onSubmit={submitHandler} className='mt-16 flex flex-col lg:w-3/4 min-[320px]:w-full justify-center gap-4 font-lato m-auto'>
                <section className='flex lg:flex-row min-[320px]:flex-col justify-center items-center lg:gap-4 text-primary'>
                    <p className={`min-[320px]:text-xl lg:text-2xl lg:w-24 min-[320px]:w-full lg:text-end ${isSubmitting && (name ? "text-black" : "text-red-500")}`}>Name:</p>
                    <input value={name} type='text' maxLength={30} className={`bg-[#d9d9d99f] rounded-sm h-14 lg:w-1/2 min-[320px]:w-full outline-none border-none ring-0 px-4 ${isSubmitting && (name ? " text-black" : "border border-red-500 bg-red-100 text-red-500")}`} onChange={(e) => setName(e.target.value)} />
                </section>
                <section className='flex lg:flex-row min-[320px]:flex-col justify-center items-center lg:gap-4 text-primary'>
                    <p className={`min-[320px]:text-xl lg:text-2xl lg:w-24 min-[320px]:w-full lg:text-end ${isSubmitting && (mail ? "text-black" : "text-red-500")}`}>Email:</p>
                    <input value={mail} type='email' maxLength={50} className={`bg-[#d9d9d99f] rounded-sm h-14 lg:w-1/2 min-[320px]:w-full outline-none border-none ring-0 px-4 ${isSubmitting && (mail ? " text-black" : "border border-red-500 bg-red-100 text-red-500")}`} onChange={(e) => setMail(e.target.value)} />
                </section>
                <section className='flex lg:flex-row min-[320px]:flex-col justify-center items-center lg:gap-4 text-primary'>
                    <p className={`min-[320px]:text-xl lg:text-2xl lg:w-24 min-[320px]:w-full lg:text-end ${isSubmitting && (mssg ? "text-black" : "text-red-500")}`}>Message:</p>
                    <textarea value={mssg} type='text' maxLength={2000} className={` bg-[#d9d9d99f] rounded-sm h-24 scrollbar-hide  lg:w-1/2 min-[320px]:w-full border-none outline-none ring-0 px-4 py-2 ${isSubmitting && (mssg ? " text-black" : "border border-red-500 bg-red-100 text-red-500")}`} onChange={(e) => setMssg(e.target.value)} ></textarea>
                </section>
                <section className='flex lg:flex-row min-[320px]:flex-col justify-center items-center lg:gap-4 text-primary'>
                    <p className='min-[320px]:text-xl lg:text-2xl lg:w-24 min-[320px]:w-full lg:text-end'></p>
                    <button disabled={isSubmitting} type='submit' className="m-auto bg-[#5D3A29] lg:w-1/3 min-[320px]:w-full h-12 text-white font-lato rounded-sm hover:bg-[#5D3A29]/70 disabled:cursor-not-allowed disabled:opacity-40">Submit</button>
                </section>

            </form>
        </>
    )
}

export default ContactForm