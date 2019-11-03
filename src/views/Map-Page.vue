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
/* eslint-disable no-console */
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';

const cors_anywhere = "https://cors-anywhere.herokuapp.com/";

let googPlaces = "https://maps.googleapis.com/maps/api/place/autocomplete/json?";
const googKey = "AIzaSyA3n660Vlzu3QtlXb_SfIgDVF627-i4fog";

googPlaces += "key=" + googKey;
googPlaces += "&inputtype=textquery&fields=geometry&input=170%20clark%20drive";

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
    mounted: function(){
        this.UpdateMarkers();
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
        UpdateMarkers: function() {
            const newMarkers = [];
            console.log(this.$store.getters.getJobs)
            for(const job of this.$store.getters.getJobs){
                for(const jobLoc of job.locations.data){
                    const lat = jobLoc.lat;
                    const lng = jobLoc.lng;
                    const pos = {};
                    

                    if(lat !== null && lng !== null){
                        pos.lat = lat;
                        pos.lng = lng;
                    }
                    else{
                        pos.x = fetch(cors_anywhere + googPlaces,{
                            headers: {
                                'Content-Type': 'application/json',
                                'Accept': 'application/json',
                            },
                        }).then((response)=>{
                            return response.json().then((data)=>{
                                console.log(data);
                                return data.predictions[0];
                            });
                        })
                    }
                    newMarkers.push({
                        position: pos,
                    })
                }
            }
        }
    }
}

</script>
