// import { localISOString } from './date';

export const createDuty = data => ({
	date: new Date().getTime(), // localISOString(),
	missionType: data.missionType,
	missionTime: data.missionTime,
	resultTime: data.resultTime,
	result: data.result
})