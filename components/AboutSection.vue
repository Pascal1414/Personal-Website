<template>
    <section id="about" class="section-layout mt-28 mb-20 lg:mt-[80px]">
        <div class="py-8 mx-auto max-w-screen-xl sm:text-center lg:py-16">
            <h1
                class="mb-4 text-5xl  tracking-tight text-gray-900 font-extrabold lg:text-6xl lg:leading-none dark:text-white lg:text-center xl:px-36 lg:mb-7">
                <span class="welcome-letter">W</span>
                <span class="welcome-letter">e</span>
                <span class="welcome-letter">l</span>
                <span class="welcome-letter">c</span>
                <span class="welcome-letter">o</span>
                <span class="welcome-letter">m</span>
                <span class="welcome-letter">e</span>
            </h1>
            <div class="welcome-body">
                <p class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400 lg:text-center lg:text-xl xl:px-60">
                    Hallo, mein Name ist Pascal und ich bin {{ 18 }} Jahre alt. Aktuell absolviere ich eine Lehre als
                    Informatiker
                    Applikationsentwicklung. Parallel dazu besuche ich die Technische Berufsschule und die
                    Berufsmaturitätsschule in Zürich.</p>
                <div class="flex   flex-row sm:justify-center space-y-0">
                    <a href="https://github.com/Pascal1414" data-tooltip-target="tooltip-github" target="_blank"
                        rel="noopener noreferrer"
                        class="inline-flex items-center justify-center text-gray-500 w-10 h-10 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1">
                        <Icon name="formkit:github" class="w-[100%] h-[100%]" />
                        <span class="sr-only">Github</span>
                    </a>
                    <div id="tooltip-github" role="tooltip"
                        class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                        Github
                        <div class="tooltip-arrow" data-popper-arrow></div>
                    </div>

                    <a href="mailto:pascal.rieder@edu.tbz.ch" data-tooltip-target="tooltip-email"
                        class="inline-flex items-center justify-center text-gray-500 w-10 h-10 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1">
                        <Icon name="material-symbols:mail" class="w-[100%] h-[100%]" />
                        <span class="sr-only">E-mail</span>
                    </a>
                    <div id="tooltip-email" role="tooltip"
                        class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                        Email
                        <div class="tooltip-arrow" data-popper-arrow></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>
@import '@/assets/css/layout.css';

.welcome-letter {
    display: none;
}

.welcome-body {
    opacity: 0;
    filter: blur(5px);
    transition: all 0.5s;
}

.welcome-body-visible {
    opacity: 1;
    filter: blur(0);
}
</style>
<script setup>
onMounted(() => {
    const welcomeLetters = document.querySelectorAll('.welcome-letter');
    const letterTimeout = 150;
    welcomeLetters.forEach((letter, index) => {
        setTimeout(() => {
            letter.style.display = 'inline';
        }, index * letterTimeout);
    });
    setTimeout(() => {
        document.querySelector('.welcome-body').classList.add('welcome-body-visible');
    }, 400);
});
</script>