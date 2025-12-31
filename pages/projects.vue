<script setup>
    import placeholderImage from "~/assets/images/placeholder.png";

    useHead({
        title: "Projects",
    });

    const personalProjects = [
        {
            title: "Test Paper Generator",
            description:
                "A web-based test paper generator build for generating different sets of text paper from the provided test items.",
        },
        {
            title: "Advice Generator",
            description: "A simple advice generator that uses advice API",
        },
        {
            title: "Portfolio Website",
            description:
                "A little space in the internet for curating my projects.",
        },
    ];

    const handledProjects = [
        {
            title: "Asset Management System",
            company: "Department of the Interior and Local Government",
            responsibilities: [
                "Enhanced existing Yii2-based system with new modules",
                "Provided ongoing production support",
                "Refactored legacy components to improve performance and stability",
            ],
        },
        {
            title: "DILG Official Website",
            company: "Department of the Interior and Local Government",
            responsibilities: [
                "Co-developed and integrated core modules, user interface design, enhancements, and improvement of performance",
                "Provided ongoing production support",
            ],
        },
        {
            title: "Local Government Unit Support System",
            company: "Department of the Interior and Local Government",
            responsibilities: [
                "Enhanced the application's user interface by integrating a template to the used framework.",
            ],
        },
        {
            title: "Electronic Client Satisfaction Measument Survey",
            company: "Department of the Interior and Local Government",
            responsibilities: [
                "Provided ongoing production support",
                "Refactored legacy components to improve performance and stability",
            ],
        },
    ];
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
</style>
