
import im from "../assets/im.png"
const Hero = () => {
    return (
        <div className="bg-secondary w-full ">
            <div className="flex md:w-4/5 m-auto  flex-wrap gap-5">
                {/* for text */}
                <div className="md:w-[48%] space-y-7 flex flex-col justify-center ">
                    <h2 className=" md:text-3xl lg:text-6xl font-bold  text-2xl">#1 Platform Powering Health and Wellness</h2>
                    <h4 className=" md:text-3xl lg:text-3xl text-2xl">We’re restoring home as the primary place of personal well-being</h4>
                    <p className=" md:text-3xl lg:text-2xl text-gray-500">Health is not just about what youre eating. Its also about what youre thinking and saying</p>
                    <div className="flex gap-4 ">
                        <button className="btn text-white rounded-full bg-primary px-7 hover:bg-black">Browse Courses</button>
                        <button className="btn btn-outline rounded-full px-7 text-primary outline-primary">Get Started</button>

                    </div>
                </div>
                {/* for img */}
                <div className="md:w-[48%] relative ">


                    <img src={im} alt="" className="rounded-2xl" />


                    <div className=" absolute bottom-2 left-2 bg-white bg-opacity-80 w-[97%] mx-auto   rounded-2xl">
                        <div className="justify-center flex items-center gap-3 p-5">
                            <h2 className="text-2xl  md:text-3xl lg:text-6xl font-bold">12,000+</h2>
                            <h3 className=" md:text-3xl lg:text-6xl text-gray-400 rounded-lg">|</h3>
                            <h4 className="  lg:text-2xl ">Happy learners rely on us regularly</h4>
                        </div>
                        <div className="bg-white p-3 rounded-lg flex justify-between items-center gap-5">
                            <h4 className="text-nowrap">Find your wellbeing</h4>
                            <p className="text-sm text-gray-400">By prioritizing self-care and making informed choices, one can enhance their overall quality of life</p>
                        </div>


                    </div>
                </div>
            </div>

        </div>
    );
};

export default Hero;