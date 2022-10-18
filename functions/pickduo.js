

const extractDuo =(array, user) => {
    if(array[0] == user)
       return array[1]
    if (array[1] == user)   
       return array[0]
}
export default extractDuo