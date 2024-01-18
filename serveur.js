



const express = require('express');
const mongoose = require('mongoose');
const appointmentsRouter = require('./routes/appointmentsRoutes'); // Importation des routes des rendez-vous

const app = express();
const port = 3000;
app.use(express.json()); // Pour parser les requêtes JSON

const mongoURI = 'mongodb+srv://pierredillard:SEd100sm78@cluster0.vc3bcmm.mongodb.net/haircut?retryWrites=true&w=majority';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie'))
  .catch(err => console.error('Erreur de connexion à MongoDB', err));

app.use('/appointments', appointmentsRouter); // Utilisation des routes des rendez-vous

app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});
