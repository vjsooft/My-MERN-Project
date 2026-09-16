const userRouter = require ('./userRoute');
const profileRouter = require('./profileRoute')
const mainRoutes = (app)=>{
    app.use('/api', userRouter);
    app.use('/api', profileRouter);
}

module.exports = mainRoutes