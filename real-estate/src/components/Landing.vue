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
            <b-carousel-slide  class="homeimage" img-src="alexandra-gorn-485551-unsplash.jpg">
            </b-carousel-slide>

            <!-- Slides with custom text -->
            <b-carousel-slide class="homeimage" img-src="rawpixel-1053187-unsplash.jpg">
            </b-carousel-slide>

            <!-- Slides with image only -->
            <b-carousel-slide class="homeimage" img-src="alberto-castillo-q-346020-unsplash.jpg">
            </b-carousel-slide>

            <!-- Slides with img slot -->
            <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
            <b-carousel-slide class="homeimage" img-src="scott-webb-167099-unsplash.jpg">
            </b-carousel-slide>


        </b-carousel>

        <p class="mt-4">
            Slide #: {{ slide }}<br>
            Sliding: {{ sliding }}
        </p>

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
        image:{
            image1: '../assests/alexandra-gorn-485551-unsplash.jpg'
        }
    }
</script>

<style scoped>

    .homeimage{
        height: 30rem;
        background: top fixed;
    }

</style>