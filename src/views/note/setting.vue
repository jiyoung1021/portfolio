<template>
  <div>
    Vue 설치
    <div>
      node.js 설치
    </div>
    <div>
      vscode teminal
      npm install -g @vue/cli
    </div>
    <div>
      vue create 'project name'
      <div>
        Manually select features
      </div>
      <div>
        Babel
        TypeScript
        Router
        Linter / Formatter
      </div>
      <div>
        3.x
        Y
        Y
        Y
        ESLint + Standard config
        Lint on save
        In dedicated config files
        N
      </div>
      <div>
        중간에 깃 이메일 비밀번호 적기
      </div>
    </div>
    <div>
      프로젝트 폴더 열기
    </div>
    <div>
      echo "# portfolio" >> README.md
      git init
      git add README.md
      git commit -m "first commit"
      git branch -M main
      git remote add origin https://github.com/jiyoung1021/portfolio.git
      git push -u origin main

      또는
      https://github.com/jiyoung1021/portfolio.git
      npm i
    </div>
    <div>
      npm install sass-loader sass webpack --save-dev
    </div>
    <div>
      npm run serve
    </div>
  </div>
  <div>
    eslintrc.js
    <div>
      .eslintrc.js
    </div>
    module.exports = {
    root: true,
    env: {
    node: true
    },
    extends: [
    'plugin:vue/vue3-recommended',
    '@vue/standard',
    '@vue/typescript/recommended'
    ],
    parserOptions: {
    ecmaVersion: 2020
    },
    rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/multi-word-component-names': 'off'
    }
    }
  </div>
  <div>
    settings.json
    <div>
      {
      "editor.bracketPairColorization.enabled": true,
      "workbench.colorCustomizations": {
      "editorIndentGuide.activeBackground": "#55efc4",
      "editorBracketHighlight.foreground1": "#55efc4",
      "editorBracketHighlight.foreground2": "#a29bfe",
      "editorBracketHighlight.foreground3": "#74b9ff",
      "editorBracketHighlight.foreground4": "#ffeaa7",
      "editorBracketHighlight.foreground5": "#ff7675",
      "editorBracketHighlight.foreground6": "#fd79a8",
      },
      "editor.tabSize": 2,
      "git.autofetch": true,
      "git.confirmSync": false,
      "editor.wordWrap": "on",
      "editor.accessibilitySupport": "off",
      "settingsSync.ignoredExtensions": [],
      // eslint
      "eslint.workingDirectories": [
      {
      "mode": "auto"
      }
      ],
      "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
      },
      "eslint.alwaysShowStatus": true,
      "eslint.codeAction.showDocumentation": {
      "enable": true
      },
      "workbench.iconTheme": "material-icon-theme",
      "workbench.colorTheme": "Default Dark+",
      "eslint.format.enable": true,
      //livesasscompile
      "liveSassCompile.settings.excludeList": [
      "**/node_modules/**",
      ".vscode/**"
      ],
      "liveSassCompile.settings.generateMap": false,
      "liveSassCompile.settings.autoprefix": [
      "> 1%",
      "last 4 versions"
      ],
      "liveSassCompile.settings.formats": [
      {
      "format": "expanded",
      "extensionName": ".css",
      "savePath": "~/../css"
      }
      ],
      "editor.formatOnPaste": true,
      "editor.formatOnSave": true,
      "editor.formatOnType": true,
      }
    </div>
  </div>
</template>
<script>
import { defineComponent, onMounted } from 'vue'
import Prism from 'prismjs'

export default defineComponent({
  components: {
  },
  setup () {
    onMounted(() => {
      Prism.highlightAll()
    })
    return {
    }
  }
})
</script>
