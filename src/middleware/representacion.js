export const auth = (req,res,next) => {
    try {
        const authheader = req.headers['access-admin']
        if(authheader === "adminAna"){
            next()
        }else{
            res.status(400).send({MensajeAdmin: "No se pudo procesar esta peticion, asegurece de colocar la clave correcta"})
        }
    } catch (error) {
        res.status(500).send({MensajeAdmin: "Ha ocurrido un error " + error})
    }
} 