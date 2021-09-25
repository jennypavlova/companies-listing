module.exports = {
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['./src/**/*.{ts,js}', '!**/node_modules/**'],
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src']
};
