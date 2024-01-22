const DetailModal = ({ closeModal }) => {
    return (
        <>
            <div className={`transition duration-500 ease-in-out fixed top-0 left-0 z-40 w-full h-full bg-black`}></div>
            <span className="w-[15px] fixed top-0 right-0 z-50 p-5 sm:p-10 lg:p-10 text-4xl text-white cursor-pointer hover:text-red">
                <span className="rotate-45 flex hover:text-red" onClick={closeModal}>+</span>
            </span>
            <section className={`rounded-md overflow-hidden transition duration-500 ease-in-out fixed sm:top-[50%] top-[10%] sm:left-[50%] lg:p-10 sm:ml-[-40vw] sm:mt-[-45vh] w-[90%] sm:w-[80vw] sm:h-[90vh] bg-white`}>
                heloooo
            </section>
        </>
    )
}
export default DetailModal