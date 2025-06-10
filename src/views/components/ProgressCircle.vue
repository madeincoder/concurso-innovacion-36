<template>
  <div class="circle-loader-container">
    <svg class="circle-loader" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="220" height="220" viewBox="0 0 220 220" fill="none">
        <!-- Background Circle (Static) -->
        <circle cx="110" cy="110" r="70" stroke="#f2f2f2" stroke-width="30" fill="none"/>
      
        <!-- Progress Circle -->
        <circle class="progress-circle" cx="110" cy="110" r="70" stroke="#FFD700" stroke-width="30" fill="none" :stroke-dasharray="totalLength" :stroke-dashoffset="offset"/>
        <g xmlns="http://www.w3.org/2000/svg" mask="url(#mask0_6276_22426)">
            <g id="Repeat group 1_inner" data-figma-trr="r20u0-0f">
            <rect x="109.004" y="0.00488281" width="2" height="220" fill="white" fill-opacity="0.89"/>
            </g>
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#Repeat%20group%201_inner" transform="translate(39.3773 -28.6093) rotate(18)"/>
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#Repeat%20group%201_inner" transform="translate(85.6681 -43.6501) rotate(36)"/>
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#Repeat%20group%201_inner" transform="translate(134.341 -43.6501) rotate(54)"/>
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#Repeat%20group%201_inner" transform="translate(180.632 -28.6093) rotate(72)"/>
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#Repeat%20group%201_inner" transform="translate(220.009 3.05011e-06) rotate(90)"/>
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#Repeat%20group%201_inner" transform="translate(248.618 39.3773) rotate(108)"/>
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#Repeat%20group%201_inner" transform="translate(263.659 85.668) rotate(126)"/>
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#Repeat%20group%201_inner" transform="translate(263.659 134.341) rotate(144)"/>
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#Repeat%20group%201_inner" transform="translate(248.618 180.632) rotate(162)"/>
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#Repeat%20group%201_inner" transform="translate(220.009 220.009) rotate(-180)"/>
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#Repeat%20group%201_inner" transform="translate(180.632 248.618) rotate(-162)"/>
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#Repeat%20group%201_inner" transform="translate(134.341 263.659) rotate(-144)"/>
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#Repeat%20group%201_inner" transform="translate(85.668 263.659) rotate(-126)"/>
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#Repeat%20group%201_inner" transform="translate(39.3773 248.618) rotate(-108)"/>
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#Repeat%20group%201_inner" transform="translate(4.46546e-07 220.009) rotate(-90)"/>
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#Repeat%20group%201_inner" transform="translate(-28.6093 180.632) rotate(-72)"/>
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#Repeat%20group%201_inner" transform="translate(-43.6501 134.341) rotate(-54)"/>
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#Repeat%20group%201_inner" transform="translate(-43.65 85.668) rotate(-36)"/>
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#Repeat%20group%201_inner" transform="translate(-28.6093 39.3773) rotate(-18)"/>
        </g>
        <!-- Percentage Text -->
        <text x="50%" y="50%" text-anchor="middle" dy=".3em" class="percentage">{{ progress }}%</text>
    </svg>
  </div>
</template>
<script>
    import { onMounted, ref } from 'vue';
    import gsap from 'gsap';

    export default {
        name: 'ProgressCircle',
        setup() {
            // Progress values
            const progress = ref(0);
            const totalLength = 2 * Math.PI * 70; // Circumference of the circle (2 * pi * radius)
            const offset = ref(totalLength);

            const duration = 5; // Duration of the animation (in seconds)
            const intervalTime = (duration * 1000) / 100; // Time for each step (duration/100 steps)

            // Update progress function
            const updateProgress = () => {
                if (progress.value < 100) {
                    progress.value += 1; // Increment progress
                    offset.value = totalLength - (totalLength * progress.value) / 100; // Calculate the new stroke-dashoffset
                }
            };

            // Start the progress animation
            onMounted(() => {
                const progressInterval = setInterval(updateProgress, intervalTime);
                // Stop the animation once it reaches 100%
                setTimeout(() => clearInterval(progressInterval), duration * 1000);
            });

            return {
                progress,
                offset,
                totalLength
            };
        }
    };
</script>
<style scoped>
    .circle-loader-container {
        display: block;
        margin: auto;
        position: relative;
        width: 220px;
        height: 220px;
    }

    .percentage {
        font-size: 24px;
        font-weight: bold;
        fill: #000;
        text-anchor: middle;
    }
</style>