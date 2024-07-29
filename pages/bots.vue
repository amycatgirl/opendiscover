<script lang="js" setup>
  const { data: botRequest } = await useFetch("/api/v1/paginated/bots")
  const config = useRuntimeConfig()
</script>

<template>
  <div class="spotlight">
    <div class="background">
      <img :src="`${config.public.AUTUMN_URL}/backgrounds/${botRequest.data.at(0).user.profile.background._id}`"
    </div>
    <div class="content">
      <h2>Most recent bot:</h2>
      <div class="info">
        <h3>{{ botRequest.data.at(0).user.username }}</h3>
        <p>{{ botRequest.data.at(0).user.profile.content }}</p>
      </div>
    </div>
  </div>
  <div class="server-list">
    <div class="server" v-for="listing in botRequest.data">
      <div class="info">
        <span>{{ listing.user.username}}#{{ listing.user.discriminator }}</span>
        <p>
          {{ listing.user.profile?.content }}
        </p>
        <span class="in">In {{ listing.serversIn > 0 ? listing.serversIn : "no" }} servers.</span>
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