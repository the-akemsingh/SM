import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {

    const notify = () => toast.success('Message Sent Successfully');

    const [isLoading, setIsLoading] = useState(false);

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    const onSubmit = async (event:any) => {
        alert("sending message")
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", accessKey);
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          console.log("Success", res);
          notify();
          setIsLoading(false);
        }
      };

    return (
        <section className="bg-white py-12">
            <Toaster />
            <div className="container mx-auto px-4">
                <div className="max-w-2xl mx-auto text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-3">Get in Touch</h2>
                    <p className="text-base text-gray-600">
                        Have questions? Send us a message and we'll get back to you shortly.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
                    <form onSubmit={onSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="John Doe"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="john@example.com"
                                    required
                                />
                            </div>
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="+91 98765 43210"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Message
                            </label>
                            <textarea
                                name="message"
                                rows={4}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                                placeholder="Your message here..."
                                required
                            ></textarea>
                        </div>

                        <div className="text-center">
                            {isLoading ? (
                                <button
                                    type="submit"
                                    className="px-6 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                                >
                                    Sending...
                                </button>
                            ) : (
                                <button
                                    type="submit"
                                    className="px-6 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                                >
                                    Send Message
                                </button>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;