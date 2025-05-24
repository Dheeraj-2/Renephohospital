import React, { useEffect, useState } from 'react';
import InputField from '../../common/fields/InputField';
import PageCont from '../../components/PageCont';
import BackButton from '../../common/fields/BackButton';
import { useForm } from 'react-hook-form';
import { Button } from '@material-tailwind/react';
import Heading from '../../components/Heading';
import ImageField from '../../common/fields/ImageField';
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Select, Form } from "antd";
const apiKey = import.meta.env.VITE_SERVER_URL;

const AddPatient = () => {
  const { token, role } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [data, Setdata] = useState([]);

  const {
    handleSubmit,
    formState: { errors },
    control,
    watch,
    setValue,
  } = useForm();

  const aadhaarFile = watch('aadhaarImg');
  const panFile = watch('PanImage');
  const profilePicFile = watch('profilePic');

  const HandleWard = async () => {
    const responsive = await axios.get(`${apiKey}/api/renepho/ward/get/all`);
    Setdata(responsive.data.wards);
  };

  useEffect(() => {
    HandleWard();
  }, []);

  const onSubmit = async (data) => {
    if (loading) return;

    const { name, email, address, phone, date, ward } = data;

    if (!name || !email || !address || !phone || !ward || !date) {
      toast.error('All fields are required!');
      return;
    }

    if (!aadhaarFile || aadhaarFile.length === 0) {
      toast.error('Aadhaar Card is required!');
      return;
    }

    if (!panFile || panFile.length === 0) {
      toast.error('Pan Card is required!');
      return;
    }

    if (!profilePicFile || profilePicFile.length === 0) {
      toast.error('Profile Picture is required!');
      return;
    }

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('address', address);
    formData.append('mobile', phone);
    formData.append('ward', ward); // Add selected ward to the form data
    formData.append('date', date);
    formData.append('adhaar', aadhaarFile[0].file);
    formData.append('pan', panFile[0].file);
    formData.append('user', profilePicFile[0].file);

    try {
      setLoading(true);
      const response = await axios.post(`${apiKey}/api/renepho/patient/add`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      toast.success(`${response.data.message}!`);
      console.log(response.data);
      navigate(`/${role}/allPatients`);
    } catch (error) {
      toast.error(error?.response?.data?.message || 'Something went wrong!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageCont>
      <div className="flex justify-start items-center gap-3">
        <BackButton />
        <Heading text="Add Patient" />
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="my-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <InputField type="text" label="Name" name="name" control={control} errors={errors} />
          <InputField type="email" label="Email" name="email" control={control} errors={errors} />
          <InputField type="text" label="Address" name="address" control={control} errors={errors} />
          <InputField type="text" label="Mobile" name="phone" control={control} errors={errors} />
          <div>
            <label className="">Ward</label>
            <select
              className="mt-2 p-[6px] outline-none border border-black  w-full"
              name="ward"
              onChange={(e) => setValue('ward', e.target.value)}
            >
              <option value="">Select a ward</option>
              {data.map((ward) => (
                <option key={ward._id} value={ward.wardName}>
                  {ward.wardName}
                </option>
              ))}
            </select>
            {errors.ward && <p className="text-red-500 text-sm">{errors.ward.message}</p>}
          </div>
          <InputField type="date" label="Date" name="date" control={control} errors={errors} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 bg-[#f6f6f678] mt-5 gap-10 p-4">
          <div className="form-control">
            <p className="font-medium text-[#000000] mb-3">Aadhaar Card</p>
            <ImageField control={control} errors={errors} name="aadhaarImg" maxFiles={1} />
          </div>

          <div className="form-control">
            <p className="font-medium text-[#000000] mb-3">Ayushman Card</p>
            <ImageField control={control} errors={errors} name="PanImage" maxFiles={1} />
          </div>

          <div className="form-control">
            <p className="font-medium text-[#000000] mb-3">Profile Picture</p>
            <ImageField control={control} errors={errors} name="profilePic" maxFiles={1} />
          </div>
        </div>

        <div>
          <Button
            type="submit"
            variant="filled"
            className="primary-gradient black text-white py-2 px-4 font-bold mt-4 rounded-md bg-gradient-to-r from-[#29A6E0] to-[#2E3494]"
            disabled={loading}
          >
            {loading ? 'Saving...' : 'Save'}
          </Button>
        </div>
      </form>
    </PageCont>
  );
};

export default AddPatient;
