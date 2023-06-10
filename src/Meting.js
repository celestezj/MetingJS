console.log(`${'\n'} %c MetingJS v1.2.0 %c https://github.com/metowolf/MetingJS ${'\n'}`, 'color: #fadfa3; background: #030307; padding:5px 0;', 'background: #fadfa3; padding:5px 0;');

let aplayers = [];
let loadMeting = () => {
    let api = 'https://api.injahow.cn/meting/?type=playlist&id=:id'; //'https://api.i-meto.com/meting/api?server=:server&type=:type&id=:id&r=:r'; see https://blog.anheyu.com/posts/a76e.html and https://github.com/celestezj/meting-api
    if (typeof meting_api !== 'undefined') api = meting_api;

    for (let i = 0; i < aplayers.length; i++) {
        if(!aplayers[i].container.classList.contains("no-destroy")){
            try {
                aplayers[i].destroy();
            } catch (e) {
                console.log(e);
            }
        }
    }
    aplayers = [];

    let elements = document.querySelectorAll(".aplayer");

    for (var i = 0; i < elements.length; i++) {
        const el = elements[i];
        if(el.classList.contains("no-reload")) continue;
	if(el.classList.contains("no-destroy")) el.classList.add("no-reload");
        let id = el.dataset.id;
        if (id) {
            let url = el.dataset.api || api;
            url = url.replace(":server", el.dataset.server);
            url = url.replace(":type", el.dataset.type);
            url = url.replace(":id", el.dataset.id);
            url = url.replace(":auth", el.dataset.auth);
            url = url.replace(":r", Math.random());

            const xhr = new XMLHttpRequest();
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
                        let response = JSON.parse(xhr.responseText);
                        build(el, response);
                    }
                }
            };
            //https://music.163.com/#/playlist?id=6609974608
            //https://medium.com/@dtkatz/3-ways-to-fix-the-cors-error-and-how-access-control-allow-origin-works-d97d55946d9
            //https://greasyfork.org/zh-CN/scripts/33046-%E7%BD%91%E6%98%93%E4%BA%91%E9%9F%B3%E4%B9%90%E7%9B%B4%E6%8E%A5%E4%B8%8B%E8%BD%BD
            //https://squoosh.app/
            //https://www.youcompress.com/zh-cn/mp3/
            xhr.onerror = function() {
                build(el, [
        {
            name: '永远的长安',
            artist: '程池',
            url: 'https://github.com/celestezj/KaTeX-main-zj/raw/master/src/metrics/%E7%A8%8B%E6%B1%A0%20-%20%E6%B0%B8%E8%BF%9C%E7%9A%84%E9%95%BF%E5%AE%89.mp3',
            cover: 'https://cdn.statically.io/gh/celestezj/KaTeX-main-zj/master/src/metrics/%E7%A8%8B%E6%B1%A0%20-%20%E6%B0%B8%E8%BF%9C%E7%9A%84%E9%95%BF%E5%AE%89.jpg',
            lrc: 'https://cdn.statically.io/gh/celestezj/KaTeX-main-zj/master/src/metrics/%E7%A8%8B%E6%B1%A0%20-%20%E6%B0%B8%E8%BF%9C%E7%9A%84%E9%95%BF%E5%AE%89.lrc',
        },
        {
            name: 'カントリー・ロード',
            artist: '本名陽子',
            url: 'https://github.com/celestezj/KaTeX-main-zj/raw/master/src/fonts/lib/%E6%9C%AC%E5%90%8D%E9%99%BD%E5%AD%90%20-%20%E3%82%AB%E3%83%B3%E3%83%88%E3%83%AA%E3%83%BC%E3%83%BB%E3%83%AD%E3%83%BC%E3%83%89.mp3',
            cover: 'https://cdn.statically.io/gh/celestezj/KaTeX-main-zj/master/src/fonts/lib/%E6%9C%AC%E5%90%8D%E9%99%BD%E5%AD%90%20-%20%E3%82%AB%E3%83%B3%E3%83%88%E3%83%AA%E3%83%BC%E3%83%BB%E3%83%AD%E3%83%BC%E3%83%89.jpg',
            lrc: 'https://cdn.statically.io/gh/celestezj/KaTeX-main-zj/master/src/fonts/lib/%E6%9C%AC%E5%90%8D%E9%99%BD%E5%AD%90%20-%20%E3%82%AB%E3%83%B3%E3%83%88%E3%83%AA%E3%83%BC%E3%83%BB%E3%83%AD%E3%83%BC%E3%83%89.lrc',
        },
        {
            name: '夜的钢琴曲5（翻自 石进）',
            artist: '九月橙',
            url: 'https://github.com/celestezj/KaTeX-main-zj/raw/master/src/environments/%E4%B9%9D%E6%9C%88%E6%A9%99%20-%20%E5%A4%9C%E7%9A%84%E9%92%A2%E7%90%B4%E6%9B%B25%EF%BC%88%E7%BF%BB%E8%87%AA%20%E7%9F%B3%E8%BF%9B%EF%BC%89.mp3',
            cover: 'https://cdn.statically.io/gh/celestezj/KaTeX-main-zj/master/src/environments/%E4%B9%9D%E6%9C%88%E6%A9%99%20-%20%E5%A4%9C%E7%9A%84%E9%92%A2%E7%90%B4%E6%9B%B25%EF%BC%88%E7%BF%BB%E8%87%AA%20%E7%9F%B3%E8%BF%9B%EF%BC%89.jpg',
            lrc: 'https://cdn.statically.io/gh/celestezj/KaTeX-main-zj/master/src/environments/%E4%B9%9D%E6%9C%88%E6%A9%99%20-%20%E5%A4%9C%E7%9A%84%E9%92%A2%E7%90%B4%E6%9B%B25%EF%BC%88%E7%BF%BB%E8%87%AA%20%E7%9F%B3%E8%BF%9B%EF%BC%89.lrc',
        },
        {
            name: '梦中的婚礼',
            artist: 'Richard Clayderman',
            url: 'https://github.com/celestezj/KaTeX-main-zj/raw/master/dockers/texcmp/Richard%20Clayderman%20-%20%E6%A2%A6%E4%B8%AD%E7%9A%84%E5%A9%9A%E7%A4%BC.mp3',
            cover: 'https://cdn.statically.io/gh/celestezj/KaTeX-main-zj/master/dockers/texcmp/Richard%20Clayderman%20-%20%E6%A2%A6%E4%B8%AD%E7%9A%84%E5%A9%9A%E7%A4%BC.jpg',
            lrc: 'https://cdn.statically.io/gh/celestezj/KaTeX-main-zj/master/dockers/texcmp/Richard%20Clayderman%20-%20%E6%A2%A6%E4%B8%AD%E7%9A%84%E5%A9%9A%E7%A4%BC.lrc',
        },
        {
            name: 'Pole',
            artist: 'Djelem',
            url: 'https://github.com/celestezj/KaTeX-main-zj/raw/master/contrib/mhchem/Djelem%20-%20Pole.mp3',
            cover: 'https://cdn.statically.io/gh/celestezj/KaTeX-main-zj/master/contrib/mhchem/Djelem%20-%20Pole.jpg',
            lrc: 'https://cdn.statically.io/gh/celestezj/KaTeX-main-zj/master/contrib/mhchem/Djelem%20-%20Pole.lrc',
        },
        {
            name: 'El Dorado (Dubstep Remix)',
            artist: 'Two Steps From Hell / Thomas Bergersen',
            url: 'https://github.com/celestezj/KaTeX-main-zj/raw/master/flow-typed/npm/Two%20Steps%20From%20Hell%2CThomas%20Bergersen%20-%20El%20Dorado%20(Dubstep%20Remix).mp3',
            cover: 'https://cdn.statically.io/gh/celestezj/KaTeX-main-zj/master/flow-typed/npm/Two%20Steps%20From%20Hell%2CThomas%20Bergersen%20-%20El%20Dorado%20(Dubstep%20Remix).jpg',
            lrc: 'https://cdn.statically.io/gh/celestezj/KaTeX-main-zj/master/flow-typed/npm/Two%20Steps%20From%20Hell%2CThomas%20Bergersen%20-%20El%20Dorado%20(Dubstep%20Remix).lrc',
        },
        {
            name: 'Empire of Angels',
            artist: 'Thomas Bergersen',
            url: 'https://github.com/celestezj/KaTeX-main-zj/raw/master/docs/Thomas%20Bergersen%20-%20Empire%20of%20Angels.mp3',
            cover: 'https://cdn.statically.io/gh/celestezj/KaTeX-main-zj/master/docs/Thomas%20Bergersen%20-%20Empire%20of%20Angels.jpg',
            lrc: 'https://cdn.statically.io/gh/celestezj/KaTeX-main-zj/master/docs/Thomas%20Bergersen%20-%20Empire%20of%20Angels.lrc',
        },
        {
            name: '深山幽谷-中音笙/二胡',
            artist: '群星',
            url: 'https://github.com/celestezj/KaTeX-main-zj/raw/master/website/core/%E7%BE%A4%E6%98%9F%20-%20%E6%B7%B1%E5%B1%B1%E5%B9%BD%E8%B0%B7-%E4%B8%AD%E9%9F%B3%E7%AC%99_%E4%BA%8C%E8%83%A1.mp3',
            cover: 'https://cdn.statically.io/gh/celestezj/KaTeX-main-zj/master/website/core/%E7%BE%A4%E6%98%9F%20-%20%E6%B7%B1%E5%B1%B1%E5%B9%BD%E8%B0%B7-%E4%B8%AD%E9%9F%B3%E7%AC%99_%E4%BA%8C%E8%83%A1.jpg',
            lrc: 'https://cdn.statically.io/gh/celestezj/KaTeX-main-zj/master/website/core/%E7%BE%A4%E6%98%9F%20-%20%E6%B7%B1%E5%B1%B1%E5%B9%BD%E8%B0%B7-%E4%B8%AD%E9%9F%B3%E7%AC%99_%E4%BA%8C%E8%83%A1.lrc',
        },
        {
            name: '24/7',
            artist: 'CAGNET',
            url: 'https://github.com/celestezj/KaTeX-main-zj/raw/master/contrib/copy-tex/CAGNET%20-%2024_7.mp3',
            cover: 'https://cdn.statically.io/gh/celestezj/KaTeX-main-zj/master/contrib/copy-tex/CAGNET%20-%2024_7.jpg',
            lrc: 'https://cdn.statically.io/gh/celestezj/KaTeX-main-zj/master/contrib/copy-tex/CAGNET%20-%2024_7.lrc',
        },
        {
            name: 'Childhood Memories',
            artist: 'Ennio Morricone',
            url: 'https://github.com/celestezj/KaTeX-main-zj/raw/master/contrib/render-a11y-string/Ennio%20Morricone%20-%20Childhood%20Memories.mp3',
            cover: 'https://cdn.statically.io/gh/celestezj/KaTeX-main-zj/master/contrib/render-a11y-string/Ennio%20Morricone%20-%20Childhood%20Memories.jpg',
            lrc: 'https://cdn.statically.io/gh/celestezj/KaTeX-main-zj/master/contrib/render-a11y-string/Ennio%20Morricone%20-%20Childhood%20Memories.lrc',
        },
        {
            name: '福贵与家珍',
            artist: '赵季平',
            url: 'https://github.com/celestezj/KaTeX-main-zj/raw/master/test/screenshotter/%E8%B5%B5%E5%AD%A3%E5%B9%B3%20-%20%E7%A6%8F%E8%B4%B5%E4%B8%8E%E5%AE%B6%E7%8F%8D.mp3',
            cover: 'https://cdn.statically.io/gh/celestezj/KaTeX-main-zj/master/test/screenshotter/%E8%B5%B5%E5%AD%A3%E5%B9%B3%20-%20%E7%A6%8F%E8%B4%B5%E4%B8%8E%E5%AE%B6%E7%8F%8D.jpg',
            lrc: 'https://cdn.statically.io/gh/celestezj/KaTeX-main-zj/master/test/screenshotter/%E8%B5%B5%E5%AD%A3%E5%B9%B3%20-%20%E7%A6%8F%E8%B4%B5%E4%B8%8E%E5%AE%B6%E7%8F%8D.lrc',
        },
        {
            name: 'Here We Are Again',
            artist: 'CAGNET / 日向大介',
            url: 'https://github.com/celestezj/KaTeX-main-zj/raw/master/contrib/mathtex-script-type/CAGNET%2C%E6%97%A5%E5%90%91%E5%A4%A7%E4%BB%8B%20-%20Here%20We%20Are%20Again.mp3',
            cover: 'https://cdn.statically.io/gh/celestezj/KaTeX-main-zj/master/contrib/mathtex-script-type/CAGNET%2C%E6%97%A5%E5%90%91%E5%A4%A7%E4%BB%8B%20-%20Here%20We%20Are%20Again.jpg',
            lrc: 'https://cdn.statically.io/gh/celestezj/KaTeX-main-zj/master/contrib/mathtex-script-type/CAGNET%2C%E6%97%A5%E5%90%91%E5%A4%A7%E4%BB%8B%20-%20Here%20We%20Are%20Again.lrc',
        },
        {
            name: 'Breath and Life',
            artist: 'Audiomachine',
            url: 'https://github.com/celestezj/KaTeX-main-zj/raw/master/contrib/auto-render/test/Audiomachine%20-%20Breath%20and%20Life.mp3',
            cover: 'https://cdn.statically.io/gh/celestezj/KaTeX-main-zj/master/contrib/auto-render/test/Audiomachine%20-%20Breath%20and%20Life.jpg',
            lrc: 'https://cdn.statically.io/gh/celestezj/KaTeX-main-zj/master/contrib/auto-render/test/Audiomachine%20-%20Breath%20and%20Life.lrc',
        },
        {
            name: 'Victory',
            artist: 'Two Steps From Hell',
            url: 'https://github.com/celestezj/KaTeX-main-zj/raw/master/fonts/Two%20Steps%20From%20Hell%20-%20Victory.mp3',
            cover: 'https://cdn.statically.io/gh/celestezj/KaTeX-main-zj/master/fonts/Two%20Steps%20From%20Hell%20-%20Victory.jpg',
            lrc: 'https://cdn.statically.io/gh/celestezj/KaTeX-main-zj/master/fonts/Two%20Steps%20From%20Hell%20-%20Victory.lrc',
        },
        {
            name: "Deborah's Theme",
            artist: 'Ennio Morricone',
            url: "https://github.com/celestezj/KaTeX-main-zj/raw/master/dockers/fonts/Ennio%20Morricone%20-%20Deborah's%20Theme.mp3",
            cover: "https://cdn.statically.io/gh/celestezj/KaTeX-main-zj/master/dockers/fonts/Ennio%20Morricone%20-%20Deborah's%20Theme.jpg",
            lrc: "https://cdn.statically.io/gh/celestezj/KaTeX-main-zj/master/dockers/fonts/Ennio%20Morricone%20-%20Deborah's%20Theme.lrc",
        },
        {
            name: '恨爱交加',
            artist: '麦振鸿',
            url: 'https://github.com/celestezj/KaTeX-main-zj/raw/master/test/__snapshots__/%E9%BA%A6%E6%8C%AF%E9%B8%BF%20-%20%E6%81%A8%E7%88%B1%E4%BA%A4%E5%8A%A0.mp3',
            cover: 'https://cdn.statically.io/gh/celestezj/KaTeX-main-zj/master/test/__snapshots__/%E9%BA%A6%E6%8C%AF%E9%B8%BF%20-%20%E6%81%A8%E7%88%B1%E4%BA%A4%E5%8A%A0.jpg',
            lrc: 'https://cdn.statically.io/gh/celestezj/KaTeX-main-zj/master/test/__snapshots__/%E9%BA%A6%E6%8C%AF%E9%B8%BF%20-%20%E6%81%A8%E7%88%B1%E4%BA%A4%E5%8A%A0.lrc',
        },
        {
            name: 'その名は“ウルトラマンティガ” M-18,M-36,M60予告B',
            artist: '矢野立美',
            url: 'https://github.com/celestezj/KaTeX-main-zj/raw/master/src/functions/utils/%E7%9F%A2%E9%87%8E%E7%AB%8B%E7%BE%8E%20-%20%E3%81%9D%E3%81%AE%E5%90%8D%E3%81%AF%E2%80%9C%E3%82%A6%E3%83%AB%E3%83%88%E3%83%A9%E3%83%9E%E3%83%B3%E3%83%86%E3%82%A3%E3%82%AC%E2%80%9D%20M-18%2CM-36%2CM60%E4%BA%88%E5%91%8AB.mp3',
            cover: 'https://cdn.statically.io/gh/celestezj/KaTeX-main-zj/master/src/functions/utils/%E7%9F%A2%E9%87%8E%E7%AB%8B%E7%BE%8E%20-%20%E3%81%9D%E3%81%AE%E5%90%8D%E3%81%AF%E2%80%9C%E3%82%A6%E3%83%AB%E3%83%88%E3%83%A9%E3%83%9E%E3%83%B3%E3%83%86%E3%82%A3%E3%82%AC%E2%80%9D%20M-18%2CM-36%2CM60%E4%BA%88%E5%91%8AB.jpg',
            lrc: 'https://cdn.statically.io/gh/celestezj/KaTeX-main-zj/master/src/functions/utils/%E7%9F%A2%E9%87%8E%E7%AB%8B%E7%BE%8E%20-%20%E3%81%9D%E3%81%AE%E5%90%8D%E3%81%AF%E2%80%9C%E3%82%A6%E3%83%AB%E3%83%88%E3%83%A9%E3%83%9E%E3%83%B3%E3%83%86%E3%82%A3%E3%82%AC%E2%80%9D%20M-18%2CM-36%2CM60%E4%BA%88%E5%91%8AB.lrc',
        },
        {
            name: 'Broken Hearts',
            artist: 'Michael Ortega',
            url: 'https://github.com/celestezj/KaTeX-main-zj/raw/master/dockers/screenshotter/Michael%20Ortega%20-%20Broken%20Hearts.mp3',
            cover: 'https://cdn.statically.io/gh/celestezj/KaTeX-main-zj/master/dockers/screenshotter/Michael%20Ortega%20-%20Broken%20Hearts.jpg',
            lrc: 'https://cdn.statically.io/gh/celestezj/KaTeX-main-zj/master/dockers/screenshotter/Michael%20Ortega%20-%20Broken%20Hearts.lrc',
        },
        {
            name: 'Field Of Poppies',
            artist: '群星',
            url: 'https://github.com/celestezj/KaTeX-main-zj/raw/master/static/%E7%BE%A4%E6%98%9F%20-%20Field%20Of%20Poppies.mp3',
            cover: 'https://cdn.statically.io/gh/celestezj/KaTeX-main-zj/master/static/%E7%BE%A4%E6%98%9F%20-%20Field%20Of%20Poppies.jpg',
            lrc: 'https://cdn.statically.io/gh/celestezj/KaTeX-main-zj/master/static/%E7%BE%A4%E6%98%9F%20-%20Field%20Of%20Poppies.lrc',
        },
        /*{
            name: '溯 (Reverse)',
            artist: 'CORSAK胡梦周 / 马吟吟',
            url: 'https://npm.elemecdn.com/musiccdn-ariasaka/music/%E6%BA%AF%20%28Reverse%29.mp3',
            cover: 'https://npm.elemecdn.com/musiccdn-ariasaka/pic/%E6%BA%AF%20%28Reverse%29.webp',
            lrc: 'https://npm.elemecdn.com/musiccdn-ariasaka/lyric/%E6%BA%AF%20%28Reverse%29.lrc',
        },
        {
            name: 'ふわふわ♪',
            artist: '牧野由依',
            url: 'https://npm.elemecdn.com/musiccdn-ariasaka/music/%E3%81%B5%E3%82%8F%E3%81%B5%E3%82%8F%E2%99%AA.mp3',
            cover: 'https://npm.elemecdn.com/musiccdn-ariasaka/pic/%E3%81%B5%E3%82%8F%E3%81%B5%E3%82%8F%E2%99%AA.webp',
            lrc: 'https://npm.elemecdn.com/musiccdn-ariasaka/lyric/%E3%81%B5%E3%82%8F%E3%81%B5%E3%82%8F%E2%99%AA.lrc',
        },
        {
            name: 'LEVEL5 -judgelight-',
            artist: 'fripSide',
            url: 'https://npm.elemecdn.com/musiccdn-ariasaka/music/LEVEL5%20-judgelight-.mp3',
            cover: 'https://npm.elemecdn.com/musiccdn-ariasaka/pic/LEVEL5%20-judgelight-.webp',
            lrc: 'https://npm.elemecdn.com/musiccdn-ariasaka/lyric/LEVEL5%20-judgelight-.lrc',
        },*/
                ]);
            }
            xhr.open('get', url, true);
            xhr.send(null);

        } else if (el.dataset.url) {
            let data = [{
                name: el.dataset.name || el.dataset.title || 'Audio name',
                artist: el.dataset.artist || el.dataset.author || 'Audio artist',
                url: el.dataset.url,
                cover: el.dataset.cover || el.dataset.pic,
                lrc: el.dataset.lrc,
                type: el.dataset.type || 'auto'
            }];

            build(el, data);
        }
    }

    function build(element, music) {

        let defaultOption = {
            container: element,
            audio: music,
            mini: null,
            fixed: null,
            autoplay: false,
            mutex: true,
            lrcType: 3,
            listFolded: false,
            preload: 'auto',
            theme: '#2980b9',
            loop: 'all',
            order: 'list',
            volume: 0.2,
            listMaxHeight: null,
            customAudioType: null,
            storageName: 'metingjs'
        };

        if (!music.length) {
            return;
        }

        if (!music[0].lrc) {
            defaultOption['lrcType'] = 0;
        }

        let options = {};
        for (const defaultKey in defaultOption) {
            let eleKey = defaultKey.toLowerCase();
            if (element.dataset.hasOwnProperty(eleKey) || element.dataset.hasOwnProperty(defaultKey) || defaultOption[defaultKey] !== null) {
                options[defaultKey] = element.dataset[eleKey] || element.dataset[defaultKey] || defaultOption[defaultKey];
                if (options[defaultKey] === 'true' || options[defaultKey] === 'false') {
                    options[defaultKey] = (options[defaultKey] == 'true');
                }
            }
        }

        aplayers.push(new APlayer(options));
    }
}

document.addEventListener('DOMContentLoaded', loadMeting, false);
