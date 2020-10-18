export const SIGN_IN_TYPE = 'SIGN_IN_TYPE'    // static for Form component
export const SIGN_UP_TYPE = 'SIGN_UP_TYPE'
export const RESTORE = 'RESTORE'

export const success = 'success'

export const defaultRefError = {
    nameErr: 'enter name',
    emailErr: 'enter e-mail',
    password_1Err: 'enter password',
    password_2Err: 'repeat password'
}

export const typeFields = {
    NAME_TYPE: 'NAME_TYPE',
    EMAIL_TYPE: 'EMAIL_TYPE',
    PASSWORD_TYPE: 'PASSWORD_TYPE',
    REPEAT_TYPE: 'REPEAT_TYPE', 
}

export const NAME_TYPE = 'NAME_TYPE'
export const EMAIL_TYPE = 'EMAIL_TYPE'
export const PASSWORD_TYPE = 'PASSWORD_TYPE'
export const REPEAT_TYPE = 'REPEAT_TYPE'

export const arrayOfCheck = [
    {   
        reg: null, 
        defaultVal: defaultRefError.nameErr, 
        type: typeFields.NAME_TYPE,
        numbers: { min: 4, max: 19 }, 
        message: { success, error: 'min number of charsets is 4, max is 20' },
    },

    {
        reg: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/, 
        defaultVal: defaultRefError.emailErr, 
        type: typeFields.EMAIL_TYPE,
        numbers: { min: null, max: null }, 
        message: { success, error: 'enter correct e-mail' },
    },

    {   
        reg: /.*([a-z]+[A-Z]+[0-9]+|[a-z]+[0-9]+[A-Z]+|[A-Z]+[a-z]+[0-9]+|[A-Z]+[0-9]+[a-z]+|[0-9]+[a-z]+[A-Z]+|[0-9]+[A-Z]+[a-z]+).*/, 
        defaultVal: defaultRefError.password_1Err, 
        type: typeFields.PASSWORD_TYPE,
        numbers: { min: 6, max: 19 }, 
        message: { success, error: 'the password must contain numbers and Latin letters of the upper and lower case and be length more then 5 charsets but no more 20' },
    },

    {
        reg: null, 
        defaultVal: defaultRefError.password_2Err, 
        type: typeFields.REPEAT_TYPE,
        numbers: { min: null, max: null }, 
        message: { success, error: "passwords don't collision" },
    },
    
]


////ATTENTION///////////////ATTENTION////////////////////ATTENTION//////////////ATTENTION///////////


const singInDate = {   // static for Auth component
    btnText: 'Sign In',
    password: true,
    repeatPassword: false,
    name: false,
    email: true,
    operationType: SIGN_IN_TYPE
}

const singUpDate = {
    btnText: 'Sign Up',
    password: true,
    repeatPassword: true,
    name: true,
    email: true,
    operationType: SIGN_UP_TYPE
}

const restoreDate = {
    btnText: 'Restore',
    password: false,
    repeatPassword: false,
    name: false,
    email: true,
    operationType: RESTORE
}

export const defaultStateAlert = {
    state: false,
    text: '',
    className: ''
}

export const arrayOfRoutes = [
    {id: 'ptIn', path: '/signin', date: singInDate},
    {id: 'ptUp', path: '/signup', date: singUpDate},
    {id: 'ptR', path: '/restore', date: restoreDate}
]



