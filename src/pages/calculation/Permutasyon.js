import React, { useState } from 'react'
import Page from 'components/Page';
import { Card, CardTitle, CardText } from 'reactstrap';


export const Permutasyon = () => {
    const [data, setData] = useState({
        eleman: "",
        secim: ""
    })
    const [permutasyon, setPermutasyon] = useState(-1);
    const [firstTime, setFirstTime] = useState(true);
    const permutasyonF = (n, r) => {
        let sonuc = 1;

        if (n === r) {
            return 1
        } else if (r > n) {
            return -1
        }
        for (let i = 0; i < r; i++) sonuc *= n - i;
        return sonuc;
    }
    const onChange = (e) => {

        setData({ ...data, [e.target.id]: Number(e.target.value) })
    }
    const onSubmit = (e) => {
        e.preventDefault();
        if (!isNaN(data.eleman) && !isNaN(data.secim) && data.eleman !== 0 && data.secim >= 0) {
            console.log(data.eleman, data.secim)
            const sonuc = permutasyonF(data.eleman, data.secim);
            console.log(sonuc);
            setPermutasyon(sonuc);
        }
        
         setFirstTime(false);
        
        
    }
    return (
        <Page title="Permütasyon" breadcrumbs={[{ name: 'permutasyon', active: true }]}>
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

            { permutasyon !== -1 ?
                <div className="alert alert-primary" role="alert">
                    {data.secim === 0 ? <span>Hesaplanan Permütasyon: {1}</span> : <span>Hesaplanan Permütasyon: {permutasyon}</span>}


                </div>
                :
                !firstTime ?
                    
                    <div className="alert alert-danger" role="alert">
                        Hatalı Değer Girildi
                        
                </div> :
                    null
            }
            <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333', margin: "1rem 0 0 0" }}>
                <CardTitle tag="h5">Permütasyon</CardTitle>
                <CardText>
                    Permütasyon, her sembolün bir veya birden fazla kullanıldığı bir sıralı dizi yöntemidir. Permütasyon, n adet elemanı olan bir kümenin içinden r adet eleman seçilmesi işlemidir. Bu işlem sırasında permütasyonun daha kolay yapılabilmesi için belirli formüller kullanılır.<br /><br />

                    Permütasyon "P" ile tanımlanır ve r tane elemandan oluşan permütasyon dizilişleri "n'nin r'li permütasyonu" olarak adlandırılır. Bu durumda n ve r birer doğal sayı ve r sayısı n'den küçük veya n'ye eşit (r≤n) kabul edilir. Permütasyon P (n,r) = n! / (n−r)! olarak hesaplanır.
                </CardText>

            </Card>
        </Page>


    )
}
