import React from 'react'
import Carousel from './Carousel'

const FeaturedCards = () => {
    return (
        <>

            <section className="flex min-[320px]:flex-col-reverse lg:flex-row justify-between text-primary font-lato mt-8">

                <div className="lg:w-1/2 min-[320px]:w-full min-[320px]:mt-8 lg:mt-0">

                    <ol type="1" className="space-x-8 space-y-2 ">
                        <h2 className="font-bold underline">Featured Kitchen Projects:</h2>
                        <li className=" list-decimal text-justify"><span className="font-bold">Modern Elegance Kitchen:</span> A sleek, contemporary design featuring high-gloss cabinets and subtle lighting, creating a warm and inviting space.</li>
                        <li className=" list-decimal text-justify"><span className="font-bold">Rustic Charm Kitchen:</span> Crafted from reclaimed wood, this kitchen combines traditional cabinetry with modern appliances for a cozy and functional environment.</li>
                        <li className=" list-decimal text-justify"><span className="font-bold">Luxurious Open-Concept Kitchen:</span> Expansive cabinetry and a large island create a seamless flow between cooking and dining, emphasizing elegance and practicality.</li>
                        <li className=" list-decimal text-justify"><span className="font-bold">Space-Saving Solutions:</span> Innovative cabinetry designed for small spaces maximizes storage while maintaining a stylish look, perfect for urban living</li>
                        <li className=" list-decimal text-justify"><span className="font-bold">Classic White Kitchen:</span> Timeless white cabinetry paired with brass fixtures offers a bright and airy feel, ideal for cooking enthusiasts </li>
                    </ol>

                    <section className="mt-8 space-y-2 text-justify">
                        <p className="font-bold text-3xl min-[320px]:text-xl" >Why Choose Us for Your Kitchen Project?</p>
                        <p>At Woodwings, we understand that the kitchen is the heart of your home. Our commitment to quality craftsmanship and personalized designs ensures that each project reflects your unique style and meets your specific needs. Contact us today to discuss your dream kitchen!</p>
                    </section>

                </div>

                <Carousel img={["kitchen-products/1.jpg", "kitchen-products/11.jpg", "kitchen-products/3.jpg", "kitchen-products/4.jpg"]} />
            </section>


            <section className="flex lg:flex-row-reverse min-[320px]:flex-col-reverse justify-between text-primary font-lato mt-16">

                <div className="lg:w-1/2 min-[320px]:w-full min-[320px]:mt-8 lg:mt-0">

                    <ol type="1" className="space-x-8 space-y-2 ">
                        <h2 className="font-bold underline">Featured Wardrobe Projects:</h2>
                        <li className=" list-decimal text-justify"><span className="font-bold">Elegant Walk-In Wardrobe:</span> A stylish blend of open shelving and closed cabinetry, maximizing space while keeping clothing accessible.</li>
                        <li className=" list-decimal text-justify lg:tracking-normal min-[320px]:tracking-tighter"><span className="font-bold">Contemporary Fitted Wardrobe:</span> Custom-designed to utilize every inch efficiently, offering ample storage with a sleek, modern finish.</li>
                        <li className=" list-decimal text-justify"><span className="font-bold">Classic Sliding Door Wardrobe: </span>Timeless design with spacious interiors and smooth sliding doors for easy access and enhanced room flow.</li>
                    </ol>

                    <section className="mt-8 space-y-2 text-justify">
                        <p className="font-bold text-3xl min-[320px]:text-xl" >Why Choose Us?</p>
                        <ul className="ml-8">
                            <li className=" list-disc text-justify"><span className="font-bold">Expert Craftsmanship:</span> High-quality finishes that combine functionality with artistry.</li>
                            <li className=" list-disc text-justify"><span className="font-bold">Custom Solutions:</span> Tailored designs to fit your unique space and needs.</li>
                            <li className=" list-disc text-justify lg:tracking-normal min-[320px]:tracking-tighter"><span className="font-bold">Client Satisfaction:</span> Close collaboration to ensure your vision is realized.</li>
                            <li className=" list-disc text-justify"><span className="font-bold">Timely Delivery:</span> Efficient project completion without compromising quality.</li>
                        </ul>
                    </section>

                </div>

                <Carousel img={["wardrobe-products/1.jpeg", "wardrobe-products/2.png", "wardrobe-products/3.jpeg", "wardrobe-products/4.jpeg"]} />
            </section>
        </>
    )
}

export default FeaturedCards