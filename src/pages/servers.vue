<!-- TODO: make a template to avoid code duplication -->

<script lang="js" setup>
const { data: serverRequest } = await useFetch("/api/v1/paginated/servers")
const config = useRuntimeConfig()
</script>

<template>
	<div class="spotlight">
		<div class="background">
			<img v-if="serverRequest.data.at(0).banner"
				:src="`${config.public.AUTUMN_URL}/banners/${serverRequest.data.at(0).banner?._id}`" />
		</div>
		<div class="content">
			<h2>Most recent server:</h2>
			<div class="info">
				<div class="about">
					<h3>{{ serverRequest.data.at(0).name }}</h3>
					<p>{{ serverRequest.data.at(0).description }}</p>
				</div>
				<div class="action">
					<NuxtLink class="button">Join</NuxtLink>
				</div>
			</div>
		</div>
	</div>
	<div class="server-list">
		<div class="server" v-for="server in serverRequest.data">
			<div class="banner">
				<img v-if="server.banner"
					:src="`${config.public.AUTUMN_URL}/banners/${server.banner._id}`" />
				<h4>{{ server.name }}</h4>
			</div>
			<div class="info">
				<p>{{ server.description }}</p>
			</div>
		</div>
	</div>
</template>

<style scoped>
.spotlight {
	display: flex;
	position: relative;
	width: 100%;
	height: 20rem;

	background-color: #10101A;
	z-index: -1;
	color: white;
}

.spotlight>.background {
	position: absolute;
	width: 100%;
	height: 100%;

	color: gray;

	opacity: 0.5;

	display: flex;
	align-items: center;
	justify-content: center;
	z-index: -1;
}

.spotlight>.content {
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;

	justify-content: space-between;

	padding: 0 10px;
}

.spotlight>.content>.info {
	display: flex;
	flex-direction: row;

	width: 100%;
	justify-content: space-between;
	gap: 5rem;
	align-items: end;
}

.spotlight>.content>.info .action {
	margin-bottom: 20px;
	margin-right: 20px;
}

.spotlight>.content>.info .about :is(p, h3) {
	text-wrap: pretty;
	white-space: pre-wrap;
	overflow-wrap: anywhere;
}

.server-list {
	display: flex;
	flex-wrap: wrap;
	background-color: #1e1e2e;
	color: white;

	gap: 1rem;

	height: 100%;
	width: 100%;

	padding: 25px 10px;
}

.server-list>.server {
	width: 25rem;
	display: flex;
	flex-direction: column;

	text-wrap: pretty;
	white-space: pre-wrap;
	overflow-wrap: anywhere;
	background-color: #45475a;

	border-radius: 25px;
	overflow: clip;
}

.server-list>.server .info {
	padding: 15px 10px;
}

.server-list>.server .info>p {
	margin: 0;
}

.server-list>.server .banner {
	position: relative;
	height: 5rem;

	background-color: #181825;
}

.server-list>.server .banner>h4 {
	margin-left: 10px;

	position: absolute;
	z-index: 0;
	bottom: 0;
	font-size: larger;
}

.server-list>.server .banner>img,
.spotlight>.background img {
	width: 100%;
	height: 100%;

	object-fit: cover;
}

.server-list>.server .banner>img {
	position: absolute;
	z-index: 0;
	filter: brightness(.4);
}
</style>
