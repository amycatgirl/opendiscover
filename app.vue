<template>
  <NuxtRouteAnnouncer />
  <div class="app">
    <header>
    <div class="wordmark">
      <NuxtLink to="/">OpenDiscover</NuxtLink>
    </div>
    <nav>
      <NuxtLink to="/servers">Servers</NuxtLink>
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
    color: white;
    font-weight: bold;
    text-decoration: none;
  }
</style>
