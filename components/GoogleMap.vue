<template>
    <ClientOnly>
        <div class="mapsView" >
            
            <div class="maps">
                <GoogleMap 
                    api-key="AIzaSyCEnh5wG-ap7oAzRcWBPo5geP4GWM43nKo"
                    :center="center"
                    :zoom="zoom"
                    class="placeMaps"
                >
                    <MarkerCluster
                    :options="{
                        position:center
                    }"
                    >
                        <div v-for="place in Places">
                            <PlaceList :place="place" />
                        </div>
                    </MarkerCluster>
    
                </GoogleMap>
            </div>

            <div class="allPlaces" >
                <div v-for="place in Places" class="onePlace" >
                    <div @click="zoomIn(place)" >
                        <List :place="place" />
                    </div>
                </div>
            </div>

        </div>
    </ClientOnly>
</template>

<script setup>

    import { GoogleMap, MarkerCluster } from "vue3-google-map"

    const Places = ref({
        soroti: {
            id: 1,
            name: 'Soroti District',
            info: 'This is the district in Uganda mainly occupied by Eteso',
            lat: 1.713493969242911,
            lng: 33.607548328390926
        },
        kampala: {
            id: 2,
            name: 'Kampala District',
            info: 'This is the district in Uganda mainly occupied by Baganda',
            lat: 0.3459837957248316,
            lng: 32.60035308135854
        },
        mukono: {
            id: 3,
            name: 'Mukono District',
            info: 'This is the district in Uganda mainly occupied by Baganda and Basoga',
            lat: 0.3543981282561241,
            lng: 32.751789656521765
        }
    })

    // defining
    const zoom = ref(10)
    const center = ref({
        lat: 1.4765419321906255,
        lng: 32.416696547152675
    })
    const zoomIn = (item) => {
        center.value = {
            lat: item.lat,
            lng: item.lng
        }
    }

</script>

<style scoped>
    .mapsView {
        display: grid;
        gap: 1rem;
        grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
        background-color: #fff;
        padding: 1rem;
        max-width: 1200px;
        border-radius: 1rem;
    }
    .placeMaps {
        position: relative;
        width: 100%;
        height: 650px;
    }
    .maps {
        border-radius: 0.7rem;
        overflow: hidden;
    }
    .allPlaces {
        border-radius: 0.7rem;
        padding: 1rem;
        background-color: #eee;
    }
    .onePlace {
        padding: 1rem;
        background-color: #fff;
        border-radius: 0.5rem;
        margin-bottom: 1rem;

    }
</style>