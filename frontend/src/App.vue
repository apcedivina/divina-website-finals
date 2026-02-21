<template>
  <div class="page">
    <div class="notebook">

      <!-- LEFT PAGE -->
      <div class="page-left">
        <Profile />
      </div>

      <!-- RIGHT PAGE -->
      <div class="page-right">
        <Guestbook />
      </div>

    </div>
  </div>
</template>

<script setup>
import Profile from './components/Profile.vue'
import Guestbook from './components/Guestbook.vue'
</script>

<style>
.page {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f8dfe7;
  padding: 40px;
}

/* Notebook background — replace link if needed */
.notebook {
  display: flex;
  width: 1100px;
  max-width: 100%;
  height: 700px;
  background-image: url("https://i.pinimg.com/736x/b3/88/8e/b3888e368b92bf0bb623eb016b8f87e9.jpg");
  background-size: cover;
  background-position: center;
  padding: 50px;
  gap: 40px;
  box-sizing: border-box;
}

.page-left,
.page-right {
  flex: 1;
  background: transparent;
  display: flex;
  flex-direction: column;
}

/* Responsive */
@media (max-width: 900px) {
  .notebook {
    flex-direction: column;
    height: auto;
  }
}
</style>