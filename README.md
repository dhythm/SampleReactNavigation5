```
yarn add -D typescript react-native-typescript-transformer ts-jest @types/jest @types/react @types/react-native @types/react-test-renderer
yarn tsc --init --pretty --jsx react
 cat <<EOF > rn-cli.config.js
module.exports = {
  getTransformModulePath() {
    return require.resolve("react-native-typescript-transformer");
  },
  getSourceExts() {
    return ["ts", "tsx"];
  }
};
EOF

yarn add -D eslint eslint-config-prettier eslint-plugin-local eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-react-native
touch .eslintignore .eslintplugin.js .eslintrc.json

yarn add -D babel-preset-react-native babel-plugin-module-resolver babel-plugin-styled-components @babel/core @babel/preset-env @babel/preset-typescript
cat <<EOF > babel.config.js
module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.js', '.json', '.jsx', '.ts', '.tsx'],
        alias: {},
      },
    ],
    'babel-plugin-styled-components',
  ],
};
EOF

yarn add -D prettier
cat <<EOF > .prettierrc
{
  "semi": true,
  "singleQuote": true,
  "trailingComma": "all",
  "arrowParens": "always"
}
EOF

yarn add -D lint-staged husky
yarn add -D reactotron-react-native
touch ReactotronConfig.js
cat <<EOF > ReactotronConfig.js
import Reactotron from 'reactotron-react-native';

Reactotron.configure() // controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
  .connect(); // let's connect!

EOF
```