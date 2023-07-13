<template>
    <div>
        <CustomMarker
            :options="{
                position: {
                    lat: place.lat,
                    lng: place.lng
                },
                anchorPoint: 'CENTER'
            }"
        >
            <img src="/img/place.svg" alt="map" width="50" height="50" >
        </CustomMarker>
    </div>
</template>

<script setup>

    import { CustomMarker } from 'vue3-google-map'

    const props = defineProps({
        place: {
            type: Object,
            require: true
        }
    })

</script>

<style>
    
</style>