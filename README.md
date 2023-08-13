# 架空の大学の学科専用Webページ（Vite）

![スクリーンショット](https://github.com/Tsut-ps/univ-info-web/assets/73014392/87064ce3-3080-434a-ba38-c423befb0b6f)

## Vue.js × Vite × Vue Router × TypeScript
VueのComposition APIを使ってSFCを作成し、それぞれのコンポーネントをApp.vueでまとめて、表示しています。

特徴
- Viteを使っているので、devにて爆速で開発できる
- SFCでパーツごとに分けているため、コンポーネントで使いまわしできる
- buildすればGitHub Pagesにパブリッシュできる（右側リンクより公開中）
- SPAのため、遷移しても必要な部分だけ再描画（チラつきを低減）

## Node.jsで動かす
別のブランチで、Nodeで動かすことができます。
→ https://github.com/Tsut-ps/univ-info-web/tree/node

## 使用している技術
- Node.js
  - https://nodejs.org/ja
- Bootstrap
  - https://getbootstrap.jp/
- Vue.js（Composition API）
  - https://ja.vuejs.org/
- Vite
  - https://ja.vitejs.dev/
- Yaku Han JP
  - https://yakuhanjp.qranoko.jp/
- Google Map
  - https://www.google.com/maps

## 使用している画像素材
- Adobe Stock
  - https://stock.adobe.com/jp/
  - ライセンスの制約上、公開（public）するにあたり削除済み
- Unsplash
  - https://unsplash.com/ja
- shigureni
  - https://www.shigureni.com/

## Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

### Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

### Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```
