import Terminal from 'react-console-emulator'
import commands from '../components/Commands/commands.js'
import React from 'react'

export default function Term() {
    const cmds = commands.commands
    const owrs = commands.overwrites
    const terminal = React.createRef()
    const [prompt] = React.useState('jocelindarma:~$ ')
    return (
        <Terminal
            ref={terminal}
            welcomeMessage={[
                "Welcome!",
                "---",
                "Type 'help' to see a list of commands",
                "---",
            ]}
            commands={{
                clear: {
                    description: 'Clears the terminal',
                    fn: () => {
                        terminal.current.clearStdout()
                    }
                },
                help: {
                    description: 'List all available commands',
                    fn: () => {
                        return `
                            ${Object.keys(cmds).map(cmd => `${cmd}${" ".repeat(12-cmd.length)} | ${cmds[cmd].description}${" ".repeat(39-cmds[cmd].description.length)}`).join('\n')}
                            ${Object.keys(owrs).map(cmd => `${cmd}${" ".repeat(12-cmd.length)} | ${owrs[cmd].description}${" ".repeat(39-owrs[cmd].description.length)}`).join('\n')}
                        `
                    }
                },
                ...cmds
            }}
            promptLabel={prompt} 
            autoFocus
            style={{
                backgroundColor:'#282a36',
                minHeight: null,
                maxHeight: null,
                overflow: 'auto',
                height: '100%',
                width: '100%',     
            }}
            styleEchoBack='fullInherit'
            contentStyle={{ color: '#ffb86c' , fontWeight: 'normal', paddingLeft: null}} // Text colour
            promptLabelStyle={{ color: '#f1fa8c' , fontWeight:'normal'}} // Prompt label colour
            inputTextStyle={{ color: '#6272a4' , fontWeight: 'normal'}}
            messageStyle={{ color: '#8be9fd' , fontWeight: 'normal', paddingLeft: null}}
            scrollBehavior='auto'
            noDefaults
        />
    )
}