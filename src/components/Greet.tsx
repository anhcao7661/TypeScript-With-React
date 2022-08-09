type GreetProps = {
    name: string
    messageCount?: number
    isLogging: boolean
}

export const Greet = (props: GreetProps) => {

    const { messageCount = 0 } = props

    return (
        <div>
            <h2>
                {props.isLogging
                    ? `Welcome ${props.name} , you have ${messageCount} message`
                    : 'Welcome guest'}
            </h2>
        </div>
    )
}