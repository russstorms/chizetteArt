const bcrypt = require('bcryptjs')
const saltRounds = 12
const myPlaintextPassword = process.env.PASS
const someOtherPlaintextPassword = 'not_bacon'

bcrypt.genSalt(saltRounds, (err, salt) => {
    bcrypt.hash(myPlaintextPassword, salt, (err, hash) => {
        console.log(`HASH`, hash)
        //STORE HASH IN PASS DB
    })
})