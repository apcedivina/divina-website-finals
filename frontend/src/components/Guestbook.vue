<template>
  <div class="guestbook">
    <h1 class="title">guestbook</h1>

    <div class="form">
      <label>name</label>
      <input v-model="form.name" type="text" />

      <label>phone number</label>
      <input v-model="form.phone" type="text" />

      <label>message:</label>
      <textarea v-model="form.message"></textarea>

      <button @click="submit" :disabled="loading">Submit</button>
    </div>

    <div class="list">
      <h3>Recent entries</h3>
      <div v-for="m in messages" :key="m.id" class="entry">
        <div class="meta"><strong>{{ m.name }}</strong> — {{ new Date(m.created_at).toLocaleString() }}</div>
        <div class="msg">{{ m.message }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const API = import.meta.env.VITE_API_URL || 'http://localhost:3000';

const form = ref({ name:'', phone:'', message:'' })
const messages = ref([])
const loading = ref(false)

async function load(){
  const res = await fetch(`${API}/guestbook`);
  messages.value = await res.json();
}
onMounted(load);

async function submit(){
  if(!form.value.message || !form.value.name) return alert('name and message required')
  loading.value = true
  await fetch(`${API}/guestbook`, {
    method: 'POST',
    headers:{'Content-Type':'application/json'},
    body: JSON.stringify(form.value)
  });
  form.value = { name:'', phone:'', message:'' }
  await load()
  loading.value = false
}
</script>

<style scoped>
.title { font-family: 'Pacifico', cursive; font-size: 28px; margin-bottom: 8px; }
.form { display:flex; flex-direction: column; gap:8px; margin-bottom: 16px; align-items: stretch; }
input, textarea { padding:8px; border:1px solid #ccc; border-radius:4px; width:100%; }
textarea { height:160px; resize:vertical; }
button { align-self:flex-end; padding:8px 12px; cursor:pointer; }
.list { margin-top: 12px; }
.entry { padding:8px; border-bottom:1px dashed #ddd; }
.meta { font-size: 12px; color:#555; }
.msg { margin-top:6px; }
</style>