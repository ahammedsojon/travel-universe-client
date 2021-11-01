import React from 'react';

const About = () => {
    return (
        <div className="about lg:container mx-auto p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8">
                <div>
                    <img className="max-w-full h-full object-cover" src="https://images.unsplash.com/photo-1502920514313-52581002a659?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=867&q=80" alt="" />
                </div>
                <div className="text-left">
                    <div>
                        <h1 className="text-2xl text-gray-500 py-8">About us</h1>
                        <h1 className="text-6xl text-gray-700 leading-snug font-black">
                            Short Story About Travel Universe.
                        </h1>
                        <p className="text-gray-500 py-10 w-4/5">
                            At a point in everyone’s life we all go through hardships and tribulations as apart of our journey, that are meant to shape and mold us. This aspect of the journey is powerful and a popular metaphor among cultures, because it shows a path to become knowledgeable, achieve their goals, and spreading their knowledge.
                        </p>
                    </div>
                    <div>
                        <div className="flex">
                            <div className="text-red-700 text-4xl mr-8">
                                <i class="fas fa-globe-americas"></i>
                            </div>
                            <div>
                                <h1 className="text-2xl">Our Mission</h1>
                                <p className="text-gray-500 w-4/5">
                                    Also, comfortable work environments, flexibility, room for growth, and it is a oriented work environment. Being a cosmetologist is exciting because you don 't know whose hair, makeup, or nails you’re going to and how it 's going to come.
                                </p>
                            </div>
                        </div>
                        <div className="flex mt-8">
                            <div className="text-green-700 text-4xl mr-8">
                                <i class="far fa-compass"></i>
                            </div>
                            <div>
                                <h1 className="text-2xl">Our Vision</h1>
                                <p className="text-gray-500 w-4/5">
                                    While there are still things to be worked out in the system with who is entering what I feel like we are on the right track. I have managed to take on these new items and accomplish them. I have enjoyed learning new things.
                                </p>
                            </div>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;