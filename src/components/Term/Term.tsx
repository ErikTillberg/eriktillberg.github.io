import React, { useRef, useState } from 'react';
import './Term.css';
import Terminal from 'react-console-emulator'

function Term() {

    const terminal = useRef<any>(null);

    const [pushedWelcomeMsg, setPushedWelcomeMsg] = useState(false)

    const commands = {
        echo: {
            description: 'Echo a passed string.',
            usage: 'echo <string>',
            fn: (...args: string[]) => args.join(' ')
        }
    }

    return (
        <div className="Terminal">
            <div className="TerminalHeader">
                <div className="HeaderText">
                    eriktillberg -- -bash -- 150x100
                </div>
            </div>
            
            <div className="BlackLine"/>

            <Terminal
                ref={terminal}
                style={{flex: 1, backgroundColor: '#1c1c1c'}}
                commands={commands}
                welcomeMessage='Last login: Wed Jun 2910:57:37 on ttys000'
                promptLabel={'you@erik:~$'}/>
        </div>
    )
}

export default Term