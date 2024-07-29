<script lang="ts" setup>
  const { data } = await useFetch("/api/v1/paginated/servers")
  console.log(data)
</script>

<template>
  <div class="spotlight">
    <div class="background">
      <span>REPLACE ME</span>
    </div>
    <div class="content">
      <h2>Most recent server:</h2>
      <div class="info">
        <h3>{{ data?.[0].name }}</h3>
        <p>{{ data?.[0].description  }}</p>
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
    z-index: 0;
  }

  .spotlight > .content {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

    justify-content: space-between;

    padding: 0 10px;
  }
</style>