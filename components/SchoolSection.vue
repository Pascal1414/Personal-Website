<template>
  <section ref="schoolSectionRef" id="schools">
    <div
      ref="schoolContentRef"
      class="w-[90%] md:w-[85%] lg:w-[70%] ml-[auto] mr-[auto] z-[-10]"
      :style="{ height: sectionHeight }"
    >
      <div
        class="scroll-hidden py-8 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16"
      >
        <div class="left">
          <div class="flex flex-col justify-center school-title-container">
            <h1
              class="text-gray-900 dark:text-white text-3xl font-extrabold mb-2"
            >
              School
            </h1>
            <p
              class="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400"
            >
              While I am working a go to school
            </p>
          </div>
        </div>

        <div class="right">
          <div class="flex flex-col overflow-hidden gap-5 school-container">
            <!-- Tbz -->
            <div
              class="lg:max-w-xl p-6 sm:p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800 school"
            >
              <h2
                class="text-gray-900 dark:text-white text-3xl font-extrabold mb-2"
              >
                Technische Berufsschule Zürich
              </h2>
              <p
                class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4"
              >
                Technische Berufsschule Zürich (TBZ) is a vocational school in
                Zurich, Switzerland. It is the largest vocational school in the
                canton of Zurich and offers a wide range of vocational training
                programs.
              </p>
            </div>

            <!-- BMZ -->
            <div
              class="w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800"
            >
              <h2
                class="text-gray-900 dark:text-white text-3xl font-extrabold mb-2"
              >
                Berufsmaturitätsschule Zürich
              </h2>
              <p
                class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
                dicta earum deserunt perferendis, voluptates, placeat repellat
                sed reprehenderit perspiciatis praesentium
              </p>
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
  const sectionHeightValue = schoolContentRef.value?.clientHeight || 0;
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
