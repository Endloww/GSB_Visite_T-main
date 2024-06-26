const mongoose = require('mongoose');

const visiteurSchema = mongoose.Schema({
  nom: { type: String, required: true },
  prenom: { type: String, required: true },
  tel: { type: String, required: true },
  email: { type: String, required: true },
  date_embauche: { type: Date, required: true },
  visites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Visite' }],
  portefeuille: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Praticien' }],
  password: { type: String, required: true}
});


module.exports = mongoose.model('Visiteur', visiteurSchema);
