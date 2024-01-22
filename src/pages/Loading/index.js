import { BeatLoader, ClimbingBoxLoader, SyncLoader } from 'react-spinners';

function Loading() {
    return (
        <div className='w-full h-[100vh] bg-gray-900 flex items-center justify-center z-50 bg-opacity-10'>
            <BeatLoader color='#00ae8e' />
            {/* <ClimbingBoxLoader />
            <SyncLoader /> */}
        </div>
    );
}

export default Loading;
