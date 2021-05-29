 const testEnvironment= 'node';
 const testEnvironmentOptions= {
    NODE_ENV: 'test',
  };
const restoreMocks= true;
const coveragePathIgnorePatterns= ['node_modules', 'src/config', 'src/app.js', 'tests'];
const coverageReporters= ['text', 'lcov', 'clover', 'html'];

export default {
  testEnvironment,
  testEnvironmentOptions,
  restoreMocks,
  coveragePathIgnorePatterns,
  coverageReporters,
};
