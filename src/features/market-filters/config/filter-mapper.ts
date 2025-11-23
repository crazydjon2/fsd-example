import { petConfig } from "./pet-config";

export default function getConfig(route: string) {
    switch(route) {
        case '/':
            return petConfig
        default:
            return petConfig
    }
}