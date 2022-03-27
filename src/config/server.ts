import { config } from 'dotenv'
config()

const app = {
    url: {
        api_notes: process.env.APP_URL_API
    },
    port: process.env.PORT
}

export const configApp = {
    app
}