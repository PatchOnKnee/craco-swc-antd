const CracoAntDesignPlugin = require("craco-antd");
const CracoSwcPlugin = require("craco-swc");

//without swc plugin
// module.exports = {
//   plugins: [{ plugin: CracoAntDesignPlugin }],
// };

//with swc plugin
module.exports = {
  plugins: [{ plugin: CracoAntDesignPlugin }, { plugin: CracoSwcPlugin }],
};
