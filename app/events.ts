import { uIOhook, UiohookKey } from 'uiohook-napi'

class NativeEvents {
    inputEvents() {
        uIOhook.on('input', (e) => {
            console.log('input done')
        })
    }

    start() {
        uIOhook.start()
    }
}

export default NativeEvents;