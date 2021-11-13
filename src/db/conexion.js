import mongoose from 'mongoose'

    const connect = async () => {
        try {
            const url = await mongoose.connect(process.env.DBURI, {
                useNewUrlParser: true,
                useUnifiedTopology:true
            })
            console.log('Base de datos conectada')
            return url 
            
        } catch (error) {
            console.log("No se pudo conectar la base de datos " + error)
        }
    } 

export default connect