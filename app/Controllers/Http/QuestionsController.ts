// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Question from 'App/Models/Question'
import { DateTime } from 'luxon'

export default class QuestionsController {
  public async index() {
    return Question.query().where('deleted_at', 'null')
  }

  public async archive({ params }) {
    const { id }: { id: Number } = params
    const question = await Question.findOrFail(id)
    question.deletedAt = DateTime.now()

    return question.save()
  }
}
