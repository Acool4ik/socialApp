export default function moveKeyboard(value, setValue) {
    
    function addChar(number) {
        if(value.trim().length <= 4) {
            setValue(prev => `${prev}${number}`)
        } 
    }

    function deleteChar() {
        if(value.trim().length !== 0) {
            setValue(value.slice(0, -1))
        } 
    }

    return {
        addChar: addChar,
        deleteChar: deleteChar
    }
}