<script setup  lang="ts">
type User = {
    login: string,
    id: number,
    node_id: string,
    avatar_url: string,
    gravatar_id: string,
    url: string,
    html_url: string,
    followers_url: string,
    following_url: string,
    gists_url: string,
    starred_url: string,
    subscriptions_url: string,
    organizations_url: string,
    repos_url: string,
    events_url: string,
    received_events_url: string,
    type: string,
    site_admin: boolean,
}
type Repository = {
    id: number,
    node_id: string,
    name: string,
    full_name: string,
    private: boolean,
    owner: User,
    html_url: string,
    description: string,
    fork: boolean,
    url: string,
    forks_url: string,
    keys_url: string,
    collaborators_url: string,
    teams_url: string,
    hooks_url: string,
    issue_events_url: string,
    events_url: string,
    assignees_url: string,
    branches_url: string,
    tags_url: string,
    blobs_url: string,
    git_tags_url: string,
    git_refs_url: string,
    trees_url: string,
    statuses_url: string,
    languages_url: string,
    stargazers_url: string,
    contributors_url: string,
    subscribers_url: string,
    subscription_url: string,
    commits_url: string,
    git_commits_url: string,
    comments_url: string,
    issue_comment_url: string,
    contents_url: string,
    compare_url: string,
    merges_url: string,
    archive_url: string,
    downloads_url: string,
    issues_url: string,
    pulls_url: string,
    milestones_url: string,
    notifications_url: string,
    labels_url: string,
    releases_url: string,
    deployments_url: string,
    created_at: Date,
    updated_at: Date,
    pushed_at: Date,
    git_url: string,
    ssh_url: string,
    clone_url: string,
    svn_url: string,
    homepage: string,
    size: number,
    stargazers_count: number,
    watchers_count: number,
    language: string,
    has_issues: boolean,
    has_projects: boolean,
    has_downloads: boolean,
    has_wiki: boolean,
    has_pages: boolean,
    has_discussions: boolean,
    forks_count: number,
    mirror_url: string,
    archived: boolean,
    disabled: boolean,
    open_issues_count: number,
    license: string,
    allow_forking: boolean,
    is_template: boolean,
    web_commit_signoff_required: boolean,
    topics: string[],
    visibility: string,
    forks: number,
    open_issues: number,
    watchers: number,
    default_branch: string
}
const { data: repositories } = await useFetch<Repository[]>('https://api.github.com/users/Pascal1414/repos'); 
</script>
<template>
    <section id="repositories">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
            <div
                class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">
                <div
                    class="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-blue-400 mb-2">
                    <Icon name="mdi:git" class="w-3 h-3 me-1.5" />
                    Git
                </div>
                <h1 class="text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-2">Github Repositories</h1>
                <p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-6">
                    Here you can find all my public repositories on Github.
                </p>
            </div>
            <div class="grid md:grid-cols-2 gap-8">
                <div v-for="repository in repositories"
                    class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                    <div class="flex gap-1">
                        <div v-for="topic in repository.topics"
                            class="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 mb-2 gap-5">
                            {{ topic }}
                        </div>
                    </div>
                    <h2 class="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">{{ repository.name }}
                    </h2>
                    <p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">{{ repository.description }}</p>
                    <div class="flex gap-2">
                        <a v-bind:href="repository.html_url" target="_blank" rel="noopener noreferrer"
                            class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            See on Github
                            <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                        <a v-if="repository.homepage != null && repository.homepage != ''" v-bind:href="repository.homepage"
                            target="_blank" rel="noopener noreferrer"
                            class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Open Website
                            <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    </section>
</template>