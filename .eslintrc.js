module.exports = {
    "root": true,
    "parser": "@typescript-eslint/parser",
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        '@tensor-corp'
    ],
    "parserOptions": {
        "files": ["*.ts"],
        "project": ['./tsconfig.json'],
        "tsconfigRootDir": __dirname,
        "ecmaVersion": 6,
        "sourceType": "module"
    },
    "ignorePatterns": [
        ".eslintrc"
    ],
    "rules": {
        "semi-spacing": 2,
        "comma-style": ["error", "last"],
        "indent": ["error", 4],
    },
    "plugins": [
        "@typescript-eslint"
    ]
}
