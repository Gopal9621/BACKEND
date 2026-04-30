// const events = require("events");
// const EventEmitter = new  events.EventEmitter();
// const eventHandler((extra_cheese,olive) =>{
//     console.log("Start preparing Pizza");
// })
// EventEmiter.on("order_pizza",()=>{
//     console.log("order Received");
// })
// EventEmitter.emit(order_pizza);



const events = require("events");
const EventEmitter = new events.EventEmitter();
const eventHandler = (extra_cheese, olive) => {
    console.log("Start preparing Pizza");
    console.log("Extra cheese:", extra_cheese);
    console.log("Olive:", olive);
};
EventEmitter.on("order_pizza", eventHandler);
EventEmitter.emit("order_pizza", true, true);
