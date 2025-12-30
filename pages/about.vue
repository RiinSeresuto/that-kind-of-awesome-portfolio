<script setup>
    useHead({
        title: "About",
    });

    const events = [
        {
            title: "Started Learning Web Dev",
            description: "HTML, CSS, and JavaScript basics.",
            date: "2019",
        },
        {
            title: "First Freelance Project",
            description: "Built a small business website.",
            date: "2020",
        },
        {
            title: "Full-Stack Developer",
            description: "Working with Vue, Nuxt, PHP, and Node.",
            date: "2022",
        },
        {
            title: "Present",
            description: "Building personal projects and refining skills.",
            date: "Now",
        },
    ];
</script>

<template>
    <div>
        <h1>ABOUT</h1>
        <p>
            Full-Stack Developer experienced in providing highly functional
            web-based application and web solutions. Skilled in designing,
            developing, and testing web-application which caters the needs of
            the users.
        </p>

        <Timeline :value="events">
            <template #content="slotProps">
                <div class="timeline-card">
                    <h4>{{ slotProps.item.title }}</h4>
                    <p>{{ slotProps.item.description }}</p>
                    <small>{{ slotProps.item.date }}</small>
                </div>
            </template>
        </Timeline>
    </div>
</template>

<style lang="scss" scoped>
    .p-timeline-event-opposite {
        display: none !important;
    }
</style>
