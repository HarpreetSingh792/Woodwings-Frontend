import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';


const reviews = [
    {
        "img": "",
        "name": "Amelia Walker",
        "mssg": "The kitchen cabinets Woodwings built for us are stunning! The craftsmanship is premium, and it perfectly fits our space."
    },
    {
        "img": "",
        "name": "James Harris",
        "mssg": "I love the custom wardrobe Woodwings designed for my bedroom. It’s elegant, functional, and has completely transformed the room!"
    },
    {
        "img": "",
        "name": "Sophia Carter",
        "mssg": "From design to installation, the team was professional. The vanity they created is top quality and looks beautiful in my bathroom!"
    },
    {
        "img": "",
        "name": "Liam Thompson",
        "mssg": "The attention to detail in our new kitchen is exceptional. Woodwings delivered exactly what we wanted – a high-end, custom finish."
    },
    {
        "img": "",
        "name": "Mia Brown",
        "mssg": "We are thrilled with our new wardrobes! Woodwings offers excellent service, and the final product exceeded our expectations."
    },
    {
        "img": "",
        "name": "Ethan Scott",
        "mssg": "The craftsmanship on our custom vanities is unmatched. Highly recommend Woodwings for anyone looking for premium carpentry work."
    },
    {
        "img": "",
        "name": "Isabella Lee",
        "mssg": "Woodwings designed and built a beautiful, functional kitchen for us. Their attention to detail and quality is simply outstanding."
    }
]




const Reviews = () => {
    return (
        <>
            {/* // For large device */}
            <Swiper
                spaceBetween={30}
                slidesPerView={3}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                initialSlide={1}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper mt-16"
            >

                {reviews?.map(({ img, name, mssg }, index) => (
                    <SwiperSlide key={index}>

                        <div className="font-lato text-primary lg:flex flex-col p-4 justify-center items-center gap-4 w-96 min-[320px]:hidden rounded-md shadow-lg shadow-black/20 h-full border">
                            <img className='rounded-full w-12 h-12' src={`${img.length > 0 ? img : "/assets/review-logo.png"}`} alt={`${name}-img`} />
                            <p className='text-center'>{name}</p>
                            <p className='text-center italic font-semibold'>"{mssg}"</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* // for small device */}
            <Swiper
                spaceBetween={10}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                slidesPerView={1}
                initialSlide={1}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"

            >

                {reviews?.map(({ img, name, mssg }, index) => (
                    <SwiperSlide key={index} className="flex justify-center items-center">

                        <div className="font-lato text-primary min-[320px]:flex flex-col p-4 justify-center items-center gap-4 w-[280px] lg:hidden rounded-md shadow-lg shadow-black/20 h-full border">
                            <img className='rounded-full w-12 h-12' src={`${img.length > 0 ? img : "/assets/review-logo.png"}`} alt={`${name}-img`} />
                            <p className='text-center'>{name}</p>
                            <p className='text-center italic font-semibold'>"{mssg}"</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}

export default Reviews