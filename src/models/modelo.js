import mongoose from 'mongoose'

const depositoSchema = new mongoose.Schema({

    disco: {
        type: String
    },
    ram: {
        type: String
    },
    placa: {
        type: String
    },
    videotarjeta: {
        type: String
    },
    procesador: {
        type: String
    },
    modelo: {
        type: String
    }, 
    especificaciones: {
        type: String
    }
},
{ 
    timestamps: true,
    versionKey: false,
})

const modelo = mongoose.model('componentes', depositoSchema)

export default modelo