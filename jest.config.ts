import { defaults as tsjPreset } from "ts-jest/presets";

module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  // setupFiles: ["<rootDir>/jestSetup.ts"],
  setupFilesAfterEnv: ["<rootDir>/jestSetup.ts"],
  transform: {
    ...tsjPreset.transform
    // [...]
  }
};
