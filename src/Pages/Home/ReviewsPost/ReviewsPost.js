import React from 'react';
import './ReviewsPost.css';
const ReviewsPost = () => {
    return (
        <div className="py-16 max-w-6xl mx-auto">
            <div className="lg:flex">
                <div className="lg:w-1/3 md:w-2/3 md:mx-auto px-4 lg:pr-8">
                    <div>
                        <h2 className="text-2xl font-bold  pb-4 uppercase">Tours Reviews</h2>
                        <div className="h-1 w-20 bg-yellow-500 mx-auto"></div>
                    </div>
                    <div className="bg-yellow-400 py-8 px-4 rounded-lg mt-4 cursor-pointer">
                        <div className="">
                            <img className="h-20 w-20 mx-auto rounded-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80" alt="" />
                        </div>
                        <div className="pt-2 pb-4">
                            <h2 className="text-lg">
                                Angela White
                            </h2>
                            <div>
                                <span><i class="fas fa-star"></i></span>
                                <span><i class="fas fa-star"></i></span>
                                <span><i class="fas fa-star"></i></span>
                                <span><i class="fas fa-star"></i></span>
                                <span><i class="fas fa-star"></i></span>
                            </div>
                        </div>
                        <div >
                            <h2 className="text-lg font-bold pb-2">Grand Spain Madrid</h2>
                            <p>Giving services to better address client issues, such as malfunctions is a good opportunity to taken advantage of. This will help grow the organization and broadening ToolsCorp 's client base. Make a solid online market presence.</p>
                        </div>
                        <div className="text-white pt-2">
                            <span className="mr-2"><i class="fas fa-circle"></i></span>
                            <span className="mr-2"><i class="far fa-circle"></i></span>
                            <span><i class="far fa-circle"></i></span>
                        </div>
                    </div>
                </div>
                <div className="md:w-full px-4 lg:px-0 lg:w-2/3">
                    <div>
                        <h2 className="text-2xl font-bold  pb-4 uppercase">Latest Post</h2>
                        <div className="h-1 w-20 bg-yellow-500 mx-auto"></div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                        <div className="rounded-lg text-left post cursor-pointer">
                            <div className="img">
                                <img src="https://media.istockphoto.com/photos/house-of-paper-with-a-heart-in-the-hand-picture-id939276258?k=20&m=939276258&s=612x612&w=0&h=fpjycnm42ul8uPGXDKkv-zKI04SyS8L1LUePAGAP2xo=" alt="" />
                            </div>
                            <h2 className="text-2xl my-2">Love advice from experts</h2>
                            <div className="flex mb-2">
                                <div className="flex mr-4">
                                    <span className="text-yellow-500 mr-2"><i class="far fa-calendar-alt"></i></span>
                                    <p className="text-gray-400">October 6, 2021</p>
                                </div>
                                <div className="flex">
                                    <span className="text-yellow-500 mr-2"> <i class="fas fa-location-arrow"></i></span>
                                    <p className="text-gray-400">Travel</p>
                                </div>
                            </div>
                            <p>The purpose of this speech is to present the benefits and the importance of reading. The reasons are that it is through reading.</p>
                        </div>
                        <div className="rounded-lg text-left post cursor-pointer">
                            <div className="img">
                                <img src="https://media.istockphoto.com/photos/ornamental-arabic-lantern-with-burning-candle-picture-id1306480686?k=20&m=1306480686&s=612x612&w=0&h=YPg-QfUiwvFZSGYj0rsY4TfCBNFHCcl6kLMB7BQfQGA=" alt="" />
                            </div>
                            <h2 className="text-2xl my-2">World's hottest destination for vegans</h2>
                            <div className="flex mb-2">
                                <div className="flex mr-4">
                                    <span className="text-yellow-500 mr-2"><i class="far fa-calendar-alt"></i></span>
                                    <p className="text-gray-400">October 10, 2021</p>
                                </div>
                                <div className="flex">
                                    <span className="text-yellow-500 mr-2"> <i class="fas fa-location-arrow"></i></span>
                                    <p className="text-gray-400">Travel</p>
                                </div>
                            </div>
                            <p>This has shown me how I can handle these situations and the gratification after the job is done well which is a feeling that is irreplaceable</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewsPost;