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
        --color-link-active: #171717;
        --color-link-inactive: #565656;

        ul {
            padding: 0;
            margin: 0;
            display: flex;
            gap: 8px;

            li {
                list-style: none;

                a {
                    text-decoration: none;
                    color: var(--color-link-inactive);
                    font-weight: 700;
                    text-transform: uppercase;

                    &:visited {
                        color: var(--color-link-inactive);
                    }

                    &.router-link-active {
                        color: var(--color-link-active);
                    }
                }
            }
        }
    }
</style>
