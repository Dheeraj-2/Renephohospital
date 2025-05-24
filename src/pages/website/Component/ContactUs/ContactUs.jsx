import React, { useState } from "react";
import { FaUser, FaPhone, FaEnvelope, FaPen } from "react-icons/fa";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Form validation
  const validateForm = () => {
    let errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.mobile.trim()) {
      errors.mobile = "Mobile number is required";
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      errors.mobile = "Enter a valid 10-digit mobile number";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Enter a valid email address";
    }
    if (!formData.message.trim()) errors.message = "Message cannot be empty";

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Submitted:", formData);
      alert("Form submitted successfully!");

      // Reset form after submission
      setFormData({
        name: "",
        mobile: "",
        email: "",
        message: "",
      });

      setErrors({});
    }
  };

  return (
    <div className="container mx-auto p-10">
      <div className="flex flex-col md:flex-row justify-between space-x-0 md:space-x-6">
        {/* Left section */}
        <div className="md:w-1/2 text-left">
          <h1 className="text-4xl font-bold mb-4">Let's Connect</h1>
          <p className="mb-4">
            For all queries and your valuable feedback, <br />
            please connect with us at:
          </p>

          <div className="mb-4">
            <div className="flex items-center mb-2 pt-4">
              <FaEnvelope className="mr-2 text-blue-900" />
              <a href="mailto:renephohospital@gmail.com" className="text-black">
                renephohospital@gmail.com
              </a>
            </div>
            <div className="flex items-center mb-2 pt-4">
              <FaPhone className="mr-2 text-blue-900" />
              <span>+91 8400199338</span>
            </div>
            <div className="flex items-center mb-2 pt-4">
              <FaPen className="mr-2 text-blue-900" />
              <span>
                Gopal Nagar Chakaya, Near Sadar Hospital, Jail Road Buxar, Bihar
                802101
              </span>
            </div>
          </div>
        </div>

        {/* Right section (form) */}
        <div className="md:w-1/2">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <div className="flex items-center border p-2 rounded">
                <FaUser className="mr-2 text-gray-500" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="w-full p-2 border-0 focus:ring-0"
                />
              </div>
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>

            <div className="flex flex-col">
              <div className="flex items-center border p-2 rounded">
                <FaPhone className="mr-2 text-gray-500" />
                <input
                  type="text"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Mobile"
                  className="w-full p-2 border-0 focus:ring-0"
                />
              </div>
              {errors.mobile && (
                <p className="text-red-500 text-sm">{errors.mobile}</p>
              )}
            </div>

            <div className="flex flex-col">
              <div className="flex items-center border p-2 rounded">
                <FaEnvelope className="mr-2 text-gray-500" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email ID"
                  className="w-full p-2 border-0 focus:ring-0 outline-none"
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>

            <div className="flex flex-col">
              <div className="flex items-center border p-2 rounded">
                <FaPen className="mr-2 text-gray-500" />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write Reasons"
                  className="w-full p-2 border-0 focus:ring-0"
                ></textarea>
              </div>
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
