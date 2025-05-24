// import React, { useState, useEffect } from "react";
// import { useForm } from "react-hook-form";
// import PageCont from "../../components/PageCont";
// import { useLocation, useNavigate } from "react-router-dom";
// import InputField from "../../common/fields/InputField";
// import { Button } from "@material-tailwind/react";
// import Heading from "../../components/Heading";
// import BackButton from "../../common/fields/BackButton";
// import toast from "react-hot-toast";
// import axios from "axios";
// import { useSelector } from "react-redux";

// const apiKey = import.meta.env.VITE_SERVER_URL;

// const EditUser = () => {
//   const navigate = useNavigate();
//   const { token } = useSelector((state) => state.auth);
//   const location = useLocation();
//   const user = location.state?.user;
//   const [isEditable, setIsEditable] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const {
//     handleSubmit,
//     formState: { errors },
//     control,
//     register,
//     reset,
//   } = useForm({
//     defaultValues: {
//       name: user?.name || "",
//       email: user?.email || "",
//       address: user?.address || "",
//       mobile: user?.mobile || "",
//       profile: user?.profile || "",
//     },
//   });

//   useEffect(() => {
//     if (user) {
//       reset({
//         name: user.name,
//         email: user.email,
//         address: user.address,
//         mobile: user.mobile,
//         profile: user.profile,
//       });
//     }
//   }, [user, reset]);

//   const onSubmit = async (data) => {
//     if (!data.name || !data.email || !data.address || !data.mobile) {
//       toast.error("All fields are required!");
//       return;
//     }

//     try {
//       setLoading(true);

//       const response = await axios.post(
//         `${apiKey}/api/renepho/user/updateUser`,
//         { ...data, _id: user._id },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       if (response.status === 200) {
//         toast.success("User updated successfully!");
//         navigate("/:type/allUsers");
//         setIsEditable(false);
//       } else {
//         toast.error("Failed to update user.");
//       }
//     } catch (error) {
//       console.error("Error updating user:", error);
//       toast.error("An error occurred while updating.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <PageCont>
//       <div className="flex justify-start items-center gap-3">
//         <BackButton />
//         <Heading text="Edit User" />
//       </div>

//       <form onSubmit={handleSubmit(onSubmit)} className="my-5">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 bg-[#f6f6f678] p-4">
//           <div>
//             <label className="block outline-none font-semibold mb-2">Name</label>
//             <input
//               type="text"
//               {...register("name", { required: "Name is required" })}
//               className="w-full px-4 py-2 bg-gray-100 border border-black shadow-sm outline-none"
//               disabled={!isEditable}
//             />
//             {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
//           </div>

//           <div>
//             <label className="block outline-none font-semibold mb-2">Email</label>
//             <input
//               type="email"
//               {...register("email", {
//                 required: "Email is required",
//                 pattern: {
//                   value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
//                   message: "Invalid email address",
//                 },
//               })}
//               className="w-full px-4 py-2 bg-gray-100 border border-black shadow-sm outline-none"
//               disabled={!isEditable}
//             />
//             {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
//           </div>

//           <div>
//             <label className="block outline-none font-semibold mb-2">Address</label>
//             <input
//               type="text"
//               {...register("address", { required: "Address is required" })}
//               className="w-full px-4 py-2 bg-gray-100 border border-black shadow-sm outline-none"
//               disabled={!isEditable}
//             />
//             {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>}
//           </div>

//           <div>
//             <label className="block outline-none font-semibold mb-2">Mobile</label>
//             <input
//               type="text"
//               {...register("mobile", {
//                 required: "Phone number is required",
//                 pattern: {
//                   value: /^[0-9]{10}$/,
//                   message: "Phone number must be 10 digits",
//                 },
//               })}
//               className="w-full px-4 py-2 bg-gray-100 border border-black shadow-sm outline-none"
//               disabled={!isEditable}
//             />
//             {errors.mobile && <p className="text-red-500 text-sm mt-1">{errors.mobile.message}</p>}
//           </div>
//         </div>

//         {/* Buttons */}
//         <div className="flex justify-start items-center gap-4">
//           <Button
//             type="button"
//             variant="filled"
//             className="primary-gradient text-white py-2 px-4 font-bold mt-4 rounded-md bg-gradient-to-r from-[#29A6E0] to-[#2E3494]"
//             onClick={() => setIsEditable(!isEditable)}
//           >
//             {isEditable ? "Cancel Edit" : "Edit"}
//           </Button>

//           <Button
//             type="submit"
//             variant="filled"
//             className="primary-gradient text-white py-2 px-4 font-bold mt-4 rounded-md bg-gradient-to-r from-[#29A6E0] to-[#2E3494]"
//             disabled={!isEditable || loading}
//           >
//             {loading ? "Saving..." : "Save"}
//           </Button>
//         </div>
//       </form>
//     </PageCont>
//   );
// };

// export default EditUser;






import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import PageCont from "../../components/PageCont";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import Heading from "../../components/Heading";
import BackButton from "../../common/fields/BackButton";
import toast from "react-hot-toast";
import axios from "axios";
import { useSelector } from "react-redux";

const apiKey = import.meta.env.VITE_SERVER_URL;

const EditUser = () => {
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);
  const location = useLocation();
  const user = location.state?.user;
  const [isEditable, setIsEditable] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    handleSubmit,
    formState: { errors },
    register,
    reset,
  } = useForm({
    defaultValues: {
      name: user?.name || "",
      email: user?.email || "",
      address: user?.address || "",
      mobile: user?.mobile || "",
      profile: user?.profile || "",
    },
  });

  useEffect(() => {
    if (user) {
      reset({
        name: user.name,
        email: user.email,
        address: user.address,
        mobile: user.mobile,
        profile: user.profile,
      });
    }
  }, [user, reset]);

  const onSubmit = async (data) => {
    if (!data.name || !data.email || !data.address || !data.mobile) {
      toast.error("All fields are required!");
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post(
        `${apiKey}/api/renepho/user/updateUser`,
        { ...data, _id: user._id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        toast.success("User updated successfully!");
        navigate("/:type/allUsers");
        setIsEditable(false);
      } else {
        toast.error("Failed to update user.");
      }
    } catch (error) {
      console.error("Error updating user:", error);
      toast.error("An error occurred while updating.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageCont>
      <div className="flex justify-start items-center gap-3">
        <BackButton />
        <Heading text="Edit User" />
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="my-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 bg-[#f6f6f678] p-4">
          <div>
            <label className="block outline-none font-semibold mb-2">Name</label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className={`w-full px-4 py-2 border border-black shadow-sm outline-none transition-all duration-300 ${
                isEditable ? "bg-white" : "bg-gray-100"
              }`}
              disabled={!isEditable}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>

          <div>
            <label className="block outline-none font-semibold mb-2">Email</label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: "Invalid email address",
                },
              })}
              className="w-full px-4 py-2 border border-black shadow-sm outline-none bg-gray-100 cursor-not-allowed"
              disabled
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block outline-none font-semibold mb-2">Address</label>
            <input
              type="text"
              {...register("address", { required: "Address is required" })}
              className={`w-full px-4 py-2 border border-black shadow-sm outline-none transition-all duration-300 ${
                isEditable ? "bg-white" : "bg-gray-100"
              }`}
              disabled={!isEditable}
            />
            {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>}
          </div>

          <div>
            <label className="block outline-none font-semibold mb-2">Mobile</label>
            <input
              type="text"
              {...register("mobile", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Phone number must be 10 digits",
                },
              })}
              className={`w-full px-4 py-2 border border-black shadow-sm outline-none transition-all duration-300 ${
                isEditable ? "bg-white" : "bg-gray-100"
              }`}
              disabled={!isEditable}
            />
            {errors.mobile && <p className="text-red-500 text-sm mt-1">{errors.mobile.message}</p>}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-start items-center gap-4">
          <Button
            type="button"
            variant="filled"
            className="primary-gradient text-white py-2 px-4 font-bold mt-4 rounded-md bg-gradient-to-r from-[#29A6E0] to-[#2E3494]"
            onClick={() => setIsEditable(!isEditable)}
          >
            {isEditable ? "Cancel Edit" : "Edit"}
          </Button>

          <Button
            type="submit"
            variant="filled"
            className="primary-gradient text-white py-2 px-4 font-bold mt-4 rounded-md bg-gradient-to-r from-[#29A6E0] to-[#2E3494]"
            disabled={!isEditable || loading}
          >
            {loading ? "Saving..." : "Save"}
          </Button>
        </div>
      </form>
    </PageCont>
  );
};

export default EditUser;
