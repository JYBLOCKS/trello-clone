export default {
  testEnvironment: "jsdom",
  preset: "ts-jest",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.ts?$": "ts-jest",
  },
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10,
    },
  },
  modulePathIgnorePatterns: ["<rootDir>/dist/", "<rootDir>/node_modules/"],
  coveragePathIgnorePatterns: [
    "<rootDir>/node_modules",
    "jestGlobalMocks.ts",
    ".type.ts",
    ".module.ts",
    ".mock.ts",
    ".utils.ts",
    ".data.ts",
    ".schema.ts",
  ],
  verbose: true,
  clearMocks: true,
};
