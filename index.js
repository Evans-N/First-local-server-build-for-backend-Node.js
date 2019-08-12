const http = require(`http`);

// function handleRequestAndResponse(req, res) {
//     const timeStamp = new Date();
//     console.log(`received a request`);
//     res.end(`<h1>Hello World ${timeStamp}<h1>`);
// };
//Wht is a server?
//A server is a piece of code or a computer that runs a piece of code
// that does something for you. 
//Usually servers store data and often manipulate that data. 
//http.createServer() accepts a function and returns a 'server'
// When the server recieves a request:
//1. It puts together *most of a response. 
//2. It calls your function and passes it the request and response. 
const server = http.createServer((req, res) => {
    const timeStamp = new Date();
    console.log(`butterrum`);
    res.end(`<h1>Hello World ${timeStamp}<h1>`);
});
//What is 3000?
server.listen(3000);
