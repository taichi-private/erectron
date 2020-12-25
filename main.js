"use strict";

var electron = require("electron");
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;

let mainWindow;

// 全てのウィンドウが閉じたら終了
app.on("window-all-closed", function () {
  if (process.platform != "dawin") {
    app.quit();
  }
});

// Electronの初期化完了後に実行
app.on("ready", function () {
  // メイン画面の表示
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
  });

  mainWindow.loadURL("file://" + __dirname + "/index.html");

  //ウィンドウが閉じられたらアプリも終了
  mainWindow.on("closed", function () {
    mainWindow = null;
  });
});
