<template>
  <div class="Marquee gap-5 overflow-hidden max-w-full w-full flex items-center py-3 sm:py-5" :style="{ background: backgroundColor }">
    <div class="Marquee-content flex items-center gap-7" ref="marqueeContent">
      <!-- Dynamically render marquee items -->
      <div class="Marquee-tag flex items-center gap-3" v-for="(item, index) in repeatedItems" :key="index">
        <svg class="mt-1.5 lg:h-5 lg:w-5 h-4 w-4" :style="{fill:Color}" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 210 210" xml:space="preserve">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M179.07,105L30.93,210V0L179.07,105z"></path> </g>
        </svg>
        <h3 :style="{color:Color}" class=" font-secondary text-xl md:text-2xl font-medium">{{ item }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MarqueeComponent',
  props: {
    items: {
      type: Array,
      required: true
    },
    backgroundColor: {
      type: String,
      default: '#E40046'
    },
    Color: {
      type: String,
      default: '#24105F'
    },
    direction: {
      type: String,
      default: 'left', // Default to left
      validator: value => ['left', 'right'].includes(value)
    }
  },
  data() {
    return {
      repeatedItems: []
    };
  },
  mounted() {
    // Generate the repeated items dynamically on mount
    this.generateRepeatedItems();
    
    // Use $nextTick to ensure the DOM is fully rendered before accessing scrollWidth
    this.$nextTick(() => {
      this.startMarquee();
    });
  },
  methods: {
    // Method to generate the repeated items dynamically
    generateRepeatedItems() {
      const totalItemsCount = 30; // Set how many times the items should repeat
      const repeatedItems = [];

      // Repeat the items dynamically based on the total count
      for (let i = 0; i < totalItemsCount; i++) {
        repeatedItems.push(this.items[i % this.items.length]);
      }

      this.repeatedItems = repeatedItems; // Update the repeatedItems array
    },

    // Starts the marquee animation
    startMarquee() {
      const marqueeContent = this.$refs.marqueeContent;
      const listWidth = marqueeContent.scrollWidth;
      const speed = listWidth / 40;

      // Clear previous animation
      marqueeContent.style.animation = '';

      // Set unique keyframe name based on direction (left or right)
      const animationName = `marquee-${this.direction}`;
      const keyframesStart = this.direction === 'left' ? 'translateX(0%)' : 'translateX(-50%)';
      const keyframesEnd = this.direction === 'left' ? 'translateX(-50%)' : 'translateX(0%)';

      marqueeContent.style.animation = `${animationName} ${speed}s linear infinite`;

      // Dynamically create the @keyframes animation with a unique name
      const style = document.createElement('style');
      style.innerHTML = `
        @keyframes ${animationName} {
          0% {
            transform: ${keyframesStart};
          }
          100% {
            transform: ${keyframesEnd};
          }
        }
      `;
      document.head.appendChild(style);
    }
  }
};
</script>

<style scoped>
.Marquee {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.Marquee-content {
  display: flex;
}

.Marquee-tag {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all .2s ease;
}

.Marquee-tag:hover {
  cursor: pointer;
}
</style>
