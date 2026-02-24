<template>
  <div class="guestbook">
    <div class="card">

      <h2>Guestbook</h2>

      <!-- FORM -->
      <label>Name</label>
      <input v-model="name" type="text" />

      <label>Phone Number</label>
      <input v-model="phone" type="text" />

      <label>Message</label>
      <textarea v-model="message" rows="3"></textarea>

      <div class="button-container">
        <button @click="submitMessage">Submit</button>
      </div>

      <!-- MESSAGES -->
      <div class="messages" v-if="messages.length">
        <h3>Messages:</h3>

        <div
          v-for="(msg, index) in messages"
          :key="index"
          class="message-box"
        >
          <p><strong>{{ msg.name }}</strong> ({{ msg.phone }})</p>
          <p>{{ msg.message }}</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const name = ref('')
const phone = ref('')
const message = ref('')
const messages = ref([])

/* LOAD saved messages when page loads */
onMounted(() => {
  const saved = localStorage.getItem('guestbookMessages')
  if (saved) {
    messages.value = JSON.parse(saved)
  }
})

const submitMessage = () => {
  if (!name.value || !message.value) {
    alert('Please fill in required fields!')
    return
  }

  messages.value.push({
    name: name.value,
    phone: phone.value,
    message: message.value,
    date: new Date().toLocaleString()
  })

  /* SAVE to localStorage */
  localStorage.setItem(
    'guestbookMessages',
    JSON.stringify(messages.value)
  )

  name.value = ''
  phone.value = ''
  message.value = ''
}
</script>

<style scoped>
.guestbook {
  width: 400px;
}

.card {
  background-color: #f8d7d7;
  padding: 20px;
  border-radius: 15px;
  text-align: left;
  height: 500px;
  display: flex;
  flex-direction: column;
}

h2 {
  text-align: center;
  margin-top: 0;
}

label {
  margin-top: 10px;
  font-size: 13px;
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

button:hover {
  background-color: #e89b9b;
}

.messages {
  margin-top: 15px;
  overflow-y: auto;
  flex-grow: 1;
}

.message-box {
  background-color: #ffecec;
  padding: 8px;
  border-radius: 10px;
  margin-top: 8px;
  font-size: 12px;
}
</style>