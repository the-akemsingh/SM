import { useState } from "react";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";


interface Categories {
    id: number;
    name: string;
    parentId: number | null;
}[]


const Category = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [category, setCategory] = useState<Categories | null>(null);
    const [courses, setCourses] = useState<any[]>([]);
    const [subcategories, setSubcategories] = useState<Categories[]>([]);
    const [selectedSubcategory, setSelectedSubcategory] = useState<number | null>(null);

    useEffect(() => {
        const fetchCategory = async () => {
            const res = await axios.get(`${backendUrl}api/v1/category/${id}`);
            setCategory(res.data as Categories);
        }
        fetchCategory();
    }, [id]);

    //use to list popular courses in the category
    // useEffect(() => {
    //    we have to fetch courses of the category whose parentId is the id in the url
    // }, [id]);

    //fetch subcategories of the category
    useEffect(() => {
        const fetchSubcategories = async () => {
            const res = await axios.get(`${backendUrl}api/v1/category/${id}/subcategories`);
            //@ts-ignore
            setSubcategories(res.data);
        }
        fetchSubcategories();
    }, [id]);

    //fetch courses of the selected subcategory
    useEffect(() => {
        const fetchCourses = async () => {
            const res = await axios.get(`${backendUrl}api/v1/category/${selectedSubcategory}/courses`);
            if(res.status===404){
                setCourses([]);
            }
            //@ts-ignore
            setCourses(res.data);
        }
        const fetchCourses2 = async () => {
            const res = await axios.get(`${backendUrl}api/v1/category/${id}/courses`);  
            //@ts-ignore
            setCourses(res.data);
        }
        fetchCourses();
        fetchCourses2();
    }, [selectedSubcategory]);

    return (
        <div>
            <div className="bg-gray-100 min-h-screen py-12">
                <div className="container mx-auto px-4">

                    <div className="flex items-center gap-4 mb-8">
                        {category && (
                            <h1 className="text-2xl font-bold text-gray-800">
                                {category.name}
                            </h1>
                        )}
                        {subcategories.length > 0 && (
                            <div className="flex gap-4 items-center flex-wrap">
                                {subcategories.map((subcategory) => (
                                    <div 
                                        key={subcategory.id} 
                                        className={`px-4 py-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow cursor-pointer ${selectedSubcategory === subcategory.id ? 'shadow-lg scale-110 bg-gray-50' : ''}`}
                                        onClick={() => setSelectedSubcategory(subcategory.id)}
                                    >
                                        {subcategory.name}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {courses.length !== 0 && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {courses.map((course) => (
                                <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                                    {/* <img 
                                    src={course.thumbnail} 
                                    alt={course.name}
                                    className="w-full h-48 object-cover"
                                /> */}
                                    <div className="p-6">
                                        <h2 className="text-xl font-semibold mb-2 text-gray-800">
                                            {course.title}
                                        </h2>
                                        <p className="text-gray-600 mb-4 line-clamp-2">
                                            {course.description}
                                        </p>
                                        <div className="flex justify-between items-center">
                                            <span className="text-lg font-bold text-gray-800">
                                                ${course.price}
                                            </span>
                                            <button className="px-12 py-3 rounded-md border border-white bg-gray-900 text-white text-base hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] hover:text-black hover:border-gray-900 hover:bg-white transition duration-200 montserrat-secondary" onClick={() => navigate(`/course/${course.id}`)}>
                                                View Course
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                </div>
            </div>
        </div>
    )
}

export default Category;
