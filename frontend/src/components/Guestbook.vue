<template>
  <div class="guestbook">
    <div class="card">
      <h2>Guestbook</h2>

      <label>Name</label>
      <input type="text" />

      <label>Phone Number</label>
      <input type="text" />

      <label>Message</label>
      <textarea rows="4"></textarea>

      <div class="button-container">
        <button>Submit</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.guestbook {
  width: 400px;
}

.card {
  background-color: #f8d7d7;
  padding: 20px;
  border-radius: 15px;
  text-align: left;
  height: 500px;  /* Match height to profile */
}

h2 {
  text-align: center;
  margin-top: 0;
}

label {
  display: block;
  margin-top: 15px;
}

input,
textarea {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  border-radius: 8px;
  border: none;
}

.button-container {
  display: flex;
  justify-content: flex-end;
  margin-top: 15px;
}

button {
  padding: 8px 15px;
  border: none;
  border-radius: 8px;
  background-color: #f2b1b1;
  cursor: pointer;
}
</style>