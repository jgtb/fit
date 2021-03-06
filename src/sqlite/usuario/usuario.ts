import { Injectable } from '@angular/core'

import { SQLite, SQLiteObject } from '@ionic-native/sqlite'

import { Util } from '../../util'

@Injectable()
export class UsuarioSQLite {

  createTable: string = 'CREATE TABLE IF NOT EXISTS usuario(id_aluno VARCHAR(225), id_professor VARCHAR(225), id_tipo_usuario VARCHAR(225), data_limite VARCHAR(225), tolerancia VARCHAR(225), id_usuario VARCHAR(225), foto VARCHAR(225))'

  constructor(public sqlite: SQLite, public util: Util) {}

  startDatabase() {
    return this.sqlite.create({ name: 'data.db', location: 'default' })
  }

  insert(res) {
    const id_aluno = res[0]
    const id_professor = res[1]
    const id_tipo_usuario = res[2]
    const data_limite = res[3]
    const tolerancia = res[4]
    const id_usuario = res[5]
    const foto = res[6]

    const values = [ id_aluno, id_professor, id_tipo_usuario, data_limite, tolerancia, id_usuario, foto ]

    this.startDatabase().then((db: SQLiteObject) => { db.executeSql('INSERT INTO usuario (id_aluno, id_professor, id_tipo_usuario, data_limite, tolerancia, id_usuario, foto) VALUES (?, ?, ?, ?, ?, ?, ?)', values) }).then(() => console.log('Inserted Usuario'))
  }

}
