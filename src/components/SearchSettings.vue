<template>
    <div>
        <svg xmlns="http://www.w3.org/2000/svg" @click="OpenSettings" stroke="black" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-settings">
            <circle :click="OpenSettings" cx="12" cy="12" r="3"></circle>
            <path :click="OpenSettings" d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
        </svg>
        <div>
            <form class="search-settings-form" method="GET">
            <!-- General Search Settings -->
                <h3 class="general-search-header">General</h3>
                <label for="keywords_field">Keywords: </label>
                <input type="text" id="keywords_field" :placeholder="keywordsPlaceholder" >
                <label for="include_description_field">Include Description: </label>
                <input type="checkbox" id="include_description_field">
                <select id="search_type_field">
                    <option value="jobs" selected>Jobs</option>
                    <option value="events">Events</option>
                    <option value="both">Jobs & Events</option>
                </select>
                <!-- Add Later -->
                <!-- <label for="results_per_page_field">Results per Page: </label>
                <select id="results_per_page_field">
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="25" selected>25</option>
                    <option value="40">40</option>
                </select>
                <label for="date_posted_field">Date Posted: </label>
                <select id="date_posted_field">
                    <option value="day" selected>Past 24 Hours</option>
                    <option value="week">Past Week</option>
                    <option value="2weeks">Past 2 Weeks</option>
                    <option value="month">Past Month</option>
                    <option value="all">All Time</option>
                </select> -->
            <!-- Job Preferences Settings -->
                <h3 class="job-preferences-header">Job Preferences</h3>
                <label for="position-types">Position Types: </label>
                <label for="full_time_field">Full-Time</label><input id="full_time_field" class="position-type_field" type="checkbox">
                <label for="part_time_field">Part-Time</label><input id="part_time_field" class="position-type_field" type="checkbox">
                <label for="temporary_field">Temporary</label><input id="temporary_field" class="position-type_field" type="checkbox">
                <label for="contract_field">Contract</label><input id="contract_field" class="position-type_field" type="checkbox">
                <label for="internship_field">Internship</label><input id="internship_field" class="position-type_field" type="checkbox">
                <label for="casual_field">Casual</label><input id="casual_field" class="position-type_field" type="checkbox">
                <label for="min_education_field">Minimum Education: </label>
                <select id="min_education_field">
                    <option value="0" selected>None</option>
                    <option value="1">High School</option>
                    <option value="2">Associate's Degree</option>
                    <option value="3">Bachelor's Degree</option>
                    <option value="4">Master's Degree</option>
                    <option value="5">Doctorate</option>
                </select>
                <!-- Add Later -->
                <!-- <label for="min_pay_field">Minimum Pay: $</label>
                <input type="text" id="min_pay_amount_field" :placeholder="minPayPlaceholder" >
                <select id="min_pay_rate_field">
                    <option value="hourly" selected>per hour</option>
                    <option value="salaried">per year</option>
                </select>
                <label for="include_no_pay_info_field">Include jobs with no pay info:</label>
                <input type="checkbox" id="include_no_pay_info_field" checked> -->
            <!-- Travel/Transportation/Distance Settings -->
                <h3 class="travel-settings-header">Travel</h3>
                <label for="location_field">Location: </label>
                <input type="text" id="location_field" :placeholder="locationPlaceholder">
                <button type="button">Use Current Location</button>
                <label>Limit results by: </label>
                <label for="distance_field">Distance</label>
                <input type="checkbox" id="distance_field">
                <label for="travel_time_field">Travel Time</label>
                <input type="checkbox" id="travel-time_field">
                <label for="search_radius_field">Search Radius: </label>
                <input type="text" id="search-radius_field" :placeholder="searchRadiusPlaceholder" >
                <label for="max_travel_time_field">Max Travel Time: </label>
                <input type="text" id="max_travel_time_field" :placeholder="maxTravelTimePlaceholder" >
            <!-- Modes of Transportation -->
                <h3 class="modes-of-transportation">Modes of Transportation:</h3>
                <label for="foot_field">Foot: </label>
                <input type="checkbox" id="foot_field">
                <label for="bus_field">Bus: </label>
                <input type="checkbox" id="bus_field">
                <label for="bike_field">Bike: </label>
                <input type="checkbox" id="bike_field">
                <label for="car_field">Car: </label>
                <input type="checkbox" id="car_field">
            <!-- Buttons -->
                <button id="save-search-settings-btn" type="button" @click="SaveSearchSettings" >Save Search Settings</button>
                <button id="use-default-search-settings-btn" type="button" @click="UseDefaultSearchSettings">Use Default Search Settings</button>
            </form>
        </div>
    </div>
</template>

<script>
/* eslint-disable no-console */

export default {
    name: 'SearchSettings',
    data: function(){
        return {
            keywordsPlaceholder: "plumber developer clerk etc...",
            minPayPlaceholder: "12",
            locationPlaceholder: "123 Main St, Springfield, Missouri",
            searchRadiusPlaceholder: "25",
            maxTravelTimePlaceholder: "60",
        }
    },
    methods: {
        OpenSettings: function(){

        },
        SaveSearchSettings: function(){
            const searchFields = document.querySelectorAll("input[id$=_field], select[id$=_field]");
            const searchSettings = {};
            
            for(const element of searchFields){
                if(element.tagName.toLowerCase() === "input" && element.type === "checkbox"){
                    searchSettings[element.id] = element.checked
                }
                else if(element.value !== ""){
                    searchSettings[element.id] = element.value;
                }
            }
            this.$store.commit("SetSearchSettings", searchSettings);
            this.$store.dispatch("PullJobs", searchSettings);
            this.$store.dispatch("PullEvents", searchSettings);
        },
        UseDefaultSearchSettings: function(){
            // const searchData = document.querySelectorAll("input[id$=_field], select[id$=_field]");
            console.log(this.$store.state.searchSettings);
            // this.$store.commit("SetSearchSettings", {
            console.log(this.$store.state.job);
            // });
        },
    }
}
</script>

<style>
    .feather-settings{
        stroke: "blue";
        height: 100px;
        width: 100px;
    }
    .search-menu{
        background: black;
    }
</style>