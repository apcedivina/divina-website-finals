<template>
  <div class="profile">

    <h1 class="title">my profile</h1>

    <!-- TOP SECTION -->
    <div class="top-section">
      <div class="left-info">
        <p>name: elisha shimei divina</p>
        <p>birthday: march 24, 2005</p>
        <p>address: fort bonifacio, taguig</p>
      </div>

      <div class="right-info">
        <p>school: asia pacific college</p>
        <p>course: bsit</p>
        <p>year: 2024–2028</p>
      </div>
    </div>

    <!-- MIDDLE SECTION -->
    <div class="middle-section">
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
  gap: 40px;
  font-family: 'Comic Sans MS', cursive;
}

.title {
  font-size: 30px;
}

.top-section {
  display: flex;
  justify-content: space-between;
}

.left-info {
  text-align: left;
}

.right-info {
  text-align: left;
}

.middle-section {
  text-align: left;
}

.motto {
  text-align: center;
  margin-top: 40px;
}
</style>