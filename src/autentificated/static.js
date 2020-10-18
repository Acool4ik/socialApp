export const dateAlert =  {
    status: false,
    alert: {text: '', className: ''}
}

export const dateForAlert = (status = false, text = '', error = false) => {
    const className = error ? 'success' : 'warning'
    
    return {
        status, 
        alert: {text, className}
    }
}

export const dateModal =  {
    status: false,
    modal: {
        title: '',
        input: false,
        handler: function() {}
    }
}

export const dateForModal = (title = '', handler = function() {}, input = false) => ({
    status: true, 
    modal: { title, handler, input },
})




