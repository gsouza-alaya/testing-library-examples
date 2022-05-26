/* eslint-disable global-require */

function random(min, max) {
  const min2 = Math.ceil(min);
  const max2 = Math.floor(max);
  return Math.floor(Math.random() * (max2 - min2)) + min2;
}

// Use a random port number for the mock API by default,
// to support multiple instances of Jest running
// simultaneously, like during pre-commit lint.
process.env.MOCK_API_PORT = process.env.MOCK_API_PORT || random(9000, 9999);

module.exports = {
  testMatch: ["**/(*.)test.js"],
  moduleFileExtensions: ["js", "json", "vue"],
  setupFiles: ["<rootDir>/setupTests"],
  setupFilesAfterEnv: ["<rootDir>/setupAfterEnv"],
  transform: {
    "^.+\\.vue$": "vue-jest",
    "^.+\\.js$": "babel-jest",
    ".+\\.(css|scss|jpe?g|png|gif|webp|svg|mp4|webm|ogg|mp3|wav|flac|aac|woff2?|eot|ttf|otf)$":
      "jest-transform-stub",
  },
  snapshotSerializers: ["jest-serializer-vue"],
  coverageReporters: ["json-summary", "html"],
  coverageDirectory: "<rootDir>/tests/unit/coverage",
  collectCoverageFrom: ["src/**/*.{js,vue}"],
  // https://github.com/jest-community/jest-watch-typeahead
  watchPlugins: [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname",
  ],
  globals: {
    "vue-jest": {
      // Compilation errors in the <style> tags of Vue components will
      // already result in failing builds, so compiling CSS during unit
      // tests doesn't protect us from anything. It only complicates
      // and slows down our unit tests.
      experimentalCSSCompile: false,
    },
  },
  testEnvironment: "jsdom",
};
