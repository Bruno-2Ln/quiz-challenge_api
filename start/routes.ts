/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
import HealthCheck from '@ioc:Adonis/Core/HealthCheck'
import Env from '@ioc:Adonis/Core/Env'

Route.group(() => {
  Route.get('/thematics', 'ThematicsController.index')
  Route.get('/categories', 'CategoriesController.index')
  Route.get('/questions', 'QuestionsController.index')
  Route.patch('/questions/:id', 'QuestionsController.archive')
})
  .prefix('/admin')
  .middleware('auth')

Route.post('/register', 'AuthController.register')
Route.post('/login', 'AuthController.login')
Route.get('/logout', 'AuthController.logout').middleware('auth')
Route.get('/archive', 'AuthController.archive').middleware('auth')

Route.get('health', async ({ response }) => {
  const report = await HealthCheck.getReport()
  return report.healthy ? response.ok(report) : response.badRequest(report)
})

Route.get('/', async ({ response }) => {
  const appInfo = {
    name: Env.get('APP_NAME', 'quiz-challenge'),
    version: Env.get('APP_VERSION', '1.0.0'),
    environment: Env.get('NODE_ENV', 'development'),
    author: Env.get('APP_AUTHOR', 'Happy Monkey'),
    contact: Env.get('APP_CONTACT', 'contact@happy-monkey.fr'),
  }

  return response.json({
    appInfo,
  })
})
