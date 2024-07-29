import { SignUpController } from './signup'

describe('SignUp Controller', () => { // nome do componente que está testando
  test('Should return 400 if no name is provided', () => { // nome do teste que está sendo executado
    const sut = new SignUpController() // sut = system under test (Padrão utilizado para teste)
    const httpRequest = {
        body:{
            email: 'any_email@email.com',
            password: 'any_password',
            passwordConfirmation: 'any_password'
        }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
  })
})