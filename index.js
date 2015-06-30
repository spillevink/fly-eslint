const CLIEngine = require("eslint").CLIEngine

function createLinter (cli) {
  const fmt = cli.getFormatter()
  return (file) => {
    const report = cli.executeOnFiles([file])
    const msg = fmt(report.results)
    if (msg === "") return
    console.error(msg)
    throw parseInt(report.errorCount + report.warningCount) + " problems."
  }
}

module.exports = function () {
  this.eslint = function (opts) {
    const lint = createLinter(new CLIEngine(opts))
    return this
      .notify("plugin_run", { plugin: "eslint" })
      .unwrap().then((files) => files.forEach(_ => lint(_.file)))
  }
}
