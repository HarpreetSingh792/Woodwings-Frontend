import React from 'react'

const Work = () => {
    return (
        <>
            <section className="flex min-[320px]:flex-col-reverse lg:flex-row justify-around text-primary font-lato mt-16 lg:gap-0 min-[320px]:gap-4">
                <div className="lg:w-3/5 min-[320px]:w-full flex flex-col gap-2">
                    <p className="font-lato font-bold text-primary lg:text-3xl min-[320px]:text-xl">Initial Consultation</p>
                    <li className="list-disc text-justify ml-8">We begin with a personalized consultation to understand your needs, preferences, and vision for your space. This step helps us gather important information about your requirements.</li>
                </div>
                <img src="assets/how-we-work-1.png" alt="step-1" className="w-56 min-[320px]:m-auto lg:m-0" />
            </section>
            <section className="flex lg:flex-row-reverse min-[320px]:flex-col-reverse justify-around text-primary font-lato mt-16  lg:gap-0 min-[320px]:gap-4">
                <div className="lg:w-3/5 min-[320px]:w-full flex flex-col gap-2">
                    <p className="font-lato font-bold text-primary lg:text-3xl min-[320px]:text-xl">Design Concept Development</p>
                    <li className="list-disc text-justify ml-8">Our team creates initial design concepts based on your input. We focus on functionality, style, and space optimization to ensure that the design aligns with your expectations..</li>
                </div>
                <img src="assets/how-we-work-2.png" alt="step-1" className="w-56 min-[320px]:m-auto lg:m-0" />
            </section>
            <section className="flex min-[320px]:flex-col-reverse lg:flex-row justify-around text-primary font-lato mt-16 lg:gap-0 min-[320px]:gap-4">
                <div className="lg:w-3/5 min-[320px]:w-full flex flex-col gap-2">
                    <p className="font-lato font-bold text-primary lg:text-3xl min-[320px]:text-xl">3D Modeling</p>
                    <li className="list-disc text-justify ml-8">Utilizing advanced 3D modeling software, we bring the design concepts to life. This allows you to visualize the proposed solutions, including layouts, materials, and finishes, before any work begins.</li>
                </div>
                <img src="assets/how-we-work-3.png" alt="step-1" className="w-56 min-[320px]:m-auto lg:m-0" />
            </section>
            <section className="flex lg:flex-row-reverse min-[320px]:flex-col-reverse justify-around text-primary font-lato mt-16  lg:gap-0 min-[320px]:gap-4">
                <div className="lg:w-3/5 min-[320px]:w-full flex flex-col gap-2">
                    <p className="font-lato font-bold text-primary lg:text-3xl min-[320px]:text-xl">Feedback and Revisions</p>
                    <li className="list-disc text-justify ml-8">We present the 3D models to you for review. Your feedback is invaluable, and we work closely with you to make any necessary adjustments, ensuring the design meets your vision.</li>
                </div>
                <img src="assets/how-we-work-4.png" alt="step-1" className="w-56 min-[320px]:m-auto lg:m-0" />
            </section>
            <section className="flex min-[320px]:flex-col-reverse lg:flex-row justify-around text-primary font-lato mt-16 lg:gap-0 min-[320px]:gap-4">
                <div className="lg:w-3/5 min-[320px]:w-full flex flex-col gap-2">
                    <p className="font-lato font-bold text-primary lg:text-3xl min-[320px]:text-xl">Final Design Approval</p>
                    <li className="list-disc text-justify ml-8">Once you're satisfied with the 3D model and all revisions have been made, we finalize the design. This step confirms that everything is set for the next stage of the project.</li>
                </div>
                <img src="assets/how-we-work-5.png" alt="step-1" className="w-56 min-[320px]:m-auto lg:m-0" />
            </section>
            <section className="flex lg:flex-row-reverse min-[320px]:flex-col-reverse justify-around text-primary font-lato mt-16  lg:gap-0 min-[320px]:gap-4">
                <div className="lg:w-3/5 min-[320px]:w-full flex flex-col gap-2">
                    <p className="font-lato font-bold text-primary lg:text-3xl min-[320px]:text-xl">Production and Installation</p>
                    <li className="list-disc text-justify ml-8">Our skilled craftsmen begin the production process, meticulously creating each component based on the approved design. Once completed, we handle the installation, ensuring everything fits perfectly.</li>
                </div>
                <img src="assets/how-we-work-6.png" alt="step-1" className="w-56 min-[320px]:m-auto lg:m-0" />
            </section>
            <section className="flex min-[320px]:flex-col-reverse lg:flex-row justify-around text-primary font-lato mt-16 lg:gap-0 min-[320px]:gap-4">
                <div className="lg:w-3/5 min-[320px]:w-full flex flex-col gap-2">
                    <p className="font-lato font-bold text-primary lg:text-3xl min-[320px]:text-xl">Post-Installation Support</p>
                    <li className="list-disc text-justify ml-8">After installation, we provide support to address any questions or concerns you may have. Our commitment to quality and customer satisfaction continues even after the project is complete.
                    </li>
                </div>
                <img src="assets/how-we-work-7.png" alt="step-1" className="w-56 min-[320px]:m-auto lg:m-0" />
            </section>
        </>
    )
}

export default Work