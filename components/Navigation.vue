<template>
    <div>
        <nav>
            <ul>
                <li><NuxtLink to="/">Home</NuxtLink></li>
                <li><NuxtLink to="/about">About</NuxtLink></li>
                <li><NuxtLink to="/projects">Projects</NuxtLink></li>
            </ul>
        </nav>
    </div>
</template>

<style lang="scss">
    nav {
        ul {
            padding: 0;
            margin: 0;
            display: flex;
            gap: 8px;

            li {
                list-style: none;
            }
        }
    }
</style>
