import React, { useState } from 'react'
import Page from 'components/Page';
import { Card, CardTitle, CardText } from 'reactstrap';


export const Kombinasyon = () => {
    const [data, setData] = useState({
        eleman: "",
        secim: ""
    })
    const [kombinasyon, setkombinasyon] = useState(-1);
    const [firstTime, setFirstTime] = useState(true);
    const faktoriyelF = (sayi) => {
        if (sayi === 0) return 1;
        let sum = 1;
        for (let i = 2; i <= sayi; i++) sum *= i;
        return sum;
    }
    const kombinasyonF = (n, r) => {
        let sonuc = 1;
        for (let i = 0; i < r; i++) sonuc *= n - i;
        return sonuc;
    }
    const onChange = (e) => {
        setData({ ...data, [e.target.id]: Number(e.target.value) })
    }
    const onSubmit = (e) => {
        e.preventDefault();
        if (!isNaN(data.eleman) && !isNaN(data.secim) && data.eleman !== 0 && data.secim >= 0) {
            const perm = kombinasyonF(data.eleman, data.secim);
            const fakt = faktoriyelF(data.secim);
            setkombinasyon(perm / fakt);
        }
        setFirstTime(false);
    }
    return (
        <Page title="Kombinasyon" breadcrumbs={[{ name: 'kombinasyon', active: true }]}>
            <form action="" className="mt-5" onSubmit={e => onSubmit(e)}>
                <div className="form-group row" >
                    <label for="eleman" className="col-sm-2 col-form-label" >Eleman sayısı(n): </label>
                    <div className="col-sm-10">
                        <input type="number" id="eleman" onChange={e => onChange(e)} />
                    </div>

                    <label for="secim" className="col-sm-2 col-form-label" >Seçim sayısı(r): </label>
                    <div className="col-sm-10">
                        <input type="number" id="secim" onChange={e => onChange(e)} />
                    </div>

                </div>
                <button type="submit" className="w-100 btn btn-secondary"  >Gönder</button>
            </form>

            { kombinasyon !== -1 && (data.eleman > 0 && data.secim >= 0) ?
                <div className="alert alert-primary" role="alert">
                    {data.secim === 0 ? <span>Hesaplanan Kombinasyon: {1}</span> : <span>Hesaplanan Kombinasyon: {kombinasyon}</span>}


                </div>
                :
                !firstTime ?
                    <div className="alert alert-danger" role="alert">
                        Hatalı Değer Girildi
                </div> :
                    null
            }
            <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333', margin: "1rem 0 0 0" }}>
                <CardTitle tag="h5">Kombinasyon</CardTitle>
                <CardText>
                    Kombinasyon, bir nesne grubu içerisinden sıra gözetmeksizin yapılan seçimlerdir. Nesne grubunun tekabül ettiği kümenin alt kümeleri olarak da tanımlanabilir. Çünkü alt kümelerde sıra önemli değildir. Bir A kümesinin herhangi bir alt kümesine A kümesinin bir kombinasyonu denir.<br /><br />
                    Kombinasyon C (n,r) = n! / r!&times;(n−r)! olarak hesaplanır.
                </CardText>

            </Card>
        </Page>
    )
}