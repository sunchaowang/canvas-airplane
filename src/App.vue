<script setup>
import { onMounted, ref } from "vue";
import AriPlaneBg from './assets/airplane-bg.jpg';
import Game from "./func/Game";

const canvasRef = ref();
const bgWidth = 512;
const bgHeight = 768;

onMounted(() => {
  const canvasDom = canvasRef.value;
  if (!canvasDom) {
    return;
  }
	canvasDom.width = bgWidth;
	canvasDom.height = bgHeight;
  const ctx = canvasDom.getContext("2d");
	const game = new Game({
		canvas: ctx,
		width: bgWidth,
		height: bgHeight
	});
	game.init();
	// const ariPlaneBg = new Image();
	// ariPlaneBg.src = AriPlaneBg;
	// ariPlaneBg.onload = function (e) {
	// 	let y1 = 0, y2 = -bgHeight;
	// 	setInterval(() => {
	// 		ctx.drawImage(ariPlaneBg, 0, y1++, bgWidth, bgHeight)
	// 		ctx.drawImage(ariPlaneBg, 0, y2++, bgWidth, bgHeight)
	// 		if (y2 >= 0) {
	// 			y1 = 0;
	// 			y2 = -bgHeight;
	// 		}
 	// 	}, 10)
	// }
})

</script>

<template>
  <canvas class="canvas" ref="canvasRef">1</canvas>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
canvas {
	border: 1px #000 solid;
}
</style>
