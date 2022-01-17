module.exports = {
  testEnvironment: 'jsdom', // como vamos testar o front, no browser, simular a dom
  testPathIgnorePatterns: ['/node_modules', '/.next/', '/.husky/'], // dirs ignorados
  collectCoverage: true, // fazer teste de cobertura
  collectCoverageFrom: [
    'src/**/*.ts(x)?', // de onde deve ser coletado
    '!src/**/@(*.|)stories.@(js|jsx|ts|tsx)' // esses devem ser ignorados
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'] // arquivos carregados antes dos testes
}
