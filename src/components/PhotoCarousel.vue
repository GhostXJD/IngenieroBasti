<template>
  <section id="memories" class="section carousel-section">
    <div class="container">
      <h2 class="section-title">Nuestros recuerdos</h2>
      <p class="carousel-hint">Cada foto cuenta una parte de esta historia</p>

      <div class="carousel-wrapper" @mouseenter="stopAutoPlay" @mouseleave="startAutoPlay">
        <button class="carousel-btn carousel-btn--prev" @click="prev" aria-label="Anterior">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </button>

        <div class="carousel-viewport">
          <div
            v-for="(item, index) in memories"
            :key="item.id"
            class="carousel-slide"
            :class="{ active: index === currentIndex }"
          >
            <div
              v-if="index === currentIndex || index === prevIndex || index === nextIndex"
              class="slide-content"
            >
              <MemoryCard :memory="item" :isActive="index === currentIndex" />
            </div>
          </div>
        </div>

        <button class="carousel-btn carousel-btn--next" @click="next" aria-label="Siguiente">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </button>
      </div>

      <div class="carousel-controls">
        <button class="control-btn" @click="togglePlay" :title="isPlaying ? 'Pausar' : 'Reproducir'">
          <svg v-if="isPlaying" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <rect x="6" y="4" width="4" height="16"/>
            <rect x="14" y="4" width="4" height="16"/>
          </svg>
          <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="5,3 19,12 5,21"/>
          </svg>
        </button>

        <div class="carousel-dots">
          <button
            v-for="(item, index) in memories"
            :key="item.id"
            class="dot"
            :class="{ active: index === currentIndex }"
            @click="goTo(index)"
            :aria-label="`Ir a recuerdo ${index + 1}`"
          />
        </div>

        <span class="carousel-counter">{{ currentIndex + 1 }} / {{ memories.length }}</span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useCarousel } from '@/composables/useCarousel'
import { memories } from '@/data/content'
import MemoryCard from './MemoryCard.vue'

const {
  currentIndex,
  isPlaying,
  next,
  prev,
  goTo,
  togglePlay,
  startAutoPlay,
  stopAutoPlay
} = useCarousel(memories)

const prevIndex = computed(() => (currentIndex.value - 1 + memories.length) % memories.length)
const nextIndex = computed(() => (currentIndex.value + 1) % memories.length)
</script>

<style scoped>
.carousel-section {
  padding-top: 40px;
}

.carousel-hint {
  text-align: center;
  color: var(--text-muted);
  font-size: 0.95rem;
  margin-top: -32px;
  margin-bottom: 48px;
}

.carousel-wrapper {
  display: flex;
  align-items: center;
  gap: 16px;
  position: relative;
}

.carousel-viewport {
  flex: 1;
  position: relative;
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.carousel-slide {
  position: absolute;
  width: 100%;
  opacity: 0;
  transition: opacity 0.5s ease;
  pointer-events: none;
}

.carousel-slide.active {
  opacity: 1;
  pointer-events: auto;
}

.slide-content {
  width: 100%;
}

.carousel-btn {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: var(--dark-card);
  color: var(--text);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
  flex-shrink: 0;
  z-index: 2;
}

.carousel-btn:hover {
  background: var(--dark-elevated);
  border-color: var(--primary);
  color: var(--primary);
  transform: scale(1.1);
}

.carousel-controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-top: 24px;
}

.control-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: var(--dark-card);
  color: var(--text);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
}

.control-btn:hover {
  background: var(--dark-elevated);
  color: var(--primary);
  border-color: var(--primary);
}

.carousel-dots {
  display: flex;
  gap: 8px;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  background: rgba(255, 255, 255, 0.2);
  cursor: pointer;
  transition: all 0.3s;
  padding: 0;
}

.dot.active {
  background: var(--primary);
  box-shadow: 0 0 8px rgba(0, 230, 118, 0.4);
  width: 28px;
  border-radius: 5px;
}

.carousel-counter {
  color: var(--text-muted);
  font-size: 0.85rem;
  font-weight: 500;
  min-width: 50px;
  text-align: center;
}

@media (max-width: 768px) {
  .carousel-btn {
    width: 40px;
    height: 40px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  .carousel-btn--prev { left: 4px; }
  .carousel-btn--next { right: 4px; }

  .carousel-viewport {
    min-height: 400px;
  }
}

@media (max-width: 480px) {
  .carousel-btn--prev { left: 0; }
  .carousel-btn--next { right: 0; }
}
</style>
