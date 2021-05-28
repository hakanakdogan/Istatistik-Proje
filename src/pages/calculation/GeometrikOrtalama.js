import React, { useState } from 'react'
import Page from 'components/Page';
import { Card, CardTitle, CardText } from 'reactstrap';


export const GeometrikOrtalama = () => {
    const [data, setData] = useState({
        elemanlar: ""
    });
    const [geometrikOrt, setGeometrikOrt] = useState(0);
    const geometricMean = (arr) => {
        let hesap = 1;
        for (let i = 0; i < arr.length; i++) {
            hesap = hesap * arr[i];
        }
        let sonuc = Math.pow(hesap, (1 / arr.length))
        return sonuc;

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
            setGeometrikOrt(geometricMean(array));

        }

    }
    return (
        <Page title="Geometrik Ortalama" breadcrumbs={[{ name: 'geometrik ortalama', active: true }]}>
            <form onSubmit={e => onSubmit(e)} className="mt-4" >
                <textarea
                    className="form-control"
                    placeholder="Değerleri giriniz..."
                    id="elemanlar"
                    value={data.elemanlar}
                    onChange={e => onChange(e)} />
                <button type="submit" className="w-100 btn btn-secondary mt-2">Gönder</button>
            </form>

            {geometrikOrt !== 0 ?
                <div className="alert alert-primary" role="alert">
                    Hesaplanan Geometrik Ortalama: {geometrikOrt}
                </div>
                : null
            }

            <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333', margin: "1rem 0 0 0" }}>
                <CardTitle tag="h5">Geometrik ortalama</CardTitle>
                <CardText>
                    Geometrik ortalama, birim değerlerinin (gözlem sonuçlarının) birbirleriyle çarpımlarının, n birim sayısı olmak üzere, n'inci dereceden köküne denir.
                    Örn: Birim değerleri "1,2,3" olsun. Geometrik ortalama: &#8731;(1&times;2&times;3)
                </CardText>

            </Card>
        </Page>
    )
}
