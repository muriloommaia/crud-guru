process.env.NODE_NO_WARNINGS = '1'

module.exports = {
  preset: 'ts-jest',
  roots: ['<rootDir>/tests'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: '.coverage',
  testEnvironment: 'node',
  transform: { '.+\\.ts$': 'ts-jest' }
}
