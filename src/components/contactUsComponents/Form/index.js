import emailjs from 'emailjs-com';
import { useEffect, useState } from 'react';

const Form = () => {
    const [values, setValues] = useState({
        fullName: '',
        email: '',
        tel: '',
        company: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState('');
    function handleSubmit(event) {
        event.preventDefault()
        emailjs.send('service_u48ym1p', 'template_oq6pgux', values, 'Vtwq3EtwQskHbElPW')
            .then(response => {
                console.log('SUCCESS!')
                setValues({
                    fullName: '',
                    email: '',
                    tel: '',
                    company: '',
                    subject: '',
                    message: ''
                });
                setStatus('SUCCESS')
            }, error => {
                console.log('FAILED...', error)
            });
    }

    useEffect(() => {
        if (status === 'SUCCESS') {
            setTimeout(() => {
                setStatus('');
            }, 3000);
        }
    }, [status]);

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }
    return (
        <>
            <div className='max-w-md mx-auto'>
                <div className='flex items-center lg:justify-start justify-center pb-5'>
                    <h2 className='font-bold text-lg text-gray-600 '>فرم درخواست</h2>
                </div>
                {status && renderAlert()}
                <form onSubmit={handleSubmit}>
                    <div className="relative z-0 w-full mb-8 group">
                        <input value={values.fullName} name='fullName' onChange={handleChange} type="text" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-green peer" placeholder=" " required />
                        <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 flex justify-start"><p>نام و نام خانوادگی</p><p className="text-red-500">*</p></label>
                    </div>
                    <div className="relative z-0 w-full mb-8 group">
                        <input value={values.email} name='email' onChange={handleChange} type="email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-green peer" placeholder=" " required />
                        <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 flex justify-start"><p>آدرس ایمیل</p><p className="text-red-500">*</p></label>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-8 group">
                            <input value={values.tel} name='tel' onChange={handleChange} type="tel" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-green peer" placeholder=" " required />
                            <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 flex justify-start"><p>شماره تماس</p><p className="text-red-500">*</p></label>
                        </div>
                        <div className="relative z-0 w-full mb-8 group">
                            <input value={values.company} name='company' onChange={handleChange} type="text" id="floating_company" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-green peer" placeholder=" " />
                            <label htmlFor="floating_company" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 flex justify-start items-center"><p>اسم شرکت</p><p className="text-gray-400 text-xs">(اختیاری)</p></label>
                        </div>
                    </div>
                    <div className="relative z-0 w-full mb-8 group">
                        <input value={values.subject} name='subject' onChange={handleChange} type="text" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-green peer" placeholder=" " />
                        <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 flex justify-start items-center"><p>موضوع پیام</p><p className="text-gray-400 text-xs">(اختیاری)</p></label>
                    </div>
                    <div className="relative z-0 w-full mb-8 group">
                        <input value={values.message} name='message' onChange={handleChange} type="text" id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-green peer" placeholder=" " required />
                        <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 flex justify-start"><p>متن پیام</p><p className="text-red-500">*</p></label>
                    </div>

                    <button type="submit" className="text-green text-sm lg:text-md px-4 py-1 mt-[40px] rounded-3xl transition-colors text-white hover:text-green bg-green hover:bg-white font-medium w-full text-center border-2 border-green">ارسال درخواست</button>
                </form>
            </div>
        </>
    );
}

const renderAlert = () => (
    <div className="px-4 py-3 leading-normal text-blue-700 bg-blue-100 rounded mb-5 text-center">
        <p>your message submitted successfully</p>
    </div>
)

export default Form;
