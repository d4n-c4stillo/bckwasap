const qrcode = require('qrcode-terminal');
const { Client, LocalAuth } = require('whatsapp-web.js');

const whatsapp = new Client({
    /*puppeteer: {
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
    },*/
    puppeteer: { headless: true, args: [ '--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--disable-accelerated-2d-canvas', '--no-first-run', '--no-zygote', '--single-process', ], },
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