import Connect from "./websocket"


const ws = new Connect()

ws.onopen = () => {
  console.log('OPEN')
  ws.send({ data: "hi" });
};

ws.onmessage = ({ data }) => {
    console.log(data)
};

ws.onclose = () => {
  console.log('CLOSE')
  
  setTimeout(() => {
    console.log('TRY RECONNECT')
    ws.open()
  }, 5000)
};

export default ws