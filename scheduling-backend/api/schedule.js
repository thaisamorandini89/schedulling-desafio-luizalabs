module.exports = app => {
    const getSchedullingsAll = (req, res) => {
        app.db('schedullings')
            .then(schedullings => res.json(schedullings))
            .catch(err => res.status(500).json(err))
    }

    const getSchedullings = (req, res) => {
        app.db('schedullings')
            .where({ id: req.params.id })
            .then(schedullings => res.json(schedullings))
            .catch(err => res.status(500).json(err))
    }

    const save = (req, res) => {
        if(!req.body.destination.trim()) {
            return res.status(400).send('Destino é um campo obrigatório')
        }
    
        if(!req.body.messenger.trim()) {
            return res.status(400).send('Menssagem é um campo obrigatório')
        }
    
        app.db('schedullings')
            .insert(req.body)
            .then(_ => res.status(204).send())
            .catch(err => res.status(500).json(err))
    }

    const remove = (req, res) => {
        app.db('schedullings')
            .where({ id: req.params.id})
            .del()
            .then(rowsDeleted => {
                if(rowsDeleted > 0){
                    res.status(204).send()
                }else {
                    const msg = `Não foi encontrada tarefa com id ${req.params.id}.`
                    res.status(500).send(msg)
                }
            })
            .catch(err => res.status(400).json(err))
    }

    return { getSchedullingsAll, getSchedullings, save, remove }
}

