module.exports = {
  clearMocks: true,
  coverageDirectory: 'coverage',
  testEnvironment: 'jest-environment-node',
  testPathIgnorePatterns: ['/node_modules/'],
  transform: {},
  roots: ['<rootDir>'],
  reporters: [
    'default',
    [
      'jest-xunit',
      {
        outputPath: `${process.cwd()}/test-results`,
        traitsRegex: [
          { regex: /\(Test Type:([^,)]+)(,|\)).*/g, name: 'Category' },
          { regex: /.*Test Traits: ([^)]+)\).*/g, name: 'Type' },
        ],
      },
    ],
  ],
}
