/* eslint-disable no-console */

import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate';

const sgfKey = "42FNnV10nNvShXwjheS1dQWqHJYQHTcYMYzxhHxeGqpB4UWMSlldTxqBnKSPithWW7edizijwXtYkAYT";
const sgfApiUrl = "https://jobs.api.sgf.dev/api/"

Vue.use(Vuex)

export default new Vuex.Store({
    plugins: [createPersistedState()],
    state: {
        // searchSettings : Object
        savedJobs:[],
        
    },
    getters: {
        getJobs(state){
            return state.job;
        },
        getEvents(state){
            return state.event;
        },
        getEmployers(state){
            return state.employer;
        },
    },
    mutations: {
        ChangeLocation(state, newLocation){
            state.location = newLocation;
        },
        SetSearchSettings(state, settings){
            state.searchSettings = settings;
        },
        UpdateData: function(state, raw_data){
            let allEdLevels = ['doctorate', 'master', 'bachelor', 'associate', 'high_school', null]

            const fieldToUpdate = raw_data.searchType;
            let data = raw_data.thisData;
            let ss = state.searchSettings;

            switch (fieldToUpdate) {
                case "job":
                    // Location Filter
                    if(ss.full_time_field === false){
                        data = data.filter((d)=>{
                            return d.job_type !== 'full_time'
                        })
                    }
                    // Keyword Filter - Title, Employer Category, Description
                    if(ss.keyword_field !== null && ss.keyword_field !== "" && ss.keyword_field !== undefined){
                        const key = ss.keyword_field.toLowerCase();
                        data = data.filter((d)=>{
                            return d.title.toLowerCase().includes(key) || 
                                   d.employer.category.toLowerCase().includes(key);
                        })
                        if(ss.include_description_field){
                            data = data.filter((d)=>{
                                return d.description.toLowerCase().includes(key);
                            })
                        }
                    }
                    // Position_Type Filter
                    if(ss.full_time_field === false){
                        data = data.filter((d)=>{
                            return d.job_type !== 'full_time'
                        })
                    }
                    if(ss.part_time_field === false){
                        data = data.filter((d)=>{
                            return d.job_type !== 'part_time'
                        })
                    }
                    if(ss.contract_field === false){
                        data = data.filter((d)=>{
                            return d.job_type !== 'contractor'
                        })
                    }
                    if(ss.temporary_field === false){
                        data = data.filter((d)=>{
                            return d.job_type !== 'temporary'
                        })
                    }
                    if(ss.casual_field === false){
                        data = data.filter((d)=>{
                            return d.job_type !== 'casual'
                        })
                    }
                    // Education Filter
                    for(let i = ss.min_education_field; i > 0; i--){
                        const currentEdLevel = allEdLevels.pop();
                        data = data.filter((d)=>{
                            return d.req_education !== currentEdLevel;
                        })
                    }

                    state.job = data;
                    console.log("jobs done");
                    break;
                case "employer":
                    state.employer = data;
                    break;
                case "event":
                    state.event = data;
                    break;
                case "location":
                    state.location = data;
                    break;
            }
        },
    },
    actions: {
        /**
         * PullJobs
         * 
         * Pulls Jobs from Jobs API and stores them locally.
         */
        PullJobs(){
            this.dispatch("MakeAPIRequest", 'job')
        },
        PullEmployers(){
            this.dispatch("MakeAPIRequest", "employer")
        },
        PullEvents(){
            this.dispatch("MakeAPIRequest", "event")
        },
        PullLocations(){
            this.dispatch("MakeAPIRequest", "location")
        },
        MakeAPIRequest(store, searchType){
            const endPoint = sgfApiUrl + searchType;

            fetch(endPoint, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + sgfKey,
                    'Accept': 'application/json',
                  },
            }).then((response) => {
                response.json().then((data)=>{
                    const thisData = data.data
                    store.commit("UpdateData", {searchType, thisData});
                })
            }).catch(error=>{
                console.error(error);
            });
        },
    },
    modules: {
    }
})