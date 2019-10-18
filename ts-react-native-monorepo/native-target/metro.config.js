const path = require("path")
const projectRoot = path.join(__dirname, "../");
const metroConfig = require('react-native-monorepo-helper').default;
const monoRepoConfig = metroConfig(projectRoot);

module.exports = monoRepoConfig