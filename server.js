import http from 'http';
const PORT = 7000;

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.write('<h3>My Name is Byiringiro Urban Bobola Pac</h3>')
  res.end()
});
server.listen(PORT, () => {
  console.log(`My server is running from ${PORT}`)
});