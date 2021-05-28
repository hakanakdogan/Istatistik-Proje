export const aritmetikOrtalamaHesapFunc = (data)=> {
    let dizi = data.trim().split(',');
        let ortalama = 0;
        dizi =
            dizi.filter(key => {
                if (key) return true;
            })
                .map(key => {
                    ortalama += Number(key);
                });

        if (dizi.length > 0) {
            return(ortalama / dizi.length);
        }
        else return 0;
}


export const standartSapmaHesaplamaFunc = (data) => {
    let dizi = data.trim().split(',');
    dizi =
        dizi.filter(key => {
            if (key) return true;
        })

    if (dizi.length > 0) {
        // 1- aritmetik ortalama bulunması
        let aritmetikOrtalama = aritmetikOrtalamaHesapFunc(data);
        // 2- her bir sayının aritmetik ortalamadan farkı
        let aritmetikOrtalamadanFarkları = [];
        dizi.map( (key,index)=> {
            aritmetikOrtalamadanFarkları[index] = (Number(key)-aritmetikOrtalama);
        })
        // 3- her bir farkın karesi hesaplanır
        aritmetikOrtalamadanFarkları = aritmetikOrtalamadanFarkları.map(fark => fark*fark);
        // 4- farkların kareleri toplanır
        let karelerinToplami = 0;
        aritmetikOrtalamadanFarkları.map(farkKaresi => karelerinToplami+=farkKaresi);
        // 5- Elde edilen toplam, serinin eleman sayısının bir eksiğine bölünür
        let elemanSayisiEksigiBolumu = karelerinToplami/(dizi.length-1);
        // 6- Bulunan sayının karekökü alınır.
        
        return (Math.sqrt(elemanSayisiEksigiBolumu));
    }
}


export const tepedeger = (array) => {
    if (array.length === 0)
        return null;
    var modeMap = {};
    var maxEl = array[0], maxCount = 1;
    for (var i = 0; i < array.length; i++) {
        var el = array[i];
        if (modeMap[el] == null)
            modeMap[el] = 1;
        else
            modeMap[el]++;
        if (modeMap[el] > maxCount) {
            maxEl = el;
            maxCount = modeMap[el];
        }
    }

    return {
        maxTekrar: maxEl,
        siklik: modeMap[maxEl]
    };
}

export const ortancadeger = (arr) => {
    const sortedArr = arr.sort((a, b) => {
        return b - a
    })

    if (sortedArr.length % 2 === 0) {
        const sonuc = ((sortedArr[(sortedArr.length / 2)] + sortedArr[((sortedArr.length / 2) - 1)])) / 2;
        return sonuc;
    } else {
        return sortedArr[Math.floor((sortedArr.length / 2))];
    }
}