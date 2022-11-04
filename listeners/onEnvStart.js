'use strict'

const apiService = require("../services/api");


module.exports = async (props, event, api) => {
    let res = await apiService.executeQuery(api, "counter", {
        "user": "global"
    })

    let counters = res.data;
    if (counters.length == 0) {
        let res = await apiService.createDoc(api, "counter", {
            "count": 0,
            "user": "global"
        });

        console.log(res);
    }
}