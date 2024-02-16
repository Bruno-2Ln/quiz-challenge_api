// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CreateUserValidator from 'App/Validators/UserValidator'
import User from 'App/Models/User'
import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'

export default class AuthController {
  public async login({ auth, request, response }: HttpContextContract) {
    const { identifiant, password } = request.all()

    try {
      const user = await User.query()
        .where((query) => {
          query.where('email', identifiant).orWhere('username', identifiant)
        })
        .andWhere('deleted_at', 'null') // Ajoutez la condition pour delete_at
        .firstOrFail()

      if (!(await Hash.verify(user.password, password))) {
        return response.badRequest('Invalid credentials')
      }
      // await auth.login(user, true)
      const info = await auth.use('api').generate(user, {
        expiresIn: '7 days',
      })

      return {
        user: auth.user,
        token: info.token,
      }
    } catch {
      return response.badRequest('Invalid credentials')
    }
  }

  public async register({ request }: HttpContextContract) {
    const payload = await request.validate(CreateUserValidator)
    return User.create(payload)
  }

  public async logout({ auth }: HttpContextContract) {
    return await auth.logout()
  }

  public async archive({ auth }: HttpContextContract) {
    const user = auth.user!
    user.deletedAt = DateTime.now()
    await auth.logout()
    return user.save()
  }
}
