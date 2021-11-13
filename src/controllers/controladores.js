import componentes from '../models/modelo.js'

export const componenteAgregar = async (req,res) => {

    try{
        const {
            disco,
            ram,
            placa,
            videotarjeta,
            modelo,
            procesador,
            especificaciones
        } = req.body 
        const add = await componentes.create(req.body) 
        res.status(200).send({ComponenteAñadido: add})

    } catch (error) {
        res.status(500).send('Ocurrio un error ' + error)
    }
}

export const componenteBuscar = async (req,res) => {
    try {
        const buscar = await componentes.find({})
        res.status(200).send({ComponentesBuscados: buscar})

    } catch (error) {
        res.status(500).send('Ocurrio un error ' + error)
        
    }
}

export const componenteBuscarID = async (req,res) => {
    try {
        const id = req.params.id
        const buscarID = await componentes.findById({"_id": id})
        res.status(200).send({ComponenteUbicado: buscarID})
    } catch (error) {
        res.status(500).send('Ocurrio un error ' + error)
    }

}

export const componenteActualizar = async (req,res) => {
    try {
        const id = req.params.id
        const {
            disco,
            ram,
            placa,
            videotarjeta,
            modelo,
            procesador,
            especificaciones
        } = req.body 
        const actualizar = await componentes.updateOne({"_id": id}, req.body)
        res.status(200).send({ComponenteActualizado: actualizar})
    } catch (error) {
        res.status(500).send('Ocurrio un error ' + error)
    }
}

export const componenteEliminar = async (req,res) => {
    try {
        const id = req.params.id
        const eliminar = await componentes.deleteOne({"_id":id})
        res.status(200).send({ComponenteEliminado: eliminar})
    } catch (error) {
        res.status(500).send('Ocurrio un error ' + error)
    }
}
