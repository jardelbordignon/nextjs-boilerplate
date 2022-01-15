module.exports = {
  testEnvironment: 'jsdom', // como vamos testar o front, no browser, simular a dom
  testPathIgnorePatterns: ['/node_modules', '/.next/', '/.husky/'], // dirs ignorados
  collectCoverage: true, // fazer teste de cobertura
  collectCoverageFrom: ['src/**/*.ts(x)'], // dir de onde será coletada a cobertura
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'] // arquivos carregados antes dos testes
}
