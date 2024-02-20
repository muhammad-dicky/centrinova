import React, {useState, useEffect} from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import { useForm, Head } from '@inertiajs/react';
import Centrinova from '@/Components/Centrinova';
import Comment from '@/Components/Comment';

const Show = ({ centrinova, auth, comment }) => {

  const { data, setData, post, processing, reset, errors } = useForm({
    message: '',
    centrinova_id: ''
  });
  // const [centrinova_id] = useState(centrinova.id);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  useEffect(() => {
    if (centrinova) {
      setData('centrinova_id', centrinova.id);
    }
  }, [centrinova]);


  const submit = (e) => {
    e.preventDefault();
    console.log("Data to be sent:", { message: data.message,  });
    post(route('comment.store'), { onSuccess: () => {reset(); setShowSuccessPopup(true);} });
    // post(route('comment.store'), { onSuccess: () => reset() });
    
  };

  const filteredComments = comment.filter(comment => comment.centrinova_id === centrinova.id);

  

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
          {/* <textarea
            value={data.centrinova_id}
            placeholder="What's on your mind?"
            className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
            onChange={e => setData('centrinova_id', e.target.value)}
          ></textarea>
          <InputError message={errors.message} className="mt-2" /> */}
          {/* <input  name="centrinova_id" value={centrinova_id} /> */}
          <PrimaryButton className="mt-4" disabled={processing}>
            Comment
          </PrimaryButton>
        </form>
      </div>


      {showSuccessPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-green-600 font-semibold">Comment submitted successfully!</p>
            <button
              onClick={() => setShowSuccessPopup(false)}
              className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700"
            >
              Close
            </button>
          </div>
        </div>
      )}




<div className="mt-6 bg-white shadow-sm rounded-lg divide-y">
    {filteredComments.length > 0 ? (
        filteredComments.map(comment =>
            <Comment key={comment.id} comment={comment} />
        )
    ) : (
        <p className="text-gray-500 text-center">Komentar kosong, jadilah yang pertama berkomentar!</p>
    )}
</div>



    </AuthenticatedLayout>
  );
}


export default Show;