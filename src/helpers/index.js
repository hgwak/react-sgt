export function randomString(length=8){
    const characters = 'aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ1234567890';
    let output = '';
    for(let i = 0; i< length;i++){
        const randomIndex = Math.floor(Math.random()*characters.length);
        output += characters[randomIndex];
    }
    return output;
}

export function formatPostData(data){
    const urlParams = new URLSearchParams();//builds a query string for you
    //takes each array
    //for of loop says loop through the array and set it to this value
    for(let [key,value] of Object.entries(data)){//[key,value] is destructuring an array Object.Entries builds us an array of arrays holding each [key, value] within an outer array
        urlParams.append(key, value);
    }

    return urlParams;
}