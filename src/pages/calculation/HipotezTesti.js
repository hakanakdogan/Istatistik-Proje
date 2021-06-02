import React, { useState } from "react";
import Page from "components/Page";
import { Card, CardTitle, CardText, CardBody } from "reactstrap";


export const HipotezTesti = () => {
  const [ao, setAo] = useState(0);
  const [miktar, setMiktar] = useState(0);
  const [pVaryans, setPVaryans] = useState(0);
  const [HDegeri, setHDegeri] = useState(0);
  const [hipotezMod, setHipotezMod] = useState(0);
  const [aDuzeyi, setADuzeyi] = useState(0.0495);
  const [sonuc, setSonuc] = useState(0);
  const [zVerisi, setZVerisi] = useState(0);
  const [mesaj, setMesaj] = useState('');

  var ZTABLE =
  {
    '3.4': [0.99966, 0.99968, 0.99969, 0.99970, 0.99971, 0.99972, 0.99973, 0.99974, 0.99975, 0.99976],
    '3.3': [0.99952, 0.99953, 0.99955, 0.99957, 0.99958, 0.99960, 0.99961, 0.99962, 0.99964, 0.99965],
    '3.2': [0.99931, 0.99934, 0.99936, 0.99938, 0.99940, 0.99942, 0.99944, 0.99946, 0.99948, 0.99950],
    '3.1': [0.99903, 0.99906, 0.99910, 0.99913, 0.99916, 0.99918, 0.99921, 0.99924, 0.99926, 0.99929],
    '3.0': [0.99865, 0.99869, 0.99874, 0.99878, 0.99882, 0.99886, 0.99889, 0.99893, 0.99896, 0.99900],
    '2.9': [0.99813, 0.99819, 0.99825, 0.99831, 0.99836, 0.99841, 0.99846, 0.99851, 0.99856, 0.99861],
    '2.8': [0.99744, 0.99752, 0.99760, 0.99767, 0.99774, 0.99781, 0.99788, 0.99795, 0.99801, 0.99807],
    '2.7': [0.99653, 0.99664, 0.99674, 0.99683, 0.99693, 0.99702, 0.99711, 0.99720, 0.99728, 0.99736],
    '2.6': [0.99534, 0.99547, 0.99560, 0.99573, 0.99585, 0.99598, 0.99609, 0.99621, 0.99632, 0.99643],
    '2.5': [0.99379, 0.99396, 0.99413, 0.99430, 0.99446, 0.99461, 0.99477, 0.99492, 0.99506, 0.99520],
    '2.4': [0.99180, 0.99202, 0.99224, 0.99245, 0.99266, 0.99286, 0.99305, 0.99324, 0.99343, 0.99361],
    '2.3': [0.98928, 0.98956, 0.98983, 0.99010, 0.99036, 0.99061, 0.99086, 0.99111, 0.99134, 0.99158],
    '2.2': [0.98610, 0.98645, 0.98679, 0.98713, 0.98745, 0.98778, 0.98809, 0.98840, 0.98870, 0.98899],

    '2.1': [0.98214, 0.98257, 0.98300, 0.98341, 0.98382, 0.98422, 0.98461, 0.98500, 0.98537, 0.98574],
    '2.0': [0.97725, 0.97778, 0.97831, 0.97882, 0.97932, 0.97982, 0.98030, 0.98077, 0.98124, 0.98169],
    '1.9': [0.97128, 0.97193, 0.97257, 0.97320, 0.97381, 0.97441, 0.97500, 0.97558, 0.97615, 0.97670],
    '1.8': [0.96407, 0.96485, 0.96562, 0.96638, 0.96712, 0.96784, 0.96856, 0.96926, 0.96995, 0.97062],
    '1.7': [0.95543, 0.95637, 0.95728, 0.95818, 0.95907, 0.95994, 0.96080, 0.96164, 0.96246, 0.96327],
    '1.6': [0.94520, 0.94630, 0.94738, 0.94845, 0.94950, 0.95053, 0.95154, 0.95254, 0.95352, 0.95449],
    '1.5': [0.93319, 0.93448, 0.93574, 0.93699, 0.93822, 0.93943, 0.94062, 0.94179, 0.94295, 0.94408],
    '1.4': [0.91924, 0.92073, 0.92220, 0.92364, 0.92507, 0.92647, 0.92785, 0.92922, 0.93056, 0.93189],
    '1.3': [0.90320, 0.90490, 0.90658, 0.90824, 0.90988, 0.91149, 0.91309, 0.91466, 0.91621, 0.91774],
    '1.2': [0.8849, 0.8868, 0.8887, 0.8906, 0.89251, 0.89435, 0.89617, 0.89796, 0.89973, 0.90147],

    '1.1': [0.8643, 0.8665, 0.8686, 0.8708, 0.8729, 0.8749, 0.8770, 0.8790, 0.8810, 0.8830],
    '1.0': [0.8413, 0.8438, 0.8461, 0.8485, 0.8508, 0.8531, 0.8554, 0.8577, 0.8599, 0.8621],
    '0.9': [0.8159, 0.8186, 0.8212, 0.8238, 0.8264, 0.8289, 0.8315, 0.8340, 0.8365, 0.8389],
    '0.8': [0.7881, 0.7910, 0.7939, 0.7967, 0.7995, 0.8023, 0.8051, 0.8078, 0.8106, 0.8133],
  };

  const hipotezTabloDegeriHesapla = (bakilacak) => {
    let sonuc;
    Object.keys(ZTABLE).map(function (key, index) {
      ZTABLE[key].map((zscore, i) => {
        if (zscore == bakilacak) {
          sonuc = (Math.abs(key) + (i / 100));
        }
        else if (zscore < bakilacak && ZTABLE[key][i + 1] > bakilacak) {
          sonuc = ((Math.abs(key) + (i / 100) + Math.abs(key) + ((i + 1) / 100)) / 2);
        }
      })
    });
    return sonuc;
  }


  const hesapla = (e) => {
    e.preventDefault();
    let zVeri;
    let sonuc = Math.abs((ao - HDegeri) / (pVaryans / Math.sqrt(miktar)));
    let msg;

    if (hipotezMod == 0) {
      zVeri = hipotezTabloDegeriHesapla(1 - aDuzeyi);
      msg = (zVeri > sonuc) ? `Z Test = |${sonuc.toFixed(2)}| ve Kritik Nokta = ${zVeri.toFixed(2)} Reddedilmez` : `Z Test = |${sonuc}| ve Kritik Nokta = ${zVeri} Reddedilir`

    }
    else if (hipotezMod == 1) {
      zVeri = hipotezTabloDegeriHesapla(1 - (aDuzeyi / 2));
      msg = (zVeri > sonuc) ? `z = |${sonuc.toFixed(2)}| < ${zVeri.toFixed(2)} Reddedilmez` : `z = |${sonuc.toFixed(2)}| >= ${zVeri.toFixed(2)} Reddedilir`
    }
    else if (hipotezMod == 2) {
      zVeri = hipotezTabloDegeriHesapla(1 - aDuzeyi);
      msg = (zVeri > sonuc) ? `Z Test = |${sonuc.toFixed(2)}| ve Kritik Nokta = ${zVeri.toFixed(2)} Reddedilmez` : `Z Test = |${sonuc}| ve Kritik Nokta = ${zVeri} Reddedilir`
    }
    setMesaj(msg);
  };

  return (
    <Page
      title="Hipotez Testi"
      breadcrumbs={[{ name: "hipotez testi", active: true }]}
    >
      <form onSubmit={hesapla}>
        <div class="form-group row">
          <label for="HDegeri" className="col-sm-2 col-form-label">
            H Değeri
          </label>
          <div class="col-sm-10">
            <input value={HDegeri} onChange={e => setHDegeri(e.target.value)} type="number" className="form-control" />
          </div>
        </div>

        <div class="form-group row">
          <label for="HDegeri" className="col-sm-2 col-form-label">
            Hipotez
          </label>
          <div class="col-sm-10" id="checkbox">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="exampleRadios"
                value=">"
                onClick={e => setHipotezMod(0)}
              />
              <label class="form-check-label" for="exampleRadios1">
                {`> ${HDegeri}`}
              </label>
            </div>

            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="exampleRadios"
                value="!="
                onClick={e => setHipotezMod(1)}
              />
              <label class="form-check-label" for="exampleRadios2">
                {`!= ${HDegeri}`}
              </label>
            </div>

            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="exampleRadios"
                value="<"
                onClick={e => setHipotezMod(2)}
              />
              <label class="form-check-label" for="exampleRadios3">
                {`< ${HDegeri}`}
              </label>
            </div>

          </div>
        </div>

        <div class="form-group row">
          <label for="miktar" className="col-sm-2 col-form-label">
            Veri Sayısı
          </label>
          <div class="col-sm-10">
            <input value={miktar} onChange={e => setMiktar(e.target.value)} type="number" className="form-control" />
          </div>
        </div>
        <div class="form-group row">
          <label for="aritmetikOrtalama" className="col-sm-2 col-form-label">
            Verilerin Aritmetik Ortalaması
          </label>
          <div class="col-sm-10">
            <input value={ao} onChange={e => setAo(e.target.value)} type="number" className="form-control" />
          </div>
        </div>
        <div class="form-group row">
          <label for="pVaryans" className="col-sm-2 col-form-label">
            Popülasyon Varyansı
          </label>
          <div class="col-sm-10">
            <input value={pVaryans} onChange={e => setPVaryans(e.target.value)} type="number" className="form-control" />
          </div>
        </div>
        <div class="form-group row">
          <label for="anlam-duzeyi" className="col-sm-2 col-form-label">
            Anlam Düzeyi
          </label>
          <div class="col-sm-10">
            <input
              type="number"
              readonly
              className="form-control"
              value={aDuzeyi} onChange={e => setADuzeyi(e.target.value)}
            />
          </div>
        </div>
        <button type="submit" className="w-100 btn btn-secondary mt-2">
          Test Et
        </button>
      </form>

      {
        (zVerisi && sonuc && miktar !== 0 && aDuzeyi !== 0, hipotezMod, HDegeri !== 0 && pVaryans !== 0 && mesaj !== '') ?
          <div class="alert alert-primary" role="alert">
            {mesaj}
          </div>
          : null
      }
      <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333', margin: "1rem 0 0 0" }}>
        <CardTitle tag="h5">Hipotez Testi</CardTitle>
        <CardText>

          Hipotez testi, bir hipotezin doğruluğunun istatistiksel bir güvenilirlik aralığında saptanması için kullanılan yöntem. Hipotez testleri bir örneklem ortalaması ile bu örneklemin çekilmiş olduğu düşünülen ortalama değer etrafındaki farkın anlamlı olup olmadığını saptayan testlerdir.
                </CardText>

      </Card>
    </Page>

  );
};
