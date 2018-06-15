module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    "type-enum": [
      2,
      'always',
      [
        'feat', // 新增 feature
        'fix', // 修复 bug
        'docs', // 仅仅修改了文档
        'style', // 修改了空格、格式缩进、逗号等等，不改变代码逻辑
        'refactor', // 代码重构
        'test', // 测试用例
        'revert', // 回滚到上一个版本
        'chore', // 改变构建流程、或者增加依赖库、工具等
        'perf', // 优化相关，比如提升性能、体验
        'temp' // 临时提交，建议完成后合并
      ]
    ],
    'subject-case': [0, 'never', ['lower-case']]
  }
}
