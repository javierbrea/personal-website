const getCompareSnapshotsPlugin = require("cypress-visual-regression/dist/plugin");

module.exports = (on, config) => {
  getCompareSnapshotsPlugin(on, config);
  on("task", {
    log: function (message) {
      console.log(message);
      return null;
    },
  });

  return config;
};
