const makeFederation = require('@iobroker/vis-2-widgets-react-dev/modulefederation.config');

module.exports = makeFederation(
    'fullcalendar',
    {
        './FullCalendar': './src/FullCalendar',
        './translations': './src/translations',
    }
);