<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-icons">
          <span>🧬</span>
          <span>🔬</span>
          <span>🎓</span>
        </div>
        <p class="footer-text">
          Hecho con <span class="footer-heart">❤️</span> para celebrar este gran logro
        </p>
        <p class="footer-subtext">
          Basti · Ingeniero Civil en Biotecnología · 2026
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding: 48px 0 32px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  margin-top: 48px;
}

.footer-content {
  text-align: center;
}

.footer-icons {
  display: flex;
  justify-content: center;
  gap: 12px;
  font-size: 1.5rem;
  margin-bottom: 16px;
}

.footer-text {
  font-size: 0.95rem;
  color: var(--text-muted);
  margin-bottom: 8px;
}

.footer-heart {
  color: #ff4081;
  display: inline-block;
  animation: heartBeat 1.5s ease-in-out infinite;
}

@keyframes heartBeat {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.2); }
}

.footer-subtext {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.3);
}
</style>
