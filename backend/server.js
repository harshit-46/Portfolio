const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); 

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/portfolioDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
mongoose.connection.once('open', () => {
    console.log('✅ Connected to MongoDB');
});

// Message model
const Message = require('./models/messages');

// Contact route
app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;
    try {
        const newMessage = new Message({ name, email, message });
        await newMessage.save();
        res.status(200).json({ message: 'Message saved successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});
app.get('/', (req, res) => {
    res.send('🚀 Backend is running!');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
