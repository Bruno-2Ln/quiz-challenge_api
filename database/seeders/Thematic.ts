import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Thematic from 'App/Models/Thematic'

export default class extends BaseSeeder {
  public static environment = ['development', 'testing']

  public async run() {
    // Write your database queries inside the run method
    await Thematic.updateOrCreateMany('label', [
      {
        label: 'Culture générale',
      },
      {
        label: 'Divertissement',
      },
      {
        label: 'Sciences naturelles',
      },
      {
        label: 'Sciences et technologies',
      },
    ])
  }
}
