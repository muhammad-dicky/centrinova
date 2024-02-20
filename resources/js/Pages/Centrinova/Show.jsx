import React, {useState} from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import { useForm, Head } from '@inertiajs/react';
import Centrinova from '@/Components/Centrinova';

const Show = ({ centrinova, auth, comment }) => {

  const { data, setData, post, processing, reset, errors } = useForm();
  const [centrinovaId, setCentrinovaId] = useState(centrinova.id);

// const submit = (e) => {
//     e.preventDefault();
//     post(route('comment.store'), { onSuccess: () => reset() });
// };
const submit = (e) => {
  e.preventDefault();
  post(route('comment.store'), { content: data.message, centrinova_id: centrinovaId });
};

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
    >
      <Head title="Dashboard" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6">
              <h1 className="text-2xl font-semibold text-gray-800">{centrinova.message}</h1>
              <p className="mt-2 text-gray-600 break-all">{centrinova.description}</p>
            </div>
          </div>
        </div>
      </div>


{/* COMMENT */}
<Head title="Comment" />
 
            <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
                <form onSubmit={submit}>
                    <textarea
                        value={data.message}
                        placeholder="What's on your mind?"
                        className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                        onChange={e => setData('message', e.target.value)}
                    ></textarea>
                    <InputError message={errors.message} className="mt-2" />
                    <PrimaryButton className="mt-4" disabled={processing}>Comment</PrimaryButton>
                </form>
            </div>
    </AuthenticatedLayout>
  );
}


export default Show;