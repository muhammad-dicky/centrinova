import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import React, { useState } from 'react';
import Dropdown from '@/Components/Dropdown';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import { useForm, usePage } from '@inertiajs/react';
import { Link } from '@inertiajs/react';

 
export default function Comment({ comment }) {
    const { auth } = usePage().props;
    
    return (
        <div className="p-4 md:p-6 lg:p-8 lg:mx-40 bg-white rounded-lg shadow-md flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 items-center">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600 -scale-x-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
    <div className="flex-1">
        <div className="flex flex-col justify-between h-full">
            <div >
                <span className="text-gray-800">{comment.user.name}</span>
                <small className="ml-2 text-sm text-gray-600">{new Date(comment.created_at).toLocaleString()}</small>
            </div>
            <p className="mt-2 text-lg text-gray-900">{comment.message}</p>
        </div>





        {comment.user.id === auth.user.id &&
            <Dropdown>
                <Dropdown.Trigger>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                        </svg>
                    </button>
                </Dropdown.Trigger>
                <Dropdown.Content>
                    
                    <Dropdown.Link as="button" href={route('comment.destroy', comment.id)} method="delete">
                        Delete
                    </Dropdown.Link>
                    
                </Dropdown.Content>
            </Dropdown>
        }
    </div>
</div>


    );
}