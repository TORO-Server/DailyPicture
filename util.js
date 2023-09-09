//上書きでファイルをアップロードする
function upload(folderId, fileBlob, filename) {

    //指定のフォルダを取得する
    var folder = DriveApp.getFolderById(folderId);

    //ファイル名を指定してファイルを取得してみる
    var files = folder.getFilesByName(filename);

    if (files.hasNext()) {
        //Driveのファイルを上書きアップロード
        Drive.Files.update({}, files.next().getId(), fileBlob);
    } else {
        //ファイルを新規アップロードする
        folder.createFile(fileBlob);
    }
}

function toCalculationList(list) {
    return list.map(item => {
        return item[0];
    }).filter(Boolean);
}
function toSheetList(list) {
    return list.map(item => {
        return [item];
    });
}

function update(url) {
    const blob = UrlFetchApp.fetch(url).getBlob();
    blob.setName(Name)
    upload(FolderId, blob, Name)
}