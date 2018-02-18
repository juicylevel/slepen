import moment from 'moment';

export const localISOString = () => (
    moment().format()
)

export const formatDate = value => (
	moment(value).format('HH:mm:ss DD.MM.YYYY')
)

export const formatTime = value => (
	moment(value).format('mm:ss:SSS')
)