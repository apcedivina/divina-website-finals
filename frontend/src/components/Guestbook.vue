<template>
  <div class="guestbook">
    <div class="card">

      <h2>Guestbook</h2>

      <!-- FORM -->
      <form @submit.prevent="submitGuestbook">
        <label>Name</label>
        <input v-model="name" type="text" required />

        <label>Phone Number</label>
        <input v-model="phone" type="text" required />

        <label>Message</label>
        <textarea v-model="message" rows="3" required></textarea>

        <div class="button-container">
          <button type="submit">Submit</button>
        </div>
      </form>

      <!-- DISPLAY MESSAGES BELOW -->
      <div class="messages">
        <h3>Messages</h3>

        <div 
          v-for="entry in entries" 
          :key="entry.id" 
          class="message-box"
        >
          <strong>{{ entry.name }}</strong>
          <p>{{ entry.message }}</p>
        </div>

      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../supabase'

const name = ref('')
const phone = ref('')
const message = ref('')
const entries = ref([])

// FETCH MESSAGES
const fetchMessages = async () => {
  const { data, error } = await supabase
    .from('guestbook')
    .select('*')
    .order('id', { ascending: false })

  if (!error) {
    entries.value = data
  } else {
    console.error(error)
  }
}

// INSERT MESSAGE
const submitGuestbook = async () => {
  const { error } = await supabase
    .from('guestbook')
    .insert([
      {
        name: name.value,
        phone: phone.value,
        message: message.value
      }
    ])

  if (!error) {
    name.value = ''
    phone.value = ''
    message.value = ''
    fetchMessages() // refresh messages
  } else {
    console.error(error)
  }
}

// LOAD ON PAGE OPEN
onMounted(() => {
  fetchMessages()
})
</script>

<style scoped>
.guestbook {
  width: 400px;
}

.card {
  background-color: #f8d7d7;
  padding: 20px;
  border-radius: 15px;
  height: 500px;
  overflow-y: auto;
}

h2 {
  text-align: center;
}

label {
  display: block;
  margin-top: 10px;
  font-size: 14px;
}

input,
textarea {
  width: 100%;
  padding: 6px;
  margin-top: 4px;
  border-radius: 8px;
  border: none;
  font-size: 13px;
}

.button-container {
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
}

button {
  padding: 6px 12px;
  border: none;
  border-radius: 8px;
  background-color: #f2b1b1;
  cursor: pointer;
}

/* MESSAGE DISPLAY */

.messages {
  margin-top: 20px;
}

.messages h3 {
  font-size: 14px;
}

.message-box {
  background: #ffffffaa;
  padding: 8px;
  border-radius: 10px;
  margin-top: 8px;
  font-size: 13px;
}
</style>