import React, { useState } from 'react';
import InputField from '../../common/fields/InputField';
import PageCont from '../../components/PageCont';
import BackButton from '../../common/fields/BackButton';
import { useForm } from 'react-hook-form';
import { Button } from '@material-tailwind/react';
import Heading from '../../components/Heading';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const apiKey = import.meta.env.VITE_SERVER_URL;

const AddWard = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { handleSubmit, formState: { errors }, control } = useForm();
  const { role } = useSelector((state) => state.auth);

  const onSubmit = async (data) => {
    if (loading) return;

    const { wardName, charges, ipAddress } = data;
    if (!wardName || !charges || isNaN(charges) || charges <= 0 || !ipAddress) {
      toast.error('Please enter a valid ward name, charges, and IP address.');
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post(`${apiKey}/api/renepho/ward/add`, { wardName, charges, ipAddress });
      toast.success(response.data.message || 'Ward added successfully!');
      navigate(`/${role}/Ward`);
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
        <Heading text="Add Ward" />
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="my-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <InputField type="text" label="Ward Name" name="wardName" control={control} errors={errors} />
          <InputField type="number" label="Charges " name="charges" control={control} errors={errors} />
          <InputField type="text" label="IP Number" name="ipAddress" control={control} errors={errors} />
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

export default AddWard;
