async function getData(url: string, obj:object){
    const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    })
    const result = await response.json()
    const msg_node:Element = document.querySelector('#message')
    msg_node.textContent = JSON.stringify(result)
}

const url = '/'

function doAction():void{
    const namae_node:HTMLInputElement = document.querySelector('#namae')
    const waza_node:HTMLInputElement = document.querySelector('#waza')
    const obj = {
        namae : namae_node.value,
        waza: waza_node.value
    }
    getData(url, obj)
}