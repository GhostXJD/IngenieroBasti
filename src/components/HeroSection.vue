<template>
  <section class="hero">
    <div class="hero-bg">
      <div class="dna-helix"></div>
    </div>
    <div class="container">
      <div class="hero-content">
        <div class="hero-badge">🎓 2026</div>
        <h1 class="hero-title">{{ heroData.title }}</h1>
        <p class="hero-subtitle">{{ heroData.subtitle }}</p>
        <div class="hero-decoration">
          <span class="dna-icon">🧬</span>
          <span class="flask-icon">🔬</span>
          <span class="micro-icon">🦠</span>
        </div>
        <a href="#memories" class="hero-cta">
          Ver recuerdos
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { hero } from '@/data/content'
const heroData = hero
</script>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 80px 0;
}

.hero-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.dna-helix {
  position: absolute;
  top: -50%;
  left: -10%;
  width: 120%;
  height: 200%;
  background:
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent 30px,
      rgba(0, 230, 118, 0.03) 30px,
      rgba(0, 230, 118, 0.03) 32px
    ),
    repeating-linear-gradient(
      90deg,
      transparent,
      transparent 30px,
      rgba(0, 176, 255, 0.03) 30px,
      rgba(0, 176, 255, 0.03) 32px
    );
  transform: rotate(-20deg);
  animation: dnaFloat 20s ease-in-out infinite;
}

@keyframes dnaFloat {
  0%, 100% { transform: rotate(-20deg) translateY(0); }
  50% { transform: rotate(-20deg) translateY(-30px); }
}

.hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
}

.hero-badge {
  display: inline-block;
  padding: 8px 24px;
  background: var(--primary-dim);
  border: 1px solid rgba(0, 230, 118, 0.3);
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--primary);
  margin-bottom: 24px;
  animation: fadeInDown 0.8s ease-out;
}

.hero-title {
  font-family: var(--font-title);
  font-size: clamp(2.5rem, 8vw, 5rem);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 16px;
  background: linear-gradient(135deg, #fff 0%, var(--primary) 50%, var(--accent) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: fadeInUp 0.8s ease-out 0.2s both;
}

.hero-subtitle {
  font-size: clamp(1.1rem, 3vw, 1.6rem);
  font-weight: 300;
  color: var(--text-muted);
  margin-bottom: 32px;
  animation: fadeInUp 0.8s ease-out 0.4s both;
}

.hero-decoration {
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-bottom: 48px;
  font-size: 2rem;
  animation: fadeInUp 0.8s ease-out 0.6s both;
}

.hero-decoration span {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: var(--dark-card);
  border: 1px solid rgba(255, 255, 255, 0.06);
  animation: iconBounce 3s ease-in-out infinite;
}

.hero-decoration span:nth-child(2) { animation-delay: 0.5s; }
.hero-decoration span:nth-child(3) { animation-delay: 1s; }

@keyframes iconBounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
}

.hero-cta {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 32px;
  background: linear-gradient(135deg, var(--primary), #00C853);
  color: var(--dark);
  font-family: var(--font-title);
  font-weight: 600;
  font-size: 1rem;
  border-radius: 50px;
  text-decoration: none;
  transition: transform 0.3s, box-shadow 0.3s;
  animation: fadeInUp 0.8s ease-out 0.8s both;
}

.hero-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 32px rgba(0, 230, 118, 0.3);
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeInDown {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
