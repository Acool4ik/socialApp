import {firstErrCharsets} from '../staticDate'

export default function firstResponse(value, spinner, alert, parser, update) {

    function firstNotResponse() {
        update()
        parser(false)
    }

    function firstYesResponse() {
        const regExp = /^[0-9]+$/

        spinner(true)

        if(regExp.test(value) && (value.trim().length === 5)) {
            update(value)
            parser(false)
        } else {
            alert(firstErrCharsets)
        }

        spinner(false)
    }

    return {
        reject: firstNotResponse,
        resolve: firstYesResponse
    }
}