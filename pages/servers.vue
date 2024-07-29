<script lang="js" setup>
  const { data } = await useFetch("/api/v1/paginated/servers")
  const config = useRuntimeConfig()
</script>

<template>
  <div class="spotlight">
    <div class="background">
      <img :src="`${config.public.AUTUMN_URL ?? 'http://local.revolt.chat:3000'}/banners/${data?.at(-1).banner}`" />
    </div>
    <div class="content">
      <h2>Most recent server:</h2>
      <div class="info">
        <h3>{{ data?.at(-1).name }}</h3>
        <p>{{ data?.at(-1).description  }}</p>
      </div>
    </div>
  </div>
  <div class="server-list">
    <div class="server" v-for="server in data">
      <div class="banner">
        <img v-if="server.banner" :src="`${config.public.AUTUMN_URL ?? 'http://local.revolt.chat:3000'}/banners/${server.banner}`" />
        <h4>{{ server.name }}</h4>
      </div>
      <div class="info">
        <p>{{ server.description }}</p>
      </div>
    </div>
  </div>
</template>

<style>
  .spotlight {
    display: flex;
    position: relative;
    width: 100%;
    height: 20rem;

    background-color: #10101A;
    z-index: -1;
    color: white;
  }

  .spotlight > .background {
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

  .spotlight > .content {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

    justify-content: space-between;

    padding: 0 10px;
  }

  .spotlight > .content > .info :is(p, h3) {
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

  .server-list > .server {
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

  .server-list > .server .info {
    padding: 15px 10px;
  }

  .server-list > .server .info > p {
    margin: 0;
  }

  .server-list > .server .banner {
    position: relative;
    height: 5rem;

    background-color: #181825;
  }

  .server-list > .server .banner > h4 {
    margin-left: 10px;

    position: absolute;
    z-index: 0;
    bottom: 0;
    font-size: larger;
  }
  .server-list > .server .banner > img,
  .spotlight > .background img {
    width: 100%;
    height: 100%;

    object-fit: cover;
  }
  .server-list > .server .banner > img {
    position: absolute;
    z-index: 0;
    filter: brightness(.4);
  }
</style>