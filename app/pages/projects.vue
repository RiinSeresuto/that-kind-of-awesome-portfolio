<script setup>
    import placeholderImage from "~/assets/images/placeholder.png";

    useHead({
        title: "Projects",
    });

    const { data: projects } = await useAsyncData("projects", () =>
        queryCollection("projects").all(),
    );

    const personalProjects = computed(() =>
        projects.value?.filter((p) => p.meta.type === "personal"),
    );

    const handledProjects = computed(() =>
        projects.value?.filter((p) => p.meta.type === "professional"),
    );
</script>

<template>
    <div>
        <h1>PROJECTS</h1>

        <h2>Professional / Handled Projects</h2>

        <div class="project-grid">
            <Card
                v-for="(project, i) in handledProjects"
                :key="'handled-' + i"
                class="project-card"
                style="overflow: hidden"
            >
                <template #header>
                    <img
                        :src="project.screenshot || placeholderImage"
                        alt="Project screenshot"
                        class="project-image"
                    />
                </template>

                <template #title>
                    <div class="stacks">
                        <Badge
                            v-for="stack in project.stacks"
                            size="small"
                            severity="contrast"
                            class="badge-skill"
                            :value="stack"
                        >
                        </Badge>
                    </div>
                    <strong>{{ project.title.toLocaleUpperCase() }}</strong>
                </template>

                <template #subtitle>
                    {{ project.company }}
                </template>

                <template #content>
                    <ul class="responsibility-list">
                        <li
                            v-for="(task, j) in project.responsibilities"
                            :key="j"
                        >
                            {{ task }}
                        </li>
                    </ul>
                </template>
            </Card>
        </div>

        <h2>Personal Projects</h2>

        <div class="project-grid">
            <Card
                v-for="(project, i) in personalProjects"
                :key="'personal-' + i"
                class="project-card"
                style="overflow: hidden"
            >
                <template #header>
                    <img
                        :src="project.screenshot || placeholderImage"
                        alt="Project screenshot"
                        class="project-image"
                    />
                </template>

                <template #title>
                    <div class="stacks">
                        <Badge
                            v-for="stack in project.stacks"
                            size="small"
                            severity="contrast"
                            class="badge-skill"
                            :value="stack"
                        >
                        </Badge>
                    </div>
                    <strong>{{ project.title.toLocaleUpperCase() }}</strong>
                </template>

                <template #content>
                    <p>{{ project.description }}</p>
                </template>
            </Card>
        </div>
    </div>
</template>

<style scoped>
    .project-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 1rem;
        margin-bottom: 2rem;
    }

    .project-image {
        width: 100%;

        object-fit: cover;
        display: block;
        border-radius: inherit;
    }

    .stacks {
        display: flex;
        flex-wrap: wrap;
        gap: 4px;
        margin-bottom: 8px;
    }

    .badge-skill {
        background-color: var(--p-card-color);
    }
</style>
