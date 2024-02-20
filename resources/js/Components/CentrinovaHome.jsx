// import React from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import React, { useState } from 'react';
import Dropdown from '@/Components/Dropdown';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import { useForm, usePage } from '@inertiajs/react';
import { Link } from '@inertiajs/react';
// import { Link } from 'react-router-dom';
dayjs.extend(relativeTime);

 
export default function Centrinovahome({ centrinova }) {
    const { auth } = usePage().props;
 
    const [editing, setEditing] = useState(false);
 
    const { data, setData, patch, clearErrors, reset, errors } = useForm({
        message: centrinova.message,
        description: centrinova.description,
        
    });
 
    const submit = (e) => {
        e.preventDefault();
        patch(route('centrinova.update', centrinova.id), { onSuccess: () => setEditing(false) });
    };

    // console.log(comment.message)

    // console.log(route('centrinova.show', centrinova.id));

    return (

<div className="p-6 flex space-x-2">
{/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600 -scale-x-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
</svg> */}
<div className="flex-1">
    <div className="flex justify-between items-center">
        <div>
            <span className="text-gray-800 ">{centrinova.user.name}</span>
            <small className="ml-2 text-sm text-gray-600">{dayjs(centrinova.created_at).fromNow()}</small>
            { centrinova.created_at !== centrinova.updated_at && <small className="text-sm text-gray-600"> &middot; edited</small>}
        </div>
        
    </div>
    {editing
        ? <form onSubmit={submit}>
            <textarea value={data.message} onChange={e => setData('message', e.target.value)} className="mt-4 w-full text-gray-900 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"></textarea>
            <InputError message={errors.message} className="mt-2" />
            <div className="space-x-2">
                <PrimaryButton className="mt-4">Save</PrimaryButton>
                <button className="mt-4" onClick={() => setEditing(false) && reset()}>Cancel</button>
            </div>
        </form>
        : <> 
          <Link href={route('centrinova.show', centrinova.id)} className="hover:underline cursor-pointer mt-4 text-6xl text-gray-900" as="p">
     {centrinova.message}
 </Link>
        {/* <p className="mt-4 text-lg text-gray-900">{centrinova.message}</p>  */}
        <p className="mt-4 text-xl text-gray-900 ">
  {centrinova.description.length > 5 ? `${centrinova.description.slice(0, 50)}...` : centrinova.description}
</p>
</>
    }
</div>
</div>

    );
}