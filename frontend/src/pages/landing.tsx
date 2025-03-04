import Services from "../components/ui/services";
import Contact from "../components/ui/contact";
import Hero from "../components/ui/hero";
import Partners from "../components/ui/partners";
const Landing = () => {


    return (
        <div className="flex flex-col">
             <div className="absolute -right-28 top-15 transform translate-x-1/4 -translate-y-1/4 w-[1000px] h-[1000px] rounded-full bg-[#116bfb] -z-10 opacity-60">
             </div>
             
            {/* Hero Section */}
            <Hero></Hero>

            {/* parternship */}
            <Partners></Partners>

            {/* Services */}
            <Services></Services>

            {/* Contact */}
            <Contact></Contact>

        </div>
    );
};

export default Landing;
