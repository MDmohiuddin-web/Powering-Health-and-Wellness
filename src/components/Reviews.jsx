// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

import io from "../assets/io.svg";

import model from '../assets/model.png'
const review = [

    {
        id: 1,
        name: "John Doe",
        image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla a"
    },
    {
        id: 2,
        name: "Jane Doe",
        image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla a Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla a"
    },
    {
        id: 3,
        name: "Richard Roe",
        image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla a Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla aLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla a"
    },
    {
        id: 4,
        name: "Robert Smith",
        image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla a Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla a"
    },
    {
        id: 5,
        name: "Michael Johnson",
        image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla a"
    },
    {
        id: 6,
        name: "David Lee",
        image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla a Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla a"
    },
    {
        id: 7,
        name: "Sarah Taylor",
        image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla a"
    },
    {
        id: 8,
        name: "Kevin Brown",
        image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla aLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla aLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla a"
    },
    {
        id: 9,
        name: "Lisa White",
        image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla a"
    },
    {
        id: 10,
        name: "Emily Davis",
        image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla a Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla a"
    }
]


const Reviews = () => {
    return (
       

        <div className="my-10 min-h-36 px-5 md:px-0">
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{ clickable: true }}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                breakpoints={{
                    640: { slidesPerView: 1, spaceBetween: 20 },
                    768: { slidesPerView: 2, spaceBetween: 20 },
                    1024: { slidesPerView: 3, spaceBetween: 30 },
                    1280: { slidesPerView: 4, spaceBetween: 30 },
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >
                {review.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div
                            className="bg-[#ebeaf9] p-5 space-y-3 min-h-48 rounded-md border border-[#c1c1ec]"
                        >
                            <div className="space-y-3 flex justify-between">
                                <div>
                                    <img
                                        src={model}
                                        className="w-20 h-20 rounded-full"
                                        alt={item.name}
                                    />
                                    <h1>{item.name}</h1>
                                </div>
                                <div>
                                    <img
                                        src={io}
                                        alt="io"
                                        className="h-10 w-10"
                                    />
                                </div>
                            </div>
                            <div>
                                <p>{`"${item.review}"`}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>

    );
};

export default Reviews;