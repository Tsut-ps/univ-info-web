// > node index.js (実行方法)

// サーバーの設定
const http = require('http');
const fs = require('fs');
const hostname = '127.0.0.1';
const port = 3124;

// ページの場所を指定
const dir = './src';
// indexの場所を指定 → ルートにアクセスしたときに見に行く場所
const indexFile = 'index.html';

// ファイルの拡張子からMIMEタイプを取得
const getMimeType = (path) => {
    // MIMEタイプを定義
    let mimeList = {
        ".html": "text/html",
        ".css": "text/css",
        ".js": "text/javascript",
        ".jpeg": "image/jpeg",
        ".png": "image/png",
        ".svg": "image/svg+xml"
    };
    // 拡張子にマッチするMIMEタイプを返す
    for (let key in mimeList) {
        if (path.endsWith(key)) {
            return mimeList[key];
        };
    };
    return 'text/plain';    // デフォルト
};

// サーバーの作成
const server = http.createServer((req, res) => {
    console.log(`RequestURL | ${req.url}`);  // デバッグ用(解析前のリクエストURLの表示)
    let filePath;
    // リクエストURLに応じてファイルを読み込む
    if (req.url === '/') {
        // index.htmlを表示
        filePath = dir + '/' + indexFile;
    } else {
        // その他のファイルを表示
        filePath = dir + req.url;
    };
    // デバッグ用(解析したファイルパスの表示)
    console.log(`Response | ${filePath}\n`);

    // fsモジュールでファイルの読込
    fs.readFile(filePath, (error, data) => {
        if (error) {
            // ファイル読み込みエラー → ステータスコード(404)を返す
            res.writeHead(404);
            console.log(`404 - FileNotFound!!!!\n`);
        } else {
            // 正常ステータスコード(200)
            res.writeHead(200, {"Content-Type": getMimeType(filePath)});
            // HTMLファイルの表示
            res.write(data);
        };
        res.end();
    });
});

// サーバーを待機状態にする
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});