import React, {useState} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import { useForm, Head } from '@inertiajs/react';
import Centrinova from '@/Components/Centrinova';


export default function Index({ auth, centrinova }) {
    const { data, setData, post, processing, reset, errors } = useForm({
        message: '',
        description: '',
        image: null,
    });

    const [previewImage, setPreviewImage] = useState(null);
 
    const submit = async (e) => {
        e.preventDefault();


        //TESTING
        if (!data.image) {
            return alert('Please select an image');
        }
    
        // Prepare form data
        const formData = new FormData();
        formData.append('message', data.message);
        formData.append('description', data.description);
        formData.append('image', data.image);


        try {
            await post(route('centrinova.store'), { onSuccess: () => reset() });
            reset();
            setPreviewImage(null);
          } catch (error) {
            console.error(error);
          }
    
        // try {
        //     await axios.post(route('centrinova.store'), formData, {
        //         headers: {
        //             'Content-Type': 'multipart/form-data',
        //         },
        //     });
    
        //     reset();
        //     setPreviewImage(null);
        // } catch (error) {
        //     console.error(error);
        // }
        
        
          
          


        // ASLI
        // post(route('centrinova.store'), { onSuccess: () => reset() });
    };




    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setData('image', file);
    
        // Preview image
        if (file) {
            setPreviewImage(URL.createObjectURL(file));
        } else {
            setPreviewImage(null);
        }
    };
 
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head message="Centrinova" />
 
            <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
                <form onSubmit={submit}>
                    <div>
                    <h1>Title</h1>
                    <textarea
                        value={data.message}
                        placeholder="Title Post"
                        className="mb-10 mt-2 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                        onChange={e => setData('message', e.target.value)}
                    ></textarea>
                    <InputError message={errors.message} className="mt-2" />

                    </div>
                    <div>
                    <h1>Description</h1>
                    <textarea
                        value={data.description}
                        placeholder="Desc Post"
                        className="mb-10 mt-2 py-10 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                        onChange={e => setData('description', e.target.value)}
                    ></textarea>
                    <InputError description={errors.description} className="mt-2" />
                    </div>
                    <div>

                        {/* IMAGE */}
                    {/* <div class="form-group">
                    <label htmlFor="image">Image</label>
                        <input 
                            type="file" 
                            name="image" 
                            id="image" 
                            className="form-control-file" 
                            onChange={(e) => setData('image', e.target.files[0])}
                        />
                        <InputError image={errors.image} className="mt-2" />
    </div> */}
     <input type="file" accept="image/*" onChange={handleImageChange} />
        {previewImage && (
            <img src={previewImage} alt="Preview" style={{ width: 400, height: 200 }} />
        )}
    {/* BAWAH */}
                    </div>
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