const qrcode = require('qrcode-terminal');
const { Client, LocalAuth } = require('whatsapp-web.js');

const whatsapp = new Client({
    authStrategy: new LocalAuth(),
});

whatsapp.on('qr', (qr) => {
    console.log('QR RECEIVED', qr);
});

whatsapp.once('ready', () => {
    console.log('Client is ready!');
});


// Start your client
//whatsapp.initialize();

module.exports = {whatsapp};