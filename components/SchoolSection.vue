<template>
  <section ref="schoolSectionRef" id="schools" :style="{ height: sectionHeight }">
    <div
      ref="schoolContentRef"
      id="school-content"
      class="w-full lg:py-24 bg-gray-50 dark:bg-gray-800 border-t border-b border-gray-100 dark:border-gray-700"
    >
      <div class="section-layout">
        <div class="scroll-hidden py-16 mx-auto max-w-screen-xl grid lg:grid-cols-2 lg:gap-16">
          <div class="left mb-16 lg:mb-0">
            <div class="flex flex-col justify-center school-title-container">
              <h1
                class="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white md:text-4xl mb-2"
              >
                Schule
              </h1>
              <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
                Neben meiner Arbeit als Softwareentwickler bilde ich mich weiter. Da ich die BMS
                wärend der Lehre gemacht habe konnte ich direkt nach der Lehre mein Studium an einer
                Fachhochschule beginnen.
              </p>
            </div>
          </div>

          <div class="right">
            <ol class="relative border-s border-gray-200 dark:border-gray-700">
              <School
                time="Sommer 2021 - Sommer 2025"
                title="Berufsmaturitätsschule Zürich"
                text="Wärend vier Jahren wurde ich an der BMS in Zürich in sämtlichen Schulfächern
                  unterrichtet und ich habe meine Berufsmaturität erhalten. Dieser Abschluss
                  ermöglicht es mir, an eine Fachhochschule zu gehen."
                link="https://www.bms-zuerich.ch"
              />

              <School
                time="Sommer 2021 - Sommer 2025"
                title="Technische Berufsschule Zürich"
                text="Die Module an der TBZ ermöglichten es mir, als angehender Informatiker in der
                  Applikationsentwicklung neues Wissen für meinen Beruf zu erlangen, meine
                  Fähigkeiten zu erweitern und mich optimal auf die Anforderungen meines zukünftigen
                  Berufs vorzubereiten."
                link="https://tbz.ch"
              />

              <School
                time="Seit Sommer 2025"
                title="Ostschweizer Fachhochschule"
                text="Im Sommer 2025 habe ich mein Informatikstudium an der Ost begonnen."
                link="https://www.ost.ch/de/studium/informatik/bachelor-informatik"
              />
            </ol>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const schoolSectionRef = ref<HTMLElement | null>(null)
const schoolContentRef = ref<HTMLElement | null>(null)
const sectionHeight = ref<string>('0px')

// Affects the scroll speed of the parallax effect. The higher the number, the slower the parallax effect.
const parallaxSpeedDivisor = 3

onMounted(() => {
  setSectionHeightToContentHeight()
  window.onresize = setSectionHeightToContentHeight

  window.addEventListener('scroll', () => {
    if (!schoolContentRef.value) return

    if (schoolContentRef.value) {
      schoolContentRef.value.style.marginTop = `${
        getScrollProgress(schoolContentRef.value) / parallaxSpeedDivisor
      }px`
    }
  })

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('scroll-show')
      }
    })
  })

  const hiddenElements = document.querySelectorAll('.scroll-hidden')
  hiddenElements.forEach((element) => {
    observer.observe(element)
  })
})

function setSectionHeightToContentHeight() {
  if (!schoolContentRef.value) return
  // max scroll progress and height of the element
  sectionHeight.value = `${
    getMaxScrollProgress(schoolContentRef.value) + schoolContentRef.value.clientHeight
  }px`
}
function getDistanceFromTopOfElementToTopOfPage(element: HTMLElement) {
  var rect = element.getBoundingClientRect()
  var scrollTop = window.scrollY || document.documentElement.scrollTop
  return rect.top + scrollTop
}
function getDistanceFromBottomOfElementToTopOfPage(element: HTMLElement) {
  var rect = element.getBoundingClientRect()
  var scrollTop = window.scrollY || document.documentElement.scrollTop
  return rect.bottom + scrollTop + rect.bottom - rect.top
}
function getScrollProgress(element: HTMLElement) {
  return scrollY - getDistanceFromTopOfElementToTopOfPage(element) + element.scrollHeight
}
function getMaxScrollProgress(element: HTMLElement) {
  /* NotImplemented */
  return 650
}
</script>

<style scoped>
@import '@/assets/css/layout.css';

/* Scroll Animation */
@media (min-width: 1024px) {
  .left {
    display: flex;
    justify-content: center;
    position: relative;
  }

  .right {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  .school-title-container {
    position: sticky;
    top: 50%;
    height: 300px;
  }

  .school {
    margin-bottom: 200px;
  }
}

/* Parallax Effect */
#school-content {
  position: absolute;
}

.scroll-hidden {
  opacity: 0;
  filter: blur(5px);
  transform: translateX(-100px);
  transition: all 1s;
}

.scroll-show {
  opacity: 1;
  filter: blur(0);
  transform: translateX(0);
}

@media (prefer-reduces-motion) {
  .scroll-hidden {
    transition: none;
  }
}
</style>
