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


// wait for body to exist
window.addEventListener('load', () => {
    var sheet = document.createElement('style')
    sheet.innerHTML = `
            .opacity1 { opacity: .01; }
            .opacity2 { opacity: .02; }
            .opacity3 { opacity: .03; }
            .opacity4 { opacity: .04; }
            .opacity5 { opacity: .05; }
            .opacity6 { opacity: .06; }
            .opacity7 { opacity: .07; }
            .opacity8 { opacity: .08; }
            .opacity9 { opacity: .09; }
            .opacity10 { opacity: .10; }
            .opacity11 { opacity: .11; }
            .opacity12 { opacity: .12; }
            .opacity13 { opacity: .13; }
            .opacity14 { opacity: .14; }
            .opacity15 { opacity: .15; }
            .opacity16 { opacity: .16; }
            .opacity17 { opacity: .17; }
            .opacity18 { opacity: .18; }
            .opacity19 { opacity: .19; }
            .opacity20 { opacity: .20; }
            .opacity21 { opacity: .21; }
            .opacity22 { opacity: .22; }
            .opacity23 { opacity: .23; }
            .opacity24 { opacity: .24; }
            .opacity25 { opacity: .25; }
            .opacity26 { opacity: .26; }
            .opacity27 { opacity: .27; }
            .opacity28 { opacity: .28; }
            .opacity29 { opacity: .29; }
            .opacity30 { opacity: .30; }
            .opacity31 { opacity: .31; }
            .opacity32 { opacity: .32; }
            .opacity33 { opacity: .33; }
            .opacity34 { opacity: .34; }
            .opacity35 { opacity: .35; }
            .opacity36 { opacity: .36; }
            .opacity37 { opacity: .37; }
            .opacity38 { opacity: .38; }
            .opacity39 { opacity: .39; }
            .opacity40 { opacity: .40; }
            .opacity41 { opacity: .41; }
            .opacity42 { opacity: .42; }
            .opacity43 { opacity: .43; }
            .opacity44 { opacity: .44; }
            .opacity45 { opacity: .45; }
            .opacity46 { opacity: .46; }
            .opacity47 { opacity: .47; }
            .opacity48 { opacity: .48; }
            .opacity49 { opacity: .49; }
            .opacity50 { opacity: .50; }
            .opacity51 { opacity: .51; }
            .opacity52 { opacity: .52; }
            .opacity53 { opacity: .53; }
            .opacity54 { opacity: .54; }
            .opacity55 { opacity: .55; }
            .opacity56 { opacity: .56; }
            .opacity57 { opacity: .57; }
            .opacity58 { opacity: .58; }
            .opacity59 { opacity: .59; }
            .opacity60 { opacity: .60; }
            .opacity61 { opacity: .61; }
            .opacity62 { opacity: .62; }
            .opacity63 { opacity: .63; }
            .opacity64 { opacity: .64; }
            .opacity65 { opacity: .65; }
            .opacity66 { opacity: .66; }
            .opacity67 { opacity: .67; }
            .opacity68 { opacity: .68; }
            .opacity69 { opacity: .69; }
            .opacity70 { opacity: .70; }
            .opacity71 { opacity: .71; }
            .opacity72 { opacity: .72; }
            .opacity73 { opacity: .73; }
            .opacity74 { opacity: .74; }
            .opacity75 { opacity: .75; }
            .opacity76 { opacity: .76; }
            .opacity77 { opacity: .77; }
            .opacity78 { opacity: .78; }
            .opacity79 { opacity: .79; }
            .opacity80 { opacity: .80; }
            .opacity81 { opacity: .81; }
            .opacity82 { opacity: .82; }
            .opacity83 { opacity: .83; }
            .opacity84 { opacity: .84; }
            .opacity85 { opacity: .85; }
            .opacity86 { opacity: .86; }
            .opacity87 { opacity: .87; }
            .opacity88 { opacity: .88; }
            .opacity89 { opacity: .89; }
            .opacity90 { opacity: .90; }
            .opacity91 { opacity: .91; }
            .opacity92 { opacity: .92; }
            .opacity93 { opacity: .93; }
            .opacity94 { opacity: .94; }
            .opacity95 { opacity: .95; }
            .opacity96 { opacity: .96; }
            .opacity97 { opacity: .97; }
            .opacity98 { opacity: .98; }
            .opacity99 { opacity: .99; }
            .opacity100 { opacity: 1; }
        `
    document.body.appendChild(sheet)


    // create some boxes
    let numberOfBoxes = 1000
    let indexOfBox = numberOfBoxes
    let boxContainer = document.createElement('div')
    boxContainer.style.position = 'fixed'
    boxContainer.style.top = '0'
    boxContainer.style.left = '0'
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
        box.className = `opacity${opacityRandomness()}`
        boxContainer.appendChild(box)
    }

    document.body.insertAdjacentElement('afterbegin', boxContainer)


    let amountOfChange = 15
    setInterval(() => {
        let whichBox = Math.ceil(Math.random() * (numberOfBoxes - 1))
        let whichOpacity = `opacity${opacityRandomness()}`
        boxContainer.childNodes[whichBox].className = whichOpacity
    }, 10);
}, false)