<template>
    <section class="search-tab">
        <div class="search-bar-and-options">
            <span>Location: </span>
                <gmap-autocomplete
                    @place_changed="setPlace">
                </gmap-autocomplete>
                <button class="teal ui button" @click="usePlace">Add</button>
            <SearchSettings />
        </div>
        <router-view/>
        <nav class="search-nav">
            <router-link to="map">Map</router-link> |
            <router-link to="list">List</router-link>
        </nav>
    </section>
</template>

<script>
/* eslint-disable no-console */
// @ is an alias to /src
import SearchSettings from '@/components/SearchSettings.vue';

// const googKey = "AIzaSyA3n660Vlzu3QtlXb_SfIgDVF627-i4fog";
// let placeSearchAPI = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?key=" + googKey;

export default {
    name: 'search',
    components: {
        SearchSettings
    },
    data: function(){
        return {
            
        }
    },
    methods: {
        setDescription(description) {
            this.description = description;
        },
        setPlace(place) {
            this.place = place
        },
        usePlace() {
            if (this.place) {
                this.$store.commit("ChangeLocation", {
                    address: this.place.formatted_address,
                    lat: this.place.geometry.location.lat(),
                    lng: this.place.geometry.location.lng(),
                })
                this.place = null;
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    
</style>