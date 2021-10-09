<template>
  <div class="card card-thumb">
    <div class="card-media card-media-thumb">
      <img :src="cardInfo.avatar"
           class="avatar">
    </div>

    <div class="card-info card-info-thumb">
      <span class="name">{{ cardInfo.name }}</span>
      <div class="group">{{ cardInfo.group }}</div>
      <div class="skills">
        <span class="value">{{ cardInfo.description }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyCard',
  props: {
    cardInfo: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.name {
  font-size: 1.25rem;
}

.group {
  font-weight: 600;
  color: #ff1ead;
}

.skills {
  display: flex;
  flex-direction: column;
  margin-top: 0.75rem;
}

.skills .value {
  margin-top: 0.15rem;
  font-size: 0.8rem;
  line-height: 1.25rem;
}

.card {
  display: block;
  position: relative;
  text-decoration: none;
  color: white;
  border-radius: 0.75rem;
  box-shadow: 0 5px 5px 4px rgba(0, 0, 0, 0.56);
  background: black;
}

.card.card-thumb {
  display: flex;
}

.card-info {
  align-items: center;
  justify-content: space-between;
  display: flex;
  padding: 20px;
}

.card-info.card-info-thumb {
  display: block;
  flex: 1 0 55%;
}

.avatar {
  height: 100%;
  left: 0;
  top: 0;
  position: static;
  width: 100%;
}

.card-media {
  height: 0;
  padding-top: 56%;
  position: relative;
  overflow: hidden;
}

.card-media.card-media-thumb {
  flex: 0 1 200px;
  height: auto;
  padding: 0;
  position: static;
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
