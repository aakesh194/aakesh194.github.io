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
                title: "apple pie",
                artist: "t.$.",
            },
            url: "https://ia801405.us.archive.org/15/items/ApplePieTravisScott/Apple%20Pie%20-%20Travis%20Scott.mp3",
            duration: 219,
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
                title: "swangin on westheimer",
                artist: "d.t.",
            },
            url: "https://archive.org/download/don-toliver-life-of-a-don-2021/Life%20Of%20A%20Don/07-Swangin%E2%80%99%20On%20Westheimer.mp3",
            duration: 288,
        },
        {
            metaData: {
                title: "lost souls",
                artist: "b.k & d.t.",
            },
            url: "https://ia804703.us.archive.org/23/items/baby-keem-the-melodic-blue-deluxe/Deluxe/05-killstreaks%20%28Ft.%20Don%20Toliver%20%26%20PinkPantheress%29.mp3",
            duration: 270,
        }
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