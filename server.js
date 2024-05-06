const app = require('./index');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 5000;
const url = process.env.mongoURL || 'mongodb://127.0.0.1:27017/ThriftStore';

mongoose
    .connect(url)
    .then(() => {
        console.log('MongoDB connected');
        global.server = app.listen(PORT, () => {
            console.log(`Server running on port: http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.log('Error connecting to MongoDB:', error);
    });

process.on('SIGINT', async () => {
    await mongoose.connection.close();
    if (global.server) global.server.close();
    process.exit(0);
});
