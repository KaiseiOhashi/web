let img; //画像データ

//プレロード
function preload() {
//画像をロード
img = loadImage('./bird.png');
}

function setup() {
createCanvas(windowWidth, windowHeight);
//左上を起点にして画像を表示
image(img, 0, 0, width, height);
}