import { database } from '../index';
import * as responseParser from './responseParser';

let nextDutyRef = null;
let totalDuties = null;

const createNextDuties = (snapshots, limit) => {
	const lastDutyDoc = snapshots.docs[snapshots.docs.length - 1];
	nextDutyRef = database.collection('duty')
		.orderBy('date', 'desc')
		.startAfter(lastDutyDoc)
        .limit(limit);
}

const getTotalCount = collectionName => {
    return new Promise((resolve, reject) => {
    	database.collection(collectionName).get().then(snapshot => {
	        resolve(snapshot.size);
	    }).catch(error => {
	    	reject(error);
	    })
	})
}

export const firstDuties = limit => (
	new Promise((resolve, reject) => {
    	const dutyRef = database.collection('duty')
			.orderBy('date', 'desc')
	        .limit(limit);

    	getTotalCount('duty').then(count => {
			totalDuties = count;
			dutyRef.get().then(snapshots => {
				createNextDuties(snapshots, limit);
				const parsed = responseParser.duties(snapshots, totalDuties);
				resolve(parsed);
			}).catch(error => {
				reject(error);
			})
		})
    })
)

export const nextDuties = limit => (
	nextDutyRef.get().then(snapshots => {
		createNextDuties(snapshots, limit);
		return responseParser.duties(snapshots, totalDuties);
	})
)

// TODO: update hasNext
export const saveDuty = duty => (
	database.collection('duty').add(duty)
)

// TODO: update hasNext
export const deleteDuty = id => (
	database.collection('duty').doc(id).delete()
)