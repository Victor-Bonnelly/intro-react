import { FullName } from './FullName'
import { Hobbies } from './Hobbies'

export function User() {
    return (
        <user>
            User:
            <FullName />
            <Hobbies />
        </user>
    )
}