// > node index.js (実行方法)

const http = require('http');
const fs = require('fs');
const hostname = '127.0.0.1';
const port = 3124;

const dir = './src';
const indexFile = 'index.html';

const getMimeType = (path) => {
    let mimeList = {
        ".html": "text/html",
        ".css": "text/css",
        ".js": "text/javascript",
        ".jpg": "image/jpeg",
        ".png": "image/png",
        ".svg": "image/svg+xml"
    };
    for (let key in mimeList) {
        if (path.endsWith(key)) {
            return mimeList[key];   // マッチした拡張子のMIMEタイプを返す
        };
    };
    return 'text/plain';    // デフォルト
};

const server = http.createServer((req, res) => {
    console.log(`RequestURL | ${req.url}`);  // デバッグ用(解析前のリクエストURLの表示)
    let filePath;
    if (req.url === '/') {
        filePath = dir + '/' + indexFile;   // index.htmlを表示
    } else {
        filePath = dir + req.url;   // その他のファイルを表示
    };
    console.log(`Response | ${filePath}\n`);  // デバッグ用(解析したファイルパスの表示)

    fs.readFile(filePath, (error, data) => {  // fsモジュールでファイルの読込
        if (error) {
            res.writeHead(404); // ファイル読み込みエラー → ステータスコード(404)
            console.log(`404 - FileNotFound!!!!\n`);
        } else {
            res.writeHead(200, {"Content-Type": getMimeType(filePath)});  // 正常ステータスコード(200)
            res.write(data);    // HTMLファイルの表示
        };
        res.end();
    });
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});