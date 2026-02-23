<template>
  <div class="page">
    <header>
      <h1>My Personal Web Page</h1>
    </header>

    <main class="main-container">
      <div class="top-section">
        <Profile />
        <Guestbook />
      </div>

      <Gallery />
    </main>
  </div>
</template>

<script setup>
import Profile from './components/Profile.vue'
import Guestbook from './components/Guestbook.vue'
import Gallery from './components/Gallery.vue'
</script>

<style>
body {
  margin: 0;
  font-family: courier;
  background-color: #f0e0e0;
}

.page {
  text-align: center;
}

header {
  background-color: #f2b1b1;
  padding: 20px;
}

header h1 {
  margin: 0;
  font-size: 32px;
  color: #5b3b2e;
}

.main-container {
  padding: 30px;
}

/* FLEX LAYOUT */
.top-section {
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-bottom: 30px;
}
</style>