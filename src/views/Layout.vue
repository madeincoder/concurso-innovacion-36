<template>

    <div class=" bg-yellow relative overflow-hidden px-5">
        <div class="absolute top-1/2 left-0 -translate-y-1/2 w-full">
            <MarqueeComponent 
                :items="['transforma', 'imagina', 'colabora', 'crea', 'avanza']" 
                backgroundColor="#00F8F8" 
                Color="#025F1D"
                :direction="'left'"
            />
        </div>
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[30deg] lg:rotate-[16deg] origin-center w-[150vw]">
            <MarqueeComponent 
                :items="['transforma', 'imagina', 'colabora', 'crea', 'avanza']" 
                backgroundColor="#FC9BB3" 
                Color="#24105F"
                :direction="'right'"
            />
        </div>
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[-30deg] lg:rotate-[-16deg] origin-center w-[150vw]">
            <MarqueeComponent 
                :items="['transforma', 'imagina', 'colabora', 'crea', 'avanza']" 
                backgroundColor="#E40046" 
                Color="#FFD700"
                :direction="'right'"
            />
        </div>
        
        <main class="relative z-50 flex flex-col items-center justify-between h-full min-h-screen">
            <div class="flex items-center justify-center mt-10 mb-5">
                <!-- <Logo v-if="!isLoginPage" /> -->
                 <Logo />
            </div>
            
            <router-view />

            <div class="mb-6">
                 <div class="my-9 flex justify-center space-x-5">
                    <a href="#">
                        <img
                            src="/image/footer-logo-1.png"
                            alt="Gobierno República Dominicana"
                            class="max-w-[75px] w-auto"
                        />
                    </a>
                    <a href="#">
                        <img
                            src="/image/footer-logo-2.png"
                            alt="Bloomberg Philanthropies"
                            class="max-w-[90px] w-auto"
                        />
                    </a>
                    
                </div>
                <p class="text-center text-black/70  text-sm">2025 República de ideas. Todos los derechos reservados</p>
            </div>
        </main>
    </div>

</template>

<script>
    import Logo from "@/views/Logo.vue";
    import MarqueeComponent from "@/views/MarqueeComponent.vue";
    import { computed } from 'vue';
    import { useRoute } from 'vue-router';
    export default {
        name: "Layout",
        components: {
            Logo,
            MarqueeComponent
        },
        setup() {
            const route = useRoute();
            const isLoginPage = computed(() => 
                route.name === "Login"
            );
            return {
                isLoginPage,
            };
        }
    };
</script>