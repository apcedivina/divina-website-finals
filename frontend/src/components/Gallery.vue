<template>
  <div class="gallery card">
    <img src="https://media.timeout.com/images/106259867/image.webp" />
    <img src="https://i.pinimg.com/736x/80/37/77/803777b4fced28d062d1d6553182711d.jpg" />
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDBUa3FZfop_eR6MFOURfGDoc2f0TK3pURhg&s" />
  </div>
</template>

<style scoped>
.card {
  background-color: #f8d7d7;
  padding: 20px;
  border-radius: 15px;

  display: flex;
  justify-content: center;
  gap: 20px;
}

img {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
}
</style>