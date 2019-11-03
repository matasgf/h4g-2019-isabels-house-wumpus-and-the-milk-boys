<template>
    <section class="map-tab">
        <GmapMap class="map" :center="center" :zoom="4" :options="mapOptions">
            <gmap-info-window :options="infoOptions" :position="infoWindowPos" :opened="infoWinOpen" @closeclick="infoWinOpen=false">
                <h3>{{infoTitle}}</h3>
                <h4>{{infoSubTitle}}</h4>
                <button>View More</button>
                <div class="save-hide-row">
                    <button>Save</button>
                    <button>Hide</button>
                </div>
                
            </gmap-info-window>
            <GmapMarker
                :key="index"
                v-for="(m, index) in markers"
                :position="m.position"
                :clickable="true"
                @click="toggleInfoWindow(m,index)"
            />
        </GmapMap>
    </section>
</template>

<style lang="scss" scoped>
    .map {
        height: 400px;
        width: 400px;
    }
    .save-hide-row{
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
      /* Optional: Makes the sample page fill the window. */
    html, body {
        height: 100%;
        margin: 0;
        padding: 0;
    }

</style>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';

export default {
    name: 'map-page',
    components: {},
    data: function () {
        return {
            center: {
                lat: 47.0,
                lng: 8.5
            },
            infoTitle: '',
            infoSubTitle: '',
            infoWindowPos: null,
            infoWinOpen: false,
            currentMidx: null,
            infoOptions: {
                pixelOffset: {
                    width: 0,
                    height: -35
                }
            },

            mapOptions: {
                disableDefaultUI : true
            },

            markers: [{
                position: {
                    lat: 47.376332,
                    lng: 8.547511
                },
                title: 'Cool Job',
                subTitle: "Cool Company",
            }, {
                position: {
                    lat: 50.374592,
                    lng: 8.548867
                },
                title: 'Average Job',
                subTitle: "Average Company",
            }, {
                position: {
                    lat: 53.379592,
                    lng: 8.549867
                },
                title: 'Shitty Job',
                subTitle: "Shitty Company",
            }]
        }
    },
    methods: {
        toggleInfoWindow: function(marker, idx) {
            this.infoWindowPos = marker.position;
            this.infoTitle = marker.title;
            this.infoSubTitle = marker.subTitle
            
            //check if its the same marker that was selected if yes toggle
            if (this.currentMidx == idx) {
                this.infoWinOpen = !this.infoWinOpen;
            }
            //if different marker set infowindow to open and reset current marker index
            else {
                this.infoWinOpen = true;
                this.currentMidx = idx;
            }
        },
        UpdateMarkets: function() {
            const newMarkers = [];
            for(const job of this.$store.getter.getJobs){
                for(const jobLoc of job.locations.data){
                    const lat = jobLoc.lat;
                    const lng = jobLoc.lng;
                    const pos = {};

                    if(lat !== null && lng !== null){
                        pos.lat = lat;
                        pos.lng = lng;
                    }
                    // else{
                        
                    // }
                    newMarkers.push({
                        position: pos
                    })
                }
            }
        }
    }
}

</script>
