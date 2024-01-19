import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'questions'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
        .integer('category_id')
        .unsigned()
        .references('categories.id')
        .onDelete('SET NULL')
        .nullable()
      table.string('label').notNullable().unique()
      table.string('answer').notNullable()
      table.string('choice1').notNullable()
      table.string('choice2').notNullable()
      table.string('choice3').notNullable()
      table.integer('correct').notNullable()
      table.integer('count').notNullable()

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table
        .timestamp('created_at', { precision: 6 })
        .notNullable()
        .defaultTo(this.raw('CURRENT_TIMESTAMP'))
      table
        .timestamp('updated_at', { precision: 6 })
        .notNullable()
        .defaultTo(this.raw('CURRENT_TIMESTAMP'))
      table.timestamp('deleted_at', { precision: 6 })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
