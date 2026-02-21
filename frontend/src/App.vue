<template>
  <div class="page">
    <div class="notebook">
      <div class="left">
        <Profile />
      </div>
      <div class="right">
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
/* page container */
.page {
  min-height: 100vh;
  display:flex;
  align-items:center;
  justify-content:center;
  padding: 2rem;
  background: #f8f4f6;
}

/* notebook container: uses a background image link (replace with your notebook image) */
.notebook{
  width: 100%;
  max-width: 1100px;
  height: 700px;
  display: flex;
  gap: 20px;
  background-image: url('https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1400&q=80');
  background-size: cover;
  background-position: center;
  padding: 40px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.12);
  border-radius: 8px;
  box-sizing: border-box;
}

/* left & right halves */
.left, .right {
  flex: 1 1 0;
  background: rgba(255,255,255,0.85);
  padding: 24px;
  overflow:auto;
  border-radius: 6px;
}

/* responsive */
@media (max-width: 900px){
  .notebook { flex-direction: column; height: auto; padding: 20px; }
}
</style>