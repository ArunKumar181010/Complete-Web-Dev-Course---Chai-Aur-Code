const http = require("http");       //imported http module so node js can create http server
const fs = require("fs");          // fs = file system , allow js to work with file
const path = require("path");      // built in, help in managing file path

const port = 3000;                // setting port no

const server = http.createServer((req, res) => {
                                // req = request || res = response
  const filePath = path.join(
    __dirname,               // represents the directory where your current JavaScript file is located.
    req.url === "/" ? "index.html" : req.url, // ternary operator
  );                          //path.join(__dirname,req.url) = combine file and path
  console.log(filePath);

  const extName = String(path.extname(filePath)).toLowerCase();   // get file extention and make it lower case

  const mimeTypes = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "text/javascript",
    ".png": "text/png",
  };                                        //A MIME type tells the browser what type of file it is receiving.

  const contentType = mimeTypes[extName] || "application/octet-stream";

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === "ENOENT") {      //ENOENT means  The requested file does not exist.
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("404: File Not Found BRooooo");
      }
    } else {
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "utf-8");
    }
  });
});

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
