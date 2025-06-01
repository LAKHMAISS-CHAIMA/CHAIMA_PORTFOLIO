import express from 'express'
import { sendMessage } from '../controllers/contactController.js'
import { sendEmail } from '../services/emailService'

const router = express.Router()

router.post('/', sendMessage)

router.post('/send', async (req, res) => {
    try {
        const { name, email, message } = req.body;
        
        // Validation basique
        if (!name || !email || !message) {
            return res.status(400).json({ 
                success: false, 
                message: 'Veuillez remplir tous les champs' 
            });
        }

        // Envoi de l'email
        const result = await sendEmail(name, email, message);
        
        res.json({ 
            success: true, 
            message: 'Email envoyé avec succès',
            messageId: result.messageId 
        });
    } catch (error) {
        console.error('Erreur route contact:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Erreur lors de l\'envoi de l\'email' 
        });
    }
});

export default router
