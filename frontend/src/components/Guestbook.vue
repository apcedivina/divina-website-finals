<template>
  <div class="guestbook">

    <h1 class="title">guestbook</h1>

    <div class="form">
      <label>name:</label>
      <input v-model="form.name" type="text" />

      <label>phone number:</label>
      <input v-model="form.phone" type="text" />

      <label>message:</label>
      <textarea v-model="form.message"></textarea>

      <button @click="submit">submit</button>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'

const API = import.meta.env.VITE_API_URL
const form = ref({ name:'', phone:'', message:'' })

async function submit(){
  if(!form.value.name || !form.value.message){
    alert("name and message required")
    return
  }

  await fetch(`${API}/guestbook`, {
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body: JSON.stringify(form.value)
  })

  form.value = { name:'', phone:'', message:'' }
  alert("submitted!")
}
</script>

<style scoped>
.guestbook {
  display: flex;
  flex-direction: column;
  font-family: 'Comic Sans MS', cursive;
}

.title {
  font-size: 30px;
  margin-bottom: 20px;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

input, textarea {
  padding: 8px;
  border: 1px solid #aaa;
  width: 100%;
}

textarea {
  height: 200px;
}

button {
  align-self: flex-end;
  padding: 8px 16px;
  cursor: pointer;
}
</style>