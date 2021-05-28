import React, { useState } from 'react'
import Page from 'components/Page';
import { Card, CardTitle, CardText } from 'reactstrap';


export const OrtancaDeger = () => {
    const [data, setData] = useState({
        elemanlar: ""
    });
    const [ortancaDgr, setortancaDgr] = useState(0);
    const ortancadeger = (arr) => {
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
            setortancaDgr(ortancadeger(array));

        }

    }
    return (
        <Page title="Ortanca Değer (Medyan)" breadcrumbs={[{ name: 'medyan', active: true }]}>
            <form onSubmit={e => onSubmit(e)} className="mt-4" >
                <textarea
                    className="form-control"
                    placeholder="Değerleri giriniz..."
                    id="elemanlar"
                    value={data.elemanlar}
                    onChange={e => onChange(e)} />
                <button type="submit" className="w-100 btn btn-secondary mt-2">Gönder</button>
            </form>

            {ortancaDgr !== 0 ?
                <div className="alert alert-primary" role="alert">
                    Hesaplanan Ortanca Değer: {ortancaDgr}
                </div>
                : null
            }

            <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333', margin: "1rem 0 0 0" }}>
                <CardTitle tag="h5">Ortanca Değer (Medyan)</CardTitle>
                <CardText>
                    Ortanca Değer (Medyan) bir anakütle ya da örneklem veri serisini küçükten büyüğe doğru sıraladığımızda, seriyi ortadan ikiye ayıran değere denir. İstatistiğin bir alt dalı olan betimsel istatistikde medyan bir merkezsel konum ölçüsü kabul edilir.
                </CardText>

            </Card>
        </Page>
    )
}
