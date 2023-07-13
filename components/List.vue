<template>
    <div>
        <h3 :id="place.id" >
            <button>
                View {{ place.name }}
            </button>
        </h3>
        <div :id="place.id" >
            <div>{{ place.info }}</div>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps({
        place: {
            type: Object,
            require: true
        }
    })
</script>

<style scoped>
    button {
        background-color: rgb(172, 255, 176);
        color: rgb(0, 0, 0);
        border: none;
        padding: 0.5rem 1rem;
        border-radius: 0.4rem;
        cursor: pointer;
        font-weight: 600;
    }
</style>