let rateOfChange = 800
let opacityRandomness = () => {
    let output
    if (Math.random() > 0.5) {
        output = Math.random() * Math.random() * 50
    } else {
        output = Math.random()
    }
    return Math.ceil(output)
}

let onceBodyExists = () => {
    var sheet = document.createElement('style')
    sheet.innerHTML = `
            .purple-tile-opacity1 { opacity: .01; }
            .purple-tile-opacity2 { opacity: .02; }
            .purple-tile-opacity3 { opacity: .03; }
            .purple-tile-opacity4 { opacity: .04; }
            .purple-tile-opacity5 { opacity: .05; }
            .purple-tile-opacity6 { opacity: .06; }
            .purple-tile-opacity7 { opacity: .07; }
            .purple-tile-opacity8 { opacity: .08; }
            .purple-tile-opacity9 { opacity: .09; }
            .purple-tile-opacity10 { opacity: .10; }
            .purple-tile-opacity11 { opacity: .11; }
            .purple-tile-opacity12 { opacity: .12; }
            .purple-tile-opacity13 { opacity: .13; }
            .purple-tile-opacity14 { opacity: .14; }
            .purple-tile-opacity15 { opacity: .15; }
            .purple-tile-opacity16 { opacity: .16; }
            .purple-tile-opacity17 { opacity: .17; }
            .purple-tile-opacity18 { opacity: .18; }
            .purple-tile-opacity19 { opacity: .19; }
            .purple-tile-opacity20 { opacity: .20; }
            .purple-tile-opacity21 { opacity: .21; }
            .purple-tile-opacity22 { opacity: .22; }
            .purple-tile-opacity23 { opacity: .23; }
            .purple-tile-opacity24 { opacity: .24; }
            .purple-tile-opacity25 { opacity: .25; }
            .purple-tile-opacity26 { opacity: .26; }
            .purple-tile-opacity27 { opacity: .27; }
            .purple-tile-opacity28 { opacity: .28; }
            .purple-tile-opacity29 { opacity: .29; }
            .purple-tile-opacity30 { opacity: .30; }
            .purple-tile-opacity31 { opacity: .31; }
            .purple-tile-opacity32 { opacity: .32; }
            .purple-tile-opacity33 { opacity: .33; }
            .purple-tile-opacity34 { opacity: .34; }
            .purple-tile-opacity35 { opacity: .35; }
            .purple-tile-opacity36 { opacity: .36; }
            .purple-tile-opacity37 { opacity: .37; }
            .purple-tile-opacity38 { opacity: .38; }
            .purple-tile-opacity39 { opacity: .39; }
            .purple-tile-opacity40 { opacity: .40; }
            .purple-tile-opacity41 { opacity: .41; }
            .purple-tile-opacity42 { opacity: .42; }
            .purple-tile-opacity43 { opacity: .43; }
            .purple-tile-opacity44 { opacity: .44; }
            .purple-tile-opacity45 { opacity: .45; }
            .purple-tile-opacity46 { opacity: .46; }
            .purple-tile-opacity47 { opacity: .47; }
            .purple-tile-opacity48 { opacity: .48; }
            .purple-tile-opacity49 { opacity: .49; }
            .purple-tile-opacity50 { opacity: .50; }
            .purple-tile-opacity51 { opacity: .51; }
            .purple-tile-opacity52 { opacity: .52; }
            .purple-tile-opacity53 { opacity: .53; }
            .purple-tile-opacity54 { opacity: .54; }
            .purple-tile-opacity55 { opacity: .55; }
            .purple-tile-opacity56 { opacity: .56; }
            .purple-tile-opacity57 { opacity: .57; }
            .purple-tile-opacity58 { opacity: .58; }
            .purple-tile-opacity59 { opacity: .59; }
            .purple-tile-opacity60 { opacity: .60; }
            .purple-tile-opacity61 { opacity: .61; }
            .purple-tile-opacity62 { opacity: .62; }
            .purple-tile-opacity63 { opacity: .63; }
            .purple-tile-opacity64 { opacity: .64; }
            .purple-tile-opacity65 { opacity: .65; }
            .purple-tile-opacity66 { opacity: .66; }
            .purple-tile-opacity67 { opacity: .67; }
            .purple-tile-opacity68 { opacity: .68; }
            .purple-tile-opacity69 { opacity: .69; }
            .purple-tile-opacity70 { opacity: .70; }
            .purple-tile-opacity71 { opacity: .71; }
            .purple-tile-opacity72 { opacity: .72; }
            .purple-tile-opacity73 { opacity: .73; }
            .purple-tile-opacity74 { opacity: .74; }
            .purple-tile-opacity75 { opacity: .75; }
            .purple-tile-opacity76 { opacity: .76; }
            .purple-tile-opacity77 { opacity: .77; }
            .purple-tile-opacity78 { opacity: .78; }
            .purple-tile-opacity79 { opacity: .79; }
            .purple-tile-opacity80 { opacity: .80; }
            .purple-tile-opacity81 { opacity: .81; }
            .purple-tile-opacity82 { opacity: .82; }
            .purple-tile-opacity83 { opacity: .83; }
            .purple-tile-opacity84 { opacity: .84; }
            .purple-tile-opacity85 { opacity: .85; }
            .purple-tile-opacity86 { opacity: .86; }
            .purple-tile-opacity87 { opacity: .87; }
            .purple-tile-opacity88 { opacity: .88; }
            .purple-tile-opacity89 { opacity: .89; }
            .purple-tile-opacity90 { opacity: .90; }
            .purple-tile-opacity91 { opacity: .91; }
            .purple-tile-opacity92 { opacity: .92; }
            .purple-tile-opacity93 { opacity: .93; }
            .purple-tile-opacity94 { opacity: .94; }
            .purple-tile-opacity95 { opacity: .95; }
            .purple-tile-opacity96 { opacity: .96; }
            .purple-tile-opacity97 { opacity: .97; }
            .purple-tile-opacity98 { opacity: .98; }
            .purple-tile-opacity99 { opacity: .99; }
            .purple-tile-opacity100 { opacity: 1; }
        `
    document.body.appendChild(sheet)


    // create some boxes
    let numberOfBoxes = 1000
    let indexOfBox = numberOfBoxes
    let boxContainer = document.createElement('div')
    boxContainer.style.position = 'fixed'
    boxContainer.style.top = '0'
    boxContainer.style.left = '0'
    boxContainer.style.zIndex = '-1'
    boxContainer.style.display = 'flex'
    boxContainer.style.flexDirection = 'row'
    boxContainer.style.flexWrap = 'wrap'

    while (indexOfBox--) {
        let box = document.createElement('div')
        box.style.display = 'flex'
        box.style.height = 'calc(3.33vw - 0.2rem)'
        box.style.width = 'calc(3.33vw - 0.2rem)'
        box.style.backgroundColor = `#9561e2`
        box.style.margin = '0.1rem'
        box.style.transition = `all ${rateOfChange}ms ease-in`
        box.className = `purple-tile-opacity${opacityRandomness()}`
        boxContainer.appendChild(box)
    }

    document.body.appendChild( boxContainer)


    let amountOfChange = 15
    setInterval(() => {
        let whichBox = Math.ceil(Math.random() * (numberOfBoxes - 1))
        let whichOpacity = `purple-tile-opacity${opacityRandomness()}`
        boxContainer.childNodes[whichBox].className = whichOpacity
    }, 10);
}


// 
// load it at the right time
// 
if (document.body) {
    onceBodyExists()
} else {
    // wait for body to exist
    window.addEventListener('load', onceBodyExists, false)
}