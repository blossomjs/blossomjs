module.exports = {
  parserPreset: "conventional-changelog-conventionalcommits",
  rules: {
    "type-empty": [2, "never"],
    "type-enum": [
      2,
      "always",
      ["feat", "fix", "docs", "style", "refactor", "perf", "test", "build", "ci", "chore", "revert"],
    ],
    "issue-rule": [2, "always"],
  },
  plugins: [
    {
      rules: {
        "issue-rule": (commit) => {
          const { subject } = commit
          console.log(commit, /fix #\d+$/.test(subject))
          return [/fix #\d+$/.test(subject), `必须关联一条issue`]
        },
      },
    },
  ],
  prompt: {
    messages: {
      skip: ":skip",
      max: "upper %d chars",
      min: "%d chars at least",
      emptyWarning: "can not be empty",
      upperLimitWarning: "over limit",
      lowerLimitWarning: "below limit",
    },
    questions: {
      type: {
        description: "指定commit类型",
        enum: {
          feat: {
            description: "新特性",
            title: "Features",
            emoji: "✨",
          },
          fix: {
            description: "修复BUG",
            title: "Bug Fixes",
            emoji: "🐛",
          },
          docs: {
            description: "仅文档改变",
            title: "Documentation",
            emoji: "📚",
          },
          style: {
            description: "代码格式变更",
            title: "Styles",
            emoji: "💎",
          },
          refactor: {
            description: "重构",
            title: "Code Refactoring",
            emoji: "📦",
          },
          perf: {
            description: "性能提升",
            title: "Performance Improvements",
            emoji: "🚀",
          },
          test: {
            description: "测试相关",
            title: "Tests",
            emoji: "🚨",
          },
          build: {
            description: "构建相关",
            title: "Builds",
            emoji: "🛠",
          },
          ci: {
            description: "CI相关",
            title: "Continuous Integrations",
            emoji: "⚙️",
          },
          chore: {
            description: "调整",
            title: "Chores",
            emoji: "♻️",
          },
          revert: {
            description: "撤回COMMIT",
            title: "Reverts",
            emoji: "🗑",
          },
        },
      },
      subject: {
        description: "对改动进行简短的描述",
      },
    },
  },
}
