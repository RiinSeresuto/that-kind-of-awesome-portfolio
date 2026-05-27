<script setup>
    useHead({
        title: "Home",
    });

    let skills = [
        {
            name: "HTML",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
        },
        {
            name: "CSS",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
        },
        {
            name: "JavaScript",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
        },
        {
            name: "PHP",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
        },
        {
            name: "MySQL",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg",
        },
        {
            name: "React",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg",
        },
        {
            name: "Next JS",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
        },
        {
            name: "Astro",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/astro/astro-original.svg",
        },
        {
            name: "Yii",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/yii/yii-original.svg",
        },
        {
            name: "Laravel",
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
        },
        // {
        // 	name: "CSS",
        // 	logo: "",
        // },
    ];
</script>

<template>
    <div id="content">
        <h1>HELLO!</h1>
        <p id="tagline">
            I am a developer, based on the Philippines. I create things that
            live on the internet, whether that be websites, applications, or
            anything in between.
        </p>

        <h2>Skills</h2>

        <div id="skills">
            <div v-for="skill in skills">
                <div class="skill-block">
                    <img
                        :src="skill.logo"
                        :alt="skill.name + ' logo'"
                        class="skill-logo"
                    />

                    <span class="skill-name">{{ skill.name }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    #content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        min-height: 60vh;

        #tagline {
            max-width: 800px;
            width: 100%;

            font-size: var(--step-1);
        }

        #skills {
            max-width: 500px;
            width: 100%;

            display: flex;
            gap: 16px;
            flex-wrap: wrap;

            .skill-block {
                display: flex;
                align-items: center;
                gap: 8px;

                border: 1px solid black;
                padding: 4px 8px;
                border-radius: 4px;

                .skill-logo {
                    height: 1rem;
                }
            }
        }
    }
</style>
