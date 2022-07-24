module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: ['plugin:vue/essential', 'eslint:recommended', 'plugin:prettier/recommended'],
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: 'babel-eslint',
    },
    rules: {
        'vue/multi-word-component-names': 'off',
        'vue/component-name-in-template-casing': 'off',
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    },
}
