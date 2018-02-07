'use strict';

Connector.playerSelector = '#player';

Connector.artistSelector = '#player>div>div.player__labels>div>span.player__label--band';

Connector.trackSelector = '#player>div>div.player__labels>div>span.player__label--title';

Connector.isPlaying = () => $('#player>div>div.player__buttons.player__buttons--play').hasClass('playing');
