const http = require('http');
const mongodb = require('mongodb');

const hostname = '127.0.0.1'; // localhost
const port = 3000;
const url = 'mongodb://localhost:27017'; // für lokale MongoDB
const mongoClient = new mongodb.MongoClient(url);

async function startServer() {
  // connect to database
  await mongoClient.connect();
  // listen for requests
  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
}

const server = http.createServer( async (request, response) => {
    response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.setHeader('Access-Control-Allow-Origin', '*'); // bei CORS Fehler
  const url = new URL(request.url || '', `http://${request.headers.host}`);
    
  switch (url.pathname) {
    case '/':
        console.log("/ pfad aufgerufen");
      break;
    case '/bmi':
      const bmiCollection = mongoClient.db("bmiData").collection("bmi");
        if (request.method === 'POST') {
            let jsonString = '';
            request.on('data', (data) => {
              jsonString += data;
            });
            request.on('end', () => {
              let element = JSON.parse(jsonString);
              console.log(element);
              bmiCollection.insertOne(element);
              response.end("erfolgreich gespeichert");
            });
          }
          if (request.method === "GET") {
            const result = await bmiCollection.find({}).sort({$natural: -1}).limit(10).toArray();
            response.end(JSON.stringify(result));
        }
        break;
    default:
      response.statusCode = 404;
  }
  
  });

startServer();