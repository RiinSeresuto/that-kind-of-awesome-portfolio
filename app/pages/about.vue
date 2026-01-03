<script setup>
    useHead({
        title: "About",
    });

    const workExp = [
        {
            company: "Department of the Interior and Local Government",
            location: "Quezon City, Metro Manila",
            position: [
                {
                    title: "Computer Programmer III",
                    start: "October 2025",
                    end: "Present",
                },
                {
                    title: "Information Systems Analyst II",
                    start: "September 2023",
                    end: "October 2025",
                },
            ],
            description: [
                "Provided developmental plan to develop an interactive and functional web-based application system based on the requirements of the target users within the department.",
                "Conducted systems analysis and design, develop database design and structure using MySQL, and series of application testing.",
                "Provided wireframe and user interface design as part of the development planning process.",
                "Developed an in-house application system using the Yii2 framework to be integrated with the existing system modules of the department such as the single sign on and user management module.",
                "Managed and enhanced an existing application system, ensuring continuous support and improvement to be provided for the end users.",
                "Regularly facilitate meetings to present progress updates, address challenges, and align priorities.",
            ],
        },
    ];
</script>

<template>
    <div>
        <h1>ABOUT</h1>
        <p id="about-text">
            Full-Stack Developer experienced in providing highly functional
            web-based application and web solutions. Skilled in designing,
            developing, and testing web-application which caters the needs of
            the users.
        </p>

        <h2>WORK EXPERIENCE</h2>

        <Timeline :value="workExp">
            <template #content="{ item }">
                <div class="card-wrapper">
                    <Card>
                        <template #content>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <strong>
                                                {{ item.company.toUpperCase() }}
                                            </strong>
                                        </td>
                                        <td class="align-right">
                                            <small class="location">
                                                {{ item.location }}
                                            </small>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="2">&nbsp;</td>
                                    </tr>

                                    <tr
                                        v-for="(pos, i) in item.position"
                                        :key="i"
                                        class="position-block"
                                    >
                                        <td>
                                            {{ pos.title }}
                                        </td>
                                        <td class="align-right">
                                            <small class="position-date">
                                                {{ pos.start }} – {{ pos.end }}
                                            </small>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <ul class="description-list">
                                <li
                                    v-for="(desc, i) in item.description"
                                    :key="i"
                                >
                                    {{ desc }}
                                </li>
                            </ul>
                        </template>
                    </Card>
                </div>
            </template>
        </Timeline>

        <h3>EDUCATION</h3>

        <ul>
            <li>
                <h4>BACHELOR OF SCIENCE IN COMPUTER SCIENCE</h4>
                <h5>
                    <em>
                        Don Mariano Marcos Memorial State University - South La
                        Union Campus
                    </em>
                </h5>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
    .card-wrapper {
        margin-top: 1rem;
        max-width: 800px;
        width: 100%;
    }

    #about-text {
        max-width: 800px;
        width: 100%;
    }

    table {
        width: 100%;

        .position-block:not(:last-child) td {
            border-bottom: 1px dotted #242424;
        }

        .align-right {
            text-align: right;
        }
    }

    :deep(.p-timeline-event-opposite) {
        flex: 0 !important;
        padding: 0 !important;
        margin: 0 !important;
        display: none;
    }

    :deep(.p-timeline-event-content) {
        padding-left: 0;
    }
</style>
