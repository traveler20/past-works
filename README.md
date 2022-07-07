# vite-starter

[参考記事](https://zenn.dev/sakata_kazuma/articles/59a741489c8bbc)

```
プロジェクトディレクトリ
 ┣ dist （ビルドしたファイルが出力される場所）
 ┣ package.json （プロジェクトのjsonファイル）
 ┣ postcss.config.js （PostCSSの設定ファイル）
 ┣ vite.config.js （viteの設定ファイル）
 ┣ .prettierrc （prettierの設定ファイル）
 ┃
 ┣ node_modules （編集不要：自動生成されるコアファイル格納場所）
 ┣ package-lock.json （編集不要：インストールしたパッケージ情報などが記載されている）
 ┃
 ┗ src
    ┣ index.html
    ┣ xxx.html （複数ページを追加する場合）
    ┃
    ┣ components （HTMLのコンポーネントパーツを格納）
    ┃  ┗ header.html
    ┃    xxx.html ...
    ┃
    ┣ js （メインのモジュールJSファイルを格納）
    ┃  ┗ main.js
    ┃
    ┣ public （Viteの変換対象外のディレクトリ。distに中身がそのままコピーされます。）
    ┃  ┗ assets （そのまま移動させたいファイルを必要に応じて格納していく）
    ┃     ┣ js
    ┃     ┃  ┗ xxx.js ...
    ┃     ┗ images
    ┃       ┗ xxx.jpg ...
    ┃
    ┗ scss
       ┣ style.scss
       ┗ （各記法に合わせたディレクトリ構成）
```
