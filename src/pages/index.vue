<style scoped>
.hero {
	position: relative;
}

.hero h1 {
	max-width: 45rem;
	font-size: 4em;
	margin-left: 20px;
	width: 100%;

	text-wrap: pretty;
	overflow-wrap: break-word;
	overflow-x: hidden;
}

.hero .servers {
	color: #cba6f7;
}

.hero .bots {
	color: #fab387;
}

.hero .themes {
	color: #f2cdcd;
}

.section {
	background-color: #181825;
	display: flex;
	padding: 10px;

	height: 30rem;
}
</style>
<template>
	<div class="hero">
		<h1>Find new <span class="servers">servers,</span> <span class="bots">bots</span> and <span
				class="themes">themes</span> with OpenDiscover</h1>
	</div>
	<div class="section servers-popular-among">
		<h2>Servers popular among users</h2>
	</div>
	<div class="section bots-popular-among">
		<h2>Bots popular among users</h2>
	</div>
</template>
