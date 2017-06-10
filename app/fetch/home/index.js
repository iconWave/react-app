import {get} from '../index';

export function getAdd() {
    return get('/api/ad')
}

export function getList(city,page) {
    return get('/api/list/' + city + '/' + page)
}

