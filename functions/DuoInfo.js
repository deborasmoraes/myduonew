const DuoInfo  = (duo, userLoggedIn)  =>{
    const newDuo= {...duo};
    delete newDuo[userLoggedIn];
    const [id, user] = new Object.entries(newDuo).flat();

    return {id, ...user}
    
}
export default DuoInfo