import { Button } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import InputField from "../../common/fields/InputField";
import Heading from "../../components/Heading";
import BackButton from "../../common/fields/BackButton";
import PageCont from "../../components/PageCont";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import ImageField from "../../common/fields/ImageField";
import { Text } from "lucide-react";
import toast from "react-hot-toast";
import axios from "axios";
import { useSelector } from "react-redux";
import AddharCardImage from '../../assets/addharcard.png'
import PanCardImage from '../../assets/pan-card-7579594_1280-removebg-preview.png'

const EditPatient = () => {
  const { role } = useSelector((state) => state.auth);
  const location = useLocation();
  const patient = location.state?.patient;
  const [isEditable, setIsEditable] = useState(false);
  const apiKey = import.meta.env.VITE_SERVER_URL;
  const navigate = useNavigate();
  const [wards, setWards] = useState([]);

  console.log('=======>>>>>>>>', patient);

  useEffect(() => {
    const fetchWards = async () => {
      try {
        const response = await axios.get(`${apiKey}/api/renepho/ward/get/all`);
        setWards(response.data.wards);
      } catch (error) {
        toast.error("Failed to fetch wards");
      }
    };

    fetchWards();
  }, []);

  const {
    handleSubmit,
    formState: { errors },
    control,
    register,
    watch,
    setValue,
  } = useForm({
    defaultValues: {
      name: patient?.name,
      email: patient?.email,
      mobile: patient?.mobile,
      ward: patient?.ward || "",
      address: patient?.address,
      date: patient?.date,
      patientID: patient?.patientID,
      note: "",
      transactionID: "",
      paymentDate: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(`${apiKey}/api/renepho/patient/update`, { ...data, _id: patient._id });
      toast.success(response.data.message);
      navigate(`/${role}/allPatients`);
    } catch (error) {
      toast.error(error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div>
      <PageCont>
        <div className="flex justify-between">
          <div className="flex items-center gap-3">
            <BackButton />
            <Heading text="Edit Patient" />
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="my-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 bg-[#f6f6f678] p-4">
            <InputField
              type="text"
              label="Patient ID"
              name="patientID"
              control={control}
              errors={errors} disabled
            />
            <InputField
              type="text"
              label="Name"
              name="name"
              control={control}
              errors={errors}
              disabled={!isEditable}
            />
            <InputField
              type="email"
              label="Email"
              name="email"
              control={control}
              errors={errors}
              disabled={!isEditable}
            />
            <InputField
              type="text"
              label="Address"
              name="address"
              control={control}
              errors={errors}
              disabled={!isEditable}
            />
            <InputField
              type="text"
              label="Mobile"
              name="mobile"
              control={control}
              errors={errors}
              disabled={!isEditable}
            />

            {/*  Fixed Ward Selection */}
            <div>
              <label className="font-medium">Ward</label>
              <select
                {...register("ward")}
                className={`mt-2 p-[6px] outline-none border border-black w-full  ${isEditable ? null : "bg-[#f2f2f2]"}`}
                onChange={(e) => setValue("ward", e.target.value)}
                disabled={!isEditable}
              >
                <option value="">Select a Ward</option>
                {wards.map((ward) => (
                  <option key={ward._id} value={ward.wardName} selected={ward.wardName === patient?.ward}>
                    {ward.wardName}
                  </option>
                ))}
              </select>
            </div>

            <InputField
              type="date"
              label="Date"
              name="date"
              control={control}
              errors={errors}
              disabled={!isEditable}
            />

          </div>


          {/* <div className="bg-[#29a6e033] p-3 rounded-md my-3 mt-10">
            <Heading text="Transaction" />
          </div> */}

          {/* New Fields: Note, Transaction ID, Payment Date */}


          {/* <div className=" flex gap-4"> 
            <InputField
              type="text"
              label="Note"
              name="note"
              control={control}
              errors={errors}
              disabled={!isEditable}
            />
            <InputField
              type="text"
              label="Transaction ID"
              name="transactionID"
              control={control}
              errors={errors}
              disabled={!isEditable}
            />
            <InputField
              type="date"
              label="Payment Date"
              name="paymentDate"
              control={control}
              errors={errors}
              disabled={!isEditable}
            />
          </div> */}


          <div className="bg-[#29a6e033] p-3 rounded-md my-3 mt-10">
            <Heading text="Upload Documents" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 bg-[#f6f6f678] p-4">
            <div className="form-control col-span-1 bg-white p-4 rounded-lg">
              <p className="font-medium text-[#000000] mb-3">Aadhaar Card</p>
              <ImageField control={control} errors={errors} name="adhaar" maxFiles={1} />
            </div>

            <div className="form-control col-span-1 bg-white p-4 rounded-lg">
              <p className="font-medium text-[#000000] mb-3">Ayushman Card</p>
              <ImageField control={control} errors={errors} name="Pan" maxFiles={1} />
            </div>

            <div className="form-control col-span-1 bg-white p-4 rounded-lg">
              <p className="font-medium text-[#000000] mb-3">Profile Picture</p>
              <ImageField control={control} errors={errors} name="Profile" maxFiles={1} />
            </div>
          </div>

          <div className="flex justify-start items-center gap-4">
            <Button onClick={() => setIsEditable(!isEditable)} className="bg-gradient-to-r from-[#29A6E0] to-[#2E3494] text-white px-4 py-2 rounded-md">
              Edit
            </Button>
            <Button type="submit" className="bg-gradient-to-r from-[#29A6E0] to-[#2E3494] text-white px-4 py-2 rounded-md">
              Save
            </Button>
          </div>
        </form>
      </PageCont>
    </div>
  );
};

export default EditPatient;



// import { Button } from "@material-tailwind/react";
// import React, { useEffect, useState } from "react";
// import InputField from "../../common/fields/InputField";
// import Heading from "../../components/Heading";
// import BackButton from "../../common/fields/BackButton";
// import PageCont from "../../components/PageCont";
// import { useForm } from "react-hook-form";
// import { useLocation, useNavigate } from "react-router-dom";
// import ImageField from "../../common/fields/ImageField";
// import { Text } from "lucide-react";
// import toast from "react-hot-toast";
// import axios from "axios";
// import { useSelector } from "react-redux";
// import AddharCardImage from '../../assets/addharcard.png'
// import PanCardImage from '../../assets/pan-card-7579594_1280-removebg-preview.png'

// const EditPatient = () => {
//   const { role } = useSelector((state) => state.auth);
//   const location = useLocation();
//   const patient = location.state?.patient;
//   const [isEditable, setIsEditable] = useState(false);
//   const apiKey = import.meta.env.VITE_SERVER_URL;
//   const navigate = useNavigate();
//   const [wards, setWards] = useState([]);
//   const [adhaarImage, setAdhaarImage] = useState(patient?.adhaar || "https://www.moneytap.com/blog/wp-content/uploads/2021/11/Masked-Aadhaar-Card-1.png"); // default image URL
//   const [panImage, setPanImage] = useState(patient?.pan || PanCardImage); // default pan image
//   const [profileImage, setProfileImage] = useState(patient?.profile || "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?t=st=1738242063~exp=1738245663~hmac=c65e36949ceae6cbcbd017b79f38b4b3b2464ed7deb6b66a276a0ea4b4cc8300&w=740");

//   useEffect(() => {
//     const fetchWards = async () => {
//       try {
//         const response = await axios.get(`${apiKey}/api/renepho/ward/get/all`);
//         setWards(response.data.wards);
//       } catch (error) {
//         toast.error("Failed to fetch wards");
//       }
//     };

//     fetchWards();
//   }, []);

//   const {
//     handleSubmit,
//     formState: { errors },
//     control,
//     register,
//     watch,
//     setValue,
//   } = useForm({
//     defaultValues: {
//       name: patient?.name,
//       email: patient?.email,
//       mobile: patient?.mobile,
//       ward: patient?.ward || "",
//       address: patient?.address,
//       date: patient?.date,
//       patientID: patient?.patientID,
//       note: "",
//       transactionID: "",
//       paymentDate: "",
//     },
//   });

//   const onSubmit = async (data) => {
//     try {
//       const response = await axios.post(`${apiKey}/api/renepho/patient/update`, { ...data, _id: patient._id });
//       toast.success(response.data.message);
//       navigate(`/${role}/allPatients`);
//     } catch (error) {
//       toast.error(error.response?.data?.message || "An error occurred");
//     }
//   };

//   return (
//     <div>
//       <PageCont>
//         <div className="flex justify-between">
//           <div className="flex items-center gap-3">
//             <BackButton />
//             <Heading text="Edit Patient" />
//           </div>
//         </div>

//         <form onSubmit={handleSubmit(onSubmit)} className="my-5">
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 bg-[#f6f6f678] p-4">
//             <InputField type="text" label="Patient ID" name="patientID" control={control} errors={errors} disabled />
//             <InputField type="text" label="Name" name="name" control={control} errors={errors} disabled={!isEditable} />
//             <InputField type="email" label="Email" name="email" control={control} errors={errors} disabled={!isEditable} />
//             <InputField type="text" label="Address" name="address" control={control} errors={errors} disabled={!isEditable} />
//             <InputField type="text" label="Mobile" name="mobile" control={control} errors={errors} disabled={!isEditable} />

//             {/* Ward Selection */}
//             <div>
//               <label className="font-medium">Ward</label>
//               <select
//                 {...register("ward")}
//                 className={`mt-2 p-[6px] outline-none border border-black w-full ${isEditable ? null : "bg-[#f2f2f2]"}`}
//                 onChange={(e) => setValue("ward", e.target.value)}
//                 disabled={!isEditable}
//               >
//                 <option value="">Select a Ward</option>
//                 {wards.map((ward) => (
//                   <option key={ward._id} value={ward.wardName} selected={ward.wardName === patient?.ward}>
//                     {ward.wardName}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             <InputField type="date" label="Date" name="date" control={control} errors={errors} disabled={!isEditable} />
//           </div>

//           <div className="bg-[#29a6e033] p-3 rounded-md my-3 mt-10">
//             <Heading text="Transaction" />
//           </div>

//           <div className="flex gap-4">
//             <InputField
//               type="text"
//               label="Note"
//               name="note"
//               control={control}
//               errors={errors}
//               disabled={!isEditable}
//             />
//             <InputField
//               type="text"
//               label="Transaction ID"
//               name="transactionID"
//               control={control}
//               errors={errors}
//               disabled={!isEditable}
//             />
//             <InputField
//               type="date"
//               label="Payment Date"
//               name="paymentDate"
//               control={control}
//               errors={errors}
//               disabled={!isEditable}
//             />
//           </div>

//           <div className="bg-[#29a6e033] p-3 rounded-md my-3 mt-10">
//             <Heading text="Upload Documents" />
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-10 bg-[#f6f6f678] p-4">
//             <div className="form-control col-span-1 bg-white p-4 rounded-lg">
//               <p className="font-medium text-[#000000] mb-3">Aadhaar Card</p>
//               <div className="relative">
//                 <img src={adhaarImage} alt="Aadhaar Card" className="w-full mb-5 h-32 object-cover rounded-md" />
//                 <ImageField
//                   control={control}
//                   errors={errors}
//                   name="adhaar"
//                   maxFiles={1}
//                   onChange={(file) => {
//                     if (file.length) {
//                       setAdhaarImage(URL.createObjectURL(file[0]));
//                     }
//                   }}
//                 />
//               </div>
//             </div>

//             <div className="form-control col-span-1 bg-white p-4 rounded-lg">
//               <p className="font-medium text-[#000000] mb-3">Pan Card</p>
//               <div className="relative">
//                 <img src={panImage} alt="Pan Card" className="w-full mb-5 h-32 object-cover rounded-md" />
//                 <ImageField
//                   control={control}
//                   errors={errors}
//                   name="pan"
//                   maxFiles={1}
//                   onChange={(file) => {
//                     if (file.length) {
//                       setPanImage(URL.createObjectURL(file[0]));
//                     }
//                   }}
//                 />
//               </div>
//             </div>

//             <div className="form-control col-span-1 bg-white p-4 rounded-lg">
//               <p className="font-medium text-[#000000] mb-3">Profile Picture</p>
//               <div className="relative">
//                 <img src={profileImage} alt="Profile Picture" className="w-full mb-5 h-32 object-cover rounded-md" />
//                 <ImageField
//                   control={control}
//                   errors={errors}
//                   name="profile"
//                   maxFiles={1}
//                   onChange={(file) => {
//                     if (file.length) {
//                       setProfileImage(URL.createObjectURL(file[0]));
//                     }
//                   }}
//                 />
//               </div>
//             </div>
//           </div>

//           <div className="flex justify-start items-center gap-4">
//             <Button onClick={() => setIsEditable(!isEditable)} className="bg-gradient-to-r from-[#29A6E0] to-[#2E3494] text-white px-4 py-2 rounded-md">
//               Edit
//             </Button>
//             <Button type="submit" className="bg-gradient-to-r from-[#29A6E0] to-[#2E3494] text-white px-4 py-2 rounded-md">
//               Save
//             </Button>
//           </div>
//         </form>
//       </PageCont>
//     </div>
//   );
// };

// export default EditPatient;
