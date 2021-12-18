<template>
  <div class="grid">
    <MyCard v-bind:cardInfo="cardInfo"/>
    <FeedbackFormCard/>
  </div>
</template>

<script>
import MyCard from '@/components/MyCard'
import FeedbackFormCard from '@/components/FeedbackFormCard'
import Avatar from '@/assets/avatar.jpg'
export default {
  name: 'Home',
  data () {
    return {
      cardInfo: {
        name: 'Костюшов Виталий Bладимирович',
        group: 'БСБО-06-19',
        description: 'Скиллы и умения как у Гены Букина',
        avatar: Avatar
      }
    }
  },
  components: {
    MyCard,
    FeedbackFormCard
  }
}
</script>

<style scoped>
.grid {
  display: grid;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  margin: 20px auto;
  max-width: 800px;
}
</style>
