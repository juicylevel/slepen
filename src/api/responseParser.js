export const duties = (snapshots, total) => {
	let items = [];
	snapshots.forEach(doc => {
		items.push({
			id: doc.id,
			date: doc.data().date,
			missionTime: doc.data().missionTime,
			missionType: doc.data().missionType,
			result: doc.data().result,
			resultTime: doc.data().resultTime
		})
	})
	return { total, items };
}