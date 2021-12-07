import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin',
    email: 'admin@menofcutlture.com',
    password: bcrypt.hashSync('Admin@123', 10),
    isAdmin: true,
  },
  {
    name: 'Pranav Patel',
    email: 'pranav@menofculture.com',
    password: bcrypt.hashSync('Pranav@123', 10),
  },
  {
    name: 'Dhairya Shah',
    email: 'dhairya@menofculture.com',
    password: bcrypt.hashSync('Dhairya@123', 10),
  },
]

export default users
