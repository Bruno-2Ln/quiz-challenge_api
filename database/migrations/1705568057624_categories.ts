import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'categories'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('label').notNullable().unique()
      table
        .integer('thematic_id')
        .unsigned()
        .references('thematics.id')
        .onDelete('SET NULL')
        .nullable()
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
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
