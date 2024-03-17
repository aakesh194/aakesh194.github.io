const Webamp = window.Webamp;
const webamp = new Webamp({
allow: "autoplay",
    initialTracks: [
        {
            metaData: {
                artist: "t.$.",
                title: "dysti",
            },
            url: "/src/mp3/dysti.mp3",
            duration: 209,
        },
        {
            metaData: {
                title: "one dance",
                artist: "drake",
            },
            url: "https://ia601906.us.archive.org/17/items/onedance_drake/12.%20One%20Dance%20%28Ft.%20Wizkid%20%26%20Kyla%29.mp3",
            duration: 173,
        },
        {
            metaData: {
                title: "astrothunder",
                artist: "t.$.",
            },
            url: "https://ia801800.us.archive.org/20/items/astrothunder/Travis%20Scott%20-%20ASTROTHUNDER%20%28Audio%29.mp3",
            duration: 144,
        },
        {
            metaData: {
                title: "ghost town",
                artist: "ye",
            },
            url: "https://ia802208.us.archive.org/23/items/kanyewest_202202/Kanye%20West/Unreleased%20%28ye%20Era%29/Ghost%20Town%20%28SNL%20Edit%29%20%5Bfeat.%20Kid%20Cudi%20%26%20070%20Shake%5D.mp3",
            duration: 271,
        },
        {
            metaData: {
                title: "moon",
                artist: "dt + kc",
            },
            url: "https://ia802208.us.archive.org/23/items/kanyewest_202202/Kanye%20West/DONDA/02%20Moon%20%28feat.%20Don%20Toliver%20%26%20Kid%20Cudi%29.mp3",
            duration: 155,
        },
        {
            metaData: {
                title: "rip screw",
                artist: "dt + kc",
            },
            url: "src/mp3/Travis Scott - R.I.P. SCREW (Clean) Ft. Swae Lee (ASTROWORLD).mp4",
            duration: 185,
        },
    ],
    __butterchurnOptions: {
        importButterchurn: () => Promise.resolve(window.butterchurn),
        getPresets: () => {
            const presets = window.butterchurnPresets.getPresets();
            return Object.keys(presets).map((name) => {
                return {
                    name,
                    butterchurnPresetObject: presets[name]
                };
            });
        },
        butterchurnOpen: true
    },
});

const container = document.getElementById('app');
webamp.renderWhenReady(container).then(() => {
    console.log('rendered webamp!');
});

webamp.onClose(() => {
    document.getElementById('webamp-icon').addEventListener('click', () => {
        webamp.reopen();
    });
})