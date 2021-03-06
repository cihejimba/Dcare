angular.module('vitalsStore.services', [])

/**
* A Patient Store service that returns patient data.
*/
.factory('VitalsStore', function ($q, $filter) {  //NR: $filter is used for MOCK, remove it if not required later
    // Will call phonegap api for storing/retriving patient data and returns a JSON array

    // Some fake testing data
    var vitalsList = [
	                { id: 0, patientID: '1', height: '250', heightunit: "Cm", weight: "50", weightunit: "Kg", bmi: "125", bpsystolic: "125", bpdiastolic: "145", datetime: '1288323623006' },
	                { id: 1, patientID: '1', height: '150', heightunit: "Cm", weight: "70", weightunit: "Kg", bmi: "175", bpsystolic: "155", bpdiastolic: "129", datetime: '1091246400000' },
	                { id: 2, patientID: '2', height: '250', heightunit: "Cm", weight: "50", weightunit: "Kg", bmi: "125", bpsystolic: "125", bpdiastolic: "145", datetime: '1288323623006' },
	                { id: 3, patientID: '4', height: '250', heightunit: "Cm", weight: "50", weightunit: "Kg", bmi: "125", bpsystolic: "125", bpdiastolic: "145", datetime: '1091246400000' }
	                ];

    return {
        getCount: function () {
            var deferredCount = $q.defer();

            ////NR:TODO:  Mock  ////
            var count = 4; // fire query for count
            ////NR:TODO:  Mock  ////

            deferredCount.resolve(count);
            return deferredCount.promise;
        },
        getAllVitalsForPatient: function (patientID) {
            var deferredFetchAll = $q.defer();

            ////NR:TODO:  Mock  ////
            var allVitals = $filter('filter')(vitalsList, { patientID: patientID }, true);
            ////NR:TODO:  Mock  ////

            deferredFetchAll.resolve(allVitals);
            return deferredFetchAll.promise;
        },
        getVitalByID: function (vitalsID) {
            // Search on patients
            var deferredFetch = $q.defer();

            ////NR:TODO:  Mock  ////
            var vitalsByID = vitalsList[vitalsID];
            ////NR:TODO:  Mock  ////

            deferredFetch.resolve(vitalsByID);
            return deferredFetch.promise;
        },
        getGraphDataForHeight: function (patientID) {
            // Search on patients
            var deferredFetch = $q.defer();

            ////NR:TODO:  Mock  ////
            var lineGraphData = [
                                    {
                                        name: "Height",
                                        data: [[1083297600000, 130], [1085976000000, 126], [1088568000000, 150], [1091246400000, 180]]
                                    }
            ];
            ////NR:TODO:  Mock  ////

            deferredFetch.resolve(lineGraphData);
            return deferredFetch.promise;
        },
        getGraphDataForWeight: function (patientID) {
            // Search on patients
            var deferredFetch = $q.defer();

            ////NR:TODO:  Mock  ////
            var lineGraphData = [
                                    {
                                        name: "Weight",
                                        data: [[1083297600000, 150], [1085976000000, 186], [1088568000000, 200], [1091246400000, 150]]
                                    }
            ];
            ////NR:TODO:  Mock  ////

            deferredFetch.resolve(lineGraphData);
            return deferredFetch.promise;
        },
        getGraphDataForBP: function (patientID) {
            // Search on patients
            var deferredFetch = $q.defer();

            ////NR:TODO:  Mock  ////
            var lineGraphData = [
                                    {
                                        name: "BP - Systolic",
                                        data: [[1083297600000, 180], [1085976000000, 156], [1088568000000, 300], [1091246400000, 150]]
                                    },
                                    {
                                        name: "BP - Diastolic",
                                        data: [[1083297600000, 140], [1085976000000, 126], [1088568000000, 280], [1091246400000, 140]]
                                    }
            ];
            ////NR:TODO:  Mock  ////

            deferredFetch.resolve(lineGraphData);
            return deferredFetch.promise;
        },
        getGraphDataForBMI: function (patientID) {
            // Search on patients
            var deferredFetch = $q.defer();

            ////NR:TODO:  Mock  ////
            var lineGraphData = [
                                    {
                                        name: "BMI",
                                        data: [[1083297600000, 170], [1085976000000, 140], [1088568000000, 400], [1091246400000, 250]]
                                    }
            ];
            ////NR:TODO:  Mock  ////

            deferredFetch.resolve(lineGraphData);
            return deferredFetch.promise;
        },
        getLatestVitalsForPatient: function (patientID) {
            // Search on patients
            var deferredFetch = $q.defer();

            ////NR:TODO:  Mock  ////
            var latestVitals = vitalsList[1];
            ////NR:TODO:  Mock  ////

            deferredFetch.resolve(latestVitals);
            return deferredFetch.promise;
        },
        save: function (vitals) {
            // execute deferred / return promise
            var deferredSave = $q.defer();

            if (vitals) {
                if (!vitals.id || vitals.id <= 0) {
                    // Insert data & get the id of inserted patient along with complete inserted data

                    ////NR:TODO:  Mock  ////

                    console.log("Mock Insert : setting id=4");
                    var newVitals = vitals;
                    newVitals.id = 4;
                    vitalsList.push(newVitals);
                    ////NR:TODO:  Mock  ////

                    deferredSave.resolve(newVitals);
                } else {
                    // update data

                    console.log("Mock Update : return as it is");
                    deferredSave.resolve(vitals);
                }
            } else {

                deferredSave.reject("Error Code 00001");

            }
            return deferredSave.promise;
        }

    }
});