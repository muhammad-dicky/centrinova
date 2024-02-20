import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import { useForm, Head } from '@inertiajs/react';
import Centrinova from '@/Components/Centrinova';


export default function Index({ auth, centrinova }) {
    const { data, setData, post, processing, reset, errors } = useForm({
        message: '',
        description: '',
    });
 
    const submit = (e) => {
        e.preventDefault();
        post(route('centrinova.store'), { onSuccess: () => reset() });
    };
 
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head message="Centrinova" />
 
            <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
                <form onSubmit={submit}>
                    <h1>Title</h1>
                    <textarea
                        value={data.message}
                        placeholder="Title Post"
                        className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                        onChange={e => setData('message', e.target.value)}
                    ></textarea>
                    <InputError message={errors.message} className="mt-2" />
                    <h1>Description</h1>
                    <textarea
                        value={data.description}
                        placeholder="Desc Post"
                        className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                        onChange={e => setData('description', e.target.value)}
                    ></textarea>
                    <InputError description={errors.description} className="mt-2" />
                    <PrimaryButton className="mt-4" disabled={processing}>POST BLOG</PrimaryButton>
                </form>

                <div className="mt-6 bg-white shadow-sm rounded-lg divide-y">
                    {centrinova.map(centrinova =>
                        <Centrinova key={centrinova.id} centrinova={centrinova} />
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}