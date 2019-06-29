
const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.status(200).json({ message: "testing api is ready" });
});

module.exports = server;