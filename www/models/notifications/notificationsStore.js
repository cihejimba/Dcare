angular.module('notificationsStore.services', [])

/**
* A Patient Store service that returns notification data.
*/
.factory('NotificationsStore', function ($q, $filter) {  //NR: $filter is used for MOCK, remove it if not required later
    // Will call phonegap api for storing/retriving patient data and returns a JSON array
    var enums = {
        notificationType: {
            1: { label: 'Medicine', short_label: 'Medicine', image: 'img/no-image.png', value: 1 },
            2: { label: 'Insulin', short_label: 'Insulin', image: 'img/no-image.png', value: 2 },
            3: { label: 'Dr. Appointment', short_label: 'Dr. Appointment', image: 'img/no-image.png', value: 3 },
            4: { label: 'Glucose test', short_label: 'Glucose test', image: 'img/no-image.png', value: 4 },
            5: { label: 'BP check', short_label: 'BP check', image: 'img/no-image.png', value: 5 },
            6: { label: 'Recommendation', short_label: 'Recommendation', image: 'img/no-image.png', value: 6 },
            7: { label: 'Other', short_label: 'Other', image: 'img/no-image.png', value: 7 }
        }
    };
    // Some fake testing data
    var notificationList = [
	                { id: 0, patientID: '1', text: 'Notification 1', title: 'Notification 1', notificationType: 1, startdate: '1288323623006', enddate: '1288323623006', status: 'active' },
	                { id: 1, patientID: '1', text: 'Notification 2', title: 'Notification 2', notificationType: 3, startdate: '1289323623006', enddate: '1288323623006', status: 'active' },
	                { id: 2, patientID: '2', text: 'Notification 3', title: 'Notification 3', notificationType: 2, startdate: '1298323623006', enddate: '1288323623006', status: 'active' },
	                { id: 3, patientID: '4', text: 'Notification 4', title: 'Notification 4', notificationType: 1, startdate: '1288523623006', enddate: '1288323623006', status: 'active' }
	                ];

    return {
        enums: enums,
        getCount: function () {
            var deferredCount = $q.defer();

            ////NR:TODO:  Mock  ////
            var count = 4; // fire query for count
            ////NR:TODO:  Mock  ////

            deferredCount.resolve(count);
            return deferredCount.promise;
        },
        getAllNotificationsForPatient: function (patientID) {
            var deferredFetchAll = $q.defer();

            ////NR:TODO:  Mock  ////
            var allNotifications = $filter('filter')(notificationList, { patientID: patientID }, true);
            ////NR:TODO:  Mock  ////

            deferredFetchAll.resolve(allNotifications);
            return deferredFetchAll.promise;
        },
        getActiveNotificationsForPatient: function (patientID) {
            var deferredFetchAll = $q.defer();

            ////NR:TODO:  Mock  ////
            var allNotifications = $filter('filter')(notificationList, { patientID: patientID, status:'active'}, true);
            ////NR:TODO:  Mock  ////

            deferredFetchAll.resolve(allNotifications);
            return deferredFetchAll.promise;
        },
        getNotificationByID: function (notificationID) {
            // Search on patients
            var deferredFetch = $q.defer();

            ////NR:TODO:  Mock  ////
            var notificationByID;
            if (notificationID && notificationID !== "") {
                notificationByID = ($filter('filter')(notificationList, { id: JSON.parse(notificationID) }, true))[0];
            } else {
                notificationByID = null;
            }
            ////NR:TODO:  Mock  ////

            deferredFetch.resolve(notificationByID);
            return deferredFetch.promise;
        },
        save: function (notification) {
            // execute deferred / return promise
            var deferredSave = $q.defer();

            if (notification) {
                if (!notification.id || notification.id <= 0) {
                    // Insert data & get the id of inserted patient along with complete inserted data

                    ////NR:TODO:  Mock  ////

                    console.log("Mock Insert : setting id=4");
                    var newnotification = notification;
                    notification.id = 4;
                    notificationList.push(newnotification);
                    ////NR:TODO:  Mock  ////

                    deferredSave.resolve(newnotification);
                } else {
                    // update data

                    console.log("Mock Update : return as it is");
                    deferredSave.resolve(notification);
                }
            } else {

                deferredSave.reject("Error Code 00001");

            }
            return deferredSave.promise;
        }

    }
});