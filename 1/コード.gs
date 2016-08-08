function doGet() {
  
  // 「page.html」を読み込んで、利用可能な状態にする
  var html = HtmlService.createTemplateFromFile("page");
  
  // HTMLをレンダリング
  return html.evaluate();

}



function weatherData() {

    var url = "http://weather.livedoor.com/forecast/webservice/json/v1?city=140010";

    // 天気情報のJSONデータを取得
    var json = UrlFetchApp.fetch(url).getContentText();
    var jsonData = JSON.parse(json);
  
    // ログの表示
    Logger.log(jsonData);

    return jsonData;
  
}
