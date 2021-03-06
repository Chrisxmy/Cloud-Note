const Sequelize = require('sequelize');
const {sequelize} = require('./index.js')
const uuid = require('uuid/v4')
const {pbkdf2, randomBytes} = require('crypto')
const {promisify} = require('util')
const Errors = require('../error.js')

const pbkdf2P = promisify(pbkdf2)
const randomBytesP = promisify(randomBytes)


async function genCryptedPassword(RawPassword, salt) {
    if(!salt) salt = await randomBytesP(32)
    const cryptedPassword = await pbkdf2P(RawPassword, salt.toString(), 10000, 128, 'sha512')

    return {
        salt: salt.toString(),
        cryptedPassword: cryptedPassword.toString()
    }
}

const {STRING, INTEGER, DATE, UUID, Op} = Sequelize

const UserModel = sequelize.define('user', {
    id: {
        type: UUID,
        primaryKey: true
    },
    username: {
        type: STRING(30),
        allowNull: false,
    },
    password: {
        type: STRING(256),
        allowNull: false,
    },
    salt: {
        type: STRING(128)
    },
    email:{
        type: STRING,
        unique: true
    }
}, {
    indexes: [
        {
            fields: ['username','email'],
            unique: true
        }
    ]
})

UserModel.sync()


UserModel.register = async (username ,password,email)=> {
  const user =  await UserModel.findOne({
        where: {
            username
        }
    })
    if(user) throw new Errors.ValidationError('用户名存在')

    const {cryptedPassword, salt} = await genCryptedPassword(password)

  console.log(username, cryptedPassword, email);

  const {id} = await UserModel.create({
        id: uuid(),
        username,
        email,
        password:cryptedPassword,
        salt
    })
    return {username,email,id}
}


UserModel.login = async (username ,password)=> {
    const user =  await UserModel.findOne({
        attributes:['password','id','salt','username','email'],
        where: {
            username
        }
    })
    if(!user) throw new Errors.ValidationError('用户不存在')

    const {cryptedPassword} = await genCryptedPassword(password, user.salt)

    if(user.password !== cryptedPassword) throw new Errors.ValidationError('密码错误')

    const {email,id} = user

    return {username,email,id}
}

UserModel.user = async (userId)=> {
    return await UserModel.findOne({
        where: {
            id: userId
        }
    })
}

UserModel.retrievePassword = async (email,password) => {
    const {cryptedPassword, salt} = await genCryptedPassword(password)
    return await UserModel.update(
        {
            password: cryptedPassword,
            salt
        }, {
        where: {
           email
        }
      })
}

module.exports = UserModel
