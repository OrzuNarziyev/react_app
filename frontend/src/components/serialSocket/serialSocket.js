import { useEffect, useState } from "react";

const SerialSocket = (props) => {
    const URL_WEB_SOCKET = `ws://127.0.0.1:8000/ws/chat/serial/`;
    const [ws, setWs] = useState(null);
    const [ser, setSer] = useState(0);

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
                const serial = JSON.parse(event.data);
                // setSer(serial)
                try {
                    if (Number.isInteger(serial.message)) {
                        const digit = serial.message / 1000
                        setSer(digit)
                    }
                } catch {
                    console.log('error')
                }


            }
            ws.onclose = () => {
                console.log("Closed...");
            }
        }

    }, [ws, ser])

    if (ser !== 0) {
        return (
            <div className="card p-3 w-80">
                <h3>Vazn</h3>
                <div className="flex p-2 flex-row  justify-evenly  gap-5 items-start lg:transform hover:scale-103 transition-transform duration-200">
                    <span className="text-primary px-5 border-r-2 text-5xl las la-weight-hanging"></span>
                    <div className="text-primary mt-5 text-3xl leading-3">{ser} т</div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="card p-3 w-80">
                <h3>Vazn</h3>
                <div className="flex p-2 flex-row  justify-evenly  gap-5 items-start lg:transform hover:scale-103 transition-transform duration-200">
                    <span className="text-primary px-5 border-r-2 text-5xl las la-weight-hanging"></span>
                    <div className="text-primary mt-5 text-3xl leading-3">0</div>
                </div>
            </div>
        )
    }

}

export default SerialSocket;