export let responce
export const weather = async location => {
    const resp = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=3265874a2c77ae4a04bb96236a642d2f`)
    responce = await resp.json()
    console.log(responce)
}
