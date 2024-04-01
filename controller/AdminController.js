require('dotenv').config();
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

// TODO: Add admin CRUD.
// TODO: Probably need to do a bit of research on jwt and whether doing jwt management is better on front end or back-end and how to do it securely.

module.exports = {};