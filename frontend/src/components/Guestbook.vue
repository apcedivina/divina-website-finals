<template>
  <div class="guestbook">
    <div class="card">
      <h2>Guestbook</h2>

      <label>Name</label>
      <input v-model="form.name" type="text" />

      <label>Phone Number</label>
      <input v-model="form.phone" type="text" />

      <label>Message</label>
      <textarea v-model="form.message" rows="4"></textarea>

      <div class="button-container">
        <button @click="submit">Submit</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const form = ref({ name: '', phone: '', message: '' });

// API URL for your backend
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

// Send data to backend when the form is submitted
async function submit() {
  if (!form.value.name || !form.value.message) {
    alert('Name and message are required!');
    return;
  }

  try {
    const response = await fetch(`${API_URL}/guestbook`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form.value),
    });

    const result = await response.json();
    console.log('Message added:', result);
    form.value = { name: '', phone: '', message: '' }; // Reset form after submission
  } catch (error) {
    console.error('Error:', error);
  }
}
</script>

<style scoped>
/* Styles for guestbook container */
.guestbook {
  width: 400px;
}

.card {
  background-color: #f8d7d7;
  padding: 20px;
  border-radius: 15px;
  text-align: left;
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