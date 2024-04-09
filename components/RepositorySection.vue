<template>
    <section id="repositories" class="py-8 mx-auto max-w-screen-xl lg:py-16 bg-gray-100  dark:bg-gray-900"
        style="  box-shadow: 60px -50px 30px #111827, -60px -50px 30px #111827 ;">
        <div>
            <ClientOnly>
                <div
                    class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">
                    <div
                        class="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-blue-400 mb-2">
                        <Icon name="mdi:git" class="w-3 h-3 me-1.5" />
                        Git
                    </div>
                    <h1 class="text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-2">Github
                        Repositories
                    </h1>
                    <p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-6">
                        Hier finden Sie alle meine öffentlichen Repositories auf Github.
                    </p>
                </div>
            </ClientOnly>

            <div class="grid md:grid-cols-2 gap-8">
                <div v-for="repository in repositories"
                    class="viewport-animate-slide-up bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                    <div class="flex gap-1 flex-wrap">
                        <div v-for="topic in repository.topics"
                            class="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 mb-2 gap-5">
                            {{ topic }}
                        </div>
                    </div>
                    <h2 class="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">{{ repository.name }}
                    </h2>
                    <p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">{{ repository.description }}
                    </p>
                    <div class="flex gap-2 flex-wrap">
                        <a v-bind:href="repository.html_url" target="_blank" rel="noopener noreferrer"
                            class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            See on Github
                            <ClientOnly>
                                <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </ClientOnly>
                        </a>
                        <a v-if="repository.homepage != null && repository.homepage != ''"
                            v-bind:href="repository.homepage" target="_blank" rel="noopener noreferrer"
                            class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Open Website
                            <Icon name="material-symbols:link-rounded" class="w-5 h-5 ms-2 rtl:rotate-180" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup lang="ts">
import type Repository from '~/types/Repository';

const { data: repositories } = await useFetch<Repository[]>('https://api.github.com/users/Pascal1414/repos', {
    onResponse({ request, response, options }) {
        if (response.status === 429) {
            console.log('Rate limit exceeded');
        }
    }
});

onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('viewport-animate-slide-up-visible');
            }
        });
    });

    const hiddenElements = document.querySelectorAll('.viewport-animate-slide-up');
    hiddenElements.forEach((element) => {
        observer.observe(element);
    })
})



</script>
<style scoped>
.viewport-animate-slide-up {
    opacity: 0;
    filter: blur(3px);
    transition: all 0.5s;
    transform: translateY(30px);
}

.viewport-animate-slide-up-visible {
    opacity: 1;
    filter: blur(0);
    transform: translate(0);
}

@media(prefers-reduced-motion) {
    .viewport-animate-slide-up {
        transition: none;
    }
}
</style>
