module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/', '/src/test.ts'],
  coverageDirectory: './coverage',
  testMatch: ['<rootDir>/src/**/*.spec.ts'],
  collectCoverage: true, // Habilita la recolección de cobertura
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/**/*.module.ts',
    '!src/main.ts',
    '!src/polyfills.ts',
    '!src/environments/**'
  ],
  coverageReporters: ['html', 'text-summary'],
  // globals: {
  //   'ts-jest': {
  //     tsconfig: '<rootDir>/tsconfig.spec.json',
  //     stringifyContentPathRegex: '\\.html$',
  //     astTransformers: {
  //       before: [
  //         'jest-preset-angular/build/InlineFilesTransformer',
  //         'jest-preset-angular/build/StripStylesTransformer'
  //       ]
  //     }
  //   }
  // },
  // transform: {
  //   '^.+\\.(ts|js|html)$': 'ts-jest'
  // },
  // moduleFileExtensions: ['ts', 'html', 'js', 'json'],
  moduleNameMapper: {
    '@app/(.*)': '<rootDir>/src/app/$1',
    '@environments/(.*)': '<rootDir>/src/environments/$1'
  }
};
