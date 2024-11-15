

const Content = () => {
    return (
        <div className="md:w-4/5 m-auto relative">
           
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full flex justify-center items-center">
                    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-5 py-20 ">
                        <div className="group relative block overflow-hidden w-96 md:w-auto">
                            <img src="https://thumbs4.imagebam.com/be/0f/b3/MEXGNVR_t.png" className="md:w-72 w-full m-auto" alt="" />
                        </div>
                        <div className="group relative block overflow-hidden w-96 md:w-auto">
                            <img src= "https://thumbs4.imagebam.com/24/36/d9/MEXGNXU_t.png" className="md:w-72 w-full m-auto" alt="" />
                        </div>
                        <div className="group relative block overflow-hidden w-96 md:w-auto">
                            <img src="https://thumbs4.imagebam.com/be/0f/b3/MEXGNVR_t.png" className="md:w-72 w-full m-auto" alt="" />
                        </div>
                        <div className="group relative block overflow-hidden w-96 md:w-auto">
                            <img src= "https://thumbs4.imagebam.com/24/36/d9/MEXGNXU_t.png" className="md:w-72 w-full m-auto" alt="" />
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