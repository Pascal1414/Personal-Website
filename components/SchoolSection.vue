<template>
  <section ref="schoolSectionRef" id="schools" :style="{ height: sectionHeight }">
    <div ref="schoolContentRef" id="school-content" class="w-[90%] md:w-[85%] lg:w-[70%] ml-[auto] mr-[auto] z-[-10]">
      <div class="scroll-hidden py-8 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2  lg:gap-16">
        <div class="left">
          <div class="flex flex-col justify-center school-title-container">
            <h1 class="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">
              School
            </h1>
            <p class="mb-4 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
              Wärend ich im Betrieb arbeite gehe ich in die Schule.
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
              <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">An einem Tag der Woche besuche ich die
                Berufsmaturitätsschule Zürich. Dort lerne ich klassische Schulfächer wie Mathematik, Physik, Englisch oder
                Deutsch.</p>
            </div>

            <!-- TBZ -->
            <div class=" p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <ClientOnly>
                <Icon name="lucide:school" class="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" />
              </ClientOnly>
              <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Technische
                Berufsschule Zürich
              </h5>
              <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Während einem halben Tag in der Woche besuche
                ich die TBZ. Dort werden wir über verschiedene Themen der Informatik unterrichtet.</p>
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

onMounted(() => {
  setSectionHeightToContentHeight();
  window.onresize = setSectionHeightToContentHeight;

  window.addEventListener("scroll", () => {
    if (schoolContentRef.value) {
      schoolContentRef.value.style.marginTop = `${scrollY / 3}px`;
    }
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
  const sectionHeightValue = schoolContentRef.value?.scrollHeight || 0;
  sectionHeight.value = `${sectionHeightValue + 450}px`;
}
</script>

<style scoped>
@media (min-width: 1024px) {
  #schools {
    margin-top: 100px;
    margin-bottom: 300px;
  }
}

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
    height: 100px;
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
