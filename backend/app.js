const express = require('express');
const helmet = require('helmet');
const mongoose = require('mongoose');

const stuffRoutes = require('./routes/stuff');
const motifRoutes = require('./routes/motif');
const praticienRoutes = require('./routes/praticien');
const visiteRoutes = require('./routes/visite');
const visiteurRoutes = require('./routes/visiteur');
const userRoutes = require('./routes/user');
const auth = require('./middlewares/auth');

const app = express();

mongoose.connect('mongodb+srv://endloww:6yPcHXe2Yuwp92Bt@cluster0.zipwb5w.mongodb.net/?retryWrites=true&w=majority')
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(helmet());
app.set('trust proxy', 1);
app.use('/api/stuff', auth, stuffRoutes);
app.use('/api/motif', auth, motifRoutes);
app.use('/api/praticien', auth, praticienRoutes);
app.use('/api/visite', auth, visiteRoutes);
app.use('/api/visiteur', auth, visiteurRoutes);
app.use('/api/auth', userRoutes);

module.exports = app;