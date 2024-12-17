import { FullName } from './FullName'
import { Hobbies } from './Hobbies'

export function User() {
    return (
        <div>
            User:
            <FullName />
            <Hobbies />
        </div>
    )
}