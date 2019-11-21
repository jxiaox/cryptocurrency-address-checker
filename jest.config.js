module.exports = {
  preset: 'ts-jest',
  coverageDirectory: './coverage/',
  collectCoverage: true,
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/', '/build/'],
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/$1'
  }
};
