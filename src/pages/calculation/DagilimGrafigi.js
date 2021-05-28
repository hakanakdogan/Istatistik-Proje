import React, { useState } from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

import { getStackLineChart, stackLineChartOptions } from "demos/chartjs";
import { Line } from "react-chartjs-2";
import { MdInsertChart } from "react-icons/md";
import Page from "components/Page";
import {
  aritmetikOrtalamaHesapFunc,
  tepedeger,
  ortancadeger,
} from "./hesapFonksiyonları";

export const DagilimGrafigi = () => {
  const [data, setData] = useState("");
  const [graphicDatas, setGraphicDatas] = useState(null);
  const [name, setName] = useState("");

  const hesapla = (e) => {
    e.preventDefault();
    let gDatas = [];
    let array = data.split(",").map(Number);
    let o = ortancadeger(array);
    let ao = aritmetikOrtalamaHesapFunc(data);
    let td = tepedeger(array).maxTekrar;

    let gName = (ao == o && o == td) ? 'Simetrik Dağılım' :
      (ao > o && o > td) ? 'Sağa Çarpık Dağılım' :
        (td > o && o > ao) ? 'Sola Çarpık Dağılım' : 'Grafik Dağılımı';
    setName(gName);
    gDatas.push({ name: "Aritmetik Ortalama", value: ao });
    gDatas.push({ name: "Ortanca", value: o });
    gDatas.push({ name: "Tepe Değer", value: td });
    gDatas.unshift({ name: "START", value: 0 });
    gDatas.push({ name: "END", value: 0 });

    setGraphicDatas(gDatas);
  };

  return (
    <Page
      title="Dağılım Grafiği."
      breadcrumbs={[{ name: "dağılım grafiği", active: true }]}
    >
      <form onSubmit={hesapla} className="mt-4">
        <textarea
          className="form-control"
          placeholder="aralarında virgül olacak şekilde değerleri giriniz..."
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
        <button type="submit" className="w-100 btn btn-secondary mt-2">
          Gönder
        </button>
      </form>

      <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333', margin: "1rem 0 0 0" }}>
        <CardTitle tag="h5">Dağılım grafiği</CardTitle>
        <CardText>
          Dağılım grafiği 3 veriye göre çizilir;
                    <br /><br />
          <ol>
            <li>Aritmetik Ortalama</li>
            <li>Tepe Değer</li>
            <li>Ortanca</li>
          </ol>

                    Bu verilere göre eğer;
                    <ul>
            <li>[Aritmetik Ortalama = Tepe Değer = Ortanca] olursa simetrik dağılım,</li>
            <li>[Aritmetik Ortalama > Ortanca > Tepe Değer] olursa sağa çarpık dağılım,</li>
            <li>[Tepe Değer > Ortanca > Aritmetik Ortalama] olursa sola çarpık dağılım</li>
          </ul>

                    elde edilir.
                    </CardText>

      </Card>

      {graphicDatas ? (
        <div className="mt-5">
          <Card>
            <Line
              data={getStackLineChart({
                labels: graphicDatas.map((data) => data.name),
                data: graphicDatas.map((data) => data.value),
              })}
              options={stackLineChartOptions}
            />
            <CardBody className="text-primary" style={{ position: "absolute" }}>
              <CardTitle>
                <MdInsertChart /> {name}
              </CardTitle>
            </CardBody>
          </Card>
        </div>
      ) : null}
    </Page>
  );
};
