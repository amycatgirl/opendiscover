<script lang="ts" setup>
    const config = useRuntimeConfig()
</script>

<template>
  <NuxtRouteAnnouncer />
  <div class="app">
    <header>
    <div class="wordmark">
      <NuxtLink to="/">{{ config.public.opendiscover.name }}</NuxtLink>
    </div>
    <nav>
      <NuxtLink to="/servers">Servers</NuxtLink>
      <NuxtLink to="/bots">Bots</NuxtLink>
    </nav>
  </header>
  <main>
    <NuxtPage />
  </main>
  </div>
</template>

<style>
  * {
    box-sizing: border-box;
  }
  body, .app {
    margin: 0;
    padding: 0;

    display: flex;
    flex-direction: column;
  }

  header {
    display: flex;
    background-color: #1D1D2E;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
  }
  
  header .wordmark > a {
    font-size: larger;
    color: #cba6f7;
    font-weight: bold;
    text-decoration: none;
  }

  header nav {
    display: flex;
    gap: 2rem;
  }

  header nav > a {
    color: #cdd6f4;
  }

  body {
    background-color: #11111b;
    color: #cdd6f4;
  }

  a.button {
    display: block;
    background: #cba6f7;
    color: #11111b;
    border: none;
    border-radius: 9999999px;

    padding: 10px 20px;

    font-weight: 500;
  }
</style>
