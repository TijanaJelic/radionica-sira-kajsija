const express = require('express')
const sentMail = require('./js/mail')

const app = express()
const router = express.Router()
const port = process.env.PORT || 3000

app.use(express.urlencoded({
  extended: true
}))
app.use(express.static(__dirname))

router.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')))
router.get('/o-nama.html', (req, res) => res.sendFile(path.join(__dirname, 'o-nama.html')))
router.get('/kontakt.html', (req, res) => res.sendFile(path.join(__dirname, 'kontakt.html')))
router.get('*', (req, res) => res.send('Page Not found 404'));
router.post('/kontakt.html', (req, res) => {
  const message = req.body
  console.log(message)
  sentMail(message)
  res.redirect('/kontakt.html')
})
app.use('/', router);


app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})