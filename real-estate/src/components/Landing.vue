<template>
    <div>

        <b-carousel id="carousel1"
                    style="text-shadow: 1px 1px 2px #333;"
                    controls
                    indicators
                    background="#ababab"
                    :interval="4000"
                    img-width="1024"
                    img-height="480"
                    v-model="slide"
                    @sliding-start="onSlideStart"
                    @sliding-end="onSlideEnd">

            <!-- Text slides with image -->
            <b-carousel-slide  class="homeimage" img-src="alexandra-gorn-485551-unsplash.jpg ">
                <b-row align-v="start">
                    <b-col>
                        <h1>Parker Homes</h1>
                    </b-col>
                </b-row>

            </b-carousel-slide>

            <!-- Slides with custom text -->
            <b-carousel-slide class="homeimage" img-src="rawpixel-1053187-unsplash.jpg">
                <b-row align-v="start">
                    <b-col>
                        <h1>Parker Homes</h1>
                    </b-col>
                </b-row>
            </b-carousel-slide>

            <!-- Slides with image only -->
            <b-carousel-slide class="homeimage" img-src="alberto-castillo-q-346020-unsplash.jpg">
                <b-row align-v="start">
                    <b-col>
                        <h1>Parker Homes</h1>
                    </b-col>
                </b-row>
            </b-carousel-slide>

            <!-- Slides with img slot -->
            <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
            <b-carousel-slide class="homeimage" img-src="scott-webb-167099-unsplash.jpg">
                <b-row align-v="start">
                    <b-col>
                        <h1>Parker Homes</h1>
                    </b-col>
                </b-row>
            </b-carousel-slide>


        </b-carousel>


    </div>
</template>

<script>
    export default {
        name: "Landing",
        data () {
            return {
                slide: 0,
                sliding: null
            }
        },
        methods: {
            onSlideStart (slide) {
                this.sliding = true
            },
            onSlideEnd (slide) {
                this.sliding = false
            }
        },
    }
</script>

<style scoped>

    .homeimage{
        max-height: 33rem;
        background: top fixed no-repeat;
        -webkit-background-size: cover;
        background-size: cover;
    }

    h1{
        font-size: 10rem;
        opacity: .75;
        color: 	#fffdd0;
    }


</style>