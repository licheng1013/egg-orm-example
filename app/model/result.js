
const okMsg = (msg) => {
    return {code: 0, msg: msg, data: null}
}
const okData = (data, msg = null) => {
    return {code: 0, msg: msg, data: data}
}
const failMsg = (msg) => {
    return {code: -1, msg: msg, data: null}
}
module.exports = {okMsg,okData,failMsg};
