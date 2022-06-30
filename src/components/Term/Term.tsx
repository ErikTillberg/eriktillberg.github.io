import React, { useRef, useState } from 'react';
import './Term.css';
import Terminal from 'react-console-emulator'

function CircleButton(props: any) {
    return (
        <div style={{ marginRight: '10px', width: '12px', height: '12px', backgroundColor: props.color? props.color : 'red', borderRadius: 100}}/>
    )
}

function ControlButtons() {
    return (
        <div className="ControlButtons">
            <CircleButton color='#FE5650' />
            <CircleButton color='#FDB43C' />
            <CircleButton color='#29C045' />
        </div>
    )
}

function Term() {

    const terminal = useRef<any>(null);

    const commands = {
        echo: {
            description: 'Echo a passed string.',
            usage: 'echo <string>',
            fn: (...args: string[]) => args.join(' ')
        },
        close: {
            description: 'Close the program.',
            fn: () => 'There is no escape...'
        },
        whoami: {
            description: 'A bit about me.',
            fn: () => {
                return 'Hey! I\'m <strong>Erik Tillberg</strong>\n.\nI\'m a software engineer with a Master\'s Degree in Computer Science from the University of Toronto. For my thesis, I investigated and devised an optimal bidding algortihm for online advertisement auctions.\n.\nI\'ve spent the last 4 years working at iMerciv Inc. and The Happenin Company, developing navigation software for pedestrians with accessibility needs, and building a platform for booking and planning private and public events.\n.\nMy background is in optimization, algorithms, and machine learning. But I am always keen to explore new up and coming areas of technology.'
            }
        },
        resume: {
            description: 'Download my resume.',
            fn: () => {
                return 'Hey, interested in hiring me? Take a look at my resume <a style="color: #61dafb;" href="erik-tillberg-resume.pdf" download="erik-tillberg-resume">here</a>.'
            }
        }, 
        linkedin: {
            description: 'Open my LinkedIn profile for your general perusing.',
            fn: () => {
                window.open('https://www.linkedin.com/in/erik-tillberg-a85472116/')
                return 'Bye!'
            }
        },
        thesis: {
            description: 'My thesis on optimal bidding algorithms for online ad auctions.',
            fn: () => {
                window.open('2004.07190.pdf')
            }
        },
        happenin: {
            description: 'Check out my startup\'s website where we enable hosts to book private experiences.', 
            fn: () => {
                window.open('https://happenin.io/toronto')
                return ''
            }
        },
        mapinhood: {
            description: 'Check out Mapinhood, a navigation app for pedestrians.',
            fn: () => {
                window.open('https://mapinhood.com')
                return ''
            }
        },
        github: {
            description: 'Check out my GitHub where you can see some of the public projects I\'ve worked on.',
            fn: () => {
                window.open('https://github.com/ErikTillberg')
                return ''
            }
        }
    }

    return (
        <div className="Terminal">
            <div className="TerminalHeader">
                <ControlButtons />
                <div className="HeaderText">
                    eriktillberg -- -bash -- 150x100
                </div>
                <div className="ControlButtons">
                    <CircleButton color='transparent' />
                    <CircleButton color='transparent' />
                    <CircleButton color='transparent' />
                </div>
            </div>
            
            <div className="BlackLine"/>

            <Terminal
                ref={terminal}
                style={{flex: 1, backgroundColor: '#1c1c1c'}}
                commands={commands}
                welcomeMessage={['Last login: Wed Jun 29 10:57:37 on ttys000', 'Type "help" for options']}
                promptLabel={'you@erik:~$'}
                dangerMode/>
        </div>
    )
}

export default Term