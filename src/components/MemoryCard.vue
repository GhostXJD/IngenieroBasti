<template>
  <div class="memory-card" :class="{ active: isActive }">
    <div class="card-image-wrapper">
      <img :src="imageSrc" :alt="memory.title" class="card-image" />
      <div class="card-overlay">
        <div class="card-year">{{ memory.year }}</div>
        <h3 class="card-title">{{ memory.title }}</h3>
        <p class="card-text">{{ memory.text }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  memory: { type: Object, required: true },
  isActive: { type: Boolean, default: false }
})

const imageModules = import.meta.glob('@/assets/images/*.jpg', { eager: true, query: '?url', import: 'default' })
const imageSrc = computed(() => imageModules[`/src/assets/images/${props.memory.image}`])
</script>

<style scoped>
.memory-card {
  position: relative;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  border-radius: var(--radius);
  overflow: hidden;
  opacity: 0;
  transform: scale(0.95);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.memory-card.active {
  opacity: 1;
  transform: scale(1);
}

.card-image-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 3 / 4;
  overflow: hidden;
  border-radius: var(--radius);
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.6s ease;
}

.memory-card.active .card-image {
  transform: scale(1.05);
}

.card-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 40px 24px 24px;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.85));
  text-align: center;
}

.card-year {
  display: inline-block;
  padding: 4px 14px;
  background: var(--primary-dim);
  border: 1px solid rgba(0, 230, 118, 0.3);
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--primary);
  margin-bottom: 12px;
}

.card-title {
  font-family: var(--font-title);
  font-size: clamp(1.3rem, 4vw, 1.8rem);
  font-weight: 700;
  color: #fff;
  margin-bottom: 8px;
}

.card-text {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.5;
  max-width: 400px;
  margin: 0 auto;
}
</style>
