import mongoose from 'mongoose'
import { connexionString } from '../config'

mongoose.connect(connexionString)

export default mongoose