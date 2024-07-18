/**
 * @type {import("jest").Config}
 */
const config = {
  clearMocks: true,
  collectCoverage: false,
  collectCoverageFrom: ["src/**/*.ts", "!**/*.d.ts"],
  coverageDirectory: "coverage",
  coverageProvider: "babel",
  coverageReporters: ["lcov"],
  coverageThreshold: {
    // eslint-disable-next-line no-warning-comments -- Postponed
    // TODO: Better coverage
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0
    }
  },
  preset: "ts-jest",
  setupFilesAfterEnv: ["jest-extended/all"],
  testEnvironment: "node",
  testPathIgnorePatterns: ["/dist/", "/docs/", "/es/", "/node_modules/"]
};

export default config;
