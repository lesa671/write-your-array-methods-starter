// Starter code for Create Your Own Array Methods Activity: 


// sample arrays for testing your functions: 
let testNumsArray = [3, 1, -5, 2, 105, -24, 495, 8, 246]
let testWordsArray = ['potato', 'rainbow', 'cloud', 'duck', 'orange', 'three']


// This is one example of implementing the functionality of forEach: 
function newForEach(array, callback) {
    for (let index = 0; index < array.length; index = index + 1) {
        let currentItem = array[index]
        callback(currentItem, index, array)
    }
}


// my version of the Array some() method 


function newSome(array, callback) {
    for (let index = 0; index < array.length; index++) {
        let currentItem = array[index]
        if (callback(currentItem) === true) {
            return true
        } else {
            continue
        }
    }
    return false
}


// my version of the Array every() method 


function newEvery(array, callback) {
    for (let index = 0; index < array.length; index++) {
        let currentItem = array[index]
        if (callback(currentItem) === true) {
            continue
        } else {
            return false
        }
    }
    return true
}


// my version of the Array find() method 


function newFind(array, callback) {
    for (let index = 0; index < array.length; index++) {
        let currentItem = array[index]
        if (callback(currentItem) === true) {
            return currentItem
        } else {
            continue
        }
    }
    return 'undefined'
}


// my version of the Array findIndex() method 


function newFindIndex(array, callback) {
    for (let index = 0; index < array.length; index++) {
        let currentItem = array[index]
        if (callback(currentItem) === true) {
            return index
        } else {
            continue
        }
    }
    return '-1'
}


// my version of the Array map() method 


function newMap(array, callback) {
    let mapArray = []
    for (let index = 0; index < array.length; index++) {
        let currentItem = array[index]
        mapArray.push(callback(currentItem))
    }
    return mapArray
}
// my version of the Array filter() method 


function newFilter(array, callback) {
    let filterArray = []
    for (let index = 0; index < array.length; index++) {
        let currentItem = array[index]
        if (callback(currentItem) === true) {
            filterArray.push(currentItem)
        }
    }
    return filterArray
}
