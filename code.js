function run() {
    // URLからスプレッドシート取得
    const spreadSheet = SpreadsheetApp.openByUrl(SpreadsheetURL);

    // 送信する画像リスト"sendList"を シート"SendListSheet" の A列から 取得
    const sendList = toCalculationList(spreadSheet.getSheetByName(SendListSheet).getRange("A:A").getValues());

    // シート"SaveDataSheet"を取得
    const saveDataSheet = spreadSheet.getSheetByName(SaveDataSheet).getRange("A:A");
    const saveDataList = saveDataSheet.getValues();
    // 送信済み画像リスト"saveData"を取得
    let saveData = toCalculationList(saveDataList);

    // 今回送信する画像リストを生成する
    let FinalSendList = sendList.filter(value =>
        !saveData.includes(value)
    ).concat(saveData.filter(value =>
        !sendList.includes(value)
    ));

    // もし 今回送信する画像リスト"FinalSendList" に何も入っていなかったら
    if (FinalSendList.length == 0) {
        // 前回送信した画像以外のすべての画像を 今回送信する画像リスト(FinalSendList) に入れる
        FinalSendList = sendList.filter(value => value != saveData.at(-1));
        saveData = [];
        // もし 今回送信する画像リスト"FinalSendList" に何も入っていなかったら
        if (FinalSendList.length == 0) {
            Logger.log("2つ以上送信する画像を設定してください");
            return;
        }
    }

    // 今回送信する画像をランダムで選び "image" に代入
    const image = FinalSendList[Math.floor(Math.random() * FinalSendList.length)];

    // シート"SaveDataSheet"を更新させるための処理
    saveData.push(image);
    while (saveData.length < saveDataList.length) {
        saveData.push("");
    }
    // シート"SaveDataSheet"を更新させる
    saveDataSheet.setValues(toSheetList(saveData));

    // Googleドライブの画像を更新(画像がなければ作成)
    update(image);
    //ログ出力
    Logger.log("send " + image);
}