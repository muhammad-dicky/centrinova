import React,{ useState, useEffect } from 'react';
import HomepageLayout from '@/Layouts/HomepageLayout';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import { useForm, Head,Link } from '@inertiajs/react';
import Centrinova from '@/Components/Centrinova';
import Guest from '@/Layouts/GuestLayout';
import Centrinovahome from '@/Components/CentrinovaHome';




export default function Index({ auth, centrinova }) {
    const { data, setData, post, processing, reset, errors } = useForm({
        message: '',
        description: '',
    });
 
    const submit = (e) => {
        e.preventDefault();
        post(route('centrinova.store'), { onSuccess: () => reset() });
    };

    console.log(centrinova)
 
    return (
        <>
        <div className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
                <div className="sm:fixed sm:top-0 sm:right-0 p-6 text-end">
                    {auth.user ? (
                        <Link
                            href={route('dashboard')}
                            className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route('login')}
                                className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Log in
                            </Link>

                            <Link
                                href={route('register')}
                                className="ms-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>

                <Head message="Homepage" />
 
 

                <div className="my-32 mx-auto sm:w-fit md:w-2/3 lg:w-1/2 xl:w-2/3 bg-white shadow-sm rounded-lg divide-y">
    {centrinova.map(centrinova =>
        <Centrinovahome key={centrinova.id} centrinova={centrinova} />
    )}
</div>

                
                


                
            </div>



            
        </>
    );
}