import React from "react";

export const Procedures = () => {
    return (
        <>
            <section 
                className="py-40 bg-cover bg-center bg-fixed"
                style={{ backgroundImage: "url('/images/homePage/Construction_procedures.webp')" }}
            >
                <div className="container mx-auto px-4 text-center bg-[#ffffffe2] p-18">
                    <h2 className="text-4xl md:text-5xl font-bold mb-12 text-black">
                        Construction Procedures
                        <hr className="mt-8 border-gray-400" />
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left p-10">
                        <div>
                            <h3 className="text-2xl font-bold mb-4">Interior Design</h3>
                            <p className="text-gray-600">
                                In consultation with our designer, we always design the house in the best way for your enjoyment. We choose the layout of the rooms to offer you comfortable, peaceful and security.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-4">Construction</h3>
                            <p className="text-gray-600">
                                At houses that we are building always used to are the top of the line materials consisting of stone, wood and plaster.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-4">Consideration</h3>
                            <p className="text-gray-600">
                                During the construction of the house, the progress is considered as well as the control of the construction so that it is delivered to you without any damage.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-4">Support After Sale</h3>
                            <p className="text-gray-600">
                                It is our pleasure to be by your side for after sales support. For any damage or repair it is our pleasure to help you.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Procedures;