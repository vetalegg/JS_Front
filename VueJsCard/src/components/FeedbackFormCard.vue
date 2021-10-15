<template>
  <div class="card">
    <div class="card-info">
      <div class="title" style="text-align: center;">Хочешь связаться со мной?</div>
      <form class="feedback-form">
        <input type="text" autocomplete="off" placeholder="Ваше имя " required>
        <input type="text" autocomplete="off" placeholder="Ваш email в формате: example@example.com" required pattern=".+@.+..+" validationMessage="Введите корректный Email">
        <textarea autocomplete="off" style="height: 100px;" placeholder="Введите сообщение..." required></textarea>
        <button type="submit">Отправить</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeedbackFormCard'
}
</script>

<style scoped>
.title {
  font-weight: 600;
  color: #ff1ead;
}

.card {
  position: relative;
  text-decoration: none;
  color: white;
  display: flex;
  border-radius: 0.75rem;
  box-shadow: 0 5px 5px 4px rgba(0, 0, 0, 0.56);
  background: black;
}

.card-info {
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  display: block;
  flex: 1 0 55%;
}

.feedback-form {
  margin-top: 15px;
}

.feedback-form input, textarea {
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 10px;
  box-sizing: border-box;
  font-size: 14px;
  resize: vertical;
  border-radius: 5px;
  font-family: "Arial"
  }

.feedback-form button {
  color: white;
  background: #ff1ead;
  border: 1px #5b5b5b;
  height: 40px;
  width: 100%;
  border-radius: 6px;
}
</style>
