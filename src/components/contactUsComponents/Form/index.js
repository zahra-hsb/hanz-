import emailjs from 'emailjs-com';
import { useEffect, useState } from 'react';

const Form = () => {
    const [email, setEmail] = useState('')
    const [tel, setTel] = useState('')
    const [isEmailValid, setIsValid] = useState(false)
    const [isMobileValid, setMobileValid] = useState(false)

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


    const handleEmailChange = (e) => {
        setEmail(e.target.value)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setIsValid(emailRegex.test(e.target.value))
    }

    const handleMobileChange = (e) => {
        setTel(e.target.value)
        const mobileRegex = /^(0|0098|\+98)9(0[1-5]|[1 3]\d|2[0-2]|98)\d{7}$/;
        setMobileValid(mobileRegex.test(e.target.value))
    }

    useEffect(() => {
        if (status === 'SUCCESS') {
            setTimeout(() => {
                setStatus('');
            }, 1000);
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
                <form onSubmit={handleSubmit}>
                    <div className="relative z-0 w-full mb-8 group">
                        <input value={values.fullName} name='fullName' onChange={handleChange} type="text" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-green peer" placeholder=" " required />
                        <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 flex justify-start"><p>نام و نام خانوادگی</p><p className="text-red-500">*</p></label>
                    </div>
                    <div className="relative z-0 w-full mb-8 group">

                        <input value={values.email} maxLength={40} name='email' onKeyUp={(e) => handleEmailChange(e)} onChange={handleChange} type="email" id="floating_email" className={`${isEmailValid ? `border-green` : `focus:border-red-500`} block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-600 appearance-none focus:outline-none focus:ring-0 peer`} placeholder=" " required />

                        <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 flex justify-start"><p>آدرس ایمیل</p><p className="text-red-500">*</p></label>
                        {/* {isValid ? <p className='text-green'>email is valid</p> : <p className='text-red-800'>email is invalid</p>} */}
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-8 group">
                            <input value={values.tel} maxLength={11} name='tel' onKeyUp={(e) => handleMobileChange(e)} onChange={handleChange} type="tel" id="floating_phone" className={`${isMobileValid ? `border-green` : `focus:border-red-500`} block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-600 appearance-none focus:outline-none focus:ring-0 peer`} placeholder=" " required />
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
                    {status && renderAlert()}

                    <button type="submit" className="text-green text-sm lg:text-md px-4 py-2 mt-[40px] rounded-3xl transition-colors text-white hover:text-green bg-green hover:bg-white font-medium w-full text-center border-2 border-green">ارسال درخواست</button>
                </form>
            </div>
        </>
    );
}

const renderAlert = () => (
    <div className="px-4 py-3 leading-normal text-green bg-gray-200 rounded mb-5 text-center">
        <p>پیام شما با موفقیت ارسال شد.</p>
    </div>
)

export default Form;
