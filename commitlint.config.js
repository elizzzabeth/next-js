module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      ["feature", "fix", "chore", "refactor", "revert", "style", "build", "ci", "docs", "test"]
    ]
  }
};
