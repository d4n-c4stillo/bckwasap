const { Router } = require('express');

const {whatsapp} = require('../lib/whatsapp');

const router = Router();

router.post('/sendmessage', async(req, res) => {
    const tel = '+59161249901';
    const chatId = tel.substring(1) + "@c.us";
    const number_details = await whatsapp.getNumberId(chatId);

    if (number_details) {
        const mensaje = 'GESTION JURÍDICA - NOTIFICACION';
        await whatsapp.sendMessage(chatId,mensaje)
        res.json({res:true})
    }else{
        res.json({res:false})
    }
})

router.post('/sendmessagev2', async(req, res) => {
   
    const chatId = req.body.telefono + "@c.us";
    const number_details = await whatsapp.getNumberId(chatId);

    if (number_details) {
        const mensaje = req.body.msg;
        await whatsapp.sendMessage(chatId,mensaje)
        res.json({res:true})
    }else{
        res.json({res:false})
    }
})

router.get('/welcome', async(req, res) => {      
        res.json({res:'WELCOME'}) 
})


module.exports = router;