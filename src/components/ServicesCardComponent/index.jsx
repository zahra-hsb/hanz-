import Image from "next/image"

const ServicesCardComponent = ({ servicesData }) => {
    return (
        <>
            {servicesData.map((service, index) => (
                <div key={index} className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96 hover:bg-gray-100 mb-10">
                    <div
                        className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                        <Image
                            src={service.image}
                            alt="card-image" />
                    </div>
                    <div className="p-6 opacity-80">
                        <h5 className="block mb-2 text-xl font-semibold leading-snug tracking-normal text-blue-gray-900">
                            {service.title}
                        </h5>
                        <p className="block text-md font-light leading-loose text-inherit text-justify">{service.description}</p>
                    </div>
                </div>
            ))}
        </>
    )
}

export default ServicesCardComponent