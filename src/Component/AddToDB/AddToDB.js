const storedApp = () => {
    const storedAppSTR = localStorage.getItem('installed');
    if (storedAppSTR) {
        const storedAppData = JSON.parse(storedAppSTR)
        return storedAppData;
    }
    else {
        return [];
    }
}

const addToStoredDB = (id) => {
    const storedAppData = storedApp();
    if (storedAppData.includes(id)) {
        // console.log('hello')
    }
    else {
        storedAppData.push(id);
        const data = JSON.stringify(storedAppData);
        localStorage.setItem('installed', data)

    }
}
export { addToStoredDB, storedApp }