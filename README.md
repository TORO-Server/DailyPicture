# DailyFile

Googleドライブにある指定した画像ファイルを Google Apps Script を利用して日替わりで更新する。

## Google Apps Script の設定

"Drive API" を追加にしてください

![image](https://github.com/TORO-Server/DailyPicture/assets/77374813/a5fee67c-5bdb-4572-8ce0-31a8f0fb5b15)
![image](https://github.com/TORO-Server/DailyPicture/assets/77374813/239b9e1b-3531-4af3-97ed-c7382acc4f0c)

一日一回 "run()"関数が実行されるようにトリガーを設定します。

![image](https://github.com/TORO-Server/DailyPicture/assets/77374813/651cfbbf-4814-4bfb-a016-32051a887318)


## スプレッドシートの設定

画像のURLは必ず2つ以上設定してください

config.js (config.gs) に設定項目があります

![image](https://github.com/TORO-Server/DailyPicture/assets/77374813/117823a1-1798-4c67-9ca8-df89d569fd09)
![image](https://github.com/TORO-Server/DailyPicture/assets/77374813/2606c53d-e9cc-44b6-abd3-a8c1e19e0a7b)
