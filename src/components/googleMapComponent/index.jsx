// import { useEffect, useRef } from "react"
import { Map } from "@neshan-maps-platform/ol"
import NeshanMap, { NeshanMapRef } from "@neshan-maps-platform/react-openlayers"


function GoogleMapComponent() {
    return (
        <>
            <NeshanMap
                className="w-full h-full"
                mapKey="web.753c2f425efd4402a9520fc55e028d89"
                center={{ latitude: 35.574754, longitude: 51.110037 }}
                zoom={15}
            ></NeshanMap>
        </>
    )
}


export default GoogleMapComponent