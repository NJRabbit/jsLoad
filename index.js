const fs = require("fs")
const GGconfig = require(`./GGconfig.json`)

const data = GGconfig.policy.policy.appFilters.includes(
    {"url":"*", "filterType":"whitelist"}
)

console.log(data)