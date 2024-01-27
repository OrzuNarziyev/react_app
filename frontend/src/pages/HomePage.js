import Footer from "partials/Footer";
import { useEffect, useState } from "react";
import { authService } from "services/authService";
import VideoFrame from "components/websocket/videoSocket";
import SerialSocket from "components/serialSocket/serialSocket";

import Skeleton from "components/websocket/skeleton";
import Avatar from "components/Avatar";

// const URL_WEB_SOCKET = "ws://127.0.0.1:8000/ws/chat/test/";


// import 
import Breadcrumb, { BreadcrumbItem } from "components/Breadcrumb";
import { string } from "prop-types";

const HomePage = () => {
    // const [ws, setWs] = useState(null);

    // const [ws_2, setWs2] = useState(null);
    // const [images, setImages] = useState({
    //     // cap_1: null,
    //     // cap_2: null,
    //     // cap_3: null,
    //     // cap_4: null
    // });
    // const [images, setImages] = useState({ images: [] });
    // const [images2, setImages2] = useState({ images: [] });
    // const [images, setImages] = useState([])
    // const [frame, setFrame] = useState()
    // const [loading, setLoading] = useState(false)
    // const URL_WEB_SOCKET = "ws://127.0.0.1:8000/ws/chat/camera1/";
    // const URL_WEB_SOCKET_2 = "ws://127.0.0.1:8000/ws/chat/camera2/";


    // useEffect(() => {
    //     const socket = new WebSocket(URL_WEB_SOCKET)
    //     const socket_2 = new WebSocket(URL_WEB_SOCKET_2)
    //     socket.onopen = () => {
    //         setWs(socket);
    //         socket.send(JSON.stringify({ 'message': "Ulanish tashkil etildi" }))
    //     }
    //     socket_2.onopen = () => {
    //         setWs2(socket_2);
    //         socket.send(JSON.stringify({ 'message': "Ulanish tashkil etildi 2" }))
    //     }


    //     // socket.onclose = () => console.log('ws closed');
    //     // return () => {
    //     //     socket.close();
    //     // };


    // }, [])

    // useEffect(() => {
    //     if (ws) {
    //         ws.onmessage = (event) => {
    //             const message = JSON.parse(event.data);

    //             if (message.length > 0) {
    //                 // const data = message.map((item, i) => {
    //                 //     return {
    //                 //         i: item
    //                 //     }
    //                 // })

    //                 setImages({
    //                     images: message,

    //                 })
    //             }
    //         }

    //     }
    //     if (ws_2) {

    //         ws_2.onmessage = (event) => {
    //             const message = JSON.parse(event.data);
    //             console.log(message)

    //             if (message.length > 0) {
    //                 console.log(message, 'camera 2')
    //                 // const data = message.map((item, i) => {
    //                 //     return {
    //                 //         i: item
    //                 //     }
    //                 // })

    //                 setImages2({
    //                     images2: message,

    //                 })
    //             }
    //             // if (message.length > 0) {
    //             //     setImages({
    //             //         ...images,
    //             //         cap_1: message[0],
    //             //         // cap_2: message[1],
    //             //         // cap_3: message[2],
    //             //         // cap_4: message[3],
    //             //     })
    //             //     setLoading(true)
    //             // } else {
    //             //     setLoading(false)
    //             // }
    //         }

    //     }

    // }, [ws, images])

    // function renderItems(arr) {
    //     let element = []
    //     for (let index = 0; index < 1; index++) {
    //         if (arr[index]) {
    //             element.push(
    //                 <VideoFrame cap_id={index + 1} src={arr[index]} key={index} />
    //             )
    //         } else {
    //             element.push(
    //                 <VideoFrame cap_id={index + 1} src={null} key={index} />
    //             )
    //         }

    //     }
    //     return (
    //         <>
    //         </>
    //         // <div className="col-span-2 grid 2xl:grid-cols-2 xl:grid-cols-1 gap-3">
    //         //     {element}
    //         // </div>



    //     )

    // }


    const content = []
    for (let index = 1; index <= 4; index++) {
        content.push(
            <VideoFrame id={index} key={index} />
        )

    }

    return (

        <main className="workspace">

            <Breadcrumb title="Bosh sahifa">
                <BreadcrumbItem link="#no-link">Sahifalar</BreadcrumbItem>
                <BreadcrumbItem>Bosh sahifa</BreadcrumbItem>
            </Breadcrumb>

            <div className="flex flex-row flex-wrap justify-evenly gap-5" >

                <SerialSocket />

                {/* <div className="card p-3 w-80">
                    <h3>Vazn</h3>
                    <div className="flex p-2 flex-row  justify-evenly  gap-5 items-start lg:transform hover:scale-103 transition-transform duration-200">
                        <span className="text-primary px-5 border-r-2 text-5xl las la-weight-hanging"></span>
                        <div className="text-primary mt-5 text-3xl leading-3">18 000 kg</div>
                    </div>
                </div> */}
                <div className="card p-3 w-80">
                    <h3>Vagon nomer</h3>
                    <div className="flex p-2 flex-row gap-5 justify-evenly items-start lg:transform hover:scale-103 transition-transform duration-200">
                        <span className="text-success px-5 border-r-2 text-5xl la la-expand"></span>
                        <div className="text-success mt-5 text-3xl leading-3">6746759</div>
                    </div>
                </div>
                <div className="card p-3 w-80">
                    <h3>Poezd Tezligi</h3>
                    <div className="flex p-2 flex-row justify-evenly gap-5 items-start lg:transform hover:scale-103 transition-transform duration-200">
                        <span className="text-danger px-5 pl-4 border-r-2 text-5xl las la-tachometer-alt"></span>
                        <div className="text-danger mt-5 text-3xl leading-3">5 km/s</div>
                    </div>
                </div>
                <div className="card p-3 w-80">
                    <h3>Yo'nalish</h3>
                    <div className="flex p-2 flex-row justify-evenly gap-5 items-start lg:transform hover:scale-103 transition-transform duration-200">
                        <span className="text-primary px-5 border-r-2 text-5xl la la-exchange"></span>
                        <div className="animate-ping text-success mt-5 text-5xl leading-3 las la-angle-double-right"></div>

                    </div>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-5 my-5">
                <div className="col-span-2 grid 2xl:grid-cols-2 xl:grid-cols-1 gap-3">

                    {content}

                </div>

                {/* {content} */}
                {/* <div className="col-span-2 grid 2xl:grid-cols-2 xl:grid-cols-1 gap-3">
                    <VideoFrame cap_id={1} src={images.cap_1} />
                    <VideoFrame cap_id={2} src={images.cap_1} />
                    <VideoFrame cap_id={3} src={images.cap_1} />
                    <VideoFrame cap_id={4} src={images.cap_1} />
                </div> */}
                <div >
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">

                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="p-4">
                                        <div className="flex items-center">
                                            №
                                        </div>
                                    </th>

                                    <th scope="col" className="px-3 py-1">
                                        Vagon
                                    </th>
                                    <th scope="col" className="px-3 py-1">
                                        Nomer
                                    </th>
                                    <th scope="col" className="px-3 py-1">
                                        Vazn (Tonn)
                                    </th>
                                    <th scope="col" className="px-3 py-1">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="w-4 p-4">
                                        1
                                    </td>
                                    <th scope="row" className="flex items-center px-3 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">

                                        <img className="w-40 h-14 rounded-lg" src={require("../assets/images/potato.jpg")} alt="Jese image" />
                                    </th>
                                    <td className="px-3 py-2">
                                        67589376
                                    </td>
                                    <td className="px-3 py-2">
                                        24
                                    </td>
                                    <td className="ltr:text-right rtl:text-left whitespace-nowrap px-4">
                                        <div className="inline-flex ltr:ml-auto rtl:mr-auto">
                                            <a
                                                href="#no-link"
                                                className="btn btn-icon btn_outlined btn_secondary"
                                            >
                                                <span className="la la-pen-fancy"></span>
                                            </a>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
            <Footer />
        </main>
    );
};

export default HomePage;