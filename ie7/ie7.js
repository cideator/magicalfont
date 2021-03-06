/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referring to this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'magicalfont\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-feel-angry': '&#xe6ba;',
		'icon-feel-angry-ol': '&#xe6bb;',
		'icon-feel-batman': '&#xe6bc;',
		'icon-feel-batman-ol': '&#xe6bd;',
		'icon-feel-cheeky': '&#xe6be;',
		'icon-feel-cheeky-ol': '&#xe6bf;',
		'icon-feel-confuse': '&#xe6c0;',
		'icon-feel-confuse-ol': '&#xe6c1;',
		'icon-feel-cool': '&#xe6c2;',
		'icon-feel-cool-ol': '&#xe6c3;',
		'icon-feel-cry': '&#xe6c4;',
		'icon-feel-cry-ol': '&#xe6c5;',
		'icon-feel-curious': '&#xe6c6;',
		'icon-feel-curious-ol': '&#xe6c7;',
		'icon-feel-enjoy': '&#xe6c8;',
		'icon-feel-enjoy-ol': '&#xe6c9;',
		'icon-feel-evil': '&#xe6ca;',
		'icon-feel-evil-ol': '&#xe6cb;',
		'icon-feel-inlove': '&#xe6cc;',
		'icon-feel-inlove-ol': '&#xe6cd;',
		'icon-feel-kiss': '&#xe6ce;',
		'icon-feel-kiss-ol': '&#xe6cf;',
		'icon-feel-laugh': '&#xe6d0;',
		'icon-feel-laugh-ol': '&#xe6d1;',
		'icon-feel-love': '&#xe6d2;',
		'icon-feel-love-ol': '&#xe6d3;',
		'icon-feel-ninja': '&#xe962;',
		'icon-feel-ninja-ol': '&#xe963;',
		'icon-feel-optimistic': '&#xe964;',
		'icon-feel-optimistic-ol': '&#xe965;',
		'icon-feel-quite': '&#xe966;',
		'icon-feel-quite-ol': '&#xe967;',
		'icon-feel-rud': '&#xe968;',
		'icon-feel-rud-ol': '&#xe969;',
		'icon-feel-sad': '&#xe96a;',
		'icon-feel-sad-ol': '&#xe96b;',
		'icon-feel-serious': '&#xe96c;',
		'icon-feel-serious-ol': '&#xe96d;',
		'icon-feel-sleepy': '&#xe96e;',
		'icon-feel-sleepy-ol': '&#xe96f;',
		'icon-feel-smile': '&#xe970;',
		'icon-feel-smile-ol': '&#xe971;',
		'icon-feel-stylish': '&#xe972;',
		'icon-feel-stylish-ol': '&#xe973;',
		'icon-feel-wink': '&#xe974;',
		'icon-feel-wink-ol': '&#xe975;',
		'icon-feel-worry': '&#xe976;',
		'icon-feel-worry-ol': '&#xe977;',
		'icon-spider': '&#xe94a;',
		'icon-trophy-o-alt': '&#xe94b;',
		'icon-asterik': '&#xe94c;',
		'icon-asterik-o': '&#xe94d;',
		'icon-bigbraket': '&#xe94e;',
		'icon-bigbraket-close': '&#xe94f;',
		'icon-cancel': '&#xe950;',
		'icon-colmn': '&#xe951;',
		'icon-cos': '&#xe952;',
		'icon-divide': '&#xe953;',
		'icon-equalto': '&#xe954;',
		'icon-hash': '&#xe955;',
		'icon-minus': '&#xe956;',
		'icon-percent': '&#xe957;',
		'icon-plus': '&#xe958;',
		'icon-questionmark': '&#xe959;',
		'icon-quote': '&#xe95a;',
		'icon-quote-close': '&#xe95b;',
		'icon-semicolmn': '&#xe95c;',
		'icon-singlequote': '&#xe95d;',
		'icon-singlequote-close': '&#xe95e;',
		'icon-sqroot': '&#xe95f;',
		'icon-ban': '&#xe960;',
		'icon-ban-slim': '&#xe961;',
		'icon-book-open': '&#xe600;',
		'icon-book': '&#xe601;',
		'icon-book-o': '&#xe602;',
		'icon-headphone-o': '&#xe603;',
		'icon-play': '&#xe604;',
		'icon-pause': '&#xe605;',
		'icon-stop': '&#xe606;',
		'icon-backward': '&#xe607;',
		'icon-forward': '&#xe608;',
		'icon-first': '&#xe609;',
		'icon-last': '&#xe60a;',
		'icon-previous': '&#xe60b;',
		'icon-next': '&#xe60c;',
		'icon-eject': '&#xe60d;',
		'icon-bullhorn': '&#xe60e;',
		'icon-bullhorn-o': '&#xe60f;',
		'icon-bullhorn-o-alt': '&#xe610;',
		'icon-film-strip': '&#xe611;',
		'icon-film-strip-o': '&#xe612;',
		'icon-gramophone': '&#xe613;',
		'icon-headphone': '&#xe614;',
		'icon-headphone-o-alt': '&#xe615;',
		'icon-mic': '&#xe616;',
		'icon-mic-off': '&#xe617;',
		'icon-music': '&#xe618;',
		'icon-music-off': '&#xe619;',
		'icon-photo-cam': '&#xe61a;',
		'icon-photo-cam-o': '&#xe61b;',
		'icon-photo-cam-o-alt': '&#xe61c;',
		'icon-speaker': '&#xe61d;',
		'icon-speaker-off': '&#xe61e;',
		'icon-speaker-off-o': '&#xe61f;',
		'icon-speaker-off-ol': '&#xe620;',
		'icon-speaker-ol': '&#xe621;',
		'icon-tv': '&#xe622;',
		'icon-video-cam': '&#xe623;',
		'icon-video-cam-o': '&#xe624;',
		'icon-video-cam-o-alt': '&#xe625;',
		'icon-video-take': '&#xe626;',
		'icon-pacman': '&#xe627;',
		'icon-spades': '&#xe628;',
		'icon-clubs': '&#xe629;',
		'icon-diamonds': '&#xe62a;',
		'icon-pawn': '&#xe62b;',
		'icon-spinner': '&#xe62c;',
		'icon-spinner2': '&#xe62d;',
		'icon-spinner3': '&#xe62e;',
		'icon-spinner4': '&#xe62f;',
		'icon-meter': '&#xe630;',
		'icon-dashboard': '&#xe631;',
		'icon-bookmark': '&#xe632;',
		'icon-bookmark-ol': '&#xe633;',
		'icon-fire-extinguisher': '&#xe634;',
		'icon-fire-extinguisher-o': '&#xe635;',
		'icon-checkbox-check': '&#xe636;',
		'icon-checkbox-uncheck': '&#xe637;',
		'icon-checkbox-check-o': '&#xe638;',
		'icon-checkbox-uncheck-o': '&#xe639;',
		'icon-adjust-bars': '&#xe63a;',
		'icon-adjust-bars-o': '&#xe63b;',
		'icon-ambrella': '&#xe63c;',
		'icon-ambrella-closed': '&#xe63d;',
		'icon-ambrella-o': '&#xe63e;',
		'icon-barcode': '&#xe63f;',
		'icon-bell': '&#xe640;',
		'icon-bell-off': '&#xe641;',
		'icon-bell-off-ol': '&#xe642;',
		'icon-bell-ol': '&#xe643;',
		'icon-binocular': '&#xe644;',
		'icon-bonfire': '&#xe645;',
		'icon-briefcase': '&#xe646;',
		'icon-briefcase-o': '&#xe647;',
		'icon-bug': '&#xe648;',
		'icon-bug-o': '&#xe649;',
		'icon-burn': '&#xe64a;',
		'icon-burn-o': '&#xe64b;',
		'icon-check': '&#xe64c;',
		'icon-checklist': '&#xe64d;',
		'icon-checklist-ol': '&#xe64e;',
		'icon-cock': '&#xe64f;',
		'icon-cube': '&#xe650;',
		'icon-cubes': '&#xe651;',
		'icon-dashboard2': '&#xe652;',
		'icon-dice': '&#xe653;',
		'icon-energy': '&#xe654;',
		'icon-eye-close': '&#xe655;',
		'icon-eye-close-o': '&#xe656;',
		'icon-eye-close-o-alt': '&#xe657;',
		'icon-eye-open': '&#xe658;',
		'icon-eye-open-o': '&#xe659;',
		'icon-eye-open-o-alt': '&#xe65a;',
		'icon-factory': '&#xe65b;',
		'icon-factory-o': '&#xe65c;',
		'icon-fb-page': '&#xe65d;',
		'icon-filter': '&#xe65e;',
		'icon-fire': '&#xe65f;',
		'icon-flag': '&#xe660;',
		'icon-flag-o': '&#xe661;',
		'icon-flag-o-alt': '&#xe662;',
		'icon-gift': '&#xe663;',
		'icon-gift-o': '&#xe664;',
		'icon-gift-o-alt': '&#xe665;',
		'icon-home': '&#xe666;',
		'icon-home-o': '&#xe667;',
		'icon-home-o-alt': '&#xe668;',
		'icon-key': '&#xe669;',
		'icon-lock': '&#xe66a;',
		'icon-lock-key': '&#xe66b;',
		'icon-lock-o': '&#xe66c;',
		'icon-lock-unlock': '&#xe66d;',
		'icon-lock-unlock-o': '&#xe66e;',
		'icon-magic': '&#xe66f;',
		'icon-magic-o': '&#xe670;',
		'icon-magnet': '&#xe671;',
		'icon-magnifier': '&#xe672;',
		'icon-magnifier-o': '&#xe673;',
		'icon-magnifier-o-alt': '&#xe674;',
		'icon-mask-sad': '&#xe675;',
		'icon-mask-smile': '&#xe676;',
		'icon-office-chair': '&#xe677;',
		'icon-paper-fan': '&#xe678;',
		'icon-phone': '&#xe679;',
		'icon-play-cards': '&#xe67a;',
		'icon-puzzle': '&#xe67b;',
		'icon-puzzle-o': '&#xe67c;',
		'icon-puzzle-o-alt': '&#xe67d;',
		'icon-recyclebin': '&#xe67e;',
		'icon-scissor': '&#xe67f;',
		'icon-scissor2': '&#xe680;',
		'icon-shield': '&#xe681;',
		'icon-shield-half': '&#xe682;',
		'icon-shield-o': '&#xe683;',
		'icon-shield-o-alt': '&#xe684;',
		'icon-shield-ol': '&#xe685;',
		'icon-shop': '&#xe686;',
		'icon-shop-o': '&#xe687;',
		'icon-trashcan': '&#xe688;',
		'icon-trashcan-o': '&#xe689;',
		'icon-trolly-bag': '&#xe68a;',
		'icon-upgrade': '&#xe68b;',
		'icon-website': '&#xe68c;',
		'icon-weight-scale': '&#xe68d;',
		'icon-balloon-parachute': '&#xe68e;',
		'icon-bomb': '&#xe68f;',
		'icon-quotes-left': '&#xe690;',
		'icon-numbered-list': '&#xe691;',
		'icon-menu': '&#xe692;',
		'icon-text-height': '&#xe693;',
		'icon-text-width': '&#xe694;',
		'icon-strikethrough': '&#xe695;',
		'icon-omega': '&#xe696;',
		'icon-sigma': '&#xe697;',
		'icon-pilcrow': '&#xe698;',
		'icon-lefttoright': '&#xe699;',
		'icon-righttoleft': '&#xe69a;',
		'icon-paragraph-left': '&#xe69b;',
		'icon-paragraph-center': '&#xe69c;',
		'icon-paragraph-right': '&#xe69d;',
		'icon-paragraph-justify': '&#xe69e;',
		'icon-paragraph-justify2': '&#xe69f;',
		'icon-indent-increase': '&#xe6a0;',
		'icon-indent-decrease': '&#xe6a1;',
		'icon-newtab': '&#xe6a2;',
		'icon-align-c': '&#xe6a3;',
		'icon-align-l': '&#xe6a4;',
		'icon-align-r': '&#xe6a5;',
		'icon-at': '&#xe6a6;',
		'icon-bold': '&#xe6a7;',
		'icon-bring-back': '&#xe6a8;',
		'icon-bring-front': '&#xe6a9;',
		'icon-color-picker': '&#xe6aa;',
		'icon-crop': '&#xe6ab;',
		'icon-flip': '&#xe6ac;',
		'icon-flip-v': '&#xe6ad;',
		'icon-italic': '&#xe6ae;',
		'icon-line-draw': '&#xe6af;',
		'icon-link': '&#xe6b0;',
		'icon-rotate-l': '&#xe6b1;',
		'icon-rotate-r': '&#xe6b2;',
		'icon-select': '&#xe6b3;',
		'icon-select-all': '&#xe6b4;',
		'icon-selection': '&#xe6b5;',
		'icon-slice': '&#xe6b6;',
		'icon-text': '&#xe6b7;',
		'icon-underline': '&#xe6b8;',
		'icon-unlink': '&#xe6b9;',
		'icon-arrow-big-bl-d': '&#xe6d4;',
		'icon-arrow-big-bl-d-o': '&#xe6d5;',
		'icon-arrow-big-bl-l': '&#xe6d6;',
		'icon-arrow-big-bl-l-o': '&#xe6d7;',
		'icon-arrow-big-bl-r': '&#xe6d8;',
		'icon-arrow-big-bl-r-o': '&#xe6d9;',
		'icon-arrow-big-bl-u': '&#xe6da;',
		'icon-arrow-big-bl-u-o': '&#xe6db;',
		'icon-arrow-big-d': '&#xe6dc;',
		'icon-arrow-big-dbl-d': '&#xe6dd;',
		'icon-arrow-big-dbl-l': '&#xe6de;',
		'icon-arrow-big-dbl-r': '&#xe6df;',
		'icon-arrow-big-dbl-u': '&#xe6e0;',
		'icon-arrow-big-l': '&#xe6e1;',
		'icon-arrow-big-r': '&#xe6e2;',
		'icon-arrow-big-u': '&#xe6e3;',
		'icon-arrow-bl-d': '&#xe6e4;',
		'icon-arrow-bl-d-o': '&#xe6e5;',
		'icon-arrow-bl-d-o-alt': '&#xe6e6;',
		'icon-arrow-bl-l': '&#xe6e7;',
		'icon-arrow-bl-l-o': '&#xe6e8;',
		'icon-arrow-bl-l-o-alt': '&#xe6e9;',
		'icon-arrow-bl-r': '&#xe6ea;',
		'icon-arrow-bl-r-o': '&#xe6eb;',
		'icon-arrow-bl-r-o-alt': '&#xe6ec;',
		'icon-arrow-bl-u': '&#xe6ed;',
		'icon-arrow-bl-u-o': '&#xe6ee;',
		'icon-arrow-bl-u-o-alt': '&#xe6ef;',
		'icon-arrow-d': '&#xe6f0;',
		'icon-arrow-dbl-bl-d': '&#xe6f1;',
		'icon-arrow-dbl-bl-l': '&#xe6f2;',
		'icon-arrow-dbl-bl-r': '&#xe6f3;',
		'icon-arrow-dbl-bl-u': '&#xe6f4;',
		'icon-arrow-dbl-d': '&#xe6f5;',
		'icon-arrow-dbl-l': '&#xe6f6;',
		'icon-arrow-dbl-r': '&#xe6f7;',
		'icon-arrow-dbl-u': '&#xe6f8;',
		'icon-arrow-l': '&#xe6f9;',
		'icon-arrow-r': '&#xe6fa;',
		'icon-arrow-slim-big-d': '&#xe6fb;',
		'icon-arrow-slim-big-l': '&#xe6fc;',
		'icon-arrow-slim-big-r': '&#xe6fd;',
		'icon-arrow-slim-big-u': '&#xe6fe;',
		'icon-arrow-slim-d': '&#xe6ff;',
		'icon-arrow-slim-dbl-d': '&#xe700;',
		'icon-arrow-slim-dbl-d-o': '&#xe701;',
		'icon-arrow-slim-dbl-l': '&#xe702;',
		'icon-arrow-slim-dbl-l-o': '&#xe703;',
		'icon-arrow-slim-dbl-r': '&#xe704;',
		'icon-arrow-slim-dbl-r-o': '&#xe705;',
		'icon-arrow-slim-dbl-u': '&#xe706;',
		'icon-arrow-slim-dbl-u-o': '&#xe707;',
		'icon-arrow-slim-l': '&#xe708;',
		'icon-arrow-slim-r': '&#xe709;',
		'icon-arrow-slim-u': '&#xe70a;',
		'icon-arrow-u': '&#xe70b;',
		'icon-direction-l': '&#xe70c;',
		'icon-direction-l-ol': '&#xe70d;',
		'icon-direction-r': '&#xe70e;',
		'icon-direction-r-ol': '&#xe70f;',
		'icon-directions': '&#xe710;',
		'icon-directions-ol': '&#xe711;',
		'icon-recycle': '&#xe712;',
		'icon-repeat': '&#xe713;',
		'icon-repeat-big': '&#xe714;',
		'icon-repeat-big-o': '&#xe715;',
		'icon-repeat-big-o-alt': '&#xe716;',
		'icon-repeat-big-o-alt-a': '&#xe717;',
		'icon-repeat-o': '&#xe718;',
		'icon-repeat-o-alt': '&#xe719;',
		'icon-repeat-small': '&#xe71a;',
		'icon-uturn-big-d': '&#xe71b;',
		'icon-uturn-big-d-o': '&#xe71c;',
		'icon-uturn-big-l': '&#xe71d;',
		'icon-uturn-big-l-o': '&#xe71e;',
		'icon-uturn-big-r': '&#xe71f;',
		'icon-uturn-big-r-o': '&#xe720;',
		'icon-uturn-big-u': '&#xe721;',
		'icon-uturn-big-u-o': '&#xe722;',
		'icon-uturn-d': '&#xe723;',
		'icon-uturn-d-o': '&#xe724;',
		'icon-uturn-l': '&#xe725;',
		'icon-uturn-l-o': '&#xe726;',
		'icon-uturn-r': '&#xe727;',
		'icon-uturn-r-o': '&#xe728;',
		'icon-uturn-u': '&#xe729;',
		'icon-uturn-u-o': '&#xe72a;',
		'icon-cross': '&#xe72b;',
		'icon-download': '&#xe72c;',
		'icon-download-o': '&#xe72d;',
		'icon-enlarge': '&#xe72e;',
		'icon-enlarge-long': '&#xe72f;',
		'icon-enlarge-long-lr': '&#xe730;',
		'icon-enlarge-long-o': '&#xe731;',
		'icon-enlarge-long-o-alt': '&#xe732;',
		'icon-enlarge-long-ud': '&#xe733;',
		'icon-enlarge-lr': '&#xe734;',
		'icon-enlarge-o': '&#xe735;',
		'icon-enlarge-o-alt': '&#xe736;',
		'icon-enlarge-s': '&#xe737;',
		'icon-enlarge-s-lr': '&#xe738;',
		'icon-enlarge-s-o': '&#xe739;',
		'icon-enlarge-s-o-alt': '&#xe73a;',
		'icon-enlarge-s-ud': '&#xe73b;',
		'icon-enlarge-ud': '&#xe73c;',
		'icon-fourway': '&#xe73d;',
		'icon-loading': '&#xe73e;',
		'icon-move-tool': '&#xe73f;',
		'icon-move-tool-long': '&#xe740;',
		'icon-move-tool-o': '&#xe741;',
		'icon-move-undo-tool': '&#xe742;',
		'icon-move-undo-tool-long': '&#xe743;',
		'icon-reload': '&#xe744;',
		'icon-reload-o': '&#xe745;',
		'icon-reload-o-alt': '&#xe746;',
		'icon-reload-o-alt-a': '&#xe747;',
		'icon-reload-o-alt-b': '&#xe748;',
		'icon-turn-d': '&#xe749;',
		'icon-turn-l': '&#xe74a;',
		'icon-turn-r': '&#xe74b;',
		'icon-turn-u': '&#xe74c;',
		'icon-twoway': '&#xe74d;',
		'icon-twoway-long': '&#xe74e;',
		'icon-twoway-long-o': '&#xe74f;',
		'icon-twoway-o': '&#xe750;',
		'icon-twoway-o-alt': '&#xe751;',
		'icon-unlarge': '&#xe752;',
		'icon-unlarge-long': '&#xe753;',
		'icon-upload': '&#xe754;',
		'icon-upload-o': '&#xe755;',
		'icon-cloud': '&#xe756;',
		'icon-cloud-energy': '&#xe757;',
		'icon-clouds': '&#xe758;',
		'icon-cloud-sun': '&#xe759;',
		'icon-rain': '&#xe75a;',
		'icon-rain-o': '&#xe75b;',
		'icon-rain-o-alt': '&#xe75c;',
		'icon-sun': '&#xe75d;',
		'icon-cap': '&#xe75e;',
		'icon-cook-cap': '&#xe75f;',
		'icon-jogger': '&#xe760;',
		'icon-ambulance': '&#xe761;',
		'icon-ambulance-o': '&#xe762;',
		'icon-bicycle': '&#xe763;',
		'icon-bicycle-ol': '&#xe764;',
		'icon-bus': '&#xe765;',
		'icon-bus-o': '&#xe766;',
		'icon-car': '&#xe767;',
		'icon-car-o': '&#xe768;',
		'icon-car-o-alt': '&#xe769;',
		'icon-helicopter': '&#xe76a;',
		'icon-paper-plane': '&#xe76b;',
		'icon-paperplane-o': '&#xe76c;',
		'icon-submarin': '&#xe76d;',
		'icon-taxi': '&#xe76e;',
		'icon-truck': '&#xe76f;',
		'icon-truck-army': '&#xe770;',
		'icon-truck-mini': '&#xe771;',
		'icon-truck-o': '&#xe772;',
		'icon-van': '&#xe773;',
		'icon-console': '&#xe774;',
		'icon-bluetooth': '&#xe775;',
		'icon-calculator': '&#xe776;',
		'icon-calculator-o': '&#xe777;',
		'icon-cd': '&#xe778;',
		'icon-chip': '&#xe779;',
		'icon-cloud-network': '&#xe77a;',
		'icon-computer': '&#xe77b;',
		'icon-computer-displays': '&#xe77c;',
		'icon-computer-o': '&#xe77d;',
		'icon-cpu': '&#xe77e;',
		'icon-database': '&#xe77f;',
		'icon-database-add': '&#xe780;',
		'icon-database-remove': '&#xe781;',
		'icon-devices': '&#xe782;',
		'icon-dish': '&#xe783;',
		'icon-dish-o': '&#xe784;',
		'icon-harddrive': '&#xe785;',
		'icon-ipod': '&#xe786;',
		'icon-joystick': '&#xe787;',
		'icon-laptop': '&#xe788;',
		'icon-mobile': '&#xe789;',
		'icon-monitor': '&#xe78a;',
		'icon-network': '&#xe78b;',
		'icon-network-o': '&#xe78c;',
		'icon-printer': '&#xe78d;',
		'icon-printer-o': '&#xe78e;',
		'icon-sattlelite': '&#xe78f;',
		'icon-script': '&#xe790;',
		'icon-script-o': '&#xe791;',
		'icon-server': '&#xe792;',
		'icon-servers': '&#xe793;',
		'icon-tablet': '&#xe794;',
		'icon-terminal': '&#xe795;',
		'icon-usb': '&#xe796;',
		'icon-usb-o': '&#xe797;',
		'icon-usb-ol': '&#xe798;',
		'icon-usb-symbol': '&#xe799;',
		'icon-wifi': '&#xe79a;',
		'icon-wifi-signal': '&#xe79b;',
		'icon-wireless': '&#xe79c;',
		'icon-eraser': '&#xe79d;',
		'icon-file': '&#xe79e;',
		'icon-file-add': '&#xe79f;',
		'icon-file-add-btn': '&#xe7a0;',
		'icon-file-add-btn-o': '&#xe7a1;',
		'icon-file-add-btn-ol': '&#xe7a2;',
		'icon-file-add-btn-ol-o': '&#xe7a3;',
		'icon-file-add-o': '&#xe7a4;',
		'icon-file-add-ol': '&#xe7a5;',
		'icon-file-add-ol-o': '&#xe7a6;',
		'icon-file-award': '&#xe7a7;',
		'icon-file-award-o': '&#xe7a8;',
		'icon-file-award-ol': '&#xe7a9;',
		'icon-file-award-ol-o': '&#xe7aa;',
		'icon-file-bookmark': '&#xe7ab;',
		'icon-file-bookmark-ol': '&#xe7ac;',
		'icon-file-cancel': '&#xe7ad;',
		'icon-file-cancel-btn': '&#xe7ae;',
		'icon-file-cancel-btn-o': '&#xe7af;',
		'icon-file-cancel-btn-ol': '&#xe7b0;',
		'icon-file-cancel-btn-ol-o': '&#xe7b1;',
		'icon-file-cancel-o': '&#xe7b2;',
		'icon-file-cancel-ol': '&#xe7b3;',
		'icon-file-cancel-ol-o': '&#xe7b4;',
		'icon-file-compress': '&#xe7b5;',
		'icon-file-compress-ol': '&#xe7b6;',
		'icon-file-down': '&#xe7b7;',
		'icon-file-down-o': '&#xe7b8;',
		'icon-file-down-o-alt': '&#xe7b9;',
		'icon-file-down-ol': '&#xe7ba;',
		'icon-file-down-ol-o': '&#xe7bb;',
		'icon-file-down-ol-o-alt': '&#xe7bc;',
		'icon-file-edit': '&#xe7bd;',
		'icon-file-edit-o': '&#xe7be;',
		'icon-file-edit-ol-o': '&#xe7bf;',
		'icon-file-enlarge': '&#xe7c0;',
		'icon-file-enlarge-ol': '&#xe7c1;',
		'icon-file-enlarge-ud': '&#xe7c2;',
		'icon-file-enlarge-ud-o': '&#xe7c3;',
		'icon-file-enlarge-ud-ol': '&#xe7c4;',
		'icon-file-enlarge-ud-ol-o': '&#xe7c5;',
		'icon-file-move': '&#xe7c6;',
		'icon-file-move-lr': '&#xe7c7;',
		'icon-file-move-lr-ol': '&#xe7c8;',
		'icon-file-move-ol': '&#xe7c9;',
		'icon-file-move-ud': '&#xe7ca;',
		'icon-file-move-up-ol': '&#xe7cb;',
		'icon-file-ol': '&#xe7cc;',
		'icon-file-reload': '&#xe7cd;',
		'icon-file-reload-ol': '&#xe7ce;',
		'icon-file-remove': '&#xe7cf;',
		'icon-file-remove-btn': '&#xe7d0;',
		'icon-file-remove-btn-o': '&#xe7d1;',
		'icon-file-remove-btn-ol': '&#xe7d2;',
		'icon-file-remove-btn-ol-o': '&#xe7d3;',
		'icon-file-remove-o': '&#xe7d4;',
		'icon-file-remove-ol': '&#xe7d5;',
		'icon-file-remove-ol-o': '&#xe7d6;',
		'icon-files': '&#xe7d7;',
		'icon-files-o': '&#xe7d8;',
		'icon-files-ol': '&#xe7d9;',
		'icon-files-ol-o': '&#xe7da;',
		'icon-file-up': '&#xe7db;',
		'icon-file-up-o': '&#xe7dc;',
		'icon-file-up-o-alt': '&#xe7dd;',
		'icon-file-up-ol': '&#xe7de;',
		'icon-file-up-ol-o': '&#xe7df;',
		'icon-file-up-ol-o-alt': '&#xe7e0;',
		'icon-graph-file': '&#xe7e1;',
		'icon-graph-file-ol': '&#xe7e2;',
		'icon-image-file': '&#xe7e3;',
		'icon-image-file-ol': '&#xe7e4;',
		'icon-music-file': '&#xe7e5;',
		'icon-music-file-ol': '&#xe7e6;',
		'icon-play-file': '&#xe7e7;',
		'icon-play-file-ol': '&#xe7e8;',
		'icon-video-file': '&#xe7e9;',
		'icon-video-file-ol': '&#xe7ea;',
		'icon-music-folder': '&#xe7eb;',
		'icon-pic-folder': '&#xe7ec;',
		'icon-pic-folder-o': '&#xe7ed;',
		'icon-text-folder': '&#xe7ee;',
		'icon-text-folder-o': '&#xe7ef;',
		'icon-video-folder': '&#xe7f0;',
		'icon-video-folder-o': '&#xe7f1;',
		'icon-banner': '&#xe7f2;',
		'icon-book-open-ol': '&#xe7f3;',
		'icon-brocher': '&#xe7f4;',
		'icon-brocher-ol': '&#xe7f5;',
		'icon-brush': '&#xe7f6;',
		'icon-brush-o': '&#xe7f7;',
		'icon-calendar': '&#xe7f8;',
		'icon-calendar-o': '&#xe7f9;',
		'icon-calendar-ol': '&#xe7fa;',
		'icon-chart-paper-fold': '&#xe7fb;',
		'icon-chart-paper-fold-o': '&#xe7fc;',
		'icon-chart-paper-fold-o-alt': '&#xe7fd;',
		'icon-chart-paper-fold-ol': '&#xe7fe;',
		'icon-chart-paper-fold-ol-o': '&#xe7ff;',
		'icon-chart-paper-fold-ol-o-alt': '&#xe800;',
		'icon-common-pin': '&#xe801;',
		'icon-common-pin-o': '&#xe802;',
		'icon-contact-dairy': '&#xe803;',
		'icon-dairy': '&#xe804;',
		'icon-dairy-ol': '&#xe805;',
		'icon-featherpen': '&#xe806;',
		'icon-feather': '&#xe807;',
		'icon-featherpen-o': '&#xe808;',
		'icon-files2': '&#xe809;',
		'icon-folder': '&#xe80a;',
		'icon-folder-o': '&#xe80b;',
		'icon-folder-search': '&#xe80c;',
		'icon-letter': '&#xe80d;',
		'icon-letterhead': '&#xe80e;',
		'icon-letter-ol': '&#xe80f;',
		'icon-map': '&#xe810;',
		'icon-map-maker': '&#xe811;',
		'icon-map-maker-o': '&#xe812;',
		'icon-map-maker-o-alt': '&#xe813;',
		'icon-notepad': '&#xe814;',
		'icon-notepad-o': '&#xe815;',
		'icon-office-stationary': '&#xe816;',
		'icon-paper-pin': '&#xe817;',
		'icon-paper-pin-o': '&#xe818;',
		'icon-paper-pin-o-alt': '&#xe819;',
		'icon-pen': '&#xe81a;',
		'icon-pencil': '&#xe81b;',
		'icon-pencil-marker': '&#xe81c;',
		'icon-pencil-o': '&#xe81d;',
		'icon-pic': '&#xe81e;',
		'icon-pic-o': '&#xe81f;',
		'icon-pic-paint': '&#xe820;',
		'icon-pin': '&#xe821;',
		'icon-balling': '&#xe822;',
		'icon-baseball': '&#xe823;',
		'icon-basketball': '&#xe824;',
		'icon-football': '&#xe825;',
		'icon-football-o': '&#xe826;',
		'icon-golfball': '&#xe827;',
		'icon-rugby-ball': '&#xe828;',
		'icon-snooker-ball': '&#xe829;',
		'icon-tenis-ball': '&#xe82a;',
		'icon-whistle': '&#xe82b;',
		'icon-aim': '&#xe82c;',
		'icon-amazon': '&#xe82d;',
		'icon-andriod': '&#xe82e;',
		'icon-andriod-head': '&#xe82f;',
		'icon-apple': '&#xe830;',
		'icon-appstore': '&#xe831;',
		'icon-ask': '&#xe832;',
		'icon-badoo': '&#xe833;',
		'icon-bebo': '&#xe834;',
		'icon-behance': '&#xe835;',
		'icon-blinklist': '&#xe836;',
		'icon-blogger': '&#xe837;',
		'icon-chrome': '&#xe838;',
		'icon-del_icio_us': '&#xe839;',
		'icon-deviantart': '&#xe83a;',
		'icon-digg': '&#xe83b;',
		'icon-diigo': '&#xe83c;',
		'icon-dribble': '&#xe83d;',
		'icon-dropbox': '&#xe83e;',
		'icon-ebay': '&#xe83f;',
		'icon-evernote': '&#xe840;',
		'icon-facebook': '&#xe841;',
		'icon-flickr': '&#xe842;',
		'icon-forrst': '&#xe843;',
		'icon-friendfeed': '&#xe844;',
		'icon-gabbr': '&#xe845;',
		'icon-git': '&#xe846;',
		'icon-google': '&#xe847;',
		'icon-googlebuzz': '&#xe848;',
		'icon-google-o': '&#xe849;',
		'icon-googleplus': '&#xe84a;',
		'icon-healthranker': '&#xe84b;',
		'icon-hi5': '&#xe84c;',
		'icon-html5': '&#xe84d;',
		'icon-instagram': '&#xe84e;',
		'icon-lastfm': '&#xe84f;',
		'icon-linkedin': '&#xe850;',
		'icon-myspace': '&#xe851;',
		'icon-newsvine': '&#xe852;',
		'icon-paypal': '&#xe853;',
		'icon-picasa': '&#xe854;',
		'icon-pinterest': '&#xe855;',
		'icon-printfriendly': '&#xe856;',
		'icon-propeller': '&#xe857;',
		'icon-qik': '&#xe858;',
		'icon-reddit': '&#xe859;',
		'icon-reddit-o': '&#xe85a;',
		'icon-rss': '&#xe85b;',
		'icon-sharethis': '&#xe85c;',
		'icon-skype': '&#xe85d;',
		'icon-soundcloud': '&#xe85e;',
		'icon-squidoo': '&#xe85f;',
		'icon-stackexchange': '&#xe860;',
		'icon-stumbleupon': '&#xe861;',
		'icon-stumbleupon-o': '&#xe862;',
		'icon-technorati': '&#xe863;',
		'icon-tumblr': '&#xe864;',
		'icon-twitter': '&#xe865;',
		'icon-twitter-o': '&#xe866;',
		'icon-vimeo': '&#xe867;',
		'icon-windows': '&#xe868;',
		'icon-windows8': '&#xe869;',
		'icon-wordpress': '&#xe86a;',
		'icon-xing': '&#xe86b;',
		'icon-yahoo': '&#xe86c;',
		'icon-yample': '&#xe86d;',
		'icon-yelp': '&#xe86e;',
		'icon-youtube': '&#xe86f;',
		'icon-youtube-o': '&#xe870;',
		'icon-zootool': '&#xe871;',
		'icon-cart': '&#xe872;',
		'icon-basket': '&#xe873;',
		'icon-basket-o': '&#xe874;',
		'icon-basket-o-alt': '&#xe875;',
		'icon-cart2': '&#xe876;',
		'icon-creditcard': '&#xe877;',
		'icon-creditcard-back': '&#xe878;',
		'icon-tag': '&#xe879;',
		'icon-graph-area': '&#xe87a;',
		'icon-graph-area-o': '&#xe87b;',
		'icon-graph-bars': '&#xe87c;',
		'icon-graph-bars-h': '&#xe87d;',
		'icon-graph-bars-v': '&#xe87e;',
		'icon-graph-circle': '&#xe87f;',
		'icon-graph-line': '&#xe880;',
		'icon-graph-lines': '&#xe881;',
		'icon-graph-pie': '&#xe882;',
		'icon-graph-pie-90': '&#xe883;',
		'icon-graph-pie-90-o': '&#xe884;',
		'icon-graph-pie-half': '&#xe885;',
		'icon-graph-pie-o': '&#xe886;',
		'icon-rocket': '&#xe887;',
		'icon-rocket-fire': '&#xe888;',
		'icon-rocket-fire-o': '&#xe889;',
		'icon-rocket-fire-o-alt': '&#xe88a;',
		'icon-rocket-fire-o-alt-a': '&#xe88b;',
		'icon-rocket-fire-o-alt-b': '&#xe88c;',
		'icon-rocket-fire-o-alt-c': '&#xe88d;',
		'icon-rocket-o': '&#xe88e;',
		'icon-rocket-o-alt': '&#xe88f;',
		'icon-rocket-o-alt-a': '&#xe890;',
		'icon-rocket-o-alt-b': '&#xe891;',
		'icon-rocket-o-alt-c': '&#xe892;',
		'icon-anchor': '&#xe893;',
		'icon-anchor-o': '&#xe894;',
		'icon-compass': '&#xe895;',
		'icon-compass-o': '&#xe896;',
		'icon-life-bouy': '&#xe897;',
		'icon-life-saver': '&#xe898;',
		'icon-paper-ship': '&#xe899;',
		'icon-ship': '&#xe89a;',
		'icon-ship-wheel': '&#xe89b;',
		'icon-heart': '&#xe89c;',
		'icon-heart-graph': '&#xe89d;',
		'icon-heart-o': '&#xe89e;',
		'icon-heart-o-alt': '&#xe89f;',
		'icon-heart-ol': '&#xe8a0;',
		'icon-heart-ol-inside': '&#xe8a1;',
		'icon-dr-board': '&#xe8a2;',
		'icon-dropper': '&#xe8a3;',
		'icon-firstaid-bag': '&#xe8a4;',
		'icon-firstaid-box': '&#xe8a5;',
		'icon-flask': '&#xe8a6;',
		'icon-flask-o': '&#xe8a7;',
		'icon-hospital': '&#xe8a8;',
		'icon-hospital-o': '&#xe8a9;',
		'icon-injection': '&#xe8aa;',
		'icon-microscope': '&#xe8ab;',
		'icon-nurse': '&#xe8ac;',
		'icon-plaster': '&#xe8ad;',
		'icon-test-tube': '&#xe8ae;',
		'icon-block-list': '&#xe8af;',
		'icon-grid': '&#xe8b0;',
		'icon-grid-2col': '&#xe8b1;',
		'icon-grid-3col': '&#xe8b2;',
		'icon-layout-2cols': '&#xe8b3;',
		'icon-layout-boxed': '&#xe8b4;',
		'icon-layout-fullwidth': '&#xe8b5;',
		'icon-layout-nosidebars': '&#xe8b6;',
		'icon-layout-sidebar-l': '&#xe8b7;',
		'icon-layout-sidebar-r': '&#xe8b8;',
		'icon-layout-sidebars': '&#xe8b9;',
		'icon-list': '&#xe8ba;',
		'icon-list-w-image': '&#xe8bb;',
		'icon-menu-list': '&#xe8bc;',
		'icon-select-all2': '&#xe8bd;',
		'icon-select-items': '&#xe8be;',
		'icon-select-none': '&#xe8bf;',
		'icon-familytree': '&#xe8c0;',
		'icon-familytree-o': '&#xe8c1;',
		'icon-group': '&#xe8c2;',
		'icon-support': '&#xe8c3;',
		'icon-user': '&#xe8c4;',
		'icon-user-female': '&#xe8c5;',
		'icon-user-o': '&#xe8c6;',
		'icon-user-o-alt': '&#xe8c7;',
		'icon-globe': '&#xe8c8;',
		'icon-globe-ol': '&#xe8c9;',
		'icon-world': '&#xe8ca;',
		'icon-world-o': '&#xe8cb;',
		'icon-frame-box': '&#xe8cc;',
		'icon-frame-box-ol': '&#xe8cd;',
		'icon-frame-circle': '&#xe8ce;',
		'icon-frame-circle-ol': '&#xe8cf;',
		'icon-frame-daimond': '&#xe8d0;',
		'icon-frame-daimond-ol': '&#xe8d1;',
		'icon-frame-medal': '&#xe8d2;',
		'icon-frame-medal-ol': '&#xe8d3;',
		'icon-frame-roundedbox': '&#xe8d4;',
		'icon-frame-roundedbox-ol': '&#xe8d5;',
		'icon-frame-special': '&#xe8d6;',
		'icon-frame-special-ol': '&#xe8d7;',
		'icon-frame-triangle': '&#xe8d8;',
		'icon-frame-triangle-ol': '&#xe8d9;',
		'icon-apple2': '&#xe8da;',
		'icon-burger': '&#xe8db;',
		'icon-cerry': '&#xe8dc;',
		'icon-citrus': '&#xe8dd;',
		'icon-icecream-con': '&#xe8de;',
		'icon-orange': '&#xe8df;',
		'icon-pear': '&#xe8e0;',
		'icon-baht': '&#xe8e1;',
		'icon-cent': '&#xe8e2;',
		'icon-dollar': '&#xe8e3;',
		'icon-dong': '&#xe8e4;',
		'icon-euro': '&#xe8e5;',
		'icon-hryvnia': '&#xe8e6;',
		'icon-ind-rupee': '&#xe8e7;',
		'icon-pak-rupee': '&#xe8e8;',
		'icon-pound': '&#xe8e9;',
		'icon-shekel': '&#xe8ea;',
		'icon-won': '&#xe8eb;',
		'icon-yen': '&#xe8ec;',
		'icon-bank': '&#xe8ed;',
		'icon-money-bag': '&#xe8ee;',
		'icon-money-bag-o': '&#xe8ef;',
		'icon-leaf': '&#xe8f0;',
		'icon-leafs': '&#xe8f1;',
		'icon-leafs-o': '&#xe8f2;',
		'icon-leafs-o-alt': '&#xe8f3;',
		'icon-leafs-o-alt-a': '&#xe8f4;',
		'icon-recycle2': '&#xe8f5;',
		'icon-tree': '&#xe8f6;',
		'icon-email': '&#xe8f7;',
		'icon-email-in': '&#xe8f8;',
		'icon-email-in-ol': '&#xe8f9;',
		'icon-email-ol': '&#xe8fa;',
		'icon-email-out': '&#xe8fb;',
		'icon-email-out-ol': '&#xe8fc;',
		'icon-email-read': '&#xe8fd;',
		'icon-email-read-ol': '&#xe8fe;',
		'icon-graduation-cap': '&#xe8ff;',
		'icon-beater': '&#xe900;',
		'icon-cup': '&#xe901;',
		'icon-cup-o': '&#xe902;',
		'icon-cup-o-alt': '&#xe903;',
		'icon-cup-o-alt-a': '&#xe904;',
		'icon-cup-o-alt-b': '&#xe905;',
		'icon-dish2': '&#xe906;',
		'icon-foodcontainer': '&#xe907;',
		'icon-fork': '&#xe908;',
		'icon-frypan': '&#xe909;',
		'icon-glass': '&#xe90a;',
		'icon-glass-juice': '&#xe90b;',
		'icon-glass-o': '&#xe90c;',
		'icon-knife': '&#xe90d;',
		'icon-knife-o': '&#xe90e;',
		'icon-rollingpin': '&#xe90f;',
		'icon-sautepan': '&#xe910;',
		'icon-spoone': '&#xe911;',
		'icon-teapot': '&#xe912;',
		'icon-turner': '&#xe913;',
		'icon-turner-o': '&#xe914;',
		'icon-twoprongedfork': '&#xe915;',
		'icon-bulb': '&#xe916;',
		'icon-bulb-glow': '&#xe917;',
		'icon-bulb-glow-ol': '&#xe918;',
		'icon-bulb-ol': '&#xe919;',
		'icon-construction': '&#xe91a;',
		'icon-gear': '&#xe91b;',
		'icon-gears': '&#xe91c;',
		'icon-hammar': '&#xe91d;',
		'icon-hammar-o': '&#xe91e;',
		'icon-measurement': '&#xe91f;',
		'icon-meter2': '&#xe920;',
		'icon-screw-tool': '&#xe921;',
		'icon-screw-tool-o': '&#xe922;',
		'icon-screw-tools': '&#xe923;',
		'icon-clock': '&#xe924;',
		'icon-clock-alarm': '&#xe925;',
		'icon-clock-alarm-ol': '&#xe926;',
		'icon-clock-o': '&#xe927;',
		'icon-clock-o-alt': '&#xe928;',
		'icon-clock-ol': '&#xe929;',
		'icon-clock-ol-o': '&#xe92a;',
		'icon-clock-ol-o-alt': '&#xe92b;',
		'icon-timer': '&#xe92c;',
		'icon-timer-ol': '&#xe92d;',
		'icon-watch': '&#xe92e;',
		'icon-chat': '&#xe92f;',
		'icon-chat-rbox': '&#xe930;',
		'icon-comment': '&#xe931;',
		'icon-comment-bubble': '&#xe932;',
		'icon-comment-bubble-simple': '&#xe933;',
		'icon-comment-o': '&#xe934;',
		'icon-comment-rbox': '&#xe935;',
		'icon-comment-simple': '&#xe936;',
		'icon-comment-simple-o': '&#xe937;',
		'icon-comment-simple-rbox': '&#xe938;',
		'icon-mobile-chat': '&#xe939;',
		'icon-sms': '&#xe93a;',
		'icon-sms-o': '&#xe93b;',
		'icon-medal': '&#xe93c;',
		'icon-medal-strip': '&#xe93d;',
		'icon-medal-strips': '&#xe93e;',
		'icon-star': '&#xe93f;',
		'icon-star-half': '&#xe940;',
		'icon-star-half-o': '&#xe941;',
		'icon-star-o': '&#xe942;',
		'icon-star-ol': '&#xe943;',
		'icon-thumb-down': '&#xe944;',
		'icon-thumb-down-ol': '&#xe945;',
		'icon-thumb-up': '&#xe946;',
		'icon-thumb-up-ol': '&#xe947;',
		'icon-trophy': '&#xe948;',
		'icon-trophy-o': '&#xe949;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
