import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Course = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [course, setCourse] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCourse = async () => {
            const res = await axios.get(`${backendUrl}api/v1/course/${id}`);
            setCourse(res.data);
            setLoading(false);
            
        }
        fetchCourse();
    }, [id]);
    return (
        <div>
            {loading ? (
                <div className="flex justify-center items-center min-h-screen">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                </div>
            ) : course && (
                <div className="max-w-6xl mx-auto px-4 py-8">
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="p-8">
                            <h1 className="text-3xl font-bold text-gray-900 mb-4">{course.title}</h1>
                            <div className="flex items-center gap-4 mb-6">
                                <span className="text-2xl font-bold text-blue-600">${course.price}</span>
                                <button className="px-12 py-3 rounded-md border border-white bg-gray-900 text-white text-base hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] hover:text-black hover:border-gray-900 hover:bg-white transition duration-200 montserrat-secondary">
                                    Enroll Now
                                </button>
                            </div>
                            <div className="prose max-w-none">
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    {course.description}
                                </p>
                            </div>
                            {course.category && (
                                <div className="mt-6">
                                    <span onClick={() => navigate(`/category/${course.category.id}`)} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                                        {course.category.name}
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Course;
