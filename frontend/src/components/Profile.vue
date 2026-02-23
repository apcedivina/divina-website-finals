<template>
  <div class="profile">

    <h1 class="title">my profile</h1>

    <!-- ALL LEFT ALIGNED -->
    <div class="content">

      <p>name: elisha shimei divina</p>
      <p>birthday: march 24, 2005</p>
      <p>address: fort bonifacio, taguig</p>

      <br />

      <p>school: asia pacific college</p>
      <p>course: bsit</p>
      <p>year: 2024–2028</p>

      <br />

      <p>hobbies: music, gaming, cooking</p>
      <p>dislikes: bugs, seafood</p>
      <p>fav colors: pink, beige</p>

    </div>

    <!-- CENTERED MOTTO -->
    <div class="motto">
      <p>life motto: "let's do our best rather than being the best" — jeong yunho</p>
    </div>

  </div>
</template>

<style scoped>
.profile {
  display: flex;
  flex-direction: column;
  height: 100%;
  font-family: 'Comic Sans MS', cursive;
}

.title {
  font-size: 30px;
  margin-bottom: 20px;
}

.content {
  text-align: left;
  line-height: 1.8;
  flex: 1;
}

.motto {
  text-align: center;
  margin-top: 40px;
  font-style: italic;
}
</style>