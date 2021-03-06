const Sequelize = require('sequelize')
const { sequelize } = require('./index.js')
const uuid = require('uuid/v4')

const { STRING, INTEGER, DATE, UUID, Op, BOOLEAN } = Sequelize

const NoteModel = sequelize.define(
  'notes',
  {
    id: {
      type: UUID,
      primaryKey: true
    },
    userId: {
      type: UUID,
      allowNull: false
    },
    notebookId: {
      type: UUID,
      allowNull: false
    },
    title: {
      type: STRING(20)
    },
    content: {
      type: STRING(2000)
    },
    tag: STRING,
    clock: DATE,
    isTrashed: BOOLEAN,
    create_date: {
      type:DATE,
      get(){
        return new Date(this.getDataValue('create_date')).getTime()
      }
    },
    update_date: {
      type:DATE,
      get(){
        return new Date(this.getDataValue('update_date')).getTime()
      }
    }
  },
  {
    timestamps: false,
    indexes: [
      {
        fields: ['id'],
        unique: true
      }
    ]
  }
)

NoteModel.sync()

NoteModel.createNote = async (userId, notebookId, title, content) => {
  return await NoteModel.create({
    id: uuid(),
    userId,
    notebookId,
    title,
    content,
    isTrashed: false,
    create_date: Date.now(),
    update_date: Date.now()
  })
}

NoteModel.deleteNote = async id => {
  await NoteModel.destroy({
    where: {
      id
    }
  })
}

NoteModel.trashOrRecoverNote = async (id, isTrashed) => {
  return await NoteModel.update(
    {isTrashed},
    {
      where: {
        id
      }
    }
  )
}

NoteModel.findNoteById = async id => {
  return await NoteModel.findOne({
    where: {
      id
    }
  })
}

NoteModel.findAllByBookId = async notebookId => {
  return await NoteModel.findAll({
    where: {
      notebookId
    },
    order:[
      ['update_date','DESC']
    ]
  })
}

NoteModel.findAllNotes = async (userId) => {
  return await NoteModel.findAll({
    where: {
      userId
    },
    order:[
      ['update_date','DESC']
    ]
  })
}

NoteModel.updateNote = async (noteId, data) => {
  return await NoteModel.update(
    { update_date: Date.now(),
      ...data
    }, {
    where: {
      id: noteId
    }
  })
}

NoteModel.search = async (keyword) => {
  return await NoteModel.findAll({
    where: {
      content:  {
        [Op.regexp]:keyword
      }
    }
  })
}

module.exports = NoteModel
