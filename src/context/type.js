export const SIGN_UP = 'SING_UP'
export const SIGN_IN = 'SING_IN'
export const RESTORE = 'SING_IN'

export const firebaseConfig = {
    apiKey: "AIzaSyBZoXR2Lvg-lg2rX4XyIepYKFA11DjTK3Y",
    authDomain: "cool-store-2380d.firebaseapp.com",
    databaseURL: "https://cool-store-2380d.firebaseio.com",
    projectId: "cool-store-2380d",
    storageBucket: "cool-store-2380d.appspot.com",
    messagingSenderId: "805284414029",
    appId: "1:805284414029:web:3d01d83637db5f3ffad204"
}

export const AlertMessage = (Message, isError = true) => ({
    state: true,
    text: Message,
    className: isError ? 'warning' : 'success'
})

export const HttpRealtime = 'https://cool-store-2380d.firebaseio.com/' 

