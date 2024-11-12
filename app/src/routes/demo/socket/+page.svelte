<script>
  import { onMount } from "svelte";
  import ioClient from 'socket.io-client';
    const ENDPOINT = 'http://localhost:4242';
    let socket = null;
    let payment = $state({});

    const clearPayment = () => {
        payment = {};
    };

    const createPayment = async () => {
        if (!socket) {
            console.error("Socket not connected");
            return;
        }
        payment = await  socket.emitWithAck("paymentStart", { id: payment.id });
    };

    onMount(() => {
        socket = ioClient(ENDPOINT);
        socket.on("connect", () => {
            console.log("Connected to server");
        });
        socket.on("paymentStatus", (paymnet) => {
            payment = paymnet;
            console.log("Payment Updated");
        });
        return () => {
            socket.disconnect();
        };
    });
</script>


<main>
    <h1>Socket Page</h1>
    <input type="text" bind:value={payment.id}>
    <p>Click the button to create a payment</p>
    <button onclick={createPayment}>Create Payment</button>
    <button onclick={clearPayment}>Clear Payment</button>


    <p>{JSON.stringify(payment)}</p>
</main>

