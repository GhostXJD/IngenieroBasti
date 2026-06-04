import { ref, computed, onMounted, onUnmounted } from 'vue'

export function useCarousel(items, { autoPlayInterval = 15000 } = {}) {
  const currentIndex = ref(0)
  const isPlaying = ref(true)
  let timer = null

  const currentItem = computed(() => items[currentIndex.value])

  function next() {
    currentIndex.value = (currentIndex.value + 1) % items.length
    resetTimer()
  }

  function prev() {
    currentIndex.value = (currentIndex.value - 1 + items.length) % items.length
    resetTimer()
  }

  function goTo(index) {
    currentIndex.value = index
    resetTimer()
  }

  function startAutoPlay() {
    if (timer) clearInterval(timer)
    isPlaying.value = true
    timer = setInterval(next, autoPlayInterval)
  }

  function stopAutoPlay() {
    if (timer) {
      clearInterval(timer)
      timer = null
    }
    isPlaying.value = false
  }

  function resetTimer() {
    if (isPlaying.value) {
      if (timer) clearInterval(timer)
      timer = setInterval(next, autoPlayInterval)
    }
  }

  function togglePlay() {
    if (isPlaying.value) stopAutoPlay()
    else startAutoPlay()
  }

  onMounted(() => {
    if (items.length > 1) startAutoPlay()
  })

  onUnmounted(() => {
    if (timer) clearInterval(timer)
  })

  return {
    currentIndex,
    currentItem,
    isPlaying,
    next,
    prev,
    goTo,
    togglePlay,
    startAutoPlay,
    stopAutoPlay
  }
}
