require('dotenv').config();
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const addAdmin = async (req, res) => {
    try {
        // Find out if 10 is enough salt
        bcrypt.hash(req.body.password, 10)
            .then(hash => {
                prisma.admin.create({
                    data: {
                        fullName: req.body.fullName,
                        email: req.body.email,
                        password: hash,
                        active: req.body.active,
                    }
                }).then(() => {
                    res.json({ message: 'Admin created successfully.' })
                })
            })
    }
    catch (err) {
        console.log(err)
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const userEmail = await prisma.admin.findUnique({  where:
        {
            email: email,
        },
     })
        console.log(userEmail.password)
        if (userEmail && (await bcrypt.compare(password, userEmail.password))) {
            const token = jwt.sign({ email: userEmail.email, userId: userEmail.id },
                'This_should_actually_be_an_environment_variable',
                { expiresIn: '1h' });
            res.status(200).json({ token: token });
        }
    }
    catch (err) {
        console.log(err);
    }
}

module.exports = { addAdmin, login }