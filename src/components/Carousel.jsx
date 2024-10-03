import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';


const Carousel = ({ img }) => {


    return (
        <div
            id="img"
            className="lg:ml-4 lg:w-2/5 rounded-2xl overflow-auto scrollbar-hide border border-gray-800 flex justify-center items-center"
        >
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >

                {img?.map((imgSrc, index) => (
                    <SwiperSlide key={index}>

                        <img
                            key={index}
                            className="w-full lg:h-[80vh] min-[320px]:h-96 "
                            src={`/assets/${imgSrc}`}
                            alt={`Carousel image ${index + 1}`}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Carousel;