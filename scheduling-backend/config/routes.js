module.exports = app => {
    app.get('/schedullings', app.api.schedule.getSchedullingsAll)
    app.get('/schedullings/:id', app.api.schedule.getSchedullings)
    app.post('/schedullings', app.api.schedule.save)
    app.delete('/schedullings/:id', app.api.schedule.remove)
}