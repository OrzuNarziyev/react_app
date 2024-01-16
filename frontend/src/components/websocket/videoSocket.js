import { useEffect, useState } from "react";

const VideoFrame = (props) => {
    const { id } = props
    const URL_WEB_SOCKET = `ws://127.0.0.1:8000/ws/chat/camera${id}/`;
    const [ws, setWs] = useState(null);
    const [img, setImg] = useState(null);

    useEffect(() => {
        const socket = new WebSocket(URL_WEB_SOCKET)
        socket.onopen = () => {
            setWs(socket);
            socket.send(JSON.stringify({ 'message': "Ulanish tashkil etildi" }))
        }
    }, [])

    useEffect(() => {
        if (ws) {
            ws.onmessage = (event) => {
                const image = JSON.parse(event.data);

                if (image.length > 0) {
                    setImg(image)
                    console.log(image)
                }
            }

        }
    }, [ws, img])

    // const { id } = props
    const image = 'data:image/jpg;base64,' + img
    if (img) {
        return (
            <div className="card p-3">
                <h3>Camera {id}</h3>
                <div className="mt-3">
                    <div className="aspect-w-2 aspect-h-1">

                        <img className="object-fit" src={image} alt="Image not found" />

                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="card p-3">
                <h3>Camera {id}</h3>
                <div className="mt-3">
                    <div className="aspect-w-2 aspect-h-1">
                        <div role="status" className="flex items-center justify-center bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700">
                            <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                                <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                                <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z" />
                            </svg>
                            <span className="sr-only">Loading...</span>
                        </div>



                    </div>
                </div>
            </div>
        )
    }
    // if (!src || !src.lenght) {

    // }


    // return (
    //     <div className="card p-3">
    //         <h3>Camera {cap_id}</h3>
    //         <div className="mt-3">
    //             <div className="aspect-w-2 aspect-h-1">

    //                 <img className="object-cover" src={image} alt="Image not found" />

    //             </div>
    //         </div>
    //     </div>
    // )
}

export default VideoFrame;