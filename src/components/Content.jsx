

const Content = () => {
    return (
        <div className="md:w-4/5 m-auto relative md:px-0 px-5">
           
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative md:w-full w-4/5  flex justify-center items-center p-5 mx-auto  text-center ">
                    <div className="flex-wrap flex gap-5 py-20 mx-auto text-center md:grid md:grid-cols-4">
                        <div className="group relative block overflow-hidden w-96 md:w-auto mx-auto">
                            <img src="https://thumbs4.imagebam.com/be/0f/b3/MEXGNVR_t.png" className="md:w-72 w-4/5  mx-auto" alt="" />
                        </div>
                        <div className="group relative block overflow-hidden w-96 md:w-auto mx-auto">
                            <img src= "https://thumbs4.imagebam.com/24/36/d9/MEXGNXU_t.png" className="md:w-72 w-4/5  mx-auto" alt="" />
                        </div>
                        <div className="group relative block overflow-hidden w-96 md:w-auto mx-auto">
                            <img src="https://thumbs4.imagebam.com/be/0f/b3/MEXGNVR_t.png" className="md:w-72 w-4/5  mx-auto" alt="" />
                        </div>
                        <div className="group relative block overflow-hidden w-96 md:w-auto mx-auto">
                            <img src= "https://thumbs4.imagebam.com/24/36/d9/MEXGNXU_t.png" className="md:w-72 w-4/5  mx-auto" alt="" />
                        </div>
                       
                    </div>
                    <div className="absolute flex justify-center items-center gap-5 transform -translate-y-1/2 left-5 right-5 top-10">
                        <button className="btn btn-circle border">❮</button>
                        <button  className="btn btn-circle border">❯</button>
                    </div>
                </div>
               
            </div>
        </div>        
    )};

export default Content;