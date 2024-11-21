export default {
  testEnvironment: "jsdom",
  preset: "ts-jest",
  transform: {
    "\\.[jt]sx?$": "ts-jest",
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': "<rootDir>/src/utils/transformer.utils.cjs" 
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
    ".mocks.ts",
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
