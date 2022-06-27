import BgImageFile from '../assets/airplane-bg.jpg'
export default class Game {
	canvas;
	height;
	width;
	player;
	isPauseed = false;
	isStarted = false;
	isGameOver = false;

	constructor(props) {
		this.canvas = props.canvas;
		this.height = props.height;
		this.width = props.width;
	}
	
	init() {
		// 初始化游戏

		this.#loadSkyBg().then((image) => {
			// 加载天空图
			new BgImage({
				image,
				width: this.width,
				height: this.height,
				canvas: this.canvas
			}).init();

		});
	}
	
	#loadSkyBg() {
		const bgImage = new Image();
		bgImage.src = BgImageFile;
		
		return new Promise((resolve, reject) => {
			bgImage.onload = function (res) {
				resolve(res.target)
			}
			bgImage.onerror = function (error) {
				reject(error)
			}
		})
	}

	#gameInit() {}

	#gameOver() {}
}

// 天空图
class BgImage {
	static image;
	static width;
	static height;
	static canvas;
	speed = 10;
	image1X = 0;
	image2X = 0;
	image1Y = 0;
	image2Y = 0;

	isPauseed = false;

	constructor(props) {
		this.canvas = props.canvas;
		this.width = props.width;
		this.height = props.height;
		this.image = props.image;
		this.image2Y = -this.height;

	}
	
	init() {
		console.log(this.image, this.width, this.height, this.image1Y, this.image2Y)

		setInterval(() => {
			this.canvas.drawImage(this.image, this.image1X, this.image1Y++, this.width, this.height)
			this.canvas.drawImage(this.image, this.image2X, this.image2Y++, this.width, this.height)
			if (this.image2Y >= 0) {
				this.image1Y = 0;
				this.image2Y = -this.height;
			}
		}, this.speed)
	}

	#pause() {
		this.isPauseed = true;
	}

	#play() {
		this.isPauseed = false;
	}
}
