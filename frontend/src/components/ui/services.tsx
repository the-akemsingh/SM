import { Carousel } from "./carousel";

const Services = () => {
    const slideData = [
        {
            title: "Coaching for School Students",
            button: "Know more",
            src: "https://plus.unsplash.com/premium_photo-1669652639356-f5cb1a086976?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            title: "Competitive Exams",
            button: "Know more", 
            src: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            title: "Skill based placement oriented training",
            button: "Know more",
            src: "https://images.unsplash.com/photo-1617900906639-cab7adceb499?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            title: "Job assistance",
            button: "Know more",
            src: "https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
    ];

    const courseCategories = [
        {
            title: "Technology",
            courses: [
                "Full Stack Web Development",
                "Android Development",
                "AI Tools Mastery",
            ]
        },
        {
            title: "Digital Marketing & Content",
            courses: [
                "SEO",
                "Digital Marketing",
                "Social Media Management",
                "Video Editing",
                "Graphic Designing",
            ]
        },
        {
            title: "Business & Management",
            courses: [
                "HR Management",
                "Sales and Marketing",
                "E-commerce Management",
            ]
        },
        {
            title: "Personal Development",
            courses: [
                "Psychology",
                "Soft Skills",
            ]
        }
    ];

    return (
        <div className="relative  overflow-hidden w-full h-full py-20">
            <div className="text-center mb-16 montserrat-400 ">
                <h1 className="text-4xl font-bold mb-4">Get Certified in the Skills That Are in Most Demand</h1>
                <p className="text-xl text-gray-600">Unlock your potential with industry-relevant courses</p>
            </div>

            {/* <div className="text-4xl pl-10 mb-8">Our Services:</div> */}
            <Carousel  slides={slideData} />

            <div className="-mt-40 bg-gradient-to-b from-indigo-50 to-white min-h-[100vh] px-6 md:px-10">
                <h2 className="text-4xl font-bold mb-16 pt-5 montserrat-500 text-center">
                    Explore Our <span className="text-blue-600">Courses</span>
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                    {courseCategories.map((category, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.18)] transition-shadow duration-300">
                            <h3 className="text-2xl font-bold mb-6 text-gray-800 montserrat-500">{category.title}</h3>
                            <ul className="space-y-3">
                                {category.courses.map((course, idx) => (
                                    <li key={idx} className="text-gray-600 flex items-center gap-2 montserrat-400">
                                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                                        {course}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="mt-20 max-w-4xl mx-auto bg-gradient-to-r from-blue-500 to-indigo-600 p-10 rounded-2xl text-white shadow-xl">
                    <h3 className="text-3xl font-bold mb-6 montserrat-500">Career Launch Support</h3>
                    <p className="text-xl leading-relaxed montserrat-400">
                        Your success is our priority. Our dedicated placement team collaborates with industry leaders to provide exceptional career opportunities, helping you transition from learning to earning.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Services;
