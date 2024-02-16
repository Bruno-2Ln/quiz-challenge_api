import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('username', 255).notNullable().unique()
      table.string('email', 255).notNullable().unique()
      table.string('password', 180).notNullable()
      table.string('tag', 8)
      table.string('avatar', 50)
      table.integer('points')
      table.boolean('dev')
      table.string('remember_me_token').nullable()

      /**
       * Uses timestampz for PostgreSQL and DATETIME2 for MSSQL
       */
      table
        .timestamp('created_at', { precision: 0 })
        .notNullable()
        .defaultTo(this.raw('CURRENT_TIMESTAMP'))
      table
        .timestamp('updated_at', { precision: 0 })
        .notNullable()
        .defaultTo(this.raw('CURRENT_TIMESTAMP'))
      table.timestamp('deleted_at', { precision: 0 })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
