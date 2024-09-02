import express from 'express'
import path from 'path'
import {fileURLToPath} from 'url'
import cors from 'cors'

const filename=fileURLToPath(import.meta.url)
const dirname=path.dirname(filename)
const port=8070
const host='127.0.0.1'




const app=express()
app.use(express.urlencoded({extended: true}))
app.use(cors())
app.use(express.static(path.join(dirname, 'public')))
app.use('/favicon.ico', express.static(path.join(dirname, 'public', 'images', 'favicon.png')))

/**
 * Route pour servir le fichier HTML principal de l'application
 * @name gate/
 * @param {Object} req -l'objet de requête 
 * @param {Object} res -l'objet de réponse
 * @throws {error} - Renvoie la page index ou un message d'erreur

 */
app.get('/',(req,res)=>{

  res.sendFile('index.html',{root: path.join(dirname)},err=>{
    if (err) throw new Error(err)
  })
})

/**
 * Reçoit un commentaire via une requête POST et renvoie le message reçu.
 * @name post/
 * @param {Object} req -l'objet de requête 
 * @param {Object} res -l'objet de réponse
 * @param {string} req.body.message -le message du commentaire envoyé par le client.
 * @returns {void} Renvoie le message reçu dans la réponse
 */
app.post('/comment',(req, res)=>{

  if (!req.body.message){
  return res.status(400).send('Message field is required');
}
  const comment = String(req.body.message);
  res.send(comment); 
})

/**route vers le port 
 * 
*/
app.listen(port,host,() => {console.info(`Server started @ http://${host}:${port}.`)})