<template>
  <section ref="schoolSectionRef" id="schools" :style="{ height: sectionHeight }">
    <div ref="schoolContentRef" id="school-content" class="w-full">
      <div class="section-layout">
        <div class="scroll-hidden py-8 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2  lg:gap-16">
          <div class="left">
            <div class="flex flex-col justify-center school-title-container">
              <h1 class="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">
                School
              </h1>
              <p class="mb-4 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
                Neben dem Arbeiten in meinem Ausbildungsbetrieb gehe ich auch in zwei Schulen. Einmal die
                Berufsmaturitätsschule Zürich (BMS) und die Technische Berufsschule Zürich (TBZ). Diese vielseitige
                Ausbildung ermöglicht es mir, theoretisches Wissen in der Schule mit praktischer Erfahrung im Betrieb zu
                verbinden.
              </p>
            </div>
          </div>

          <div class="right">

            <div class="flex flex-col overflow-hidden  gap-5 school-container">
              <!-- BMS -->
              <div class="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <ClientOnly>
                  <Icon name="lucide:school" class="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" />
                </ClientOnly>
                <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  Berufsmaturitätsschule
                </h5>
                <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Einmal pro Woche widme ich mich meiner
                  Ausbildung an der Berufsmaturitätsschule Zürich (BMS). Dort werde ich Unterricht in regulären
                  Schulfächern wie Mathematik, Physik, Englisch und Deutsch unterrichtet. Ein Abschluss einer
                  Berufsmaturitätsschule bietet mir die Möglichkeit, an eine Fachhochschule zu gehen. </p>
              </div>

              <!-- TBZ -->
              <div class=" p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <ClientOnly>
                  <Icon name="lucide:school" class="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" />
                </ClientOnly>
                <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Technische
                  Berufsschule Zürich
                </h5>
                <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Die Module an der TBZ ermöglichen es mir,
                  als
                  angehender Informatiker in der Applikationsentwicklung während einem halben Tag in der Woche neues
                  Wissen
                  für meinen Beruf zu erlangen, meine Fähigkeiten zu erweitern und mich optimal auf die Anforderungen
                  meines zukünftigen Berufs vorzubereiten.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const schoolSectionRef = ref<HTMLElement | null>(null);
const schoolContentRef = ref<HTMLElement | null>(null);
const sectionHeight = ref<string>("0px");

// Affects the scroll speed of the parallax effect. The higher the number, the slower the parallax effect.
const parallaxSpeedDivisor = 3;


onMounted(() => {
  setSectionHeightToContentHeight();
  window.onresize = setSectionHeightToContentHeight;

  window.addEventListener("scroll", () => {
    if (!schoolContentRef.value) return;

    if (schoolContentRef.value) {
      schoolContentRef.value.style.marginTop = `${getScrollProgress(schoolContentRef.value) / parallaxSpeedDivisor}px`;
    }


    console.log("progress", getScrollProgress(schoolContentRef.value));

  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("scroll-show");
      }
    });
  });

  const hiddenElements = document.querySelectorAll(".scroll-hidden");
  hiddenElements.forEach((element) => {
    observer.observe(element);
  });
});

function setSectionHeightToContentHeight() {
  if (!schoolContentRef.value) return;
  // max scroll progress and height of the element
  sectionHeight.value = `${getMaxScrollProgress(schoolContentRef.value) + schoolContentRef.value.clientHeight}px`;
}
function getDistanceFromTopOfElementToTopOfPage(element: HTMLElement) {
  var rect = element.getBoundingClientRect();
  var scrollTop = window.scrollY || document.documentElement.scrollTop;
  return rect.top + scrollTop;
}
function getDistanceFromBottomOfElementToTopOfPage(element: HTMLElement) {
  var rect = element.getBoundingClientRect();
  var scrollTop = window.scrollY || document.documentElement.scrollTop;
  return rect.bottom + scrollTop + rect.bottom - rect.top;
}
function getScrollProgress(element: HTMLElement) {
  return scrollY - getDistanceFromTopOfElementToTopOfPage(element) + element.scrollHeight
}
function getMaxScrollProgress(element: HTMLElement) {
  /* NotImplemented */
  return 650;
}
</script>
<style src="@/assets/css/layout.css" />

<style scoped>
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
  --padding-y: 150px;
  padding-top: var(--padding-y);
  padding-bottom: var(--padding-y);
  background-color: #1f2937;
  --mask:
    radial-gradient(91.68px at 50% 123px, #000 99%, #0000 101%) calc(50% - 82px) 0/164px 51% repeat-x,
    radial-gradient(91.68px at 50% -82px, #0000 99%, #000 101%) 50% 41px/164px calc(51% - 41px) repeat-x,
    radial-gradient(91.68px at 50% calc(100% - 123px), #000 99%, #0000 101%) calc(50% - 82px) 100%/164px 51% repeat-x,
    radial-gradient(91.68px at 50% calc(100% + 82px), #0000 99%, #000 101%) 50% calc(100% - 41px)/164px calc(51% - 41px) repeat-x;
  -webkit-mask: var(--mask);
  mask: var(--mask);
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
