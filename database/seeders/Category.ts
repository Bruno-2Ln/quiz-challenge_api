import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Category from 'App/Models/Category'
import Thematic from 'App/Models/Thematic'

export default class extends BaseSeeder {
  public static environment = ['development', 'testing']

  private getThematicIdByLabel(thematics, label: string): number | undefined {
    return thematics.find((t) => t.label === label)?.id
  }

  public async run() {

    const thematics = await Thematic.all();


    // Write your database queries inside the run method
    await Category.updateOrCreateMany('label', [
      {
        label: 'Art et littérature',
        thematicId: this.getThematicIdByLabel(thematics, 'Culture générale'),
      },
      {
        label: 'Musique',
        thematicId: this.getThematicIdByLabel(thematics, 'Culture générale'),
      },
      {
        label: 'Sports',
        thematicId: this.getThematicIdByLabel(thematics, 'Culture générale'),
      },
      {
        label: 'Géographie',
        thematicId: this.getThematicIdByLabel(thematics, 'Culture générale'),
      },
      {
        label: 'Histoire',
        thematicId: this.getThematicIdByLabel(thematics, 'Culture générale'),
      },
      {
        label: 'Jeux vidéo',
        thematicId: this.getThematicIdByLabel(thematics, 'Divertissement'),
      },
      {
        label: 'Télévision',
        thematicId: this.getThematicIdByLabel(thematics, 'Divertissement'),
      },
      {
        label: 'Célébrités',
        thematicId: this.getThematicIdByLabel(thematics, 'Divertissement'),
      },
      {
        label: 'Cuisine',
        thematicId: this.getThematicIdByLabel(thematics, 'Divertissement'),
      },
      {
        label: 'Cinéma',
        thematicId: this.getThematicIdByLabel(thematics, 'Divertissement'),
      },
      {
        label: 'Astronomie',
        thematicId: this.getThematicIdByLabel(thematics, 'Sciences naturelles'),
      },
      {
        label: 'Géologie',
        thematicId: this.getThematicIdByLabel(thematics, 'Sciences naturelles'),
      },
      {
        label: 'Écologie',
        thematicId: this.getThematicIdByLabel(thematics, 'Sciences naturelles'),
      },
      {
        label: 'Zoologie',
        thematicId: this.getThematicIdByLabel(thematics, 'Sciences naturelles'),
      },
      {
        label: 'Botanique',
        thematicId: this.getThematicIdByLabel(thematics, 'Sciences naturelles'),
      },
      {
        label: 'Biologie',
        thematicId: this.getThematicIdByLabel(thematics, 'Sciences et technologies'),
      },
      {
        label: 'Chimie',
        thematicId: this.getThematicIdByLabel(thematics, 'Sciences et technologies'),
      },
      {
        label: 'Physique',
        thematicId: this.getThematicIdByLabel(thematics, 'Sciences et technologies'),
      },
      {
        label: 'Informatique',
        thematicId: this.getThematicIdByLabel(thematics, 'Sciences et technologies'),
      },
      {
        label: 'Avancées technologiques',
        thematicId: this.getThematicIdByLabel(thematics, 'Sciences et technologies'),
      },
    ])
  }
}
