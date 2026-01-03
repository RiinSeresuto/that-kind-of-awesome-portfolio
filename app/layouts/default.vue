<template>
    <div id="card-container">
        <div id="card-content">
            <div id="card-scrollable">
                <div>
                    <div><Header /></div>
                    <div><slot /></div>
                </div>
            </div>
            <div id="card-navigation">
                <div>
                    <Navigation />
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    #card-container {
        position: fixed;
        inset: 0;
        display: flex;
        flex-direction: column;

        padding: 1.5rem;

        #card-content {
            display: flex;
            flex-direction: column;
            height: 100%;

            border: 3px solid #000000;

            #card-scrollable {
                flex: 1;
                display: block;

                overflow-y: auto;
                scrollbar-gutter: stable;
                padding: 1rem;
            }

            #card-navigation {
                flex-shrink: 0;
                padding: 1rem;
            }
        }
    }
</style>
