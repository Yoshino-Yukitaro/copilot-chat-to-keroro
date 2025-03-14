module.exports = {
  testEnvironment: 'node',
  collectCoverage: true,
  coverageDirectory: 'coverage',
  setupFilesAfterEnv: ['<rootDir>/samples/hollo_world.test.js'],
  testMatch: ['**/*.test.js'],
};