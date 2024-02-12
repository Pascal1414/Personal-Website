
<template>
  <section id="school-section">
    <div id="school" class="w-[90%] md:w-[85%] lg:w-[70%] ml-[auto] mr-[auto] z-[-10]" :style="{ height: sectionHeight }">

      <div class="scroll-hidden py-8  mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">

        <div class="left">
          <div class="flex flex-col justify-center school-title-container">
            <h1 class="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">
              School</h1>
            <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">While I am working a go to
              school
            </p>

          </div>
        </div>


        <div class="right">

          <div class="flex flex-col overflow-hidden  gap-5 school-container">
            <!-- Tbz -->
            <div class="lg:max-w-xl p-6  sm:p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800 school">
              <h2 class="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">Technische Berufsschule Zürich
              </h2>
              <p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">Technische Berufsschule Zürich (TBZ) is
                a
                vocational school in Zurich, Switzerland. It is the largest vocational school in the canton of Zurich and
                offers a wide range of vocational training programs.</p>
            </div>

            <!-- BMZ -->
            <div class="w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800">
              <h2 class="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">Berufsmaturitätsschule Zürich
              </h2>
              <p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Vitae dicta earum deserunt perferendis, voluptates, placeat repellat sed reprehenderit
                perspiciatis praesentium </p>

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Scroll Animation */
@media (min-width: 768px) {

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
    top: 100px;
    height: 100px;
  }

  .school-container {}

  .school {
    margin-bottom: 200px;
  }
}

/* Parallax Effect */
#school {
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

@media(prefer-reduces-motion) {
  .scroll-hidden {
    transition: none;
  }
}
</style>
<script setup lang="ts">
onMounted(() => {

  setSectionHeightToContentHeight();

  window.onresize = () => {
    setSectionHeightToContentHeight();
  };

  window.addEventListener('scroll', () => {
    const schoolElement = document.getElementById('school');

    if (schoolElement) {
      schoolElement.style.marginTop = `${scrollY / 3}px`;
    }

  });

  const onserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('scroll-show');
      }
    });
  });

  const hiddenElements = document.querySelectorAll('.scroll-hidden');
  hiddenElements.forEach((element) => {
    onserver.observe(element);
  });

});


function setSectionHeightToContentHeight() {
  const schoolElement = document.getElementById('school');
  const sectionHeight = schoolElement?.clientHeight || 0;

  const schoolSectionContainer = document.getElementById('school-section')
  if (schoolSectionContainer) schoolSectionContainer.style.height = `${sectionHeight + 450}px`;
}
</script>
