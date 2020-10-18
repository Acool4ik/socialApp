export const defaultParserDate = {  // for Parser element
    isNewUser: false,
    passwordPIN: false,
    boolPath: false
} 

////////ATENTION////////ATENTION////////ATENTION////////ATENTION////////ATENTION////////ATENTION

export const firstErrCharsets = {  // for PasswordRequest element
    type: true,
    dataAlert: {
        text: 'incorrect format of date, must be 5 charcets',
        className: 'warning'
    }
}

export const defaultStateAlert = {
    type: false,
    dataAlert: {
        text: '',
        className: ''
    }
} 

export const errorPass = {
    type: true,
    dataAlert: {
        text: 'passwords is not collision',
        className: 'warning'
    }
}

export const header = newUser => newUser ? 'Welcome!, do you want using PIN for your app?' : 'Enter password'

export const numbers = [
                        {id: 'num1', value: '1', flag: true}, 
                        {id: 'num2', value: '2', flag: true},  
                        {id: 'num3', value: '3', flag: true},  
                        {id: 'num4', value: '4', flag: true},  
                        {id: 'num5', value: '5', flag: true},  
                        {id: 'num6', value: '6', flag: true},  
                        {id: 'num7', value: '7', flag: true},  
                        {id: 'num8', value: '8', flag: true},  
                        {id: 'num9', value: '9', flag: true},  
                        {id: 'num10', value: '10', flag: false},  
                        {id: 'num11', value: '0', flag: true},  
                    ]



