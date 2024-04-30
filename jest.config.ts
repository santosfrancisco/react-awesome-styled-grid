import { defaults as tsjPreset } from "ts-jest/presets";

module.exports = {
  preset: "ts-jest",
  testMatch: ["**/__tests__/**/*.test.tsx"],
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jestSetup.ts"],
  transform: {
    ...tsjPreset.transform
    // [...]
  }
};
