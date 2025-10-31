const itemsData = [
    {
        "id": 1,
        "name": "Color 35mm Dev + Scan",
        "price": 19.99,
        "image": "https://151729500.cdn6.editmysite.com/uploads/1/5/1/7/151729500/UKAOY7KJ6BZOXPUWDQANJIC2.png?width=2560&optimize=medium",
        "description": "The classic! Your roll takes a trip through our high volume processor, then we scan the negative at normal or high res for a classic look. We perform dust, hair, and scratch removal, then color correct. Note: 5R does not offer ECN-2 or E-6 processing at this time. If in doubt about what sort of film you have, please reach out to us before sending!",
        "category": "Color"
    },
    {
        "id": 2,
        "name": "Color Disposable Dev + Scan",
        "price": "$19.99",
        "image": "https://151729500.cdn6.editmysite.com/uploads/1/5/1/7/151729500/CYHNY67J4QGGMDTMNEM4NIX5.png?width=2560&optimize=medium",
        "description": "Disposables are the best! We treat them with the love and respect they deserve: as far as we're concerned, they're real film cameras. Dust, hair, and scratch removal, and color correction are all part of the package. (Note: please make sure your camera doesn't have ECN-2 printed on it. If it does, we can't process it!)",
        "category": "Color"
    },
    {
        "id": 3,
        "name": "Color 120 Dev + Scan",
        "price": "$29.99",
        "image": "https://151729500.cdn6.editmysite.com/uploads/1/5/1/7/151729500/4XUN3STK2V46L2EOFGJILNZF.png?width=2560&optimize=medium",
        "description": "Our color develop and scan is the right way to treat your medium format film. We start with a fine-tuned machine processed negative and then scan it at high resolution (up to 4300 pixels short edge). Then we edit your images for dust and hair, and color correct for optimal results. (Note: 5R does not offer ECN-2 or E-6 processing at this time. If in doubt about what sort of film you have, please reach out to us before sending!)",
        "category": "Color"
    },
    {
        "id": 4,
        "name": "Color 110 Dev + Scan",
        "price": "$19.99",
        "image": "https://151729500.cdn6.editmysite.com/uploads/1/5/1/7/151729500/UKAOY7KJ6BZOXPUWDQANJIC2.png?width=2560&optimize=medium",
        "description": "Nobody does 110 like 5R. Our fine-tuned C-41 processors produce negatives rich in detail and color. Our 110 scans are high resolution (up to 2800 x 4200 pixels) with borders. (Note: we do not process E-6 film. Please contact us before sending Lomography Peacock.)",
        "category": "Color"
    },
    {
        "id": 5,
        "name": "APS Dev + Scan",
        "price": "$19.99",
        "image": "https://151729500.cdn6.editmysite.com/uploads/1/5/1/7/151729500/5NBY2IZWQ4SQN7H5ZDR2R7ZK.png?width=2560&optimize=medium",
        "description": "Obsolete? Not at 5R! We develop and scan APS/Advantix film. Using high-end camera scanning techniques, we are available to deliver your scans with or without borders and rebate info--the numbers and letters on the edges of the film. Note: we process only C-41 APS film. Please look at your film cartridge to make sure it doesn't have E-6 printed on it.",
        "category": "Color"
    },
    {
        "id": 6,
        "name": "B&W 35mm Dev + Scan",
        "price": "$19.99",
        "image": "https://151729500.cdn6.editmysite.com/uploads/1/5/1/7/151729500/MIHMHSVZ6SGCOD2BFSWIV5LJ.png?width=2560&optimize=medium",
        "description": "We develop 35mm black & white in classic Kodak chemistry, using the specific development time specific to each film stock. Our scans are edited for dust, hair, and optimal tonality.",
        "category": "B&W"
    },
    {
        "id": 7,
        "name": "B&W Disposable Dev + Scan",
        "price": "$19.99",
        "image": "https://151729500.cdn6.editmysite.com/uploads/1/5/1/7/151729500/MTVWOAXZ2BPJEZJ63SUHIEWR.png?width=2560&optimize=medium",
        "description": "Black & white dispos are so much fun, but they also look great! They get the same fabulous treatment that every black & white order gets at 5R. Classic development, gorgeous scans edited for dust, hairs, and overall awesomeness.",
        "category": "B&W"
    },
    {
        "id": 8,
        "name": "B&W 110 Dev + Scan",
        "price": "$19.99",
        "image": "https://151729500.cdn6.editmysite.com/uploads/1/5/1/7/151729500/K5H4W5UL32KJSJ7NCPXVCGUQ.png?width=2560&optimize=medium",
        "description": "Nobody does 110 like 5R, especially black & white. Using a full complement of traditional chemistry, we produce negatives rich in detail and tone. Our 110 scans are high resolution (up to 2800 x 4200 pixels) with borders..",
        "category": "B&W"
    },
    {
        "id": 9,
        "name": "B&W 120 Dev + Scan",
        "price": "$29.99",
        "image": "https://151729500.cdn6.editmysite.com/uploads/1/5/1/7/151729500/ZOEF32YP5GVWKJ6KF2Z4IUQO.png?width=2560&optimize=medium",
        "description": "Our black & white 120 is processed with classic Kodak chemistry and scanned at up to 4300 pixels shortest dimension. The scans are super detailed and grain-sharp",
        "category": "B&W"
    },
    {
        "id": 10,
        "name": "5R Hat",
        "price": "$19.99",
        "image": "https://151729500.cdn6.editmysite.com/uploads/1/5/1/7/151729500/NJWIHZ2QMAJYK6B2MBAOSUZ4.jpeg?width=2560&optimize=medium",
        "description": "Rep your favorite film lab in style! These super soft, super comfy hats are available in two colorways. With cloth adjustment band.",
        "category": "Merchandise"
    },
    {
        "id": 11,
        "name": "Filmy Tote Bag",
        "price": "$14.99",
        "image": "https://151729500.cdn6.editmysite.com/uploads/1/5/1/7/151729500/VKDA6JXBXAWZWLTMQEOX5OUZ.jpeg?width=2560&optimize=medium",
        "description": 'Iconic "Shoot Film Forever" tote bag. A must-have for all four seasons',
        "category": "Merchandise"
    },
    {
        "id": 12,
        "name": "Filmy Sticker",
        "price": "$0.99",
        "image": "https://151729500.cdn6.editmysite.com/uploads/1/5/1/7/151729500/APPGSJ4I2MA7Q2G5CMK6QAYD.jpeg?width=2560&optimize=medium",
        "description": "Your water bottle wants! So does your phone case! Made of premium fade-resistant vinyl. An essential part of everyone's in-store experience!",
        "category": "Merchandise"
    },
]

export default itemsData;