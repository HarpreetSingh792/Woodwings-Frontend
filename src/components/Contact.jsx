import React from 'react'
import ContactForm from './ContactForm'

const Contact = () => {
    return (
        <>
            <div className='flex min-[320px]:flex-col lg:flex-row justify-between item-center mt-16 gap-4 h-full'>
                <div className='font-lato text-primary lg:w-1/2 min-[320px]:w-full flex flex-col gap-4'>
                    <p className='font-bold min-[320px]:text-justify'>We'd love to hear from you! Whether you have a question about our services, need a quote for your project, or want to discuss your ideas, feel free to reach out to us.</p>

                    <div className='mt-4 flex flex-col gap-2'>
                        <p className='font-bold'>Get in Touch</p>
                        <ul>
                            <li><span className='font-bold'>Phone: </span> <a href="tel:+610403597672" className='text-textColor font-bold'>+61 0403-597-672</a></li>
                            <li><span className='font-bold'>Email: </span> <a href="mailto:woodwings1313@gmail.com" className='text-textColor font-bold'>woodwings1313@gmail.com</a></li>
                            <li className='flex gap-2'><span className='font-bold'>Address: </span> <address className='text-textColor font-bold'>Unit 2, 33 Meakin Road, Meadowbrook QLD 4131, Australia</address></li>
                        </ul>
                    </div>
                    <div className='mt-4 flex flex-col gap-2'>
                        <p className='font-bold'>Business Hours</p>
                        <ul className='font-bold text-textColor'>
                            <li><span className='text-primary'>Monday - Friday:</span> 9:00 AM - 5:00 PM</li>
                            <li><span className='text-primary'>Saturday: </span>10:00 AM - 2:00 PM</li>
                            <li><span className='text-primary'>Sunday:</span> Closed</li>
                        </ul>
                    </div>

                    <section className='mt-4'>
                        <p className='font-bold'>Send Us a Message</p>
                        <p className='italic'>If you prefer, you can fill out the form below, and we will get back to you as soon as possible!</p>
                    </section>
                </div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220.8632389100285!2d153.13392451351606!3d-27.66129318360923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b9141603fe88a89%3A0x54575a9e923ab941!2s2%2F33%20Meakin%20Rd%2C%20Meadowbrook%20QLD%204131%2C%20Australia!5e0!3m2!1sen!2sin!4v1727597664962!5m2!1sen!2sin"
                    className='lg:w-[600px] lg:mt-0 min-[320px]:mt-4 lg:h-[400px] min-[320px]:h-[300px] min-[320px]:w-full'
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>


            </div>
            <ContactForm />

        </>
    )
}

export default Contact