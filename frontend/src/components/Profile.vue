<template>
  <div class="profile">
    <h1 class="title">my profile</h1>

    <div class="profile-grid">
      <div class="col left-col">
        <p><strong>name</strong><br/>Elisha Shimei Divina</p>
        <p><strong>birthday</strong><br/>March 24, 2005</p>
        <p><strong>address</strong><br/>Fort Bonifacio, Taguig</p>

        <p class="section"><strong>hobbies</strong><br/>music, gaming, cooking</p>
        <p><strong>dislikes</strong><br/>bugs, seafood</p>
        <p><strong>fav colors</strong><br/>pink, beige</p>
      </div>

      <div class="col right-col">
        <p><strong>school</strong><br/>Asia Pacific College</p>
        <p><strong>course</strong><br/>BSIT</p>
        <p><strong>year</strong><br/>2024–2028</p>
      </div>

      <div class="center-col">
        <p class="motto">“let's do our best rather than being the best” — jeong yunho</p>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.title { font-family: 'Pacifico', cursive; font-size: 28px; margin-bottom: 12px; }

.profile-grid{
  display: flex;
  gap: 16px;
  align-items: flex-start;
}
.col { flex: 1; min-width: 160px; }
.center-col { flex-basis: 100%; text-align:center; margin-top: 16px; }

/* small screens stack */
@media (max-width: 900px){
  .profile-grid { flex-direction: column; }
  .center-col { order: 3; }
}
.motto { font-style: italic; }
</style>