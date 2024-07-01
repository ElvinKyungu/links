import { ref, onMounted } from 'vue'
import gsap from 'gsap'

export function useGsapAnimation(y: number, duration: number, delay: number) {
  const elementRef = ref<HTMLElement | null>(null)

  const animateOnIntersect = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        gsap.fromTo(entry.target, 
          { opacity: 0, y }, 
          { opacity: 1, y: 0, duration, ease: 'power2.out', delay }
        )
        observer.unobserve(entry.target)
      }
    })
  }

  const observer = new IntersectionObserver(animateOnIntersect, {
    threshold: 0.1
  })

  onMounted(() => {
    if (elementRef.value) observer.observe(elementRef.value)
  })

  return elementRef
}
