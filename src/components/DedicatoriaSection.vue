<template>
  <section class="section dedicatoria-section">
    <div class="container">
      <h2 class="section-title">{{ dedicatoriaData.title }}</h2>
      <div class="dedicatoria-card">
        <div class="quote-icon">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" opacity="0.15">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
          </svg>
        </div>
        <div class="dedicatoria-content">
          <p
            v-for="(paragraph, index) in dedicatoriaData.paragraphs"
            :key="index"
            class="dedicatoria-text"
            :style="{ animationDelay: `${index * 0.3}s` }"
          >
            {{ paragraph }}
          </p>
        </div>
        <p class="dedicatoria-signature">{{ dedicatoriaData.signature }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { dedicatoria } from '@/data/content'
const dedicatoriaData = dedicatoria
</script>

<style scoped>
.dedicatoria-section {
  padding-bottom: 40px;
}

.dedicatoria-card {
  max-width: 650px;
  margin: 0 auto;
  padding: 48px 40px;
  background: var(--dark-card);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: var(--radius);
  position: relative;
  animation: fadeIn 0.8s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.quote-icon {
  position: absolute;
  top: 24px;
  left: 24px;
  color: var(--primary);
}

.dedicatoria-content {
  position: relative;
  z-index: 1;
  margin-bottom: 32px;
}

.dedicatoria-text {
  font-size: 1.05rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 20px;
  animation: fadeIn 0.8s ease-out both;
}

.dedicatoria-text:last-child {
  margin-bottom: 0;
}

.dedicatoria-signature {
  font-family: var(--font-title);
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--primary);
  text-align: right;
  padding-top: 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}

@media (max-width: 768px) {
  .dedicatoria-card {
    padding: 40px 24px;
  }

  .dedicatoria-text {
    font-size: 0.95rem;
    line-height: 1.7;
  }
}
</style>
