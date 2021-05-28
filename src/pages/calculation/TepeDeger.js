import React, { useState } from 'react'
import Page from 'components/Page';
import { Card, CardTitle, CardText } from 'reactstrap';


export const TepeDeger = () => {
    const [data, setData] = useState({
        elemanlar: ""
    });
    const [firstTime, setFirstTime] = useState(true);
    const [tepeDgr, setTepeDgr] = useState({
        maxTekrar: 0,
        siklik: 0
    });
    const [hataliGiris, setHataliGiris] = useState(false);


    const tepedeger = (array) => {
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
    const onChange = (e) => {
        setData({ ...data, elemanlar: e.target.value });
    }
    const onSubmit = (e) => {
        e.preventDefault();
        let array = data.elemanlar.split(",").map(Number);
        let isNan = false;
        array.forEach((el) => {
            if (isNaN(el)) {
                isNan = true;
            }
        })
        if (!isNan) {
            setTepeDgr({
                maxTekrar: tepedeger(array).maxTekrar,
                siklik: tepedeger(array).siklik
            });
            setHataliGiris(false)
        } else {
            setHataliGiris(true)
        }
        setFirstTime(false);
    }
    return (
        <Page title="Tepe Değer (Mod)" breadcrumbs={[{ name: 'mod', active: true }]}>
            <form onSubmit={e => onSubmit(e)} className="mt-4" >
                <textarea
                    className="form-control"
                    placeholder="Değerleri giriniz..."
                    id="elemanlar"
                    value={data.elemanlar}
                    onChange={e => onChange(e)} />
                <button type="submit" className="w-100 btn btn-secondary mt-2">Gönder</button>
            </form>

            {tepeDgr.maxTekrar > 0 && tepeDgr.siklik > 1 && !hataliGiris ?
                <div className="alert alert-primary" role="alert">
                    Hesaplanan Tepe Değer: {tepeDgr.maxTekrar}  <br />
                    Sıklık: {tepeDgr.siklik}
                </div>

                :

                !firstTime ?
                    <div className="alert alert-danger" role="alert">
                        Hatalı Değer Girildi Ya Da Tepe Değeri Mevcut Değil
                    </div> :
                    null



            }

            <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333', margin: "1rem 0 0 0" }}>
                <CardTitle tag="h5">Tepe Değer (Mod)</CardTitle>
                <CardText>İstatistik bilimi için tepe değer bir veri kümesi içinde en sık görülen değerdir. <br />Mod olarak da adlandırılır. Bazı kullanım alanlarında, özellikle eğitim alanında, örnek veriler çok kere puan olarak anılmakta ve örnek tepe değer değerine ise tepe değer puanı adı verilmektedir.</CardText>

            </Card>
        </Page>
    )
}
