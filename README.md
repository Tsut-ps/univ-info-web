# 架空の大学の学科専用Webページ（Vite版）

![スクリーンショット](https://github.com/Tsut-ps/univ-info-web/assets/73014392/87064ce3-3080-434a-ba38-c423befb0b6f)

## Bootstrap × Vue.js × Vite × Vue Router × TypeScript
VueのComposition APIを使ってSFCを作成し、それぞれのコンポーネントをApp.vueでまとめて、表示しています。

GitHub Pages → https://tsut-ps.github.io/univ-info-web/

※大学院用の別ページは用意していないため、押しても何も起きません。

## 特徴
- Viteを使っているので、devにて爆速で開発できる
- SFCでパーツごとに分けているため、コンポーネントで使いまわしできる
- buildすればGitHub Pagesにパブリッシュできる（右側リンクより公開中）
- SPAのため、遷移しても必要な部分だけ再描画（チラつきを低減）

## Node.jsで動かす
[別のブランチ](https://github.com/Tsut-ps/univ-info-web/tree/node)を使って、ローカル環境のNodeで動かすことができます。

## 使用している技術
- npm
  - https://www.npmjs.com/
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
- GSAP
  - https://gsap.com/

## 使用している画像素材
- Adobe Stock
  - https://stock.adobe.com/jp/
  - ライセンスの制約上、公開（public）するにあたり削除済み
- Unsplash
  - https://unsplash.com/ja
- shigureni
  - https://www.shigureni.com/

## 環境構築

### IDEのセットアップ（推奨）

- [VS Code](https://code.visualstudio.com/)
- [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
- [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin)

### Configの設定

[Viteの設定（公式リファレンス）](https://ja.vitejs.dev/config/) を参照。

### プロジェクトのセットアップ

```sh
npm install
```

### 開発用に実行
コンパイルと即時適用（ホットリロード）をします。

```sh
npm run dev
```

### 本番用にビルド
型チェックとコンパイル、最小化をします。

`/docs`フォルダに生成されます。

```sh
npm run build
```
