import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin',
    email: 'admin@menofcutlture.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Pranav Patel',
    email: 'pranav@menofculture.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Dhairya Shah',
    email: 'dhairya@menofculture.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
