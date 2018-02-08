'use strict';

Connector.playerSelector = '#player';

Connector.artistSelector = '.player__label--band';

Connector.trackSelector = '.player__label--title';

// Connector.isPlaying = () => $('#player').hasClass('playing');
Connector.isPlaying = () => !$('.player__labels').hasClass('player__labels--off');
