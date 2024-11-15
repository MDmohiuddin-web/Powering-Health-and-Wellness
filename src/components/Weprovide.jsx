import im from "../assets/widthkids.png"
import im2 from "../assets/tik.svg"

const Weprovide = () => {
    return (
       
            <div className=" flex md:w-4/5 m-auto md:py-10 gap-5 flex-wrap">
                {/* for text */}
                <div className="md:w-[48%] space-y-7 flex flex-col justify-center ">
                    <h2 className="md:text-6xl font-bold text-4xl ">We provide...</h2>
                    {/* starting faq */}
                    <div className="flow-root">

                        <div className="-my-8 divide-y divide-gray-200">
                            {/* 1 */}


                            <details className="group py-8 [&_summary::-webkit-details-marker]:hidden">
                                <summary className="flex cursor-pointer items-center  gap-5 text-gray-900">
                                 <img src={im2} alt="" />  
                                  <h2 className="md:text-lg text-2xl font-medium">Personalized routine</h2>

                                    
                                </summary>

                                <p className="mt-4 leading-relaxed text-gray-700">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa
                                    in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis
                                    explicabo consequuntur distinctio corporis earum similique!
                                </p>
                            </details>
                            {/* 2 */}
                            <details className="group py-8 [&_summary::-webkit-details-marker]:hidden">
                                <summary className="flex cursor-pointer items-center  gap-5 text-gray-900">
                                <img src={im2} alt="" />   <h2 className="text-lg font-medium">Follow-up after completing courses</h2>

                                    
                                </summary>

                                <p className="mt-4 leading-relaxed text-gray-700">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa
                                    in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis
                                    explicabo consequuntur distinctio corporis earum similique!
                                </p>
                            </details>
                            {/* 3 */}
                            <details className="group py-8 [&_summary::-webkit-details-marker]:hidden" open>
                                <summary className="flex cursor-pointer items-center gap-5 text-gray-900">
                                <img src={im2} alt="" />  <h2 className="text-lg font-medium">Access to additional resources</h2>


                                </summary>

                                <p className="mt-4 leading-relaxed text-gray-700">
                                We offer access to a variety of additional resources to enhance your experience, including exclusive tools, guides, and support materials designed to help you achieve your goals more effectively.
                                </p>
                            </details>
                            {/* 4 */}
                            <details className="group py-8 [&_summary::-webkit-details-marker]:hidden">
                            <summary className="flex cursor-pointer items-center  gap-5 text-gray-900">
                                <img src={im2} alt="" />   <h2 className="text-lg font-medium">Free community support</h2>

                                    
                                </summary>

                                <p className="mt-4 leading-relaxed text-gray-700">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa
                                    in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis
                                    explicabo consequuntur distinctio corporis earum similique!
                                </p>
                            </details>


                        </div>
                    </div>
                    <div className="flex gap-4 ">

                        <button className="btn btn-outline rounded-full px-7 text-primary outline-primary">Learn More About Our Services</button>

                    </div>
                </div>
                {/* for img */}
                <div className="md:w-[48%] relative ">


                    <img src={im} alt="" className="rounded-2xl" />


                   
                </div>
            </div>

     
    );
};

export default Weprovide;