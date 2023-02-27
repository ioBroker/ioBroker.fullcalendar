import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';

import './index.css';
import { Utils } from '@iobroker/adapter-react-v5';
import App from './App';
import * as serviceWorker from './serviceWorker';
import packageJson from '../package.json';
import theme from './theme';

const themeName = Utils.getThemeName();

window.adapterName = 'fullcalendar';

console.log(`iobroker.${window.adapterName}@${packageJson.version} using theme "${themeName}"`);
// window.sentryDSN = 'https://6ccbeba86d86457b82ded80109fa7aba@sentry.iobroker.net/144';

function modifyClasses(className, addClass, removeClass) {
    const classes = (className || '').split(' ').map(c => c.trim()).filter(c => c);
    const pos = classes.indexOf(removeClass);
    if (pos !== -1) {
        classes.splice(pos, 1);
    }
    !classes.includes(addClass) && classes.push(addClass);
    return classes.join(' ');
}

const ThemeContainer = () => {
    const [currentTheme, setCurrentTheme] = useState(themeName);

    const newTheme = theme(currentTheme);

    const getTheme = () => newTheme;

    if (newTheme.palette.mode === 'dark') {
        window.document.body.className = modifyClasses(window.document.body.className, 'body-dark', 'body-light');
    } else {
        window.document.body.className = modifyClasses(window.document.body.className, 'body-light', 'body-dark');
    }

    return <StyledEngineProvider injectFirst>
        <ThemeProvider theme={getTheme()}>
            <App
                onThemeChange={_theme => {
                    if (newTheme.palette.mode === 'dark') {
                        window.document.body.className = modifyClasses(window.document.body.className, 'body-dark', 'body-light');
                    } else {
                        window.document.body.className = modifyClasses(window.document.body.className, 'body-light', 'body-dark');
                    }

                    setCurrentTheme(_theme);
                }}
            />
        </ThemeProvider>
    </StyledEngineProvider>;
};

function build() {
    const container = document.getElementById('root');
    const root = createRoot(container);
    return root.render(
        <ThemeContainer />,
    );
}

build();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
