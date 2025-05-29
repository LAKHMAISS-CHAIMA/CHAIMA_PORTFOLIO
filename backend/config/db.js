import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log('MongoDB connecté')
  } catch (error) {
    console.log('Erreur connexion DB:', error)
  }
}

export default connectDB
