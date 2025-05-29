import Contact from '../models/Contact.js'
import sendEmail from '../utils/sendEmail.js'
import validateContact from '../utils/validation.js'

export const sendMessage = async (req, res) => {
  const error = validateContact(req.body)
  if (error) return res.status(400).json({ message: error })

  try {
    const contact = new Contact(req.body)
    await contact.save()
    await sendEmail(contact.email)
    res.status(200).json({ message: 'Message envoyé avec succès' })
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur' })
  }
}
